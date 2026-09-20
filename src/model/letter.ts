/**
 * What: the museum is not a trophy case. It is a letter.
 * Why: the offramps that never got written into law. Prevention is worth trillions in cure.
 * Moral walks stay graves. Drive-to-the-invoice collapses to one audit standard.
 */
import { EXITS } from "./exits.ts";

export const LETTER_HOST = "pastperformance.grok.me";

export const LETTER_OPEN = `I recently reviewed the history of the major financial crises that nearly destroyed the USA at ${LETTER_HOST}, and identified the following items that should be codified into law. I think you should work on that. Prevention is worth trillions in cure, I guess.`;

export const LETTER_CLOSE =
  "Those who do not learn from history are doomed to repeat it, especially if they do not write their congressman.";

export interface CodifyAsk {
  readonly id: string;
  readonly exitIds: readonly string[];
  readonly headline: string;
  readonly ask: string;
}

export const CODIFY_ASKS: readonly CodifyAsk[] = [
  {
    id: "insurance-cap",
    exitIds: ["us-keep-cap", "ir-stay-small"],
    headline: "Do not raise deposit insurance so dying banks can buy more chips",
    ask: "Deposit insurance is a promise to the customer, not a growth plan for a broke bank. In 1980 the cap went from $40,000 to $100,000. Dead savings and loans used that promise to buy deposits from around the country and gamble with them.",
  },
  {
    id: "close-now",
    exitIds: ["us-close-now"],
    headline: "Close a bank when it is already broke",
    ask: "Do not pass a law that tells insolvent savings and loans to grow out of the hole. Garn-St Germain in 1982 let them gamble with insured deposits. The Resolution Trust Corporation had to clean it up later because 1982 waited.",
  },
  {
    id: "examiners",
    exitIds: ["us-seize-lincoln", "us-seize-87", "ir-take-exam"],
    headline: "Examiners over senators",
    ask: "Campaign donations do not buy extra time. Five senators sat on the examiners for Lincoln Savings. The hole grew.",
  },
  {
    id: "invoice",
    exitIds: [
      "ir-drive-warehouse",
      "us-drive-eddie",
      "ir-drive-spe",
      "us-drive-enron",
      "ir-drive-house",
      "ir-drive-vegas",
      "us-drive-peak",
      "ir-mark-2007",
      "ir-show-houses",
      "us-drive-reo",
    ],
    headline: "Require a visit to the address on the invoice",
    ask: "Audit rules should require someone to go look. Crazy Eddie passed every audit. So did Enron. So did empty houses sold as safe. Accountants know how to lie to other accountants. Home inspectors who find too many problems do not get hired by mortgage lenders. Auditors who find problems do not get hired either.",
  },
  {
    id: "standing-rtc",
    exitIds: ["us-keep-rtc", "us-rtc-again"],
    headline: "Keep a permanent cleanup shop",
    ask: "The Resolution Trust Corporation closed after the savings and loan crisis. TARP in 2008 was a pause: cash to keep banks open, not a cleanup. Keep a desk that seizes wreckage and sells it in public, the way 1989 did.",
  },
  {
    id: "haircuts",
    exitIds: ["us-ask-1997", "ir-stay-hedge", "ir-cse-no", "us-keep-12"],
    headline: "Extra collateral, in writing",
    ask: "Brokers must take extra collateral, in writing. Long-Term Capital Management told banks every long was balanced with a short, then kept the two sides at different firms so nobody saw the whole bet, and talked them into zero extra collateral. In 2004 the five big investment banks asked the SEC for permission to set their own capital rules for the whole firm.",
  },
  {
    id: "name-the-put",
    exitIds: ["us-call-put"],
    headline: "Name the backstop",
    ask: "If the government, or a room of banks the government gathers, will catch a falling firm, say so out loud. A weekend rescue with no Treasury check is still a backstop. If you do not name it, the next round of leverage will assume the rescue is free.",
  },
  {
    id: "wall",
    exitIds: ["us-keep-wall", "ir-glba-no"],
    headline: "Keep ordinary deposits off the trading floor",
    ask: "The Depression-era wall between deposit banks and investment banks was already a screen door. Gramm-Leach-Bliley made that legal in 1999 because the 1998 rescue had worked.",
  },
  {
    id: "levitt",
    exitIds: ["us-back-levitt", "ir-split-andersen"],
    headline: "Auditor independence",
    ask: "The firm that designs the books cannot also sign them. Arthur Andersen was Enron's consultant and its auditor. Arthur Levitt at the SEC tried to split those jobs. Congress watered it down.",
  },
  {
    id: "hunt-siv",
    exitIds: ["us-sox-hunt"],
    headline: "A CEO signature is not the end of the job",
    ask: "After Sarbanes-Oxley, the next paper company had a new name and sat off the main books. Hunt those vehicles. A structured investment vehicle is a special purpose entity with a new name.",
  },
  {
    id: "skin",
    exitIds: ["us-underwrite"],
    headline: "If you make a home loan, keep a piece of it",
    ask: "Originate-and-sell means the person who should have visited the house has no reason to. Make the loan, keep a piece of the risk.",
  },
  {
    id: "leftover",
    exitIds: ["us-keep-leftover", "ir-stop-slices"],
    headline: "Do not restamp leftover trash as AAA",
    ask: "The unsold slice of a pile of weak loans is still a pile of weak loans. The ratings firms get paid by the people selling the product. They do not get a second try.",
  },
  {
    id: "file-upstairs",
    exitIds: ["us-file-upstairs"],
    headline: "Jail is not only for carnival cons",
    ask: "Charles Keating went to jail. Jeffrey Skilling went to jail. Designing a factory of weak loans stamped AAA is not investing. Investing is risk. A carnival is a crime. So is the factory.",
  },
];

const EXIT_IDS = new Set(EXITS.map((e) => e.id));

export function unknownCodifyExits(): readonly string[] {
  const missing: string[] = [];
  for (const ask of CODIFY_ASKS) {
    for (const id of ask.exitIds) {
      if (!EXIT_IDS.has(id)) missing.push(id);
    }
  }
  return missing;
}

export function asksFor(found: ReadonlySet<string>): CodifyAsk[] {
  return CODIFY_ASKS.filter((ask) => ask.exitIds.some((id) => found.has(id)));
}

export function draftLetter(opts: {
  readonly asks: readonly Pick<CodifyAsk, "headline" | "ask">[];
  readonly signer?: string;
  readonly addressee?: string;
}): string {
  const addressee = (opts.addressee ?? "").trim() || "CongressCritter";
  const signer = (opts.signer ?? "").trim() || "Your Name";
  const bullets = opts.asks.map((ask) => `${ask.headline}. ${ask.ask}`).join("\n\n");
  return [
    `Dear ${addressee},`,
    "",
    LETTER_OPEN,
    "",
    bullets,
    "",
    LETTER_CLOSE,
    "",
    "Sincerely,",
    signer,
  ].join("\n");
}

export const LETTER_SUBJECT = "Prevention is worth trillions in cure";
