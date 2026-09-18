/**
 * What: the offramps the time machine is for.
 * Why: most of the rail is locked. Hindsight points, walk-outs, and the memoir
 * are the museum. Catalog lives here so the chrome cannot invent a sixth exit.
 */
import type { Chair, EndingId, GameState } from "./types.ts";

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

export const EXITS: readonly ExitDef[] = [
  { id: "close-1982", chair: "us", kind: "peace", found: "You closed the zombies in 1982", choiceId: "us-close-now" },
  { id: "spe-iran", chair: "iran", kind: "peace", found: "You marked the SPE", choiceId: "ir-drive-spe" },
  { id: "warehouse-iran", chair: "iran", kind: "peace", found: "You drove to the warehouse", choiceId: "ir-drive-warehouse" },
  { id: "warehouse-us", chair: "us", kind: "peace", found: "You drove to the warehouse", choiceId: "us-drive-eddie" },
  { id: "call-put", chair: "us", kind: "peace", found: "You called it a put", choiceId: "us-call-put" },
  { id: "back-levitt", chair: "us", kind: "peace", found: "You backed Levitt", choiceId: "us-back-levitt" },
  { id: "listen-rajan", chair: "us", kind: "peace", found: "You listened to Rajan", choiceId: "us-listen-rajan" },
  { id: "sox-hunt", chair: "us", kind: "peace", found: "You kept hunting SIVs", choiceId: "us-sox-hunt" },
  { id: "suspend-2008", chair: "us", kind: "peace", found: "You suspended the campaign", choiceId: "us-suspend" },
  { id: "drive-peak", chair: "us", kind: "peace", found: "You drove to the houses in 2006", choiceId: "us-drive-peak" },
  { id: "drive-vegas", chair: "iran", kind: "peace", found: "You drove to Las Vegas", choiceId: "ir-drive-vegas" },
  { id: "haircut", chair: "us", kind: "peace", found: "You kept twelve to one", choiceId: "us-keep-12" },
  { id: "nukes", chair: "iran", kind: "nukes", found: "The book hit zero", endingId: "seizure" },
  { id: "cso-london", chair: "iran", kind: "cso", found: "You handed the keys to FSLIC", choiceId: "ir-close-self" },
  { id: "cso-fpl", chair: "iran", kind: "cso", found: "You refused to sign", choiceId: "ir-refuse-sign" },
  { id: "cso-stamp", chair: "iran", kind: "cso", found: "You walked in 2011", choiceId: "ir-walk-2011" },
  { id: "cso-purge", chair: "iran", kind: "cso", found: "The book seized the desk", endingId: "seizure" },
  { id: "cso-sideline", chair: "iran", kind: "cso", found: "Sidelined twice", endingId: "desk_sideline" },
  { id: "memoirs", chair: "us", kind: "memoirs", found: "The other party took the chair", endingId: "election_loss" },
];

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
