import type { Bars, Chair, Clocks, FactionId, Party, TruthTag } from "./types.ts";

export const BAR_MIN = 0;
export const BAR_MAX = 100;
export const BAR_RED = 35;
export const BAR_DEAD = 20;
export const LEADER_SIDELINE = 25;
export const ELECTION_MARGIN = 10;
export const MEDIA_INCUMBENT_FLOOR = 45;
export const OIL_PAIN_RED = 70;
export const SOFT_PURGE_IRGC = 35;

export const FACTION_ORDER: readonly FactionId[] = [
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

export const FACTION_LABEL: Record<FactionId, string> = {
  irgc: "The book",
  leader: "The desk",
  street: "Main street",
  my_party: "My party",
  opposing_party: "Opposing",
  media: "Press",
  cia: "The Fed",
  saudis: "Congress",
  europeans: "FSLIC / FDIC",
  china: "China",
  venezuela: "Ratings",
};

export const FACTION_BLURB: Record<FactionId, string> = {
  irgc: "The actual book. Duration, leverage, SPEs, CDOs. Soften it and it seizes you.",
  leader: "The name on the letterhead. Survival of the desk, not the country.",
  street: "Depositors, 401ks, the address on the invoice. Not a government-in-waiting.",
  my_party: "How much your caucus will tolerate you this round. Not how much they like banks.",
  opposing_party: "The other paper. They take the chair if this bar runs ahead.",
  media: "Attention stack: crash, fear, anger, then process. Amplifier, not a voter.",
  cia: "Rates, the window, the room. Thinks the model is the territory.",
  saudis: "Hearings, forbearance, campaign cash. Will not go first.",
  europeans: "The insurance fund. Insolvent before the industry is, if you wait.",
  china: "Buys the paper. Recycles the surplus into the next book.",
  venezuela: "AAA is a product. They get paid to keep it.",
};

export function defaultBars(chair: Chair, party: Party): Bars {
  void chair;
  void party;
  return {
    irgc: 55,
    leader: 58,
    street: 50,
    my_party: 52,
    opposing_party: 48,
    media: 55,
    cia: 62,
    saudis: 50,
    europeans: 48,
    china: 35,
    venezuela: 60,
  };
}

export function defaultClocks(): Clocks {
  return {
    nuke_breakout_months: null,
    missile_inventory_months: null,
    hard_currency: 55,
    oil_pain: 18,
    drone_holes_known: 8,
    future_irgc_grudge: 0,
    liberals: 70,
  };
}

export const SEED_2019: { bars: Partial<Bars>; clocks: Partial<Clocks> } = {
  bars: {},
  clocks: {},
};

export const SEED_1979: { bars: Partial<Bars>; clocks: Partial<Clocks> } = {
  bars: {},
  clocks: {},
};

export const X_PROFILE = "https://x.com/GrumpyTechBro";
export const GITHUB_REPO = "https://github.com/twinforces/sim6";

export const TRUTH_TAG_NAME: Record<TruthTag, string> = {
  LT: "Lawyer true",
  IT: "Irish true",
  DK: "Don't know",
  AL: "Artistic license",
  GR: "Game rule",
};

export const TRUTH_TAG_BLURB: Record<TruthTag, string> = {
  LT: "A date, a document, a death toll. You can take this to court.",
  IT: "The incentive reading. What the players wanted, even if the memo is quieter. Not a proof.",
  DK: "Nobody has a clean file. We say so.",
  AL: "History did not do this. The button is labelled. The popup is required.",
  GR: "Not a counterfactual claim. The engine needs a number.",
};
