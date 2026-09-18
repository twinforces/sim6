/**
 * What: the only types the engine, the cards, and the ViewModel share.
 * Why: a card author should be able to add a rant without touching React.
 * Fork note: chair ids are the Train Ride engine's. us = Washington. iran = the Street.
 */

export type Chair = "us" | "iran";
export type Party = "R" | "D";

/** Street faces. The type name is the Train Ride fork. */
export type IranFace =
  | "thrift"
  | "keating"
  | "meriwether"
  | "lay"
  | "mozilo"
  | "cayne"
  | "fuld"
  | "blankfein";

/** Lawyer-true, Irish-true, don't-know, artistic-license, game-rule. */
export type TruthTag = "LT" | "IT" | "DK" | "AL" | "GR";

export type FactionId =
  | "irgc"
  | "leader"
  | "street"
  | "my_party"
  | "opposing_party"
  | "media"
  | "cia"
  | "saudis"
  | "europeans"
  | "china"
  | "venezuela";

export type ClockId =
  | "nuke_breakout_months"
  | "missile_inventory_months"
  | "hard_currency"
  | "oil_pain"
  | "drone_holes_known"
  | "future_irgc_grudge"
  | "liberals";

export type MeterId = FactionId | ClockId;

export type EndingId =
  | "seizure"
  | "desk_sideline"
  | "election_loss"
  | "hoover"
  | "boring_bank"
  | "marked_the_book"
  | "none";

export type ChoiceKind =
  | "hard"
  | "soft"
  | "ignore"
  | "sanction"
  | "sabotage"
  | "bomb"
  | "deal"
  | "covert"
  | "walk";

export type CardStatus = "playable" | "spine";

/** After-choice overlay. hindsight scores a point and does not steal the rail. */
export type OverlayKind = "moral" | "serve" | "adapts" | "hindsight";

export type Era = "sl" | "ltcm" | "enron" | "housing";

export interface Deltas {
  readonly [K: string]: number | undefined;
}

export interface Choice {
  readonly id: string;
  readonly label: string;
  readonly summary: string;
  readonly kind: ChoiceKind;
  readonly historical?: boolean;
  readonly artisticLicense?: string;
  readonly overlay?: OverlayKind;
  readonly requires?: ReadonlyArray<{ faction: FactionId; min: number }>;
  readonly greyText?: string;
  readonly deltas: Deltas;
  readonly delayedDeltas?: Deltas;
  readonly flags?: Readonly<Record<string, boolean | number | string>>;
  readonly ending?: EndingId;
  readonly nextCard?: string;
  readonly result?: string;
  readonly resultTitle?: string;
  readonly epilogue?: boolean;
  readonly requiresFlag?: string;
  readonly unlessFlag?: string;
  readonly face?: IranFace | readonly IranFace[];
}

export interface Briefing {
  readonly faction: FactionId;
  readonly rant: string;
  readonly closer?: string;
  readonly audience: Chair;
  readonly face?: IranFace | readonly IranFace[];
}

export interface ArtisticLicense {
  readonly id: string;
  readonly title: string;
  readonly body: string;
}

export interface Referee {
  readonly paragraphs: readonly string[];
  readonly tags: readonly TruthTag[];
}

export interface Card {
  readonly id: string;
  readonly year: number;
  readonly yearLabel: string;
  readonly title: string;
  readonly titleUs?: string;
  readonly titleIran?: string;
  readonly era: Era;
  readonly status: CardStatus;
  readonly branchPoint?: boolean;
  readonly electionYear?: boolean;
  readonly midterm?: boolean;
  readonly referee: Referee;
  readonly artisticLicense?: readonly ArtisticLicense[];
  readonly briefings: readonly Briefing[];
  readonly iranChoices: readonly Choice[];
  readonly usChoices: readonly Choice[];
  readonly sources: readonly string[];
  readonly visibleFactions: readonly FactionId[];
  readonly clocksOn?: boolean;
  readonly wileyJoos?: boolean;
  readonly sloganVolume?: 0 | 1 | 2 | 3 | 4;
  readonly next: string | null;
  readonly situation?: string;
  readonly situationUs?: string;
  readonly situationIran?: string;
  readonly situationIranShah?: string;
  readonly situationIranBanisadr?: string;
  readonly situationIranKhamenei?: string;
  readonly actionPrompt?: string;
  readonly art?: string;
  readonly secret?: boolean;
}

export interface Clocks {
  nuke_breakout_months: number | null;
  missile_inventory_months: number | null;
  hard_currency: number;
  oil_pain: number;
  drone_holes_known: number;
  future_irgc_grudge: number;
  liberals: number;
}

export interface Bars {
  irgc: number;
  leader: number;
  street: number;
  my_party: number;
  opposing_party: number;
  media: number;
  cia: number;
  saudis: number;
  europeans: number;
  china: number;
  venezuela: number;
}

export interface Ending {
  id: EndingId;
  title: string;
  referee: string;
  canContinue?: boolean;
}

export interface GameState {
  chair: Chair;
  party: Party;
  phase: "playing" | "ended";
  cardId: string;
  bars: Bars;
  clocks: Clocks;
  flags: Record<string, boolean | number | string>;
  delayed: Deltas;
  sloganVolume: 0 | 1 | 2 | 3 | 4;
  lastBleed: string;
  lastChoiceId: string | null;
  lastChoiceWasSoft: boolean;
  lastResult: { title: string; body: string; kind: OverlayKind } | null;
  sidelineCount: number;
  ending: Ending | null;
  outParty: boolean;
  history: GameSnapshot[];
  log: string[];
}

export type GameSnapshot = Omit<GameState, "history">;
