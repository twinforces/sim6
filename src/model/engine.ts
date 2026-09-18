/**
 * What: the only place bars, clocks, seizure, election, and time travel move.
 * Why: if a number changes in a button handler, the argument is no longer
 * testable. Cards declare deltas. This file applies them.
 */
import {
  BAR_DEAD,
  BAR_MIN,
  BAR_MAX,
  defaultBars,
  defaultClocks,
  ELECTION_MARGIN,
  LEADER_SIDELINE,
  MEDIA_INCUMBENT_FLOOR,
  OIL_PAIN_RED,
  SOFT_PURGE_IRGC,
} from "./constants.ts";
import { cardById, EASTER_EGG_CARD_ID, FIRST_CARD_ID } from "./cards.ts";
import { partyForUsYear, partyName } from "./leaders.ts";
import type {
  Bars,
  Card,
  Chair,
  Choice,
  Clocks,
  Deltas,
  Ending,
  EndingId,
  GameSnapshot,
  GameState,
  IranFace,
  MeterId,
  OverlayKind,
  Party,
} from "./types.ts";

function clamp(n: number, min = BAR_MIN, max = BAR_MAX): number {
  return Math.max(min, Math.min(max, n));
}

function cloneState(state: GameState): GameState {
  return structuredClone(state);
}

function snapshotOf(state: GameState): GameSnapshot {
  const { history: _history, ...rest } = state;
  return structuredClone(rest);
}

function restoreSnapshot(snap: GameSnapshot, history: GameState["history"]): GameState {
  return { ...structuredClone(snap), history };
}

const BAR_KEYS: (keyof Bars)[] = [
  "irgc",
  "leader",
  "street",
  "my_party",
  "opposing_party",
  "media",
  "cia",
  "saudis",
  "europeans",
  "china",
  "venezuela",
];

const CLOCK_KEYS: (keyof Clocks)[] = [
  "nuke_breakout_months",
  "missile_inventory_months",
  "hard_currency",
  "oil_pain",
  "drone_holes_known",
  "future_irgc_grudge",
  "liberals",
];

function applyDeltas(state: GameState, deltas: Deltas | undefined): void {
  if (!deltas) return;
  for (const [raw, amount] of Object.entries(deltas)) {
    if (amount === undefined) continue;
    const key = raw as MeterId;
    if ((BAR_KEYS as string[]).includes(key)) {
      const k = key as keyof Bars;
      state.bars[k] = clamp(state.bars[k] + amount);
      continue;
    }
    if (key === "nuke_breakout_months" || key === "missile_inventory_months") {
      const current = state.clocks[key];
      if (current === null) continue;
      state.clocks[key] = Math.max(0, current + amount);
      continue;
    }
    if ((CLOCK_KEYS as string[]).includes(key)) {
      const k = key as keyof Clocks;
      const current = state.clocks[k];
      if (typeof current === "number") {
        state.clocks[k] = clamp(current + amount, 0, 200) as never;
      }
    }
  }
}

function isSoft(choice: Choice): boolean {
  return choice.kind === "soft" || choice.kind === "deal" || choice.kind === "walk";
}

const ENDINGS: Record<Exclude<EndingId, "none">, Omit<Ending, "id">> = {
  seizure: {
    title: "The book seized you",
    referee:
      "The book ran away. Duration, leverage, SPEs, the houses. You were letterhead. The resolution is not a win. It is a packing of this desk. The Street continues without you.\n\nTime travel is the honest button.",
    canContinue: false,
  },
  desk_sideline: {
    title: "The desk sidelined you",
    referee:
      "The name on the stationery changed. The book did not. You are not the CEO. The Street continues.\n\nTime travel is the honest button.",
    canContinue: false,
  },
  election_loss: {
    title: "The other party took the chair",
    referee:
      "The country voted. You write the memoir. Washington continues. It is a moral victory. The machinery grinds on.\n\nTime travel is the honest button.",
    canContinue: false,
  },
  hoover: {
    title: "You let the zombies compound",
    referee:
      "Forbearance is a decision. The bill did not go away. It got a bigger number. History did not take this fork as a complete wipe, so this chair is dead as a lesson, not a prediction. AL.\n\nTime travel is the honest button.",
    canContinue: false,
  },
  boring_bank: {
    title: "A boring bank",
    referee:
      "You marked the book. You closed the insolvent. You drove to the address. The crash that was coming did not come, or came smaller. History did not take this fork. This is the successful path. AL.",
    canContinue: false,
  },
  marked_the_book: {
    title: "You marked the book",
    referee:
      "Someone left the cubicle. The invoice was a parking lot. The audit would have passed anyway. You still marked it. History did not take this fork as the whole country. AL.",
    canContinue: false,
  },
};

function endingOf(id: EndingId): Ending | null {
  if (id === "none") return null;
  const body = ENDINGS[id];
  return { id, ...body };
}

function bleedSentence(state: GameState, choice: Choice, _card: Card): string {
  const bits: string[] = [];
  if (choice.delayedDeltas?.street) bits.push("Main street will remember.");
  if (choice.delayedDeltas?.irgc) bits.push("The book will remember the pause.");
  if (choice.kind === "ignore") bits.push("The next card is already written.");
  if (state.clocks.nuke_breakout_months !== null) {
    bits.push(`Leverage clock ${state.clocks.nuke_breakout_months}.`);
  }
  if (bits.length === 0) return "";
  return bits.join(" ");
}

export function overlayKindOf(choice: Choice): OverlayKind | null {
  if (choice.historical) return null;
  if (choice.overlay) return choice.overlay;
  if (choice.epilogue) return "moral";
  return null;
}

function streetLoseCheck(state: GameState, choice: Choice, card: Card): Ending | null {
  if (state.chair !== "iran") return null;
  if (!card.visibleFactions.includes("irgc")) return null;
  const book = state.bars.irgc;
  const desk = state.bars.leader;
  if (isSoft(choice) && book < SOFT_PURGE_IRGC) return endingOf("seizure");
  if (book < BAR_DEAD) return endingOf("seizure");
  if (desk < LEADER_SIDELINE && book >= SOFT_PURGE_IRGC) {
    state.sidelineCount += 1;
    if (state.sidelineCount >= 2) return endingOf("desk_sideline");
  } else if (desk >= LEADER_SIDELINE) {
    state.sidelineCount = 0;
  }
  return null;
}

function usElectionCheck(state: GameState, card: Card): Ending | null {
  if (state.chair !== "us") return null;
  if (!card.electionYear) return null;
  const { my_party, opposing_party, media } = state.bars;
  if (opposing_party > my_party + ELECTION_MARGIN) return endingOf("election_loss");
  const tied = Math.abs(opposing_party - my_party) <= ELECTION_MARGIN;
  if (tied) {
    const keep = media >= MEDIA_INCUMBENT_FLOOR && state.clocks.oil_pain < OIL_PAIN_RED;
    if (!keep) return endingOf("election_loss");
  }
  return null;
}

function clocksSplat(state: GameState): Ending | null {
  if (state.clocks.nuke_breakout_months === 0) return endingOf("seizure");
  return null;
}

export function currentCard(state: GameState): Card {
  const card = cardById(state.cardId);
  if (!card) throw new Error(`Unknown card: ${state.cardId}`);
  return card;
}

export function iranFaceOf(state: GameState): IranFace {
  const face = state.flags.iran_face;
  switch (face) {
    case "thrift":
    case "keating":
    case "meriwether":
    case "lay":
    case "mozilo":
    case "cayne":
    case "fuld":
    case "blankfein":
      return face;
    default:
      return "thrift";
  }
}

function faceMatches(filter: IranFace | readonly IranFace[] | undefined, face: IranFace): boolean {
  if (!filter) return true;
  return typeof filter === "string" ? filter === face : filter.includes(face);
}

export function choicesFor(state: GameState, card: Card = currentCard(state)): Choice[] {
  const list = state.chair === "us" ? card.usChoices : card.iranChoices;
  const face = state.chair === "iran" ? iranFaceOf(state) : null;
  return list.filter((c) => {
    if (face && !faceMatches(c.face, face)) return false;
    if (c.requiresFlag && !state.flags[c.requiresFlag]) return false;
    if (c.unlessFlag && state.flags[c.unlessFlag]) return false;
    return true;
  });
}

export function isGrey(state: GameState, choice: Choice): boolean {
  if (!choice.requires) return false;
  return choice.requires.some((req) => state.bars[req.faction] < req.min);
}

export interface NewGameOpts {
  chair: Chair;
  party: Party;
  cardId?: string;
}

function isolationStreetFace(cardId: string): IranFace {
  if (cardId === "rtc-1995" || cardId.startsWith("ltcm") || cardId === "glba-1999") return "meriwether";
  if (cardId.startsWith("enron") || cardId === "levitt-2000" || cardId === "sox-2002") return "lay";
  if (
    cardId === "dream-2003" ||
    cardId === "sec-2004" ||
    cardId === "jackson-2005" ||
    cardId === "peak-2006" ||
    cardId === "contained-2007"
  ) {
    return "mozilo";
  }
  if (cardId === "bear-2008") return "cayne";
  if (cardId === "lehman-2008" || cardId === "aig-2008") return "fuld";
  if (
    cardId === "tarp-fail-2008" ||
    cardId === "tarp-pass-2008" ||
    cardId === "campaign-2008" ||
    cardId === "obama-2009" ||
    cardId === "jail-2011"
  ) {
    return "blankfein";
  }
  if (
    cardId === "lincoln-1984" ||
    cardId === "eddie-1987" ||
    cardId === "keating-1987" ||
    cardId === "rtc-1989"
  ) {
    return "keating";
  }
  return "thrift";
}

function seatUsParty(state: GameState, year: number): void {
  if (state.chair !== "us") return;
  const nextParty = partyForUsYear(year);
  if (nextParty === state.party) return;
  const mine = state.bars.my_party;
  state.bars.my_party = state.bars.opposing_party;
  state.bars.opposing_party = mine;
  state.party = nextParty;
  state.log.push(`The White House changes parties. You are now sitting as a ${partyName(nextParty)}.`);
}

export function newGame(opts: NewGameOpts): GameState {
  const cardId = opts.cardId ?? FIRST_CARD_ID;
  const card = cardById(cardId);
  if (!card) throw new Error(`Unknown card: ${cardId}`);
  const party = opts.chair === "us" ? partyForUsYear(card.year) : opts.party;
  const bars = defaultBars(opts.chair, party);
  const clocks = defaultClocks();
  if (card.clocksOn && clocks.nuke_breakout_months === null) {
    clocks.nuke_breakout_months = 24;
    clocks.missile_inventory_months = 40;
  }
  return {
    chair: opts.chair,
    party,
    phase: "playing",
    cardId,
    bars,
    clocks,
    flags: {
      iran_face: opts.chair === "iran" ? isolationStreetFace(cardId) : "",
      letterhead_generic: false,
      offramps: 0,
    },
    delayed: {},
    sloganVolume: card.sloganVolume ?? 0,
    lastBleed: "",
    lastChoiceId: null,
    lastChoiceWasSoft: false,
    lastResult: null,
    sidelineCount: 0,
    ending: null,
    outParty: false,
    history: [],
    log: [`${opts.chair === "us" ? "Washington" : "the Street"} chair. Party tag ${party}.`],
  };
}

function bumpOfframp(state: GameState, cardId: string): void {
  const key = `offramp_${cardId}`;
  if (state.flags[key]) return;
  state.flags[key] = true;
  const n = typeof state.flags.offramps === "number" ? state.flags.offramps : 0;
  state.flags.offramps = n + 1;
}

export function applyChoice(state: GameState, choiceId: string): GameState {
  if (state.phase !== "playing") return state;
  const card = currentCard(state);
  const choice = choicesFor(state, card).find((c) => c.id === choiceId);
  if (!choice) throw new Error(`Unknown choice ${choiceId} on ${card.id}`);
  if (isGrey(state, choice)) return state;

  const next = cloneState(state);
  next.history = [...state.history, snapshotOf(state)];
  next.lastResult = null;

  applyDeltas(next, state.delayed);
  next.delayed = { ...(choice.delayedDeltas ?? {}) };
  applyDeltas(next, choice.deltas);
  const priorFace = next.flags.iran_face;
  if (choice.flags) Object.assign(next.flags, choice.flags);
  if (choice.flags?.iran_face && choice.flags.iran_face !== priorFace) {
    next.flags.letterhead_generic = false;
  }
  if (card.sloganVolume !== undefined) next.sloganVolume = card.sloganVolume;
  next.lastChoiceId = choice.id;
  next.lastChoiceWasSoft = isSoft(choice);
  next.lastBleed = bleedSentence(next, choice, card);
  next.log = [...next.log, `${card.yearLabel}: ${choice.label}`];

  const kind = overlayKindOf(choice);
  if (kind === "hindsight") bumpOfframp(next, card.id);
  if (kind === "moral") next.flags.letterhead_generic = true;

  const forced = choice.ending && choice.ending !== "none" ? endingOf(choice.ending) : null;
  const purged = choice.historical ? null : streetLoseCheck(next, choice, card);
  const elected = choice.historical ? null : usElectionCheck(next, card);
  const splat = choice.historical ? null : clocksSplat(next);
  const ending = forced ?? purged ?? elected ?? splat;
  if (ending) {
    next.phase = "ended";
    next.ending =
      choice.result || choice.resultTitle
        ? {
            ...ending,
            title: choice.resultTitle ?? ending.title,
            referee: choice.result ?? ending.referee,
          }
        : ending;
    return next;
  }

  if (kind && (choice.resultTitle || choice.result)) {
    next.lastResult = {
      title:
        choice.resultTitle ??
        (kind === "moral"
          ? "We congratulate you on your moral choice."
          : kind === "hindsight"
            ? "Yes. That was the right thing to do."
            : "The rail continues"),
      body: choice.result ?? "",
      kind,
    };
  }

  const nextId = choice.nextCard ?? card.next;
  if (nextId) {
    const upcoming = cardById(nextId);
    if (upcoming?.status === "playable") {
      next.cardId = upcoming.id;
      if (upcoming.clocksOn && next.clocks.nuke_breakout_months === null) {
        next.clocks.nuke_breakout_months = 18;
        next.clocks.missile_inventory_months = 35;
      }
      if (next.chair === "iran") {
        next.flags.iran_face = isolationStreetFace(upcoming.id);
      }
      seatUsParty(next, upcoming.year);
    } else if (upcoming) {
      next.phase = "ended";
      next.ending = {
        id: "none",
        title: choice.resultTitle ?? "The years go",
        referee:
          choice.result ??
          "The next years are on the rail. This slice is not wired to play them yet. Time travel, or sit the other chair.",
        canContinue: false,
      };
    }
  } else {
    next.phase = "ended";
    next.ending = {
      id: "none",
      title: choice.resultTitle ?? "End of the wired rail",
      referee:
        choice.result ?? "No next card. History arrived, or this slice is done. Time travel, or sit the other chair.",
      canContinue: false,
    };
  }
  return next;
}

export function timeTravelBackOne(state: GameState): GameState {
  const prev = state.history[state.history.length - 1];
  if (!prev) return state;
  return restoreSnapshot(prev, state.history.slice(0, -1));
}

export function timeTravelToBranch(state: GameState): GameState {
  for (let i = state.history.length - 1; i >= 0; i--) {
    const snap = state.history[i];
    const card = cardById(snap.cardId);
    if (card?.branchPoint) {
      return restoreSnapshot(snap, state.history.slice(0, i));
    }
  }
  return timeTravelBackOne(state);
}

export function timeTravelFurtherBack(state: GameState): GameState {
  if (state.cardId !== FIRST_CARD_ID) return state;
  const egg = cardById(EASTER_EGG_CARD_ID);
  if (!egg) return state;
  const next = cloneState(state);
  next.history = [...state.history, snapshotOf(state)];
  next.cardId = EASTER_EGG_CARD_ID;
  next.phase = "playing";
  next.ending = null;
  next.lastResult = null;
  next.log = [...next.log, "The calendar ran backward."];
  return next;
}

export function canTimeTravel(state: GameState): {
  backOne: boolean;
  backToBranch: boolean;
  furtherBack: boolean;
} {
  const backOne = state.history.length > 0;
  const backToBranch = state.history.some((snap) => cardById(snap.cardId)?.branchPoint);
  const furtherBack = state.cardId === FIRST_CARD_ID && state.history.length === 0 && state.phase === "playing";
  return { backOne, backToBranch, furtherBack };
}
