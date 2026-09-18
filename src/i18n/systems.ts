import type { Locale } from "./types.ts";

export interface SystemRow {
  bar: string;
  falls: string;
  spikes: string;
}

export interface SystemArticle {
  title: string;
  body: string;
}

const EN = {
  rows: [
    {
      bar: "The book",
      falls: "Seizure. Soft move under 35 packs the desk. Under 20 you die even on a hard move.",
      spikes: "The book is marked. Origination slows. The cubicle hates you.",
    },
    {
      bar: "The desk",
      falls: "Two sidelines in a row and you are not the CEO.",
      spikes: "Letterhead pride. Walk options vanish.",
    },
    {
      bar: "Main street",
      falls: "401ks and empty houses. Next-card problems.",
      spikes: "They want hangings. You have a spreadsheet.",
    },
    {
      bar: "My party",
      falls: "Primary threat, then election loss.",
      spikes: "More rope and worse speeches.",
    },
    {
      bar: "Opposing",
      falls: "They are weak. You still own the crash.",
      spikes: "They take the White House.",
    },
    {
      bar: "Press",
      falls: "Nobody is watching the warehouse.",
      spikes: "The ticker is the briefing.",
    },
    {
      bar: "The Fed",
      falls: "The window closes. The room does not form.",
      spikes: "Rates and the put. They think the model is the territory.",
    },
    {
      bar: "Congress",
      falls: "Forbearance dies. Hearings begin.",
      spikes: "The five call the examiners.",
    },
    {
      bar: "FSLIC / FDIC",
      falls: "The fund is insolvent. Taxpayers own the hole.",
      spikes: "RTC daylight. Slow unwind.",
    },
    {
      bar: "China",
      falls: "They stop buying the paper.",
      spikes: "They recycle the surplus into the next book.",
    },
    {
      bar: "Ratings",
      falls: "AAA dies. The factory stops.",
      spikes: "The cubicle is the product.",
    },
  ] satisfies SystemRow[],
  articles: [
    {
      title: "The cubicle",
      body: "Enron passed every audit. So did Crazy Eddie. People committing financial crimes are accountants. Auditors are also accountants. Accountants know how to lie to other accountants. To catch a criminal you have to leave your cubicle and drive to the address on the invoice. That drive is a hindsight point. History still rides.",
    },
    {
      title: "Hindsight",
      body: "Right thing. Not what happened. You keep the chair. You get a point. Distinct from a 7-Eleven moral: that one you leave, and a stick figure sits.",
    },
    {
      title: "The nested put",
      body: "RTC worked. The LTCM room worked. SOX worked. Each success is poison for the next book. 2008 will not close. TARP is a pause, not an unwind.",
    },
  ] satisfies SystemArticle[],
};

export function systemsCopy(_locale: Locale = "en"): typeof EN {
  return EN;
}
