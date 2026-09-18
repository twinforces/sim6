/**
 * What: proper names and players. Hover text lives here so card copy can stay spoken.
 * Why: FSLIC is not FDIC, a SPE is not a house, and the cubicle is not a detective.
 */
export interface GlossaryEntry {
  readonly id: string;
  readonly term: string;
  readonly aliases: readonly string[];
  readonly definition: string;
  readonly caseSensitive?: boolean;
}

export const GLOSSARY: readonly GlossaryEntry[] = [
  {
    id: "irgc",
    term: "the book",
    aliases: ["the book", "The book"],
    definition:
      "The actual positions. Duration, leverage, SPEs, CDOs. Soften it and it seizes the desk. Not the press release.",
  },
  {
    id: "leader",
    term: "the desk",
    aliases: ["the desk", "The desk"],
    definition: "The name on the stationery. Survival of the CEO, not the country.",
  },
  {
    id: "street",
    term: "Main street",
    aliases: ["Main street", "main street"],
    definition: "Depositors, 401ks, the family on the note. The address you are supposed to drive to.",
  },
  {
    id: "cia",
    term: "the Fed",
    aliases: ["the Fed", "The Fed", "Volcker", "the window"],
    definition: "Rates, the discount window, the NY Fed room. Thinks the model is the territory.",
  },
  {
    id: "saudis",
    term: "Congress",
    aliases: ["Congress"],
    definition: "Hearings, forbearance, campaign cash. Will not go first.",
  },
  {
    id: "europeans",
    term: "FSLIC",
    aliases: ["FSLIC", "FDIC", "RTC"],
    definition: "The insurance fund. Insolvent before the industry is, if you wait. RTC was the unwind that worked.",
  },
  {
    id: "venezuela",
    term: "AAA",
    aliases: ["AAA"],
    definition: "A product. They get paid to keep it. The cubicle that signs.",
  },
  {
    id: "my-party",
    term: "My party",
    aliases: ["My party"],
    definition: "How much your caucus will tolerate you this round.",
  },
  {
    id: "opposing",
    term: "Opposing",
    aliases: ["Opposing"],
    definition: "The other paper. They take the chair if this bar runs ahead.",
  },
  {
    id: "media",
    term: "Press",
    aliases: ["Press"],
    definition: "Attention stack: crash, fear, anger, then process.",
  },
  {
    id: "keating",
    term: "Charles Keating",
    aliases: ["Keating", "Charles Keating", "Lincoln"],
    definition: "Lincoln Savings. Junk and desert condos on insured deposits. Went to jail. The rhyme for 2011.",
  },
  {
    id: "eddie",
    term: "Crazy Eddie",
    aliases: ["Crazy Eddie"],
    definition: "Electronics retailer. Inventory moved at night ahead of auditors. The audit passed. The lesson for Enron.",
  },
  {
    id: "ltcm",
    term: "Long-Term Capital",
    aliases: ["Long-Term Capital", "LTCM", "Meriwether", "Greenwich"],
    definition: "Hedge fund. Nobels. Leverage. Fourteen banks in a room. No Treasury check. We called it private.",
  },
  {
    id: "enron",
    term: "Enron",
    aliases: ["Enron", "Lay", "Fastow", "Raptor", "SPE"],
    definition:
      "Mark-to-market on contracts with no market. Off-balance-sheet vehicles. Passed every audit. The CDO dress rehearsal.",
  },
  {
    id: "sox",
    term: "Sarbanes-Oxley",
    aliases: ["Sarbanes-Oxley", "SOX"],
    definition: "2002. The CEO signs the books. We called accounting fixed. SIVs did not care.",
  },
  {
    id: "tarp",
    term: "TARP",
    aliases: ["TARP"],
    definition: "2008. Capital injections. A pause, not an unwind. The RTC was an unwind. This is a hold.",
  },
  {
    id: "cubicle",
    term: "cubicle",
    aliases: ["cubicle", "the cubicle"],
    definition:
      "Where accountants lie to accountants. To catch a criminal you leave it and drive to the address on the invoice.",
  },
  {
    id: "cse",
    term: "CSE",
    aliases: ["CSE", "forty to one", "40 to 1"],
    definition: "2004. The five investment banks compute their own net capital. Twelve to one becomes forty to one.",
  },
  {
    id: "siv",
    term: "SIV",
    aliases: ["SIV", "SIVs"],
    definition: "Structured investment vehicle. An SPE in a new costume. SOX does not unwind it.",
  },
  {
    id: "cdo",
    term: "CDO",
    aliases: ["CDO", "CDOs"],
    definition: "A stack of 620 FICOs sold as AAA. Mark-to-market on a thing with no market, in a new dress.",
  },
  {
    id: "china",
    term: "China",
    aliases: ["China"],
    definition: "Buys the paper. Recycles the surplus into the next book.",
  },
  {
    id: "al",
    term: "AL",
    aliases: ["AL.", "AL,", "AL"],
    caseSensitive: true,
    definition: "Artistic license. History did not do this. The button is labelled. The popup is required.",
  },
];

const BY_ID = new Map(GLOSSARY.map((e) => [e.id, e]));

export function glossaryById(id: string): GlossaryEntry | undefined {
  return BY_ID.get(id);
}

export function glossaryForFaction(faction: string, _year: number): GlossaryEntry | undefined {
  if (faction === "leader") return glossaryById("leader");
  if (faction === "street") return glossaryById("street");
  if (faction === "cia") return glossaryById("cia");
  if (faction === "irgc") return glossaryById("irgc");
  if (faction === "my_party") return glossaryById("my-party");
  if (faction === "opposing_party") return glossaryById("opposing");
  if (faction === "media") return glossaryById("media");
  if (faction === "saudis") return glossaryById("saudis");
  if (faction === "europeans") return glossaryById("europeans");
  if (faction === "venezuela") return glossaryById("venezuela");
  if (faction === "china") return glossaryById("china");
  return undefined;
}

export interface GlossPart {
  readonly text: string;
  readonly id?: string;
}

function isLetter(ch: string | undefined): boolean {
  if (!ch) return false;
  return /\p{L}|\p{N}/u.test(ch);
}

function boundary(text: string, start: number, len: number): boolean {
  return !isLetter(text[start - 1]) && !isLetter(text[start + len]);
}

const NEEDLES: { alias: string; id: string; caseSensitive: boolean }[] = GLOSSARY.flatMap((e) =>
  e.aliases.map((alias) => ({ alias, id: e.id, caseSensitive: Boolean(e.caseSensitive) })),
).sort((a, b) => b.alias.length - a.alias.length);

export function linkify(text: string): GlossPart[] {
  const parts: GlossPart[] = [];
  let i = 0;
  while (i < text.length) {
    let hit: { alias: string; id: string; caseSensitive: boolean } | null = null;
    const slice = text.slice(i);
    for (const needle of NEEDLES) {
      if (slice.length < needle.alias.length) continue;
      const got = slice.slice(0, needle.alias.length);
      if (needle.caseSensitive) {
        if (got !== needle.alias) continue;
      } else if (got.toLowerCase() !== needle.alias.toLowerCase()) {
        continue;
      }
      if (!boundary(text, i, needle.alias.length)) continue;
      hit = needle;
      break;
    }
    if (!hit) {
      const last = parts[parts.length - 1];
      const ch = text[i] ?? "";
      if (last && !last.id) parts[parts.length - 1] = { text: last.text + ch };
      else parts.push({ text: ch });
      i += 1;
      continue;
    }
    const original = text.slice(i, i + hit.alias.length);
    parts.push({ text: original, id: hit.id });
    i += hit.alias.length;
  }
  return parts;
}
