/**
 * What: every source used to brief a card, in one list.
 * Why: the Receipts page is a delivery, not a footer.
 */

export type ReceiptKind = "primary" | "timeline" | "news" | "investigation" | "reference";

export interface Receipt {
  readonly id: string;
  readonly title: string;
  readonly publisher: string;
  readonly url: string;
  readonly kind: ReceiptKind;
  readonly usedFor: readonly string[];
  readonly note: string;
  readonly truth: "LT" | "IT" | "DK" | "mixed";
}

export const RECEIPTS: readonly Receipt[] = [
  {
    id: "lowenstein",
    title: "When Genius Failed",
    publisher: "Roger Lowenstein",
    url: "https://en.wikipedia.org/wiki/When_Genius_Failed",
    kind: "investigation",
    usedFor: ["ltcm-1998"],
    note: "The LTCM weekend. Nobels, leverage, the room. Treat as the file on Greenwich, not a sermon.",
    truth: "mixed",
  },
  {
    id: "fcic",
    title: "The Financial Crisis Inquiry Report",
    publisher: "FCIC",
    url: "https://www.govinfo.gov/app/details/GPO-FCIC",
    kind: "primary",
    usedFor: ["contained-2007", "bear-2008", "lehman-2008", "aig-2008", "tarp-pass-2008", "jail-2011"],
    note: "The official 2011 file. Dissent chapters matter. Not a single-villain story.",
    truth: "LT",
  },
  {
    id: "firrea",
    title: "FIRREA and the RTC",
    publisher: "FDIC",
    url: "https://www.fdic.gov/bank/historical/history/",
    kind: "timeline",
    usedFor: ["garn-1982", "keating-1987", "rtc-1989"],
    note: "The unwind that worked. Slow, public, some jail.",
    truth: "LT",
  },
  {
    id: "garn",
    title: "Garn-St Germain Depository Institutions Act",
    publisher: "Congress",
    url: "https://en.wikipedia.org/wiki/Garn%E2%80%93St._Germain_Depository_Institutions_Act",
    kind: "primary",
    usedFor: ["garn-1982"],
    note: "Let them grow out of it. 1982.",
    truth: "LT",
  },
  {
    id: "enron-britannica",
    title: "Enron scandal",
    publisher: "Britannica",
    url: "https://www.britannica.com/topic/Enron-scandal",
    kind: "reference",
    usedFor: ["levitt-2000", "enron-2001", "sox-2002"],
    note: "SPEs, mark-to-market, Andersen, SOX. The audit passed.",
    truth: "LT",
  },
  {
    id: "lay-levitt",
    title: "Kind Words for Andersen",
    publisher: "New York Times",
    url: "https://www.nytimes.com/2002/01/23/business/enron-s-collapse-kind-words-for-andersen.html",
    kind: "news",
    usedFor: ["levitt-2000"],
    note: "Lay's letter to Levitt killing auditor independence. LT as a document.",
    truth: "LT",
  },
  {
    id: "rajan-2005",
    title: "Has Financial Development Made the World Riskier?",
    publisher: "Raghuram Rajan / Jackson Hole",
    url: "https://www.nber.org/papers/w11728",
    kind: "primary",
    usedFor: ["jackson-2005"],
    note: "The 2005 warning the room did not want.",
    truth: "LT",
  },
  {
    id: "fed-ltcm",
    title: "Near Failure of Long-Term Capital Management",
    publisher: "Federal Reserve History",
    url: "https://www.federalreservehistory.org/essays/ltcm-near-failure",
    kind: "timeline",
    usedFor: ["ltcm-1998"],
    note: "The room, the dates, Bear's no.",
    truth: "LT",
  },
  {
    id: "antar",
    title: "Crazy Eddie fraud",
    publisher: "accounts of Sam Antar / court record",
    url: "https://en.wikipedia.org/wiki/Crazy_Eddie",
    kind: "investigation",
    usedFor: ["eddie-1987"],
    note: "The carnival. Inventory at night. The audit passed. The cubicle lesson.",
    truth: "mixed",
  },
  {
    id: "rtc-sunset",
    title: "Managing the Crisis: The FDIC and RTC Experience",
    publisher: "FDIC",
    url: "https://www.fdic.gov/bank/historical/managing/",
    kind: "timeline",
    usedFor: ["rtc-1989", "rtc-1995"],
    note: "The unwind that worked, then closed. Greenwich treated the close as a license.",
    truth: "LT",
  },
  {
    id: "cse-2004",
    title: "SEC Consolidated Supervised Entity program",
    publisher: "SEC / GAO aftermath",
    url: "https://en.wikipedia.org/wiki/Net_capital_rule",
    kind: "primary",
    usedFor: ["sec-2004"],
    note: "Forty to one. The cubicle wrote the haircut. Bear and Lehman used it.",
    truth: "LT",
  },
  {
    id: "case-shiller",
    title: "S&P CoreLogic Case-Shiller Home Price Index",
    publisher: "S&P",
    url: "https://www.spglobal.com/spdji/en/index-family/indicators/sp-corelogic-case-shiller/",
    kind: "reference",
    usedFor: ["peak-2006", "contained-2007"],
    note: "The peak. The address was already empty in the sand states.",
    truth: "LT",
  },
];
