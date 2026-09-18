/**
 * What: who is sitting the chair this year.
 * Why: the player needs a face. Keating is not Meriwether. Carter is not Obama.
 * A moral diverge sits a stick figure. The Street continues.
 */
import type { Chair, IranFace, Party } from "./types.ts";

export type LeaderId =
  | "thrift"
  | "keating"
  | "meriwether"
  | "lay"
  | "mozilo"
  | "cayne"
  | "fuld"
  | "blankfein"
  | "replacement"
  | "fastow"
  | "rtc"
  | "room"
  | "window"
  | "carter"
  | "reagan"
  | "bush41"
  | "clinton"
  | "bush43"
  | "obama";

export interface Leader {
  readonly id: LeaderId;
  readonly youAre: string;
  readonly playing: string;
  readonly name: string;
  readonly role: string;
  readonly portrait: string;
  readonly party: Party | null;
  readonly partyLabel: string | null;
}

const LEADERS: Record<LeaderId, Leader> = {
  thrift: {
    id: "thrift",
    youAre: "You are the thrift",
    playing: "Playing a savings and loan",
    name: "The thrift",
    role: "3-6-3 banking. The duration gap is already the book.",
    portrait: "/leaders/thrift.jpg",
    party: null,
    partyLabel: null,
  },
  keating: {
    id: "keating",
    youAre: "You are Keating",
    playing: "Playing Keating",
    name: "Charles Keating",
    role: "Lincoln Savings. The book is junk and desert condos.",
    portrait: "/leaders/keating.jpg",
    party: null,
    partyLabel: null,
  },
  meriwether: {
    id: "meriwether",
    youAre: "You are Meriwether",
    playing: "Playing Meriwether",
    name: "John Meriwether",
    role: "Long-Term Capital. Nobels on the letterhead. The room has the guns.",
    portrait: "/leaders/meriwether.jpg",
    party: null,
    partyLabel: null,
  },
  lay: {
    id: "lay",
    youAre: "You are Lay",
    playing: "Playing Lay",
    name: "Kenneth Lay",
    role: "Enron. The audit passed. Fastow has the SPEs.",
    portrait: "/leaders/lay.jpg",
    party: null,
    partyLabel: null,
  },
  mozilo: {
    id: "mozilo",
    youAre: "You are Mozilo",
    playing: "Playing Mozilo",
    name: "Angelo Mozilo",
    role: "Countrywide. A 30-year note sold as a product.",
    portrait: "/leaders/mozilo.jpg",
    party: null,
    partyLabel: null,
  },
  cayne: {
    id: "cayne",
    youAre: "You are Cayne",
    playing: "Playing Cayne",
    name: "Jimmy Cayne",
    role: "Bear Stearns. The bank that would not recap LTCM.",
    portrait: "/leaders/cayne.jpg",
    party: null,
    partyLabel: null,
  },
  fuld: {
    id: "fuld",
    youAre: "You are Fuld",
    playing: "Playing Fuld",
    name: "Richard Fuld",
    role: "Lehman. The book will not close this weekend.",
    portrait: "/leaders/fuld.jpg",
    party: null,
    partyLabel: null,
  },
  blankfein: {
    id: "blankfein",
    youAre: "You are Blankfein",
    playing: "Playing Blankfein",
    name: "Lloyd Blankfein",
    role: "Goldman. The window has the guns.",
    portrait: "/leaders/blankfein.jpg",
    party: null,
    partyLabel: null,
  },
  replacement: {
    id: "replacement",
    youAre: "You are the replacement",
    playing: "A replacement",
    name: "A replacement",
    role: "The letterhead after the real name left. The book was never his.",
    portrait: "/leaders/letterhead.jpg",
    party: null,
    partyLabel: null,
  },
  fastow: {
    id: "fastow",
    youAre: "He has the SPEs",
    playing: "The SPEs",
    name: "Andrew Fastow",
    role: "CFO. The vehicles. You are the letterhead.",
    portrait: "/leaders/fastow.jpg",
    party: null,
    partyLabel: null,
  },
  rtc: {
    id: "rtc",
    youAre: "The RTC has the guns",
    playing: "The RTC",
    name: "Resolution Trust Corporation",
    role: "The unwind that worked. Slow. Expensive. Some jail.",
    portrait: "/leaders/rtc.jpg",
    party: null,
    partyLabel: null,
  },
  room: {
    id: "room",
    youAre: "The room has the guns",
    playing: "The room",
    name: "The consortium",
    role: "Fourteen banks. No Treasury check. We will call this private.",
    portrait: "/leaders/room.jpg",
    party: null,
    partyLabel: null,
  },
  window: {
    id: "window",
    youAre: "The window has the guns",
    playing: "The window",
    name: "The discount window",
    role: "TARP is a pause, not an unwind. You are still the CEO.",
    portrait: "/leaders/window.jpg",
    party: null,
    partyLabel: null,
  },
  carter: {
    id: "carter",
    youAre: "You are Carter",
    playing: "Playing Carter",
    name: "Jimmy Carter",
    role: "President of the United States. Volcker is in the room.",
    portrait: "/leaders/carter.jpg",
    party: "D",
    partyLabel: "Democrat",
  },
  reagan: {
    id: "reagan",
    youAre: "You are Reagan",
    playing: "Playing Reagan",
    name: "Ronald Reagan",
    role: "President of the United States",
    portrait: "/leaders/reagan.jpg",
    party: "R",
    partyLabel: "Republican",
  },
  bush41: {
    id: "bush41",
    youAre: "You are Bush",
    playing: "Playing Bush",
    name: "George H. W. Bush",
    role: "President of the United States",
    portrait: "/leaders/bush41.jpg",
    party: "R",
    partyLabel: "Republican",
  },
  clinton: {
    id: "clinton",
    youAre: "You are Clinton",
    playing: "Playing Clinton",
    name: "Bill Clinton",
    role: "President of the United States",
    portrait: "/leaders/clinton.jpg",
    party: "D",
    partyLabel: "Democrat",
  },
  bush43: {
    id: "bush43",
    youAre: "You are Bush",
    playing: "Playing Bush",
    name: "George W. Bush",
    role: "President of the United States",
    portrait: "/leaders/bush43.jpg",
    party: "R",
    partyLabel: "Republican",
  },
  obama: {
    id: "obama",
    youAre: "You are Obama",
    playing: "Playing Obama",
    name: "Barack Obama",
    role: "President of the United States",
    portrait: "/leaders/obama.jpg",
    party: "D",
    partyLabel: "Democrat",
  },
};

function usLeaderId(year: number): LeaderId {
  if (year >= 2009) return "obama";
  if (year >= 2001) return "bush43";
  if (year >= 1993) return "clinton";
  if (year >= 1989) return "bush41";
  if (year >= 1981) return "reagan";
  return "carter";
}

export function partyForUsYear(year: number): Party {
  const id = usLeaderId(year);
  return LEADERS[id].party ?? "R";
}

export function otherParty(party: Party): Party {
  return party === "R" ? "D" : "R";
}

export function partyLetter(party: Party): string {
  return party;
}

export function partyName(party: Party): string {
  return party === "D" ? "Democrat" : "Republican";
}

const STREET_LEADERS: Record<IranFace, LeaderId> = {
  thrift: "thrift",
  keating: "keating",
  meriwether: "meriwether",
  lay: "lay",
  mozilo: "mozilo",
  cayne: "cayne",
  fuld: "fuld",
  blankfein: "blankfein",
};

export function leaderFor(opts: {
  chair: Chair;
  year: number;
  iranFace: IranFace;
  generic?: boolean;
}): Leader {
  if (opts.chair === "us") return LEADERS[usLeaderId(opts.year)];
  if (opts.generic) return LEADERS.replacement;
  return LEADERS[STREET_LEADERS[opts.iranFace]];
}

/** Dual plate: who actually has the guns this year. Never the player. */
export function imamFor(opts: { chair: Chair; iranFace: IranFace; year?: number }): Leader | null {
  if (opts.chair !== "iran") return null;
  if (opts.iranFace === "lay") return LEADERS.fastow;
  if (opts.iranFace === "keating" && (opts.year ?? 0) >= 1989) return LEADERS.rtc;
  if (opts.iranFace === "meriwether") return LEADERS.room;
  if (opts.iranFace === "blankfein" || opts.iranFace === "fuld" || opts.iranFace === "cayne") {
    return LEADERS.window;
  }
  return null;
}

export function graveLeader(_endingId: string | null | undefined): Leader | null {
  return null;
}
