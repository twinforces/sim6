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
    headline: "Do not raise the insurance stamp for zombies",
    ask: "Deposit insurance is a backstop, not a growth plan. DIDMCA took the cap from $40,000 to $100,000 so the dead could buy brokered money.",
  },
  {
    id: "close-now",
    exitIds: ["us-close-now"],
    headline: "Close insolvent books now",
    ask: "Do not pass a grow-out. Garn-St Germain let zombies gamble with insured deposits. The Resolution Trust Corporation was a 1990s novel because 1982 blinked.",
  },
  {
    id: "examiners",
    exitIds: ["us-seize-lincoln", "us-seize-87", "ir-take-exam"],
    headline: "Examiners over senators",
    ask: "A million dollars in donations does not buy forbearance. Five senators sat on the examiners. Lincoln grew.",
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
    headline: "Drive to the invoice",
    ask: "Audit standards that require a visit to the address on the invoice. Crazy Eddie passed every audit. So did Enron. So did the empty houses. Accountants know how to lie to other accountants.",
  },
  {
    id: "standing-rtc",
    exitIds: ["us-keep-rtc", "us-rtc-again"],
    headline: "A standing resolution desk",
    ask: "The RTC closed. TARP was a pause. Keep a desk that hunts vehicles and unwinds the wreckage in daylight, in public, the way 1989 did.",
  },
  {
    id: "haircuts",
    exitIds: ["us-ask-1997", "ir-stay-hedge", "ir-cse-no", "us-keep-12"],
    headline: "Haircuts, in writing",
    ask: "Split legs and no haircut is a bomb. The cubicle does not write its own haircut. Long-Term talked every desk into zero. The five investment banks asked the SEC for the same courtesy on the whole firm.",
  },
  {
    id: "name-the-put",
    exitIds: ["us-call-put"],
    headline: "Name the put",
    ask: "A weekend in a room with no Treasury check is still a put. Say so out loud, or the next book will assume the backstop is free.",
  },
  {
    id: "wall",
    exitIds: ["us-keep-wall", "ir-glba-no"],
    headline: "Keep the wall",
    ask: "Commercial deposits stay off the proprietary book. GLBA ratified a screen door because 1998 worked. The houses still found another costume.",
  },
  {
    id: "levitt",
    exitIds: ["us-back-levitt", "ir-split-andersen"],
    headline: "Auditor independence",
    ask: "The firm that designs the books cannot also sign them. Andersen was the consultant and the auditor. Arthur Levitt tried. Congress watered it.",
  },
  {
    id: "hunt-siv",
    exitIds: ["us-sox-hunt"],
    headline: "Sarbanes-Oxley is not done",
    ask: "The CEO signed. The next paper company had a new name. Hunt the off-balance-sheet vehicle. An SIV is an SPE in a new costume.",
  },
  {
    id: "skin",
    exitIds: ["us-underwrite"],
    headline: "Originators keep the risk",
    ask: "Make the loan, keep a piece. Originate-to-sell is how the cubicle never had to drive to the house.",
  },
  {
    id: "leftover",
    exitIds: ["us-keep-leftover", "ir-stop-slices"],
    headline: "Do not restamp leftover as AAA",
    ask: "The unsold slice of a pile of weak loans is still a pile of weak loans. The ratings firms get paid by the people selling the product. They do not get a second try.",
  },
  {
    id: "file-upstairs",
    exitIds: ["us-file-upstairs"],
    headline: "Jail is not only for cons",
    ask: "Keating went to jail. Skilling went to jail. Designing a factory of weak loans stamped AAA is not investing. Investing is risk. A carnival is a crime. So is the factory.",
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
