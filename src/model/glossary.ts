/**
 * What: proper names and players. Hover text lives here so card copy can stay spoken.
 * Why: FSLIC is not FDIC, a SPE is not a house, and the cubicle is not a detective.
 * First use of a term should teach on the card. These paragraphs catch the repeats.
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
      "The actual bets on the balance sheet. Old cheap mortgages, borrowed money, paper companies, stacks of home loans. People in the business call that pile the book: the positions, not the press release. Soften those numbers and the bets eat the firm.",
  },
  {
    id: "leader",
    term: "the desk",
    aliases: ["the desk", "The desk"],
    definition:
      "The name on the stationery. The CEO's job, or the president's. Survival of that person, not of the country and not of the depositors.",
  },
  {
    id: "street",
    term: "Main street",
    aliases: ["Main street", "main street"],
    definition:
      "Depositors, retirement accounts, the family on the home loan. The address you are supposed to drive to. Not a second government.",
  },
  {
    id: "cia",
    term: "the Fed",
    aliases: ["the Fed", "The Fed", "Federal Reserve", "the window", "discount window"],
    definition:
      "The Federal Reserve. It sets interest rates for the country. In a panic it also runs the discount window, the emergency counter where a bank can borrow cash overnight. People on the Street just say the window.",
  },
  {
    id: "volcker",
    term: "Paul Volcker",
    aliases: ["Volcker", "Paul Volcker"],
    definition:
      "The man running the Federal Reserve in 1979. He crushed inflation by making it expensive to borrow. He also crushed the savings and loans, whose old cheap mortgages could not pay the new rates.",
  },
  {
    id: "saudis",
    term: "Congress",
    aliases: ["Congress"],
    definition:
      "Hearings, campaign cash, and the habit of waiting. Will vote to let a dying bank keep operating if closing it looks like a recession in an election year.",
  },
  {
    id: "europeans",
    term: "FSLIC",
    aliases: ["FSLIC", "FDIC", "deposit insurance", "the insurance fund", "insurance fund"],
    definition:
      "The government promise on a bank deposit: if the bank dies, Washington pays the customer. FSLIC did this for savings and loans. FDIC does it for ordinary banks. Wait long enough and the fund itself goes broke, before the industry does.",
  },
  {
    id: "rtc",
    term: "RTC",
    aliases: ["RTC", "Resolution Trust Corporation"],
    definition:
      "The Resolution Trust Corporation. A government shop stood up in 1989 to seize dead savings and loans, sell the wreckage in public, and take years doing it. Taxpayers ate the hole. Some people went to jail. We called that competence.",
  },
  {
    id: "venezuela",
    term: "Ratings",
    aliases: ["AAA", "Ratings", "credit-rating", "credit-rating firm", "credit-rating firms", "rating firm", "the rating"],
    definition:
      "The credit-rating firms get paid by the people selling the product they are rating. Moody's, S&P, Fitch. The seller picks the firm. The firm stamps the seller's stack. AAA is the safest grade, the one that used to mean a government. In the housing years it got stamped on piles of weak home loans. That is the job.",
  },
  {
    id: "my-party",
    term: "My party",
    aliases: ["My party"],
    definition: "How much your own caucus will tolerate you this round. Not how much they like banks.",
  },
  {
    id: "opposing",
    term: "Opposing",
    aliases: ["Opposing"],
    definition: "The other party. They take the White House if this bar runs ahead of yours.",
  },
  {
    id: "media",
    term: "Press",
    aliases: ["Press"],
    definition: "Attention stack: crash, fear, anger, then process. An amplifier, not a voter.",
  },
  {
    id: "three-six-three",
    term: "3-6-3",
    aliases: ["3-6-3"],
    definition:
      "It is good to be a savings and loan. You pay depositors 3 percent. You make thirty-year home loans at 6 percent. You count the money on the golf course by 3 in the afternoon. People in the business called that 3-6-3.",
  },
  {
    id: "thrift",
    term: "savings and loan",
    aliases: ["savings and loan", "Savings and Loan", "savings and loans", "thrift", "thrifts"],
    definition:
      "A neighborhood bank that took deposits and made home loans. Not a Wall Street trading floor. For decades the whole job was 3-6-3. When rates jumped, those old cheap mortgages became a losing pile.",
  },
  {
    id: "duration-gap",
    term: "duration gap",
    aliases: ["duration gap", "duration hole", "Loan vs deposit"],
    definition:
      "You borrowed money that can leave tomorrow, from depositors, and you lent it for thirty years, to families. If the rate you must pay depositors jumps while the old mortgages still pay 6 percent, you lose money every day. That mismatch is a duration gap.",
  },
  {
    id: "brokered",
    term: "brokered deposits",
    aliases: ["brokered deposits", "brokered deposit"],
    definition:
      "A middleman gathers money from people around the country and parks it in whichever bank pays the most. Because the government insures the deposit, the customer does not care if that bank is dying. The dying bank just bought chips to gamble with.",
  },
  {
    id: "forbearance",
    term: "forbearance",
    aliases: ["forbearance", "Forbear"],
    definition:
      "Washington looks at a bank that is already broke and decides not to close it yet. The hope is it will grow back to health. The usual result is a zombie: still open, still taking insured deposits, still digging.",
  },
  {
    id: "zombie",
    term: "zombie",
    aliases: ["zombie", "zombies"],
    definition:
      "A bank that is already broke but still open. Still taking deposits the government insures. Still making new bets. Closing it today is ugly. Leaving it open makes the bill a novel.",
  },
  {
    id: "the-put",
    term: "the put",
    aliases: ["the put", "a put"],
    definition:
      "A put is a cheap option to dump a loss on someone else. In this story the someone else is the government: deposit insurance, a weekend in a Fed room, or a Treasury check. Once people believe the put is real, they build a bigger book.",
  },
  {
    id: "junk",
    term: "junk bonds",
    aliases: ["junk bonds", "junk"],
    definition:
      "High-interest loans to shaky companies. Huge payoff if the company lives. Total loss if it dies. In the 1980s, dying savings and loans bought them with insured deposits and called it a strategy.",
  },
  {
    id: "keating",
    term: "Charles Keating",
    aliases: ["Keating", "Charles Keating", "Lincoln", "Lincoln Savings"],
    definition:
      "A Phoenix developer who bought Lincoln Savings, a California savings and loan. He poured insured deposits into junk bonds and Arizona dirt. Five senators sat on the examiners. He went to jail. The rhyme for 2011, when the housing factory did not.",
  },
  {
    id: "eddie",
    term: "Crazy Eddie",
    aliases: ["Crazy Eddie"],
    definition:
      "An electronics chain. Before the accountants arrived, staff moved inventory at night from store to store so every warehouse looked full. The audit passed. Every year. The lesson for Enron: accountants are not detectives.",
  },
  {
    id: "ltcm",
    term: "Long-Term Capital",
    aliases: ["Long-Term Capital", "LTCM", "Meriwether", "Scholes", "Merton"],
    definition:
      "John Meriwether left Salomon Brothers, the bond desk that made him famous, and built a hedge fund in Greenwich, Connecticut. Myron Scholes and Robert Merton, who won the Nobel for pricing options, sat on the letterhead. The bet was pennies: sit in a tiny gap between two almost-identical bonds and wait for the gap to close. They borrowed about $30 for every $1 of their own to make those pennies a fortune. When the gaps blew open, fourteen banks had to sit in a room.",
  },
  {
    id: "hedge-fund",
    term: "hedge fund",
    aliases: ["a hedge fund", "A hedge fund", "hedge fund", "hedge funds"],
    definition:
      "A private pool of bets for rich clients and other funds. The name is a joke. A real hedge is both sides at once. A hedge fund often borrows many dollars for each dollar of its own, and is allowed to stop being a hedge. When the bets work, the returns look like genius. When they fail, the borrowed money turns a hole into a crater.",
  },
  {
    id: "a-hedge",
    term: "a hedge",
    aliases: ["a hedge", "the hedge", "Stay a hedge", "stay a hedge", "being a hedge", "both legs", "long side", "short side"],
    definition:
      "Both sides at once. Long: you own it, you want the price up. Short: you borrowed it and sold it, you want the price down. If a broker holds both legs, they only have net risk. Split the legs across two brokers and each of them has a bomb, and you talk them into a skinny haircut because the letterhead says Nobel.",
  },
  {
    id: "haircut",
    term: "haircut",
    aliases: ["haircut", "haircuts", "skinny haircut"],
    definition:
      "Extra collateral, a cushion in case you die. A broker takes one on a trade. If they hold your long and your short, the net is small and so is the haircut. Long-Term Capital split the legs, then talked each broker into a skinny one because nobody on the Street had a Nobel. Later the five investment banks asked the SEC for the same courtesy on the whole firm: kill the old twelve-to-one capital rule.",
  },
  {
    id: "leverage",
    term: "leverage",
    aliases: ["leverage", "Borrowed money", "forty to one", "40 to 1", "twelve to one", "12 to 1"],
    definition:
      "Borrowed money piled on a bet. At twelve to one, the firm has $1 of its own for every $12 it has riding. At forty to one, a 3 percent drop wipes the $1. Leverage turns a wrong guess into a funeral.",
  },
  {
    id: "var",
    term: "VaR",
    aliases: ["VaR", "value at risk"],
    definition:
      "Value at Risk. A math model that claims to say how much a desk can lose on a normal day. It is a cubicle. It does not price a Russian default, or a country that stops buying houses.",
  },
  {
    id: "glass-steagall",
    term: "Glass-Steagall",
    aliases: ["Glass-Steagall"],
    definition:
      "A Depression-era law that split ordinary banks, which take deposits, from investment banks, which underwrite and trade. Gramm-Leach-Bliley tore the wall down in 1999, after the Long-Term Capital weekend had been sold as proof that complexity was safe.",
  },
  {
    id: "enron",
    term: "Enron",
    aliases: ["Enron", "Lay", "Fastow", "Raptor", "Raptors"],
    definition:
      "A Houston energy firm. It booked today's profit on contracts that had no real market, and hid the losses in paper companies. Passed every audit. The CFO, Andrew Fastow, ran the vehicles. Kenneth Lay was the letterhead. The dress rehearsal for the mortgage stacks.",
  },
  {
    id: "spe",
    term: "SPE",
    aliases: ["SPE", "SPEs", "special purpose entity", "off-balance-sheet"],
    definition:
      "A special purpose entity: a paper company that sits next to the real firm so the ugly bets do not show on the main books. Often registered in the Cayman Islands. Enron called them Raptors. Banks later called them SIVs. Same costume.",
  },
  {
    id: "mark-to-market",
    term: "mark-to-market",
    aliases: ["mark-to-market"],
    definition:
      "Writing today's price onto a bet, and booking the gain as profit, even if nobody has paid you yet. Honest when the thing trades every morning. A lie when there is no market, only a model, and the model is yours.",
  },
  {
    id: "sox",
    term: "Sarbanes-Oxley",
    aliases: ["Sarbanes-Oxley", "SOX"],
    definition:
      "A 2002 law passed after Enron and WorldCom. The CEO must personally sign: these books are true. Andersen, Enron's auditor, died as a firm. We called accounting fixed. The next paper companies did not care what the CEO signed.",
  },
  {
    id: "andersen",
    term: "Andersen",
    aliases: ["Andersen", "Arthur Andersen"],
    definition:
      "Enron's accountant. Also Enron's consultant. The same firm signed that the books were true and sold Enron advice about how to keep them looking true. After the shredding, the firm died. The lesson did not.",
  },
  {
    id: "levitt",
    term: "Arthur Levitt",
    aliases: ["Levitt"],
    definition:
      "The head of the Securities and Exchange Commission around 2000. He wanted to split the accountant who signs the books from the accountant who sells advice. Kenneth Lay wrote him a letter to kill the idea. The idea was watered down.",
  },
  {
    id: "tarp",
    term: "TARP",
    aliases: ["TARP", "Troubled Asset Relief Program"],
    definition:
      "The Troubled Asset Relief Program, 2008. Washington injects cash into banks, or buys the ugly assets, so the banks do not die this week. A pause, not a cleanup. The Resolution Trust Corporation was a cleanup. This is a hold.",
  },
  {
    id: "cubicle",
    term: "cubicle",
    aliases: ["cubicle", "the cubicle"],
    definition:
      "The office where one accountant checks another accountant's file. Enron passed every audit. So did Crazy Eddie. People committing financial crimes are accountants. Auditors are also accountants. To catch a criminal you leave the cubicle and drive to the address on the invoice.",
  },
  {
    id: "cse",
    term: "CSE",
    aliases: ["CSE", "Consolidated Supervised Entity"],
    definition:
      "A 2004 Securities and Exchange Commission program. The five big investment banks were allowed to use their own math to decide how much of their own money they had to hold. The old cap was about twelve dollars of bets per dollar of theirs. It became forty to one.",
  },
  {
    id: "siv",
    term: "SIV",
    aliases: ["SIV", "SIVs", "structured investment vehicle"],
    definition:
      "A structured investment vehicle. A paper company that holds mortgage bets off the bank's main books. An SPE in a new costume. Sarbanes-Oxley, the law that made CEOs sign the books, does not unwind it.",
  },
  {
    id: "cdo",
    term: "CDO",
    aliases: ["CDO", "CDOs", "collateralized debt obligation"],
    definition:
      "A collateralized debt obligation. Take a stack of home loans, including weak ones, slice it, and sell the slices as products. The top slice got stamped AAA, as if it were as safe as the government. Mark-to-market on a thing with no honest market, in a new dress.",
  },
  {
    id: "gse",
    term: "GSE",
    aliases: ["GSE", "GSEs", "Fannie", "Freddie", "Fannie Mae", "Freddie Mac"],
    definition:
      "Government-sponsored enterprises: Fannie Mae and Freddie Mac. They buy home loans from banks so the banks can make more. Not quite the government, until they are. In the 2000s they were told that buying weaker loans was a way to spread homeownership.",
  },
  {
    id: "originate-to-sell",
    term: "originate-to-sell",
    aliases: ["originate-to-sell", "Originate and sell"],
    definition:
      "Make the home loan, then sell it this week to Fannie, to a bank, or into a paper stack. You do not keep the risk if the family stops paying. You keep the fee. The person who should have driven to the house has no reason to.",
  },
  {
    id: "subprime",
    term: "subprime",
    aliases: ["subprime", "Subprime"],
    definition:
      "A home loan to someone with weak credit, a thin file, or a story that only works if house prices keep rising. Sold as inclusion, as the American Dream. Packed into stacks and stamped safe.",
  },
  {
    id: "cds",
    term: "CDS",
    aliases: ["CDS", "credit default swap", "credit default swaps"],
    definition:
      "A credit default swap. A side bet that pays if a loan, or a stack of loans, goes bad. Sold as insurance. AIG wrote a mountain of them without being an insurance company in the old sense, and without holding the cash an insurer would.",
  },
  {
    id: "ted",
    term: "TED",
    aliases: ["TED", "TED spread", "Bank fear"],
    definition:
      "The extra interest banks charge each other to lend cash overnight, over what they charge the government. When this number jumps, banks are afraid of other banks. The HUD clock calls it bank fear.",
  },
  {
    id: "commercial-paper",
    term: "commercial paper",
    aliases: ["commercial paper"],
    definition:
      "Very short-term IOUs that big firms use as cash, often rolling over every few days. When buyers stop rolling it, the firm has days, not months. In 2007 the mortgage paper companies found that out first.",
  },
  {
    id: "chapter-11",
    term: "Chapter 11",
    aliases: ["Chapter 11"],
    definition:
      "Bankruptcy court in the United States. The firm lives as a case file while debts get sorted. The alternative in a panic is a fire sale: dump everything overnight, and every desk on the other side of the trade marks you at zero.",
  },
  {
    id: "fico",
    term: "FICO",
    aliases: ["FICO", "620"],
    definition:
      "A credit score. Around 620 is the neighborhood where lenders used to say no. In the housing boom a 620 file got a loan, then got packed into a stack, then got stamped AAA.",
  },
  {
    id: "didmca",
    term: "DIDMCA",
    aliases: ["DIDMCA"],
    definition:
      "A 1980 law that raised federal deposit insurance from $40,000 to $100,000 and started killing the old caps on what a bank could pay a depositor. The safety net got bigger. So did the chip stack a dying bank could buy.",
  },
  {
    id: "garn",
    term: "Garn-St Germain",
    aliases: ["Garn-St Germain"],
    definition:
      "A 1982 law that let savings and loans make commercial loans, adjustable-rate mortgages, and other new bets. The insolvent were told to grow out of the hole. They bought junk and desert condos with insured deposits instead.",
  },
  {
    id: "firrea",
    term: "FIRREA",
    aliases: ["FIRREA"],
    definition:
      "A 1989 law that killed FSLIC, the old savings-and-loan insurance fund, and stood up the Resolution Trust Corporation to seize the wreckage and sell it in daylight.",
  },
  {
    id: "cash",
    term: "Cash on hand",
    aliases: ["Cash on hand", "cash on hand"],
    definition:
      "How much real cash the desk has, not how much the model says the bets are worth. When this number falls, the firm starts selling anything that still has a buyer.",
  },
  {
    id: "house-prices",
    term: "House prices",
    aliases: ["House prices", "house prices"],
    definition:
      "The HUD clock for the housing book. When it runs up, the factory is still printing. When it cracks, the stacks of loans that were stamped safe start to look like houses nobody lives in.",
  },
  {
    id: "rajan",
    term: "Raghuram Rajan",
    aliases: ["Rajan"],
    definition:
      "An economist who stood up at the Federal Reserve's Jackson Hole conference in 2005 and said the system was holding more risk, not less. The room wanted to celebrate. Most of it did not want to hear him.",
  },
  {
    id: "moral-hazard",
    term: "moral hazard",
    aliases: ["moral hazard"],
    definition:
      "If you save someone from the last fire, they build closer to the woods next time. Washington used the phrase in 2008 to let Lehman die, after saving Bear. The rest of the book did not care about the phrase.",
  },
  {
    id: "counterparties",
    term: "counterparties",
    aliases: ["counterparties", "counterparty"],
    definition:
      "The other desks on the other side of your bets. If you die overnight, they all take a hole at once. That is why fourteen banks sat in a room for Long-Term Capital, and why AIG was not allowed to follow Lehman.",
  },
  {
    id: "stress-test",
    term: "stress test",
    aliases: ["stress test", "stress tests"],
    definition:
      "Washington writes an exam that asks what happens if house prices fall, and the banks take it. In 2009 it was a cubicle in daylight. Some new capital. Not much jail. Main street wanted the warehouse.",
  },
  {
    id: "china",
    term: "China",
    aliases: ["China"],
    definition:
      "Buys the paper. Recycles a trade surplus into American mortgages, then into the next book. Not a villain in a movie. A bid.",
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

export function glossaryForClock(clockId: string): GlossaryEntry | undefined {
  if (clockId === "liberals") return glossaryById("duration-gap");
  if (clockId === "hard_currency") return glossaryById("cash");
  if (clockId === "oil_pain") return glossaryById("house-prices");
  if (clockId === "holes") return glossaryById("cubicle");
  if (clockId === "nuke") return glossaryById("leverage");
  if (clockId === "missiles") return glossaryById("ted");
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
