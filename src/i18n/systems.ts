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
      falls: "The actual bets eat the firm. Soften the numbers long enough and they seize the desk. Under 20 you die even if you pick the hard button.",
      spikes: "The bets are being marked honestly. New loans slow. The accountants hate you.",
    },
    {
      bar: "The desk",
      falls: "Two bad seasons in a row and you are not the CEO, or not the president.",
      spikes: "Pride in the letterhead. Walking away gets harder.",
    },
    {
      bar: "Main street",
      falls: "Depositors, retirement accounts, empty houses. The next card will remember.",
      spikes: "They want hangings. You have a spreadsheet.",
    },
    {
      bar: "My party",
      falls: "A primary challenge, then you lose the chair.",
      spikes: "More rope and worse speeches.",
    },
    {
      bar: "Opposing",
      falls: "They are weak. You still own the crash.",
      spikes: "They take the White House.",
    },
    {
      bar: "Press",
      falls: "Nobody is watching the warehouse. The fraud has cover.",
      spikes: "The ticker is the briefing. You do not get to finish a sentence.",
    },
    {
      bar: "The Fed",
      falls: "The emergency counter closes. Fourteen banks do not sit in a room.",
      spikes: "Interest rates, and the belief that Washington will catch a falling desk. They think the model is the territory.",
    },
    {
      bar: "Congress",
      falls: "The habit of waiting dies. Hearings begin.",
      spikes: "Five senators call the examiners and tell them to give a dying bank more time.",
    },
    {
      bar: "FSLIC / FDIC",
      falls: "The government insurance on deposits is itself broke. Taxpayers own the hole.",
      spikes: "The Resolution Trust Corporation sells wreckage in daylight. Slow cleanup.",
    },
    {
      bar: "China",
      falls: "They stop buying the mortgage paper.",
      spikes: "They recycle a trade surplus into the next book of American bets.",
    },
    {
      bar: "Ratings",
      falls: "The safest grade, AAA, dies. The factory that packed weak loans into safe-looking stacks stops.",
      spikes: "The credit-rating firms get paid by the people selling the product they are rating. Stamping is the product.",
    },
  ] satisfies SystemRow[],
  articles: [
    {
      title: "The cubicle",
      body: "Enron passed every audit. So did Crazy Eddie, an electronics chain that moved inventory at night ahead of the accountants. People committing financial crimes are accountants. The people who check them are also accountants. Accountants know how to lie to other accountants. To catch a criminal you have to leave the office and drive to the address printed on the invoice. That drive is a hindsight point. History still rides.",
    },
    {
      title: "Hindsight",
      body: "You picked the right thing. That is not what happened. You keep the chair. You get a point. Distinct from a moral victory, where you walk out of the building and a stick figure sits down. History does not rewind for either one.",
    },
    {
      title: "Four cleanups, then one that would not close",
      body: "The Resolution Trust Corporation cleaned up the savings and loans, slowly, in public, with some jail. Fourteen banks closed a hedge fund in Greenwich in a weekend, with no Treasury check. Enron died, its auditor died, and a 2002 law made CEOs sign the books. Each success taught the next desk that a complicated book can be cleaned up. 2008 would not close. The last rescue was a pause, not a cleanup.",
    },
  ] satisfies SystemArticle[],
};

export function systemsCopy(_locale: Locale = "en"): typeof EN {
  return EN;
}
