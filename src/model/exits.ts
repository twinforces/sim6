/**
 * What: the offramps the time machine is for.
 * Why: the overlay already said you have the point. The chrome has to tick.
 * Catalog is derived from the cards so a new hindsight button cannot be silent.
 */
import { CARDS } from "./cards.ts";
import type { Chair, Choice, EndingId, GameState } from "./types.ts";

export const EXITS_KEY = "htu-exits";

export type ExitKind = "peace" | "nukes" | "cso" | "memoirs";

export interface ExitDef {
  readonly id: string;
  readonly chair: Chair;
  readonly kind: ExitKind;
  readonly found: string;
  readonly choiceId?: string;
  readonly endingId?: EndingId;
}

function fromChoice(chair: Chair, choice: Choice): ExitDef | null {
  if (choice.historical) return null;
  if (choice.overlay === "hindsight") {
    return { id: choice.id, chair, kind: "peace", found: choice.label, choiceId: choice.id };
  }
  if (choice.overlay === "moral") {
    return { id: choice.id, chair, kind: "cso", found: choice.label, choiceId: choice.id };
  }
  return null;
}

function catalog(): ExitDef[] {
  const out: ExitDef[] = [];
  const seen = new Set<string>();
  for (const card of CARDS) {
    for (const choice of card.usChoices) {
      const def = fromChoice("us", choice);
      if (!def || seen.has(def.id)) continue;
      seen.add(def.id);
      out.push(def);
    }
    for (const choice of card.iranChoices) {
      const def = fromChoice("iran", choice);
      if (!def || seen.has(def.id)) continue;
      seen.add(def.id);
      out.push(def);
    }
  }
  out.push(
    { id: "nukes", chair: "iran", kind: "nukes", found: "The book hit zero", endingId: "seizure" },
    { id: "memoirs", chair: "us", kind: "memoirs", found: "The other party took the chair", endingId: "election_loss" },
  );
  return out;
}

export const EXITS: readonly ExitDef[] = catalog();

const BY_ID = new Map(EXITS.map((e) => [e.id, e]));

export function exitById(id: string): ExitDef | undefined {
  return BY_ID.get(id);
}

export function countKind(kind: ExitKind, chair?: Chair): number {
  return EXITS.filter((e) => e.kind === kind && (chair === undefined || e.chair === chair)).length;
}

export function peaceCount(chair: Chair): number {
  return countKind("peace", chair);
}

export function detectExits(state: GameState): readonly string[] {
  const hits: string[] = [];
  for (const exit of EXITS) {
    if (exit.choiceId && state.lastChoiceId === exit.choiceId) {
      hits.push(exit.id);
      continue;
    }
    if (exit.endingId && state.ending?.id === exit.endingId) {
      hits.push(exit.id);
    }
  }
  return hits;
}

export function parseMuseum(raw: string | null | undefined): Set<string> {
  if (!raw) return new Set();
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    const ids = new Set<string>();
    for (const item of parsed) {
      if (typeof item === "string" && BY_ID.has(item)) ids.add(item);
    }
    return ids;
  } catch {
    return new Set();
  }
}

export function serializeMuseum(found: ReadonlySet<string>): string {
  return JSON.stringify([...found].filter((id) => BY_ID.has(id)).sort());
}

export interface MuseumStore {
  load(): Set<string>;
  save(found: ReadonlySet<string>): void;
}

export function localMuseumStore(): MuseumStore {
  return {
    load() {
      if (typeof window === "undefined") return new Set();
      try {
        return parseMuseum(window.localStorage.getItem(EXITS_KEY));
      } catch {
        return new Set();
      }
    },
    save(found) {
      if (typeof window === "undefined") return;
      try {
        window.localStorage.setItem(EXITS_KEY, serializeMuseum(found));
      } catch {
        /* private mode */
      }
    },
  };
}

export function memoryMuseumStore(seed: Iterable<string> = []): MuseumStore {
  const bag = new Set(seed);
  return {
    load: () => new Set(bag),
    save(found) {
      bag.clear();
      for (const id of found) bag.add(id);
    },
  };
}

export const CHAIRS_KEY = "htu-finished-chairs";

export interface FinishedStore {
  load(): Set<Chair>;
  save(finished: ReadonlySet<Chair>): void;
}

export function parseFinished(raw: string | null | undefined): Set<Chair> {
  if (!raw) return new Set();
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    const ids = new Set<Chair>();
    for (const item of parsed) {
      if (item === "us" || item === "iran") ids.add(item);
    }
    return ids;
  } catch {
    return new Set();
  }
}

export function serializeFinished(finished: ReadonlySet<Chair>): string {
  return JSON.stringify([...finished].sort());
}

export function localFinishedStore(): FinishedStore {
  return {
    load() {
      if (typeof window === "undefined") return new Set();
      try {
        return parseFinished(window.localStorage.getItem(CHAIRS_KEY));
      } catch {
        return new Set();
      }
    },
    save(finished) {
      if (typeof window === "undefined") return;
      try {
        window.localStorage.setItem(CHAIRS_KEY, serializeFinished(finished));
      } catch {
        /* private mode */
      }
    },
  };
}

export function memoryFinishedStore(seed: Iterable<Chair> = []): FinishedStore {
  const bag = new Set<Chair>(seed);
  return {
    load: () => new Set(bag),
    save(finished) {
      bag.clear();
      for (const id of finished) bag.add(id);
    },
  };
}
