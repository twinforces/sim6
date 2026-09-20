import type { Locale } from "./types.ts";

const EN = {
  product: "Past Performance",
  joint: "a GrumpyTechBro joint",
  navFrame: "Frame",
  navSystems: "Systems",
  navRail: "Rail",
  navPlay: "Play",
  navReceipts: "Receipts",
  navNote: "Author's Note",
  navQuants: "Quants",
  navDesign: "Design",
  langEn: "EN",
  langFa: "فا",
  langSwitch: "Language",
  navSections: "Sections",
  bootKicker: "Past Performance",
  bootTitle: "Loading the rail",
  bootCopy: "The briefing is still coming down the wire.",
  homeKicker: "Past Performance",
  homeTitle: "Past performance is no guarantee of future results; just future greed.",
  homeP1:
    "We are an optimistic people. We do not celebrate Constitution Day, the day we actually stood up the machinery of government. We celebrate July 4, 1776, the aspiration. The Supreme Court, SCOTUS, takes the Declaration of Independence as seriously as the Constitution, and has ruled based on things it says.",
  homeP2:
    "Consequently, financial scandals are as old as the country. Older than I am. I am not going back through every time we created a United States Bank, killed it, stood one up again, invented the Federal Reserve, then toasted the economy in 1929. I am starting with the first financial scandal I remember: the savings and loan crisis.",
  homeP3:
    "You sit a chair in 1979, before that crisis is a fact. Paul Volcker at the Federal Reserve has not yet jacked up interest rates. The audits still pass. Can you find the moments to get off the train? People who commit financial crimes are accountants. The people who check them are also accountants. Accountants know how to lie to other accountants. To catch a criminal you have to leave the office and drive to the address printed on the invoice.",
  tehran: "The Street",
  washington: "Washington",
  playIran: "Play as the Street",
  playUs: "Play as Washington",
  homeIranBlurb:
    "You run a savings and loan. You pay depositors 3 percent, you make home loans at 6 percent, and you are on the golf course by 3. That world is about to end.",
  homeUsBlurb:
    "You are Jimmy Carter. Inflation is eating paychecks. Paul Volcker, who runs the Federal Reserve, wants to crush it with high interest rates. The savings and loans will scream.",
  readSystems: "Read the systems",
  github: "GitHub repo",
  chairKicker: "Time travel",
  chairTitle: "Play as the Street or play as Washington?",
  chairBody:
    "You are not reading a recap. You are sitting the chair in 1979, before the rate hike is a fact. It is good to be a savings and loan. You pay depositors 3 percent. You make thirty-year home loans at 6 percent. You count the money on the golf course by 3 in the afternoon. People in the business called that 3-6-3. You sit one chair. The other chair is someone else's problem.",
  chairIranBlurb:
    "You are the savings and loan. You borrow short from depositors and lend long to families. The office still calls that banking.",
  chairUsBlurb:
    "You are Carter. Volcker wants to raise rates until inflation breaks. Savings and loans will lose money on every old mortgage. Inflation is already hurting ordinary people.",
  unitedStates: "Washington",
  iran: "The Street",
  sitDifferent: "Sit a different chair",
  refereeNotes: "Referee notes",
  successfulPath: "Successful path",
  railHold: "Rail hold",
  endOfChair: "End of this chair",
  stillWaiting: "1979 is still waiting",
  timeTravelBack: "Time travel: back one",
  lastBranch: "Last branch",
  advisors: "Advisors",
  advisorsBlurb: "They are briefing you now. They do not know how this ends. Hover a name for what their job is.",
  moralVictory: "Moral victory",
  iranContinues: "The Street continues on.",
  serveSomebody: "You serve somebody",
  youCapitulate: "You capitulate",
  mapAnswers: "The map answers",
  railContinues: "The rail continues",
  artisticLicense: "Artistic license",
  close: "Close",
  theImam: "The guns",
  branch: "branch",
  election: "election",
  statusPlayable: "playable",
  errorTitle: "Something went wrong",
  errorFallback: "An unexpected error occurred. Try reloading the page.",
  actionPrompt: "What do you want to do?",
  greyGuards: "That button does not leave this desk.",
  systemsKicker: "Systems",
  systemsTitle: "Bars, clocks, graves",
  systemsLead:
    "Each bar is how much that player will live with you for one more round. 50 is a working relationship. If you keep making the hole in the real loans worse, the book seizes the desk. Hover a bar for the plain-English job.",
  bar: "Bar",
  ifFalls: "If it falls",
  ifSpikes: "If it spikes",
  railKicker: "The rail",
  railTitle: "The rail, not eighty stations",
  railLead:
    "Playable means the card is written and a button will take you somewhere. Quiet years still get a full sentence, not a skip. History is the path that actually happened. The other button is the offramp.",
  playThisCard: "Play this card",
  receiptsKicker: "Receipts",
  receiptsTitle: "Annotated bibliography",
  receiptsLead:
    "Standing rule: if we used it, it lives here. LT is the date or the document. IT is the incentive reading. DK stays DK. AL is labelled on the card, not laundered into the referee. The number you see is 2026 money. Hover the cart for grocery money, CPI. Hover the bank for a hole scaled to GDP. The original is underneath.",
  noteKicker: "A GrumpyTechBro joint",
  noteTitle: "Author's Note",
  noteP1:
    "If you are reading a crash and one side looks like the only villain, you are reading a campaign ad.",
  noteP2:
    "Savings and loans paid depositors a little and lent to families for thirty years. That mismatch is a duration gap: you borrowed money that can leave tomorrow, and you lent it for three decades. Paul Volcker at the Federal Reserve crushed inflation by raising rates, which also crushed that gap. Washington then let dying thrifts gamble with insured deposits because the insurance fund would pay if they lost. The Resolution Trust Corporation later sold the wreckage in public, slowly, and some people went to jail. We called that competence. A hedge fund in Greenwich, Connecticut took the lesson and built a mathematical bet. Fourteen banks closed that bet in a weekend, with no check from the Treasury. We called that private. Enron passed every audit. So did Crazy Eddie, an electronics chain that moved inventory at night ahead of the accountants. People committing financial crimes are accountants. Auditors are also accountants. Accountants know how to lie to other accountants. To catch a criminal you leave the office and drive to the address on the invoice. In 2002 a law made the CEO personally sign the books. We called accounting fixed. Then the mortgage factories took every lesson at once. The book was the country. It would not close.",
  noteP3:
    "The number you see is 2026 money. Hover the cart for a paycheck or an insurance cap, grocery money, CPI. Hover the bank for a hole in the system, the same slice of GDP. The original is underneath. The savings-and-loan cleanup is about {gdp|$720 billion|$125 billion}. TARP is about {gdp|$1.5 trillion|$700 billion}. It was huge at the time.",
  noteP4:
    "Hindsight is 20/20. There are no time machines in real life. This one is a gift. You find a victory point for getting off the train. History still rides.",
  noteP5:
    "Playing toward a boring bank is trivial from both chairs. It is hard from one. I do not let you play both. That is life.",
  noteP6: "Is that a slightly cynical view? I am Grumpy Tech Bro, not Happy Go Lucky Tech Bro. Deal with it.",
  quantsKicker: "A GrumpyTechBro joint",
  quantsTitle: "The bell curve is a lie",
  quantsP1:
    "All of probability is based on the so called Normal Distribution, also known as the Bell Curve. That is what defines marbles falling in a pinboard. The nice thing about the Normal Distribution is that the math resolves cleanly. Mathematicians like clean math. Clean math is easier. Unclean math has icky infinities in it, and if they wanted to work with infinity, they would be black hole physicists.",
  quantsP2:
    "The bad thing about the Normal Distribution is that it is impossible in real life. The pin board has boundaries. The marbles cannot go infinitely either way. Bad things happen more than they are supposed to. Same with good things. Real distributions show skew. Mathematicians gloss over this with the Central Limit Theorem, which says that if you add up a bunch of random numbers, you will still get a normal distribution, so you do not have to worry, you can use the clean simple math, and it will all be good.",
  quantsP3:
    "This does not work. The probability distribution that does match the real world is the Stable Paretian, but mathematicians and Wall Street do not want to talk about the Stable Paretian, because it is not clean math. The tails do not converge to zero. Pesky infinities poke their head. But that is life. Crazy people fly airplanes into buildings. You can lose infinite money on a bad short, but you can only lose your buy price on a bad long.",
  quantsP4:
    "But if we all pretend that the market can be modeled with the Normal Distribution, then we can all get jobs on Wall Street as quants at beaucoup dollars, we can win Nobel prizes for proving that the market is efficient, and we can skate closer to the edge than the old rules of thumb derived empirically: twelve times is solvency, more than twelve times is bankruptcy, and we can go to forty times, because we have computers now.",
  quantsP5: "Sorry, but practice beats theory.",
  mixed: "mixed",
  mixedBlurb: "Some of this is a date or a document. Some of it is argued. Read the note.",
  kindPrimary: "Primary",
  kindTimeline: "Timeline",
  kindNews: "News",
  kindInvestigation: "Investigation",
  kindReference: "Index",
  cardsPrefix: "cards",
  court: "The old book",
  courtBlurb:
    "A mortgage a family lives in, funded by neighborhood deposits. Not yet a product you sell to someone else.",
  myParty: "My party",
  opposing: "Opposing",
  urbanLiberals: "Loan vs deposit",
  hardCurrency: "Cash on hand",
  oilPain: "House prices",
  breakout: "Borrowed money",
  missileCupboard: "Bank fear",
  holesKnown: "Did anyone look?",
  clockOff: "off",
  clockMonths: "mo",
  democrat: "Democrat",
  republican: "Republican",
  sloganAmerica: "",
  sloganAmericaIsrael: "",
  sloganBeirut: "",
  bleedStreet: "Main street will remember.",
  bleedIrgc: "The book will remember the pause.",
  bleedIgnore: "The next card is already written.",
  bleedBomb: "Shooting leaks a map.",
  bleedBreakout: "Leverage",
  bleedMonths: ".",
  yearsGo: "The years go",
  yearsGoBody:
    "The next years are on the rail. This slice is not wired to play them yet. Time travel, or sit the other chair.",
  endWired: "End of the wired rail",
  endWiredBody: "No next card. History arrived, or this slice is done. Time travel, or sit the other chair.",
  congratulate: "We congratulate you on your moral choice.",
  ltName: "Lawyer true",
  itName: "Irish true",
  dkName: "Don't know",
  alName: "Artistic license",
  grName: "Game rule",
  ltBlurb: "A date, a document, a death toll. You can take this to court.",
  itBlurb: "The incentive reading. What the players wanted, even if the memo is quieter. Not a proof.",
  dkBlurb: "Nobody has a clean file. We say so.",
  alBlurb: "History did not do this. The button is labelled. The popup is required.",
  grBlurb: "Not a counterfactual claim. The engine needs a number.",
  peaceExits: "Offramps",
  hindsightKicker: "Hindsight is 20/20",
  iranExits: "Street",
  usExits: "Washington",
  nukesCounter: "The book fired",
  exitsHunt: "Hindsight is 20/20. You find a victory point. History still rides. Can you find them?",
  nukesNotYet: "Not yet.",
  exitHinterland: "You closed the zombies in 1982",
  exitLimits: "You marked the SPE",
  exitHamas: "You drove to the warehouse",
  exitWrListen: "You called it a put",
  exitUsVillages: "You backed Levitt",
  exitFordMix: "You listened to Rajan",
  exitImamLives: "You stood up an RTC for the houses",
  exitNukes: "The book hit zero",
  moralVictories: "Moral victories",
  moralBlurb:
    "You left. A stick figure sits. It is a moral victory. But the machinery grinds on.",
  csoCounter: "Walked out",
  csoBlurb:
    "A name on the door that would not sign a book they had not driven to. The graves count if you walked out. Seizure is not a walk. It is a moral victory. But the machinery grinds on.",
  memoirsCounter: "Best selling memoirs",
  memoirsBlurb:
    "Presidents who have to leave office early write best selling memoirs. It is a moral victory. But the machinery grinds on.",
  csoLondon: "You handed the keys to FSLIC",
  csoFpl: "You refused to sign",
  csoStamp: "You walked in 2011",
  csoArtesh: "You stayed a fund",
  csoMajlis: "You took the exam",
  csoChair: "You stayed in mortgages",
  csoRobe: "You stopped the 30-years",
  csoGreen: "You stayed small",
  csoMahsa: "You paused the book",
  csoMoscow: "You asked for Chapter 11",
  csoFace: "The desk did not have the guns",
  csoSideline: "Sidelined twice",
  csoPurge: "The book seized the desk",
  memoirsFound: "The other party took the chair",
  letterKicker: "The museum writes",
  letterTitle: "A letter to your CongressCritter",
  letterLead:
    "The offramps you found. History did not write them into law. Copy the letter. Mail it. Prevention is worth trillions in cure, I guess.",
  letterEmpty:
    "You rode history. Nothing to mail. Hunt the offramps, sit the other chair, then come back to the cup.",
  letterHunt:
    "Those who do not learn from history are doomed to repeat it, especially if they do not write their congressman.",
  letterToLabel: "Dear",
  letterToPlaceholder: "CongressCritter",
  letterFromLabel: "Sincerely",
  letterFromPlaceholder: "Your Name",
  letterCopy: "Copy the letter",
  letterCopied: "Copied.",
  letterMailto: "Open a mail draft",
} as const;

const FA = EN;

const TABLE = { en: EN, fa: FA };

export type UiKey = keyof typeof EN;

export function ui(locale: Locale, key: UiKey): string {
  return TABLE[locale][key];
}

export function uiTable(locale: Locale): { readonly [K in UiKey]: string } {
  return TABLE[locale];
}
