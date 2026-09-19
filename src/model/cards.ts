/**
 * What: the rail. Quiet years still get a sentence. History is the golden path.
 * Why: finance runs away in books that get harder to unwind.
 */
import type { Card, Choice, FactionId } from "./types.ts";

export const FIRST_CARD_ID = "volcker-1979";
export const EASTER_EGG_CARD_ID = "three-six-three";

const ROOM: readonly FactionId[] = [
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

function hindsight(story: string): Pick<Choice, "overlay" | "resultTitle" | "result"> {
  return {
    overlay: "hindsight",
    resultTitle: "Yes. That was the right thing to do.",
    result: `${story}\n\nThat is not what happened. Hindsight is 20/20. You have the point. The book continues on.`,
  };
}

function drive(where: string): Pick<Choice, "overlay" | "resultTitle" | "result"> {
  return hindsight(
    `You left the cubicle. You drove to ${where}. The invoice was a parking lot, or a warehouse that emptied at night, or a house nobody lived in. Enron passed every audit. So did Crazy Eddie. People committing financial crimes are accountants. Auditors are also accountants. Accountants know how to lie to other accountants. To catch a criminal you have to leave your cubicle and drive to the address on the invoice.`,
  );
}

function moral(story: string): Pick<Choice, "epilogue" | "overlay" | "resultTitle" | "result"> {
  return {
    epilogue: true,
    overlay: "moral",
    resultTitle: "We congratulate you on your moral choice.",
    result: `${story}\n\nIt is a moral victory. The machinery grinds on. You left. A stick figure sits the desk. The Street continues.`,
  };
}

function serve(title: string, body: string): Pick<Choice, "overlay" | "resultTitle" | "result"> {
  return { overlay: "serve", resultTitle: title, result: body };
}

function adapts(title: string, body: string): Pick<Choice, "overlay" | "resultTitle" | "result"> {
  return { overlay: "adapts", resultTitle: title, result: body };
}

const CARDS: Card[] = [
  {
    id: "volcker-1979",
    year: 1979,
    yearLabel: "1979",
    title: "The golf-course years end",
    titleUs: "Volcker wants to crush inflation",
    titleIran: "It is good to be a savings and loan",
    era: "sl",
    status: "playable",
    branchPoint: true,
    referee: {
      paragraphs: [
        "A savings and loan takes deposits from neighbors and makes thirty-year home loans. For decades the whole job was this: pay depositors 3 percent, lend at 6 percent, count the money on the golf course by 3 in the afternoon. People in the business called that 3-6-3. Paul Volcker, who runs the Federal Reserve, is killing inflation by making it expensive to borrow. If the rate you must pay depositors jumps to 11 percent while your old mortgages still pay 6, you lose money every day. That mismatch is a duration gap: you borrowed money that can leave tomorrow, and you lent it for three decades. The loans are still sitting in houses. Nobody from Washington has driven to them.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "cia",
        audience: "us",
        rant: "Inflation is the emergency: money buys less every month. A savings and loan is a sector. I raise interest rates until prices break. The mismatch between their cheap old mortgages and the new cost of deposits is their problem.",
        closer: "Paul Volcker. He is in the room. He is not the chair.",
      },
      {
        faction: "irgc",
        audience: "iran",
        rant: "Thirty-year mortgages at 6 percent. Depositors who now want 11. The accountants still show a healthy savings and loan. The accountants have not gone to look at the loans.",
      },
    ],
    situationUs:
      "You are Jimmy Carter. Prices in the grocery store keep jumping. That is inflation: money buys less every month. Paul Volcker, who runs the Federal Reserve, wants to crush it by making it expensive to borrow. He will raise interest rates until it hurts.\n\nSavings and loans will scream, because they pay depositors a little and hold thirty-year home loans at 6 percent. If he hikes, those old loans become a losing pile. Inflation is already hurting ordinary people.",
    situationIran:
      "It is good to be a savings and loan. You pay depositors 3 percent. You make thirty-year home loans at 6 percent. You count the money on the golf course by 3 in the afternoon. People in the business called that 3-6-3.\n\nPaul Volcker at the Federal Reserve is about to raise interest rates to kill inflation. If he does, you will pay depositors 11 percent while your old mortgages still pay 6. That world is over this afternoon if he hikes.",
    iranChoices: [
      {
        id: "ir-keep-30s",
        label: "Keep making thirty-year home loans",
        summary: "The only book you know: take deposits, lend for thirty years, golf by 3.",
        kind: "soft",
        historical: true,
        deltas: { irgc: -6, liberals: 8, street: 4 },
      },
      {
        id: "ir-stop-30s",
        label: "Stop making thirty-year loans",
        summary: "Admit the 3-6-3 world is dead. Stop adding more cheap old mortgages to a pile that already loses money.",
        kind: "hard",
        deltas: { irgc: 4, street: -8, leader: -4 },
        ...hindsight("You stopped adding thirty-year loans to a pile that already lost money when rates jumped. The sector did not."),
      },
    ],
    usChoices: [
      {
        id: "us-hike",
        label: "Let Volcker raise rates",
        summary: "Kill inflation first. The savings and loans can wait.",
        kind: "hard",
        historical: true,
        deltas: { cia: 8, street: -10, my_party: -6, liberals: 10, europeans: -4 },
      },
      {
        id: "us-blink",
        label: "Blink and spare the thrifts",
        summary: "Senators will call. Volcker still has the power to hike.",
        kind: "soft",
        deltas: { cia: -12, saudis: 6, street: 4, liberals: -4 },
        ...serve("The Fed still raises rates", "Volcker has the power over interest rates. You blinked on letterhead. The hike still happens. You serve the chair's fear of the savings-and-loan lobby. History still rides."),
      },
    ],
    sources: ["Volcker 1979 Saturday night special", "3-6-3 banking"],
    visibleFactions: ROOM,
    next: "didmca-1980",
  },
  {
    id: "didmca-1980",
    year: 1980,
    yearLabel: "1980",
    title: "The safety net gets bigger",
    titleUs: "Insurance on deposits goes to $100,000",
    titleIran: "You can buy deposits now",
    era: "sl",
    status: "playable",
    electionYear: true,
    referee: {
      paragraphs: [
        "A 1980 law, DIDMCA, raises federal deposit insurance from $40,000 to $100,000. Deposit insurance is a promise: if the bank dies, Washington pays the customer. The old caps on what you could pay a depositor start to die too. If you can pay any rate, and the government will make the depositor whole, you can buy money from a broker and gamble with it. A broker gathers cash from around the country and parks it in whichever bank pays the most. People call those brokered deposits. People later called the government backstop a put: a cheap option to dump the loss on the insurance fund.",
      ],
      tags: ["LT"],
    },
    briefings: [
      {
        faction: "europeans",
        audience: "us",
        rant: "Raise the insurance cap or watch a run: people pulling cash because they are scared. The fund that pays them is not built for this. Raise it anyway.",
      },
      {
        faction: "irgc",
        audience: "iran",
        rant: "Insured deposits at any price. Then lend them at a hope. The accountants will call that growth. They will not ask where the new money came from.",
      },
    ],
    situationUs:
      "It is still Carter's year. Savings and loans say they will die unless you raise the government insurance on each deposit from $40,000 to $100,000. Deposit insurance is a promise: if the bank fails, Washington pays the customer. Make that promise bigger and a dying bank can attract more money to gamble with.",
    situationIran:
      "The government is about to insure each deposit up to $100,000 instead of $40,000. A broker can now gather money from around the country and park it with you, because every dollar is insured. People call those brokered deposits. Your old cheap mortgages still do not pay enough. You can buy this new money and try to grow out of the hole.",
    iranChoices: [
      {
        id: "ir-buy-brokered",
        label: "Buy deposits from a broker",
        summary: "Insured money, from anywhere, at whatever rate it takes. Grow out of the hole.",
        kind: "hard",
        historical: true,
        deltas: { irgc: -4, europeans: -6, leader: 4 },
      },
      {
        id: "ir-stay-small",
        label: "Stay small",
        summary: "Do not fund a gamble with money the government has promised to repay.",
        kind: "walk",
        deltas: { irgc: 6, leader: -6 },
        ...hindsight("You did not buy the government backstop. The sector did."),
      },
    ],
    usChoices: [
      {
        id: "us-raise-cap",
        label: "Raise insurance to $100,000",
        summary: "DIDMCA. The safety net gets bigger. So does the chip stack a dying bank can buy.",
        kind: "deal",
        historical: true,
        deltas: { europeans: -8, street: 6, saudis: 4, my_party: 4 },
      },
      {
        id: "us-keep-cap",
        label: "Keep insurance at $40,000",
        summary: "Do not enlarge the government backstop a dying bank can gamble with.",
        kind: "hard",
        deltas: { europeans: 4, street: -8, my_party: -8 },
        ...hindsight("The government backstop stayed small. The zombies would have had less to gamble with."),
      },
    ],
    sources: ["DIDMCA 1980"],
    visibleFactions: ROOM,
    next: "garn-1982",
  },
  {
    id: "garn-1982",
    year: 1982,
    yearLabel: "1982",
    title: "Let them grow out of it",
    titleUs: "Close them now, or give them time",
    titleIran: "Danger: zombies",
    era: "sl",
    status: "playable",
    branchPoint: true,
    referee: {
      paragraphs: [
        "Garn-St Germain, 1982. A law that lets savings and loans make commercial loans, adjustable-rate mortgages, and other new bets. The insolvent are told to grow out of the hole. Forbearance is the name of the habit: Washington looks at a bank that is already broke and decides not to close it yet. A zombie is what you get: still open, still taking deposits the government insures, still digging. If they lose, FSLIC, the insurance fund for savings and loans, will pay. They buy junk bonds, high-interest loans to shaky companies, and desert condos. This is how you try to grow out of a duration gap. It works, until it does not.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "saudis",
        audience: "us",
        rant: "Close them now and you own a recession in an election year. Give them time. They will grow out of it. That is what the lobby will say in the hearing.",
      },
      {
        faction: "irgc",
        audience: "iran",
        rant: "The old 3-6-3 book is dead. The new book is anything an accountant will mark: junk bonds, desert condos. The audit will pass. Audits pass.",
      },
    ],
    situationUs:
      "Reagan sits. The bill is on the desk. Close the savings and loans that are already broke, or pass Garn-St Germain and let them grow out of it with new kinds of bets. Growing out of it is the cable everyone wants. Forbearance is the polite word for leaving a dead bank open.",
    situationIran:
      "They are about to let you buy junk bonds and desert condos with deposits the government insures. Your old cheap mortgages still do not pay enough. The accountants are about to call that hole a strategy. A zombie is a broke bank that is still open. You are being invited to become one.",
    iranChoices: [
      {
        id: "ir-gamble",
        label: "Gamble with insured deposits",
        summary: "Junk bonds, condos, money from brokers. Grow out of the hole, or die trying on the government's tab.",
        kind: "hard",
        historical: true,
        deltas: { irgc: -8, leader: 8, europeans: -6, venezuela: 4 },
      },
      {
        id: "ir-close-self",
        label: "Hand the keys to the insurance fund",
        summary: "Admit the hole. Let FSLIC take the savings and loan. You leave.",
        kind: "walk",
        deltas: { irgc: 10, leader: -20, street: -4 },
        ...moral("You handed the keys over. The sector did not. A replacement sits. The Street continues."),
      },
    ],
    usChoices: [
      {
        id: "us-garn",
        label: "Let them grow out of it",
        summary: "Garn-St Germain. New bets for dead banks. Forbearance as a policy.",
        kind: "deal",
        historical: true,
        deltas: { europeans: -10, saudis: 6, street: 4, liberals: 12, irgc: -4 },
        flags: { s_l_worked: false },
      },
      {
        id: "us-close-now",
        label: "Close the insolvent now",
        summary: "No zombies. A broke bank does not get to buy junk with insured deposits.",
        kind: "hard",
        deltas: { europeans: 8, saudis: -12, my_party: -10, street: -6, liberals: -20 },
        ...hindsight("You closed the zombies in 1982. The bill stayed a 1982 bill. The Resolution Trust Corporation was not a 1990s novel."),
      },
    ],
    sources: ["Garn-St Germain Depository Institutions Act 1982"],
    visibleFactions: ROOM,
    next: "lincoln-1984",
  },
  {
    id: "lincoln-1984",
    year: 1984,
    yearLabel: "1984",
    title: "Lincoln",
    titleUs: "Keating buys a savings and loan",
    titleIran: "You buy Lincoln",
    era: "sl",
    status: "playable",
    electionYear: true,
    referee: {
      paragraphs: [
        "Charles Keating, a Phoenix developer, buys Lincoln Savings, a California savings and loan. Insured deposits in. Junk bonds and Arizona dirt out. The old 3-6-3 men are gone. Examiners in San Francisco, the people whose job is to look at the loans, are about to get a letter from five senators.",
      ],
      tags: ["LT"],
    },
    briefings: [
      {
        faction: "leader",
        audience: "iran",
        rant: "Lincoln is a platform. Insured deposits in, desert out. The audit will pass until it cannot.",
        face: "keating",
      },
      {
        faction: "saudis",
        audience: "us",
        rant: "A constituent with a savings and loan. Do not let the San Francisco examiners get ahead of themselves.",
      },
    ],
    situationUs:
      "A Phoenix developer just bought a California savings and loan named Lincoln. The examiners, the people whose job is to look at the loans, are twitchy. Senators will call. Charles Keating writes checks to campaigns. That is not a secret.",
    situationIran:
      "You bought Lincoln Savings. The old 3-6-3 men, the golf-course bankers, are gone. The pile of bets is about to become a story: junk bonds, Arizona dirt, deposits the government insures.",
    iranChoices: [
      {
        id: "ir-lincoln-grow",
        label: "Grow it tenfold",
        summary: "Money from brokers. Junk bonds. Arizona dirt. The government insures the deposits.",
        kind: "hard",
        historical: true,
        deltas: { irgc: -10, leader: 10, europeans: -8, venezuela: 6 },
        flags: { iran_face: "keating" },
      },
      {
        id: "ir-lincoln-mortgages",
        label: "Stay in home loans",
        summary: "The boring book. Thirty-year mortgages a family lives in.",
        kind: "soft",
        deltas: { irgc: 6, leader: -8 },
        ...hindsight("Lincoln stayed a savings and loan. Keating stayed a developer. The accountants had less to lie about."),
      },
    ],
    usChoices: [
      {
        id: "us-watch-lincoln",
        label: "Watch Lincoln",
        summary: "The examiners can wait. A developer with senators is a constituency.",
        kind: "ignore",
        historical: true,
        deltas: { europeans: -4, saudis: 4, media: -2 },
      },
      {
        id: "us-seize-lincoln",
        label: "Seize Lincoln now",
        summary: "1984, not 1989. Close it before the dirt becomes a novel.",
        kind: "hard",
        deltas: { europeans: 6, saudis: -10, my_party: -6 },
        ...hindsight("You seized Lincoln in 1984. The Keating Five never sat. The bill stayed a 1984 bill."),
      },
    ],
    sources: ["Lincoln Savings, Keating 1984"],
    visibleFactions: ROOM,
    next: "eddie-1987",
  },
  {
    id: "eddie-1987",
    year: 1987,
    yearLabel: "1987",
    title: "The carnival",
    titleUs: "Crazy Eddie passed the audit",
    titleIran: "Drive to the warehouse",
    era: "sl",
    status: "playable",
    referee: {
      paragraphs: [
        "Crazy Eddie is an electronics chain. Before the accountants arrive, staff move inventory at night from store to store so every warehouse looks full. People called it the carnival. The audit passed. Every year. Enron's audit will pass the same way. The office where one accountant checks another accountant's file is not a detective. To catch this you leave the cubicle and drive to the address on the invoice.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "venezuela",
        audience: "us",
        rant: "The financials are clean. We signed them. We did not drive to Brooklyn at 2 a.m.",
      },
      {
        faction: "irgc",
        audience: "iran",
        rant: "The warehouse is empty when the auditors leave. Full when they arrive. Accountants lying to accountants. That is the book.",
      },
    ],
    situationUs:
      "A retailer just became a case file. Crazy Eddie. The audit passed. Every year. The invoices have addresses. Nobody from your chair has seen the loading dock. People committing financial crimes are accountants. The people who check them are also accountants.",
    situationIran:
      "You are not Crazy Eddie. You are the savings and loan next door, watching an electronics chain teach the lesson. The auditors will come to you the same way. They will not drive at night. They will sign what the file says.",
    actionPrompt: "Do you leave the cubicle?",
    iranChoices: [
      {
        id: "ir-trust-audit",
        label: "Trust the audit",
        summary: "The cubicle is the job. Accountants check accountants. That is how the work is done.",
        kind: "soft",
        historical: true,
        deltas: { irgc: -4, drone_holes_known: -2, venezuela: 4 },
      },
      {
        id: "ir-drive-warehouse",
        label: "Drive to the warehouse at night",
        summary: "The address on the invoice. See if the boxes are actually there.",
        kind: "hard",
        deltas: { irgc: 6, drone_holes_known: 20, leader: -4 },
        ...drive("the warehouse at 2 a.m."),
      },
    ],
    usChoices: [
      {
        id: "us-trust-eddie",
        label: "The audit passed",
        summary: "The filing is at the SEC. Accountants signed it. That is supposed to be enough.",
        kind: "ignore",
        historical: true,
        deltas: { venezuela: 4, drone_holes_known: -2, media: 2 },
      },
      {
        id: "us-drive-eddie",
        label: "Send someone to the loading dock",
        summary: "Leave the cubicle. Drive to Brooklyn at 2 a.m.",
        kind: "covert",
        deltas: { drone_holes_known: 20, venezuela: -8, media: 6 },
        ...drive("the Crazy Eddie warehouse"),
      },
    ],
    sources: ["Crazy Eddie fraud, Sam Antar, inventory carnival"],
    visibleFactions: ROOM,
    next: "keating-1987",
  },
  {
    id: "keating-1987",
    year: 1987,
    yearLabel: "1987",
    title: "The five",
    titleUs: "Five senators sit on the examiners",
    titleIran: "Call the senators",
    era: "sl",
    status: "playable",
    referee: {
      paragraphs: [
        "Five senators. About a million dollars in donations. San Francisco wants to seize Lincoln Savings. The senators want the examiners to forbear: leave the dying bank open a little longer. FSLIC, the insurance fund for savings and loans, is already broke. Forbearance is how the bill grows. People will call them the Keating Five.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "saudis",
        audience: "us",
        rant: "These are constituents. The examiners are cowboys. Give Lincoln time.",
      },
      {
        faction: "leader",
        audience: "iran",
        rant: "Call Washington. The cubicle in San Francisco does not understand Arizona dirt.",
        face: "keating",
      },
    ],
    situationUs:
      "Five of yours took the meeting with Charles Keating. The examiners want to seize Lincoln Savings. The government insurance fund is already empty. Forbearance, leaving a dead bank open, is what the five are asking for.",
    situationIran:
      "The examiners are at the door. You have senators. A donation is a product. Forbearance is the thing you are buying: more time, while insured deposits keep arriving.",
    iranChoices: [
      {
        id: "ir-call-five",
        label: "Call the five senators",
        summary: "Forbearance is the product. Buy time. Keep the dirt off the exam.",
        kind: "covert",
        historical: true,
        deltas: { saudis: 8, europeans: -10, irgc: -6, media: -4 },
      },
      {
        id: "ir-take-exam",
        label: "Let the examiners in",
        summary: "Let them see the Arizona dirt. No phone call to Washington.",
        kind: "walk",
        deltas: { europeans: 6, leader: -12, irgc: 4 },
        ...hindsight("You let the examiners in. Lincoln closed smaller. The five never sat."),
      },
    ],
    usChoices: [
      {
        id: "us-forbear",
        label: "Give Lincoln more time",
        summary: "The five have spoken. Forbearance. The fund is already dead, and still you wait.",
        kind: "soft",
        historical: true,
        deltas: { saudis: 6, europeans: -8, media: -6, my_party: 2 },
      },
      {
        id: "us-seize-87",
        label: "Seize Lincoln anyway",
        summary: "The insurance fund is already dead. Waiting makes the bill a novel.",
        kind: "hard",
        deltas: { europeans: 8, saudis: -14, media: 8 },
        ...hindsight("You seized Lincoln in 1987. Cranston still had a hearing. The bill stayed a 1987 bill."),
      },
    ],
    sources: ["Keating Five 1987", "FSLIC insolvency 1987"],
    visibleFactions: ROOM,
    next: "rtc-1989",
  },
  {
    id: "rtc-1989",
    year: 1989,
    yearLabel: "1989",
    title: "The cleanup that worked",
    titleUs: "Stand up the Resolution Trust Corporation",
    titleIran: "Seizure",
    era: "sl",
    status: "playable",
    referee: {
      paragraphs: [
        "FIRREA, 1989. A law that kills FSLIC, the old savings-and-loan insurance fund, and stands up the Resolution Trust Corporation. The RTC seizes dead savings and loans and sells the wreckage in public. Slow. Expensive. Some jail. Keating will do time. We will call this competence. The next book will hear that we can clean this up.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "europeans",
        audience: "us",
        rant: "Stand up the RTC. Sell the dirt. Do it in daylight. The insurance fund is gone. Taxpayers own this.",
      },
      {
        faction: "leader",
        audience: "iran",
        rant: "The desk is done. The pile of bets is a resolution case. Jail is a real overlay this time.",
        face: "keating",
      },
    ],
    situationUs:
      "Bush sits. FIRREA is the bill: kill the old insurance fund, stand up the Resolution Trust Corporation, sell the wreckage in daylight. Or forbear again, leave the zombies open, and let the bill become 2008 early.",
    situationIran:
      "They are coming with a resolution. The cubicle cannot save you. The warehouse, the Arizona dirt, was always empty. The RTC will take the keys and sell what is left in public.",
    iranChoices: [
      {
        id: "ir-seized",
        label: "Take the seizure",
        summary: "Lincoln dies. The RTC sells the dirt. You are no longer the letterhead.",
        kind: "walk",
        historical: true,
        deltas: { irgc: 8, leader: -15, street: -8 },
        flags: { s_l_worked: true, iran_face: "meriwether" },
      },
      {
        id: "ir-fight-rtc",
        label: "Fight the RTC in court",
        summary: "Delay the cleanup. Sue. The dirt still gets sold.",
        kind: "hard",
        deltas: { leader: 4, europeans: -6, media: -8 },
        ...serve("The RTC still takes the keys", "You sued. They still sold the dirt. The cleanup that worked, worked. You serve a delay. History still rides."),
      },
    ],
    usChoices: [
      {
        id: "us-rtc",
        label: "Stand up the RTC",
        summary: "Slow. Public. Some jail. Taxpayers eat the hole. We will call it competence.",
        kind: "hard",
        historical: true,
        deltas: { europeans: 10, street: -6, saudis: -4, liberals: -40, future_irgc_grudge: 40 },
        flags: { s_l_worked: true },
      },
      {
        id: "us-forbear-89",
        label: "Give them more time, again",
        summary: "Forbearance in 1989 is how 2008 arrives early.",
        kind: "soft",
        deltas: { europeans: -20, street: 4 },
        ending: "hoover",
        resultTitle: "You let the zombies compound",
        result:
          "Forbearance in 1989 is how 2008 arrives early. History did not take the complete wipe. AL. Time travel is the honest button.",
      },
    ],
    sources: ["FIRREA 1989", "Resolution Trust Corporation"],
    visibleFactions: ROOM,
    next: "rtc-1995",
  },
  {
    id: "rtc-1995",
    year: 1995,
    yearLabel: "1995",
    title: "We call it competence",
    titleUs: "The RTC closes",
    titleIran: "Leave the dirt",
    era: "sl",
    status: "playable",
    referee: {
      paragraphs: [
        "The Resolution Trust Corporation winds down. Taxpayers ate the hole. Keating did time. We will say a sector can be cleaned up in public. In Greenwich, Connecticut, John Meriwether, the old Salomon bond star, is already building a hedge fund: a private pool of bets for people who can put up millions, using a mountain of borrowed money, with mathematicians on the letterhead. They will treat the savings-and-loan cleanup as a license. Complicated books can be closed.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "europeans",
        audience: "us",
        rant: "The bill is public. The dirt is sold. Close the shop and take the win. The next book is not our charter.",
      },
      {
        faction: "irgc",
        audience: "iran",
        rant: "The duration gap is a resolved case file. The next book is a math model. Models do not need a warehouse.",
      },
      {
        faction: "cia",
        audience: "us",
        rant: "A sector died in daylight. Markets learned. Complexity is now a private problem.",
      },
      {
        faction: "leader",
        audience: "iran",
        rant: "Lincoln is a museum. You can stay a resolution man or you can sit Greenwich. The cubicle prefers Greenwich.",
        face: "meriwether",
      },
    ],
    situationUs:
      "Bush is gone. Clinton sits. The Resolution Trust Corporation is finishing. Declare the savings-and-loan crisis over, or keep a standing desk that hunts the next paper company sitting off the books.",
    situationIran:
      "The dirt is sold. Keating is in a cell. You can stay with the residue, or you can go to Greenwich, Connecticut, where John Meriwether is building a hedge fund with mathematicians on the letterhead. A hedge fund is a private pool of bets. The lesson they want from the savings and loans is: we can close a book.",
    iranChoices: [
      {
        id: "ir-leave-dirt",
        label: "Leave for Greenwich",
        summary: "The next book is a math model. A hedge fund does not keep a warehouse.",
        kind: "hard",
        historical: true,
        deltas: { irgc: -4, leader: 6, cia: 4 },
        flags: { iran_face: "meriwether" },
      },
      {
        id: "ir-stay-resolution",
        label: "Stay a resolution man",
        summary: "The dirt still has addresses. Someone should keep driving to them.",
        kind: "walk",
        deltas: { irgc: 6, leader: -6 },
        ...hindsight("You stayed with the residue. Greenwich still built the model. You have the point."),
      },
    ],
    usChoices: [
      {
        id: "us-rtc-close",
        label: "Declare the savings-and-loan crisis over",
        summary: "Competence. Close the shop. A sector can be cleaned up.",
        kind: "deal",
        historical: true,
        deltas: { europeans: 6, media: 4, future_irgc_grudge: -8 },
      },
      {
        id: "us-keep-rtc",
        label: "Keep a standing resolution desk",
        summary: "The next paper company will have a new name. Someone should still hunt vehicles.",
        kind: "hard",
        deltas: { europeans: 4, saudis: -6, drone_holes_known: 8 },
        ...hindsight("You kept a desk that hunts vehicles. Greenwich still got a weekend. You have the point."),
      },
    ],
    sources: ["RTC sunset 1995", "Keating convictions"],
    visibleFactions: ROOM,
    next: "ltcm-1997",
  },
  {
    id: "ltcm-1997",
    year: 1997,
    yearLabel: "1997",
    title: "Forty percent a year",
    titleUs: "A private fund, printing",
    titleIran: "No place to put the money",
    era: "ltcm",
    status: "playable",
    branchPoint: true,
    referee: {
      paragraphs: [
        "Long-Term Capital is beating the market by more than 40 percent a year. That doubles in two years. No losing stretches. The gaps they sit in are getting crowded. They gave about $2.7 billion back to investors at the end of 1997. That sounded like discipline. It left the same bets on less of their own money, so leverage, borrowed money piled on a bet, jumped from 18 to 1 to 28 to 1. They also stopped being a hedge. A hedge is both sides at once: you own one bond, the long side, and you have borrowed and sold a near twin, the short side. If a broker holds both legs, they only have net risk, and the extra collateral they keep, the haircut, stays small. Long-Term put the long at one firm and the short at another. Merrill saw only one side of each trade. Then they talked each desk into no haircut at all. Zero. Meriwether was the public face, popular, and the letterhead said Nobel. Each new bank was told: if we give you a haircut we have to give it to everyone. So nobody got one. Each broker had a one-sided bomb and thought they had a customer.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "irgc",
        audience: "iran",
        rant: "The gaps are gone. Everyone else caught up. You nibble and the pennies vanish. Two doors. Stay a hedge and stay smaller, or stop hedging: merger bets, paired shares, directional books. The letterhead will get you no haircut either way.",
        face: "meriwether",
      },
      {
        faction: "cia",
        audience: "us",
        rant: "A private fund in Greenwich. Not a bank. Forty percent is a success story. Haircuts on a hedge fund are not our charter.",
      },
    ],
    situationUs:
      "Clinton sits. A hedge fund in Greenwich is printing more than 40 percent a year. That doubles in two years. It is not a bank. It does not take insured deposits. The New York Fed has not asked what the haircuts look like: the extra collateral a broker keeps in case the customer dies.\n\nA real hedge is both sides at once. If a broker holds the long and the short, they only have net risk. If this fund has been splitting the legs across the Street, each desk has a bomb and thinks it has a customer. You can ask. Or you can call it private.",
    situationIran:
      "You are John Meriwether. You are beating the market by more than 40 percent a year. That doubles in two years. You have more money than gaps. The pennies are getting crowded.\n\nA hedge is both sides at once. Long: you own it, you want it up. Short: you borrowed it and sold it, you want it down. If a broker holds both legs, they only have net risk, and the extra collateral they keep, the haircut, stays small. You have been putting the long at one firm and the short at another. Merrill sees only one side. Then you talk each of them into no haircut at all, because you are the public face, Scholes and Merton sit on the letterhead, and every new bank is told the cool people already waived it.\n\nTwo doors. Stop taking money, stay a hedge, live with the pennies you can still find. Or stop being a hedge: merger bets, directional books, split legs, no haircut, and give some money back so the same book sits on less of your own cash. Guess which one the desk wants.",
    iranChoices: [
      {
        id: "ir-stop-hedge",
        label: "Stop being a hedge",
        summary: "Merger bets. Directional books. Split the legs. No haircut. Give money back so the same book sits on less of your own cash.",
        kind: "hard",
        historical: true,
        deltas: { irgc: -8, leader: 8, cia: 2 },
        flags: { iran_face: "meriwether" },
      },
      {
        id: "ir-stay-hedge",
        label: "Stay a hedge. Stop taking money.",
        summary: "You already double in two years. The gaps are gone. Keep both legs at the same broker. Live with the pennies.",
        kind: "walk",
        deltas: { irgc: 8, leader: -8 },
        ...hindsight("You stayed a hedge. Greenwich still split the legs. You have the point."),
      },
    ],
    usChoices: [
      {
        id: "us-private-1997",
        label: "Call it private",
        summary: "A hedge fund is not a bank. Forty percent is their problem. Haircuts are not your charter.",
        kind: "ignore",
        historical: true,
        deltas: { cia: 4, media: 2 },
      },
      {
        id: "us-ask-1997",
        label: "Ask what the haircuts look like",
        summary: "If they split the legs, each desk on the Street has a bomb. Ask what happens if they fold.",
        kind: "hard",
        deltas: { cia: -4, drone_holes_known: 10, saudis: -4 },
        ...hindsight("You asked about the haircuts in 1997. The weekend still came. You have the point."),
      },
    ],
    sources: ["Lowenstein, When Genius Failed", "LTCM 1997 capital return"],
    visibleFactions: ROOM,
    next: "ltcm-1998",
  },
  {
    id: "ltcm-1998",
    year: 1998,
    yearLabel: "1998",
    title: "When genius failed",
    titleUs: "Fourteen banks in a room",
    titleIran: "The weekend",
    era: "ltcm",
    status: "playable",
    branchPoint: true,
    clocksOn: true,
    referee: {
      paragraphs: [
        "By September 1998 the fund had about $100 billion of assets, almost all borrowed, and more than a trillion dollars of side bets: derivative contracts, not cash in a vault. If they defaulted, every bank in the room would be left holding one side of a contract whose other side no longer existed. That is why fourteen banks sat in a room. They had split the long and the short across the Street, with no haircut, because Meriwether was popular and the letterhead said Nobel. Russia had defaulted in August. The gaps blew open. The fund lost 44 percent that month. Value at Risk had not priced a country walking away from its own paper.",
        "On September 23, fourteen firms put $3.6 billion into the fund at the New York Fed. Bear Stearns, which cleared the trades, said no. James Cayne had vowed to stop clearing if cash fell under $500 million. A group led by Warren Buffett faxed $250 million for the fund and would fire the partners. The partners did not take it. The Fed lent none of its own money. The banks could not unwind the book without the people who built it. The consortium contract said stay three years, salary $250,000. The partners exploded. They called it indentured servitude and threatened to let the fund blow and take seven-figure jobs. One hundred forty lawyers at Skadden. The banks needed signatures. They paid. We will call this private. We will call it a put anyway.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "cia",
        audience: "us",
        rant: "Not a bailout. A consortium. If they dump a hundred billion of borrowed assets and a trillion of side bets tonight, every desk is left holding one side of a dead contract. You cannot unwind it without them. Get them in a room. There is no Treasury check.",
        closer: "William McDonough, New York Fed. He is in the room. He is not the chair.",
      },
      {
        faction: "irgc",
        audience: "iran",
        rant: "If you fold, the Street folds. A hundred billion borrowed, a trillion in side bets, long at one desk and short at another, no haircut, no one holding both legs. Value at Risk said this could not happen. Russia was not a normal day. They need your signatures to unwind it. They will name a salary.",
        face: "meriwether",
      },
    ],
    situationUs:
      "Clinton sits. A hedge fund in Greenwich just proved that Nobel Prize math plus borrowed money can threaten every bank in New York.\n\nThey split the long and the short across the Street. No haircut, because Meriwether was popular and the letterhead said Nobel. About $100 billion of assets, almost all borrowed, and more than a trillion dollars of side bets. If they fold tonight, every desk is left holding one side of a dead contract. Russia defaulted in August. Forty-four percent gone in a month.\n\nBill McDonough wants fourteen banks in a room. Bear Stearns will say no. Buffett faxed $250 million for the fund and would fire the partners. There is no Treasury check. After you save them, you will need them to unwind it. The contract will say stay three years at $250,000 a year. They will explode. You will pay. Call it a recap, not a bailout. We will call this private. The next book will call it a put.",
    situationIran:
      "You are John Meriwether. Last year you stopped being a hedge. The long sat at one broker, the short at another. No haircut. You are the public face. Scholes and Merton sit on the letterhead. You gave money back, which left the same bets on less of your own cash.\n\nRussia defaulted in August. The gaps blew open. Forty-four percent gone in a month. You have about $100 billion of assets, almost all borrowed, and more than a trillion dollars of side bets. If you fold tonight, every Street firm is left holding one side of a dead contract. That is why fourteen banks are in a room.\n\nThey cannot unwind it without you. The consortium contract will say stay three years, salary $250,000. Your partners will explode. They will pay anyway, because they need signatures and they do not know the book. Bear Stearns, which clears your trades, will not put in a dollar. Buffett faxed $250 million for the fund and would fire you. There is no Treasury check. They will call this private.",
    iranChoices: [
      {
        id: "ir-take-room",
        label: "Take the consortium",
        summary: "Fourteen banks put in $3.6 billion. You live. They own 90 percent. We will call it private.",
        kind: "deal",
        historical: true,
        deltas: { irgc: 8, leader: -8, cia: 6 },
        flags: { ltcm_worked: true },
      },
      {
        id: "ir-file",
        label: "File for bankruptcy",
        summary: "Dump a hundred billion of assets and a trillion of side bets tonight. Every Street firm on the other side dies with you.",
        kind: "walk",
        deltas: { irgc: -20, leader: -20 },
        ...adapts(
          "The fire sale",
          "You filed. A hundred billion of assets and a trillion of side bets marked every desk overnight. The room still happens, uglier, without you as letterhead. History still rides. AL on the ugliness, not on the hole.",
        ),
      },
    ],
    usChoices: [
      {
        id: "us-room",
        label: "Get them in a room",
        summary: "Not a bailout. Fourteen banks, their cash, no Treasury check. We will call it private.",
        kind: "deal",
        historical: true,
        deltas: { cia: 8, media: -4, street: 2, irgc: 6 },
        flags: { ltcm_worked: true },
      },
      {
        id: "us-call-put",
        label: "Call it a put, out loud",
        summary: "Name the backstop. Run the room anyway. A put is a cheap option to dump the loss on someone else.",
        kind: "hard",
        deltas: { media: 8, cia: -4, street: -4 },
        flags: { ltcm_worked: true },
        ...hindsight("You ran the room and you named the put. Greenwich still got saved. The next book heard you anyway."),
      },
    ],
    sources: ["Lowenstein, When Genius Failed", "NY Fed LTCM meeting 23 Sep 1998", "Russia default 17 Aug 1998"],
    visibleFactions: ROOM,
    next: "glba-1999",
  },
  {
    id: "glba-1999",
    year: 1999,
    yearLabel: "1999",
    title: "Because 1998 worked",
    titleUs: "Tear down the wall",
    titleIran: "Be everything",
    era: "ltcm",
    status: "playable",
    referee: {
      paragraphs: [
        "Gramm-Leach-Bliley, 1999. Glass-Steagall was a Depression-era law that split ordinary banks, which take deposits, from investment banks, which underwrite and trade. This bill tears the wall down. The sentence in the room is: 1998 worked. Fourteen banks closed a hedge fund in a weekend. We can handle complexity.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "irgc",
        audience: "us",
        rant: "The room proved the system can close a book. Let the books get bigger.",
      },
      {
        faction: "cia",
        audience: "iran",
        rant: "You lived. The put, the belief that someone will catch a falling desk, is now a story. Use it.",
      },
    ],
    situationUs:
      "The 1998 weekend is already a success story: fourteen banks, no Treasury check, the system held. You paid the partners $250,000 a year to stay three years and unwind their own book. They exploded. You paid. Repeal Glass-Steagall, the Depression-era wall between deposit banks and trading floors. The models worked.",
    situationIran:
      "The wall between deposit banking and the trading floor is coming down. You can be everything: take deposits, underwrite, trade. The cubicle will call that synergy.",
    iranChoices: [
      {
        id: "ir-glba-yes",
        label: "Be everything",
        summary: "Take deposits and run a trading floor. Commercial plus investment. One letterhead.",
        kind: "hard",
        historical: true,
        deltas: { irgc: -4, leader: 6, china: 4 },
      },
      {
        id: "ir-glba-no",
        label: "Stay a fund",
        summary: "Do not become the country. Stay a hedge fund. Leave deposit banking to deposit banks.",
        kind: "walk",
        deltas: { irgc: 4, leader: -4 },
        ...hindsight("You stayed a fund. The country still became a stack of home loans stamped safe."),
      },
    ],
    usChoices: [
      {
        id: "us-glba",
        label: "Repeal the wall",
        summary: "Gramm-Leach-Bliley. Glass-Steagall dies. 1998 is treated as a license.",
        kind: "deal",
        historical: true,
        deltas: { irgc: -4, saudis: 6, cia: 4 },
      },
      {
        id: "us-keep-wall",
        label: "Keep Glass-Steagall",
        summary: "1998 is not a license. Deposit banks stay deposit banks.",
        kind: "hard",
        deltas: { saudis: -8, irgc: 4 },
        ...hindsight("The wall stayed. The houses still wanted to be AAA. The book found another costume."),
      },
    ],
    sources: ["Gramm-Leach-Bliley Act 1999"],
    visibleFactions: ROOM,
    next: "levitt-2000",
  },
  {
    id: "levitt-2000",
    year: 2000,
    yearLabel: "2000",
    title: "The auditor is the consultant",
    titleUs: "Levitt versus Lay",
    titleIran: "Write the SEC",
    era: "enron",
    status: "playable",
    electionYear: true,
    referee: {
      paragraphs: [
        "Arthur Levitt, who runs the Securities and Exchange Commission, wants auditor independence: the accountant who signs that the books are true should not also be the accountant you pay for advice. Kenneth Lay of Enron writes the SEC to kill the idea. Arthur Andersen is Enron's auditor and its consultant. The cubicle is auditing the cubicle. Enron will pass every audit.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "venezuela",
        audience: "us",
        rant: "Independence is expensive. Enron finds the current setup cheaper. That is a quote. Lay signed it.",
      },
      {
        faction: "leader",
        audience: "iran",
        rant: "Write Levitt. The consultant is how you keep the auditor friendly. The warehouse can wait.",
        face: "lay",
      },
    ],
    situationUs:
      "Arthur Levitt wants to split the accountant who signs the books from the accountant who sells advice. Kenneth Lay's letter is on the desk. Houston is a friend of the building. Andersen is both auditor and consultant to Enron. That is the whole fight.",
    situationIran:
      "You are Kenneth Lay. Arthur Andersen signs that your books are true, and also sells you advice about how to keep them looking true. Write the SEC. The paper companies sitting off the books, the SPEs, need the cubicle to stay friendly.",
    iranChoices: [
      {
        id: "ir-write-levitt",
        label: "Write the SEC",
        summary: "Kill auditor independence. Keep the accountant who signs as the accountant who advises.",
        kind: "covert",
        historical: true,
        deltas: { venezuela: 8, drone_holes_known: -6, leader: 4 },
        flags: { iran_face: "lay" },
      },
      {
        id: "ir-split-andersen",
        label: "Split the auditor",
        summary: "Let them only sign. Buy advice somewhere else.",
        kind: "hard",
        deltas: { venezuela: -8, drone_holes_known: 10, leader: -6 },
        ...hindsight("Andersen only signed. Someone still had to drive to the SPE. You did not. You have the point anyway."),
      },
    ],
    usChoices: [
      {
        id: "us-water-levitt",
        label: "Water Levitt down",
        summary: "Independence can wait. Houston wrote a letter. The current setup is cheaper.",
        kind: "soft",
        historical: true,
        deltas: { venezuela: 6, drone_holes_known: -4, media: -2 },
      },
      {
        id: "us-back-levitt",
        label: "Back Levitt",
        summary: "The accountant who signs cannot also be the consultant.",
        kind: "hard",
        deltas: { venezuela: -10, drone_holes_known: 12, saudis: -6 },
        ...hindsight("You backed Levitt. Enron still had SPEs. Someone still had to drive to the address. You have the point."),
      },
    ],
    sources: ["Lay letter to Levitt on auditor independence", "Arthur Andersen dual role"],
    visibleFactions: ROOM,
    next: "enron-2001",
  },
  {
    id: "enron-2001",
    year: 2001,
    yearLabel: "2001",
    title: "The audit passed",
    titleUs: "Drive to the paper company",
    titleIran: "Raptor",
    era: "enron",
    status: "playable",
    branchPoint: true,
    referee: {
      paragraphs: [
        "October restatement. Shredders. December 2 bankruptcy. Mark-to-market means writing today's price onto a contract and booking the gain as profit, even if nobody has paid you yet. Honest when the thing trades every morning. A lie when there is no market, only a model, and the model is yours. A special purpose entity, an SPE, is a paper company that sits next to the real firm so the ugly bets do not show on the main books. Chewco, LJM, Raptors. Andrew Fastow, the CFO, has the real power. The audit passed. Every year. To catch this you leave the cubicle and drive to the vehicle.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "irgc",
        audience: "iran",
        rant: "The Raptors unwind if the stock drops. The stock is dropping. The warehouse is a Cayman address. Andersen is still signing.",
        face: "lay",
      },
      {
        faction: "cia",
        audience: "us",
        rant: "Houston. A campaign. An energy book. The filing is clean until it is not. Nobody has driven to the SPE, the paper company sitting off the books.",
      },
    ],
    situationUs:
      "Bush sits. Enron is restating its earnings: the old numbers were a story. The audit passed. The invoices have addresses in the Cayman Islands. The 401k, the retirement account of the people who work there, is main street. A special purpose entity is a paper company used to hide losses. Drive to it, or watch the filing.",
    situationIran:
      "You are Kenneth Lay. Andrew Fastow built the vehicles, the SPEs, the paper companies sitting off the books. Andersen signed. Mark-to-market booked today's profit on contracts that had no real market. The cubicle is not going to save the stock. You can still tell the truth about the vehicles, or you can shred.",
    actionPrompt: "Leave the cubicle?",
    iranChoices: [
      {
        id: "ir-hide-spe",
        label: "Keep the paper companies off the books",
        summary: "The audit passed. The SPEs stay in the Caymans. Shred if you have to.",
        kind: "soft",
        historical: true,
        deltas: { irgc: -12, drone_holes_known: -8, street: -10, leader: -6 },
      },
      {
        id: "ir-drive-spe",
        label: "Drive to the SPE",
        summary: "Name Fastow. Mark the vehicles. The Cayman address is on the invoice.",
        kind: "hard",
        deltas: { irgc: 8, drone_holes_known: 30, leader: -10, street: -4 },
        ...drive("the Cayman address on the Raptor invoice"),
      },
    ],
    usChoices: [
      {
        id: "us-watch-enron",
        label: "Watch the bankruptcy",
        summary: "The filing will handle it. Houston is a campaign friend. The audit passed.",
        kind: "ignore",
        historical: true,
        deltas: { street: -8, media: 8, venezuela: -6 },
      },
      {
        id: "us-drive-enron",
        label: "Send someone to the SPE",
        summary: "Leave the cubicle. A paper company in the Caymans has an address.",
        kind: "covert",
        deltas: { drone_holes_known: 30, street: 4, media: 10, venezuela: -10 },
        ...drive("the SPE"),
      },
    ],
    sources: ["Enron bankruptcy 2 Dec 2001", "SPE restatement Oct 2001", "Andersen shredding"],
    visibleFactions: ROOM,
    next: "sox-2002",
  },
  {
    id: "sox-2002",
    year: 2002,
    yearLabel: "2002",
    title: "The CEO signs",
    titleUs: "Sarbanes-Oxley",
    titleIran: "Andersen is gone",
    era: "enron",
    status: "playable",
    referee: {
      paragraphs: [
        "Sarbanes-Oxley, July 2002. The CEO must personally sign: these books are true. Andersen, Enron's auditor, dies as a going concern. WorldCom, another accounting hole the same year, is a sentence on this card, not its own movie. We fixed accounting. The next book will hide in a structured investment vehicle, an SIV, a paper company with a new name. Same costume as an SPE.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "saudis",
        audience: "us",
        rant: "Pass it 99-0. Sign it. Call it done. The houses are not Enron.",
      },
      {
        faction: "leader",
        audience: "iran",
        rant: "Andersen is dead. You will sign the next book yourself. The cubicle just got a law. The warehouse did not.",
        face: "lay",
      },
    ],
    situationUs:
      "Pass Sarbanes-Oxley: the CEO signs the books in his own name. WorldCom is the rhyme in the same year, another accounting hole, not its own movie. Call it done, or keep hunting the next paper company sitting off the books. The houses are already being packed.",
    situationIran:
      "The auditor who signed you is dead. Jeffrey Skilling is going to jail. A 2002 law will make the next CEO sign in his own name. The houses are already being packed as AAA, the safest grade, as if a stack of weak loans were the government.",
    iranChoices: [
      {
        id: "ir-sign-sox",
        label: "Sign the next book",
        summary: "The law is a ritual. You sign. The warehouse does not get a visit.",
        kind: "deal",
        historical: true,
        deltas: { drone_holes_known: 4, leader: -4 },
        flags: { sox_worked: true, iran_face: "mozilo" },
      },
      {
        id: "ir-refuse-sign",
        label: "Refuse to sign a book you have not driven to",
        summary: "Leave. A replacement will sign.",
        kind: "walk",
        deltas: { leader: -20, drone_holes_known: 10 },
        ...moral("You would not sign a book you had not driven to. A replacement signed. The Street continues."),
      },
    ],
    usChoices: [
      {
        id: "us-sox-done",
        label: "Pass SOX and call it done",
        summary: "Accounting is fixed. The CEO signs. The houses are not Enron.",
        kind: "deal",
        historical: true,
        deltas: { media: 6, saudis: 8, drone_holes_known: 6 },
        flags: { sox_worked: true },
      },
      {
        id: "us-sox-hunt",
        label: "Pass SOX and hunt SIVs",
        summary: "The next paper company has a new name. Same costume. Keep hunting.",
        kind: "hard",
        deltas: { drone_holes_known: 16, saudis: -6, irgc: 4 },
        flags: { sox_worked: true },
        ...hindsight("You passed the law and you kept hunting. The houses still wanted to be AAA. You have the point."),
      },
    ],
    sources: ["Sarbanes-Oxley Act 30 Jul 2002", "WorldCom 2002"],
    visibleFactions: ROOM,
    next: "dream-2003",
  },
  {
    id: "dream-2003",
    year: 2003,
    yearLabel: "2003",
    title: "The American Dream",
    titleUs: "Ownership society",
    titleIran: "A thirty-year loan as a product",
    era: "housing",
    status: "playable",
    referee: {
      paragraphs: [
        "The savings-and-loan housing sermon, louder. Bundling home loans into a bond seems like genius. A mortgage is a debt people live in. They will keep paying even if the house is worth less than the loan. That looks safer than a company that can walk away. People who hate risk will buy that paper. GSEs, government-sponsored enterprises, are Fannie Mae and Freddie Mac: they buy home loans from banks so the banks can make more. Subprime means a loan to someone with weak credit, sold as inclusion. Countrywide. Originate-to-sell: make the loan, sell it this week, do not keep the risk. The cubicle will rate a stack of 620 FICO scores as AAA, the safest grade. The credit-rating firms get paid by the people selling the product they are rating. Sarbanes-Oxley does not unwind a mortgage.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "street",
        audience: "us",
        rant: "Everyone deserves a house. The last cleanup worked. The audit of the originator will pass.",
      },
      {
        faction: "irgc",
        audience: "iran",
        rant: "Originate. Sell. The SPE is now a trust. The rating is the product. Do not drive to the house.",
        face: "mozilo",
      },
      {
        faction: "venezuela",
        audience: "us",
        rant: "We get paid by the people selling the stack. They pick us. We stamp it AAA. That is the job. We did not drive to the house.",
      },
    ],
    situationUs:
      "Ownership society: more families in houses, on purpose. Push Fannie Mae and Freddie Mac, the government-sponsored buyers of home loans, to take weaker files. The houses are not Enron. That is the sentence in the room. Subprime, loans to people with weak credit, is being sold as inclusion.",
    situationIran:
      "You are Angelo Mozilo of Countrywide. Bundling home loans into a bond seems like genius. A mortgage is a debt people live in. They pay even if the house is worth less than the loan. Safe-looking paper for people who hate risk.\n\nA thirty-year home loan is a product you sell this week, not a loan you keep. Originate-to-sell: make it, sell it, keep the fee, dump the risk. A credit-rating firm will stamp the stack AAA, the safest grade. That firm is paid by you, the people selling the stack. You pick the firm. The firm stamps the product. The address is a family. Nobody from that cubicle will visit.",
    iranChoices: [
      {
        id: "ir-originate-sell",
        label: "Make the loan and sell it",
        summary: "Originate-to-sell. The house leaves your book this week. You keep the fee, not the risk.",
        kind: "hard",
        historical: true,
        deltas: { irgc: -8, oil_pain: 10, venezuela: 8, street: 6, china: 6 },
        flags: { iran_face: "mozilo" },
      },
      {
        id: "ir-drive-house",
        label: "Drive to the house",
        summary: "See if anyone lives there. Keep the loan on your own book until you have looked.",
        kind: "hard",
        deltas: { irgc: 6, oil_pain: -6, drone_holes_known: 12, leader: -4 },
        ...drive("the house on the note"),
      },
    ],
    usChoices: [
      {
        id: "us-ownership",
        label: "Push homeownership",
        summary: "Fannie, Freddie, subprime as inclusion. More families in houses. The last cleanup worked.",
        kind: "deal",
        historical: true,
        deltas: { street: 6, oil_pain: 8, china: 6, my_party: 4 },
      },
      {
        id: "us-underwrite",
        label: "Make them keep the loan",
        summary: "No originate-to-sell. If you make it, you hold the risk when the family stops paying.",
        kind: "hard",
        deltas: { street: -8, oil_pain: -8, saudis: -8 },
        ...hindsight("Originators kept the risk. The AAA factory slowed. The country still wanted the dream. You have the point."),
      },
    ],
    sources: ["American Dream Downpayment Act 2003", "GSE affordable housing goals"],
    visibleFactions: ROOM,
    next: "sec-2004",
  },
  {
    id: "sec-2004",
    year: 2004,
    yearLabel: "2004",
    title: "Forty to one",
    titleUs: "The five banks write their own rule",
    titleIran: "Internal models",
    era: "housing",
    status: "playable",
    referee: {
      paragraphs: [
        "The SEC, the Securities and Exchange Commission, starts a Consolidated Supervised Entity program. The five big investment banks, Bear, Lehman, Merrill, Goldman, Morgan Stanley, may use their own math to decide how much of their own money they must hold. The old cap was about twelve dollars of bets per dollar of theirs. It becomes forty to one. Leverage is borrowed money piled on a bet. At forty to one, a 3 percent drop wipes you. The cubicle writes the rule for the cubicle.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "venezuela",
        audience: "us",
        rant: "The models are sophisticated. Europe is already there. If you keep 12 to 1 they will book the trades in London.",
      },
      {
        faction: "irgc",
        audience: "iran",
        rant: "Leverage is a product. The CSE is permission to sell more of it. Do not drive to the houses that will sit under the AAA.",
        face: "mozilo",
      },
      {
        faction: "cia",
        audience: "us",
        rant: "Holding companies at the Fed. Broker-dealers at the SEC. The gap is the book. Fill it with a model.",
      },
      {
        faction: "leader",
        audience: "iran",
        rant: "The old haircut, the capital rule, is for commercial banks. Long-Term already talked the brokers out of a haircut on each trade. You want the same courtesy from the SEC on the whole firm. Markets mark themselves.",
        face: "mozilo",
      },
    ],
    situationUs:
      "The five investment banks want the CSE: permission to use their own models for how much of their own money they hold. Twelve dollars of bets per dollar of theirs becomes forty. Sarbanes-Oxley just made CEOs sign. This rule lets the signed book get bigger.",
    situationIran:
      "You are the Street after Houston. The old capital rule, about twelve to one, is about to die. The houses are already a factory. Forty dollars of bets on every dollar of yours is a costume Sarbanes-Oxley does not see.",
    iranChoices: [
      {
        id: "ir-cse-yes",
        label: "Lever the book",
        summary: "Forty dollars of bets on every dollar of yours. Borrowed money is the product.",
        kind: "hard",
        historical: true,
        deltas: { irgc: -8, leader: 8, venezuela: 6 },
        flags: { iran_face: "mozilo" },
      },
      {
        id: "ir-cse-no",
        label: "Stay at twelve to one",
        summary: "Keep the old capital rule. One dollar of yours for every twelve of bets, not forty.",
        kind: "walk",
        deltas: { irgc: 8, leader: -8 },
        ...hindsight("You kept the haircut. The other four did not. You have the point."),
      },
    ],
    usChoices: [
      {
        id: "us-cse",
        label: "Let them use their own models",
        summary: "The CSE. Internal math. Forty to one. The cubicle writes the rule for the cubicle.",
        kind: "deal",
        historical: true,
        deltas: { venezuela: 8, irgc: -6, cia: 4, drone_holes_known: -6 },
      },
      {
        id: "us-keep-12",
        label: "Keep twelve to one",
        summary: "The old capital rule stays. Borrowed money does not get a new costume.",
        kind: "hard",
        deltas: { venezuela: -10, saudis: -6, irgc: 6, drone_holes_known: 8 },
        ...hindsight("The haircut stayed. The houses still wanted to be AAA. You have the point."),
      },
    ],
    sources: ["SEC CSE program 2004", "Net capital exemption"],
    visibleFactions: ROOM,
    next: "slices-2005",
  },
  {
    id: "slices-2005",
    year: 2005,
    yearLabel: "2005",
    title: "Bonds of bonds",
    titleUs: "The leftover finds a buyer",
    titleIran: "Slice it",
    era: "housing",
    status: "playable",
    branchPoint: true,
    referee: {
      paragraphs: [
        "Once home loans are a bond, you can build a bond of bonds. A CDO, a collateralized debt obligation, is that second pile: slices of the first pile, stacked again. Slice the first bond into good credit, medium credit, leftover. Good credit pays less interest and looks safer. Medium pays more. Nobody wants the leftover, so you roll the leftover into a new bond. The credit-rating firm, paid by the people selling the product they are rating, stamps the top of that new pile AAA, as if trash plus trash were the government.",
        "A bond is a product. You can short a product: bet that it dies. The usual tool is a credit default swap, a side bet that pays if the stack goes bad, sold as insurance. If people short your stack, you collect the premium. That is more money in the door. More money to make more loans. You do not even need a new house. Same pile, new side bets. Michael Lewis, The Big Short, is the file. The houses are still the invoice.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "irgc",
        audience: "iran",
        rant: "The leftover has no buyer until you wrap it. Wrap it. Stamp it. Sell the shorts the insurance. The premium is origination money. Do not drive to the house.",
        face: "mozilo",
      },
      {
        faction: "venezuela",
        audience: "us",
        rant: "The top of the second pile is AAA. We ran the numbers on the first pile, then on the pile of the first pile. We get paid by the people selling it. We did not drive to Las Vegas.",
      },
    ],
    situationUs:
      "The factory is no longer just selling home loans. It is selling slices of home loans, then slices of those slices. The leftover, the bad-credit piece nobody wanted, is being rolled into a new bond and stamped AAA. People who hate risk are buying the top. People who want to bet against the pile are buying insurance on it.\n\nIf they short the stack, the factory collects the premium and makes more loans. Same houses. New paper. You can make them keep the leftover, or you can call a bond of bonds a private product.",
    situationIran:
      "Bundling mortgages as bonds seemed like genius. A family lives in the house. They pay even if they are underwater: the house is worth less than the loan. Once the loans are a bond, you can build a bond of bonds. Slice it. Good credit, medium credit, leftover. Nobody wants the leftover, so you roll that leftover into a new bond. The rating firm, paid by you, stamps the top AAA.\n\nA bond is a product. You can short a product. If people short your stack, they pay you a premium for the privilege of betting it dies. That premium is more money to make more loans. You do not need a new house. Same pile. New side bets.",
    iranChoices: [
      {
        id: "ir-roll-leftover",
        label: "Slice it. Roll the leftover.",
        summary: "Bond of bonds. Stamp the trash AAA. Sell the shorts the insurance. The premium funds the next loan.",
        kind: "hard",
        historical: true,
        deltas: { irgc: -8, oil_pain: 8, venezuela: 8, china: 4 },
        flags: { iran_face: "mozilo" },
      },
      {
        id: "ir-stop-slices",
        label: "Stop at the first bond",
        summary: "Do not build a bond of bonds. Do not sell insurance on it. A family still lives in the first one.",
        kind: "walk",
        deltas: { irgc: 8, venezuela: -6, leader: -6 },
        ...hindsight("You stopped at the first bond. The leftover stayed leftover. The factory next door sliced it anyway. You have the point."),
      },
    ],
    usChoices: [
      {
        id: "us-let-slices",
        label: "Let them slice",
        summary: "A bond of bonds is a private product. People want safe paper. The leftover is not your charter.",
        kind: "ignore",
        historical: true,
        deltas: { venezuela: 6, oil_pain: 6, cia: 2 },
      },
      {
        id: "us-keep-leftover",
        label: "Make them keep the leftover",
        summary: "If they roll trash into a new AAA, they hold it. If they sell insurance on a house, they hold cash like an insurer.",
        kind: "hard",
        deltas: { venezuela: -10, saudis: -8, oil_pain: -6, drone_holes_known: 10 },
        ...hindsight("The leftover stayed leftover. The factory still wanted a second pile. You have the point."),
      },
    ],
    sources: ["Lewis, The Big Short", "CDO mezzanine machine 2004-2007"],
    visibleFactions: ROOM,
    next: "jackson-2005",
  },
  {
    id: "jackson-2005",
    year: 2005,
    yearLabel: "2005",
    title: "Jackson Hole",
    titleUs: "Rajan speaks",
    titleIran: "The model is the territory",
    era: "housing",
    status: "playable",
    referee: {
      paragraphs: [
        "Raghuram Rajan, an economist, stands up at the Federal Reserve's Jackson Hole conference in Wyoming. He says the system is holding more risk, not less. The room mostly does not want to hear it. 1998 worked. Sarbanes-Oxley worked. The houses are not a paper company. The Great Moderation is the name they give the calm: low inflation, steady growth, the models behaving. A scold is inconvenient.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "cia",
        audience: "us",
        rant: "A staff economist is nervous. The models are fine. 1998 was contained. This will be too.",
      },
      {
        faction: "venezuela",
        audience: "iran",
        rant: "AAA. We get paid by the people selling the stack. We ran the numbers in the cubicle. We did not drive to Las Vegas.",
      },
    ],
    situationUs:
      "Jackson Hole, Wyoming. The Federal Reserve's annual conference. Raghuram Rajan says the system is more fragile than the models claim: more risk is being held, not less. The room wants to celebrate the Great Moderation, the years of calm. A scold is a scold.",
    situationIran:
      "A Fed conference just described your book of home-loan products as a weapon. You are already slicing the first bond, rolling the leftover into a second pile, stamping the top AAA. Keep the factory on. The cubicle ran the numbers. The cubicle did not drive to Las Vegas.",
    iranChoices: [
      {
        id: "ir-ignore-rajan",
        label: "Keep the factory on",
        summary: "AAA is still the product. A stack of weak loans, stamped safe. Keep selling.",
        kind: "hard",
        historical: true,
        deltas: { irgc: -6, oil_pain: 8, venezuela: 4 },
      },
      {
        id: "ir-listen-rajan",
        label: "Slow the pipeline",
        summary: "Mark the loans honestly. Make fewer of them. Rajan described your book as a weapon.",
        kind: "soft",
        deltas: { irgc: 6, oil_pain: -8, leader: -6 },
        ...hindsight("You listened at Jackson Hole. The factory next door did not. You have the point."),
      },
    ],
    usChoices: [
      {
        id: "us-moderation",
        label: "Celebrate the Great Moderation",
        summary: "Rajan is a scold. The models are fine. 1998 was contained.",
        kind: "ignore",
        historical: true,
        deltas: { cia: 4, oil_pain: 4, media: 2 },
      },
      {
        id: "us-listen-rajan",
        label: "Listen to Rajan",
        summary: "The system is holding more risk, not less. Say so in the room.",
        kind: "hard",
        deltas: { cia: -4, oil_pain: -6, media: 4 },
        ...hindsight("You listened. The houses were still a factory. You have the point."),
      },
    ],
    sources: ["Raghuram Rajan Jackson Hole 2005"],
    visibleFactions: ROOM,
    next: "peak-2006",
  },
  {
    id: "peak-2006",
    year: 2006,
    yearLabel: "2006",
    title: "The address is empty",
    titleUs: "Housing peaks",
    titleIran: "Friends of Angelo",
    era: "housing",
    status: "playable",
    referee: {
      paragraphs: [
        "The Case-Shiller index of house prices peaks. New Century, a subprime lender, is already coughing. Countrywide is still a factory. The cubicle still prints AAA, the safest grade, on a stack of 620 FICO scores. A FICO around 620 is where lenders used to say no. Nobody has driven to Las Vegas. Friends of Angelo were the people who got the good rate at Countrywide because they knew Mozilo.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "street",
        audience: "us",
        rant: "Prices are a national good. A cooling is healthy. Do not call it a hole.",
      },
      {
        faction: "irgc",
        audience: "iran",
        rant: "The warehouse is a subdivision. Drive at noon and the garage is empty. The rating does not care.",
        face: "mozilo",
      },
      {
        faction: "venezuela",
        audience: "us",
        rant: "The structure is investment grade. We get paid by the people selling it. We ran the numbers. We did not walk the cul-de-sac.",
      },
      {
        faction: "leader",
        audience: "iran",
        rant: "Originate. Sell. The peak is a rumor until the commercial paper stops. Keep the factory on.",
        face: "mozilo",
      },
    ],
    situationUs:
      "House prices have stopped going up. The Street says a plateau. The invoices still have addresses. Someone could still drive to Las Vegas and see who lives there. The cubicle is still stamping AAA on stacks of weak loans.",
    situationIran:
      "You are Angelo Mozilo. Friends of Angelo got the good rate because they knew you. The house on the tape may not have a family. Commercial paper, the short-term IOUs the factory uses as cash, is still rolling. The cubicle will not visit.",
    actionPrompt: "Leave the cubicle?",
    iranChoices: [
      {
        id: "ir-keep-factory",
        label: "Keep the factory on",
        summary: "AAA is still the product. Make the loan, sell it, stamp it safe.",
        kind: "hard",
        historical: true,
        deltas: { irgc: -8, oil_pain: 10, venezuela: 4, street: -4 },
      },
      {
        id: "ir-drive-vegas",
        label: "Drive to Las Vegas",
        summary: "See who lives there. A cul-de-sac of empty houses with AAA on the tape.",
        kind: "hard",
        deltas: { irgc: 8, oil_pain: -8, drone_holes_known: 16, leader: -6 },
        ...drive("a cul-de-sac of empty houses with AAA on the tape"),
      },
    ],
    usChoices: [
      {
        id: "us-peak-ok",
        label: "Call it a plateau",
        summary: "Markets cool. A healthy pause. Do not call it a hole.",
        kind: "ignore",
        historical: true,
        deltas: { oil_pain: 6, media: 2, drone_holes_known: -4 },
      },
      {
        id: "us-drive-peak",
        label: "Send someone to the houses",
        summary: "Leave the cubicle. Drive to Las Vegas. See if a family opens the door.",
        kind: "covert",
        deltas: { drone_holes_known: 16, oil_pain: -6, media: 6 },
        ...drive("Las Vegas in 2006"),
      },
    ],
    sources: ["Case-Shiller peak 2006", "New Century 2006-2007", "Friends of Angelo"],
    visibleFactions: ROOM,
    next: "hibachi-2007",
  },
  {
    id: "hibachi-2007",
    year: 2007,
    yearLabel: "Jan 2007",
    title: "The shorts sat with the longs",
    titleUs: "A dinner in Vegas",
    titleIran: "Keep talking",
    era: "housing",
    status: "playable",
    branchPoint: true,
    referee: {
      paragraphs: [
        "January 2007, the American Securitization Forum, Las Vegas. House prices have already peaked. The people who shorted the home-loan stack, betting it dies, have been paying a premium every month for a credit default swap, a side bet sold as insurance. The stack has not died. They have cold feet.",
        "Greg Lippmann at Deutsche Bank throws a dinner at the Wynn. Hibachi steam: strangers around one grill, the kind of table Benihana made famous. He seats the shorts next to the longs, the people who still buy the stack. After they talk to a CDO manager on the long side, they double. Steve Eisman: whatever that guy is buying, I want to short it. Sight unseen. DK on Benihana as the chain. LT that it was hibachi, that Lippmann mixed the table, and that they doubled. Michael Lewis, The Big Short, is the file.",
      ],
      tags: ["LT", "IT", "DK"],
    },
    briefings: [
      {
        faction: "irgc",
        audience: "iran",
        rant: "They seated the people betting you die next to people like you. You talk. They double. That premium is still origination money until it is not. Keep the factory on.",
        face: "mozilo",
      },
      {
        faction: "cia",
        audience: "us",
        rant: "A private dinner. Hedge funds and a salesman. Not a bank. The models still say a sector. August is when you get to say contained.",
      },
    ],
    situationUs:
      "Bush sits. A bond conference in Las Vegas. The salesman who sold insurance on home-loan stacks has seated the shorts, the people betting those stacks die, next to the longs, the people who still sell them. Hibachi steam. Strangers around one grill.\n\nThe shorts have cold feet. They have been paying a premium every month and the stack has not died. After dinner they double the bet.\n\nYou can ask what they heard. Or you can call a private dinner a private dinner, and in August you will say contained.",
    situationIran:
      "You are Angelo Mozilo. House prices peaked last year. People have been shorting your stack: betting it dies, paying you a premium every month for the privilege. The stack has not died. They have cold feet.\n\nDeutsche Bank throws a dinner in Las Vegas. Hibachi steam, the kind of table Benihana made famous: strangers around one grill. The salesman seats the shorts next to the longs. You are the long side of this book. Someone like you talks. Explains the factory.\n\nAfter they listen, they double the bet. Two doors. Keep talking. Or stop originating, because the people betting you die just met you and doubled.",
    iranChoices: [
      {
        id: "ir-keep-talking",
        label: "Keep talking",
        summary: "Explain the factory. The shorts double. The premium is still origination money.",
        kind: "hard",
        historical: true,
        deltas: { irgc: -6, oil_pain: 6, venezuela: 4, leader: 4 },
        flags: { iran_face: "mozilo" },
      },
      {
        id: "ir-leave-table",
        label: "Stop originating",
        summary: "They doubled because they sat with you. Turn the factory off.",
        kind: "walk",
        deltas: { irgc: 8, oil_pain: -8, leader: -6 },
        ...hindsight("You left the table. The factory next door kept talking. The shorts still doubled. You have the point."),
      },
    ],
    usChoices: [
      {
        id: "us-ignore-dinner",
        label: "Call it a private dinner",
        summary: "Hedge funds and a salesman. Not a bank. August is when you say contained.",
        kind: "ignore",
        historical: true,
        deltas: { cia: 4, media: 2, oil_pain: 4 },
      },
      {
        id: "us-ask-dinner",
        label: "Ask what the shorts heard",
        summary: "They had cold feet. After they sat with the longs they doubled. Ask why.",
        kind: "hard",
        deltas: { cia: -4, drone_holes_known: 10, saudis: -4 },
        ...hindsight("You asked what the shorts heard. August still said contained. You have the point."),
      },
    ],
    sources: ["Lewis, The Big Short", "American Securitization Forum Jan 2007"],
    visibleFactions: ROOM,
    next: "contained-2007",
  },
  {
    id: "contained-2007",
    year: 2007,
    yearLabel: "2007",
    title: "Subprime is contained",
    titleUs: "Contained",
    titleIran: "The factory seizes",
    era: "housing",
    status: "playable",
    branchPoint: true,
    clocksOn: true,
    referee: {
      paragraphs: [
        "August 2007. The 1998 sentence, said again: it is contained. Subprime, the weak-credit loans, is a sector, they say, not the country. SIVs, structured investment vehicles, are paper companies that hold mortgage bets off the bank's main books. An SPE in a new costume. Sarbanes-Oxley does not unwind them. Commercial paper, the short-term IOUs the factory uses as cash, stops rolling. Nobody drove to the houses.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "cia",
        audience: "us",
        rant: "Contained. The models say the rest of the book is fine. 1998 was a weekend. This is a sector.",
      },
      {
        faction: "irgc",
        audience: "iran",
        rant: "The commercial paper is not rolling. The warehouse is a trust in the Caymans again. Drive and you will not like the address.",
        face: "mozilo",
      },
    ],
    situationUs:
      "Ben Bernanke at the Federal Reserve, Hank Paulson at Treasury. Contained is the word: the weak-credit loans are a corner of the market, not the country. The TED, the extra interest banks charge each other because they are afraid, is moving. The houses are a sector, you tell yourselves.",
    situationIran:
      "Countrywide is the weather. The AAA stamp is melting. Commercial paper, your cash, is not rolling over. You can still tell the truth about the housing book, or you can say contained along with them.",
    iranChoices: [
      {
        id: "ir-contained",
        label: "It is contained",
        summary: "Keep the factory language. A sector, not the country. 1998 language.",
        kind: "soft",
        historical: true,
        deltas: { irgc: -10, oil_pain: 10, venezuela: -6, street: -6 },
        flags: { iran_face: "cayne" },
      },
      {
        id: "ir-mark-2007",
        label: "Tell the truth about the housing book",
        summary: "Drive to the houses. Mark the loans as what they are. Empty, or close.",
        kind: "hard",
        deltas: { irgc: 8, oil_pain: -8, drone_holes_known: 16, leader: -8 },
        ...drive("a street of empty houses with AAA on the tape"),
      },
    ],
    usChoices: [
      {
        id: "us-contained",
        label: "Say contained",
        summary: "1998 language. A sector, not the country. The models say the rest is fine.",
        kind: "ignore",
        historical: true,
        deltas: { media: 4, oil_pain: 8, cia: 4, street: -4 },
      },
      {
        id: "us-not-contained",
        label: "Say it is not contained",
        summary: "Name the book. The houses are the country. The 1998 sentence is a lie this time.",
        kind: "hard",
        deltas: { media: -6, oil_pain: -4, street: -8, cia: -4 },
        ...hindsight("You refused the 1998 sentence. The book was the country. You have the point. The book continues on."),
      },
    ],
    sources: ["Bernanke 2007 subprime contained", "August 2007 commercial paper freeze"],
    visibleFactions: ROOM,
    next: "bear-2008",
  },
  {
    id: "bear-2008",
    year: 2008,
    yearLabel: "Mar 2008",
    title: "The bank that said no",
    titleUs: "Bear Stearns",
    titleIran: "You are Bear",
    era: "housing",
    status: "playable",
    referee: {
      paragraphs: [
        "Bear Stearns. The bank that would not put money into the Long-Term Capital rescue in 1998. JPMorgan, the discount window, a weekend. The discount window is the Federal Reserve's emergency counter, where a bank can borrow cash overnight. The rhyme is the point: the bank that said no to the room dies on a Friday, and the window is the only buyer.",
      ],
      tags: ["LT"],
    },
    briefings: [
      {
        faction: "cia",
        audience: "us",
        rant: "Do Bear. Show that a weekend still works. Lehman is watching.",
      },
      {
        faction: "leader",
        audience: "iran",
        rant: "In 1998 we said no to the room. The room has a long memory.",
        face: "cayne",
      },
    ],
    situationUs:
      "Bear Stearns is dying on a Friday. JPMorgan wants a backstop from the Federal Reserve, a guarantee so it will buy. 1998 says a weekend still works: get them in a room, put in cash, call it private. Lehman is watching.",
    situationIran:
      "You are Jimmy Cayne. In 1998 you would not put money into the Greenwich rescue. The discount window, the Fed's emergency counter, is now the only buyer. The rhyme is the point.",
    iranChoices: [
      {
        id: "ir-bear-sold",
        label: "Sell to JPMorgan",
        summary: "A weekend price. The letterhead dies. The window backstops the buyer.",
        kind: "deal",
        historical: true,
        deltas: { irgc: 4, leader: -12, street: -4 },
        flags: { iran_face: "fuld" },
      },
      {
        id: "ir-bear-file",
        label: "File for bankruptcy",
        summary: "No weekend. Chapter 11 on a Friday. The rest of the street marks you at zero before Monday.",
        kind: "walk",
        deltas: { irgc: -16, leader: -16 },
        ...adapts("Monday", "You filed. The rest of the street marked you at zero before the open. The rail still has Lehman. AL on the hours, not on the hole."),
      },
    ],
    usChoices: [
      {
        id: "us-bear-backstop",
        label: "Backstop JPMorgan",
        summary: "A weekend. Again. Guarantee the buyer. Show that 1998 still works.",
        kind: "deal",
        historical: true,
        deltas: { cia: 6, media: -4, street: 2, irgc: 4 },
      },
      {
        id: "us-bear-no",
        label: "Let Bear file",
        summary: "No more rooms. Moral hazard: if you save them they build closer to the fire.",
        kind: "hard",
        deltas: { cia: -8, media: 6, irgc: -12, street: -10 },
        ...adapts("The rest of the street", "You let Bear go. The TED, bank fear, does the rest. Lehman is next week, not next year. History still rides, uglier."),
      },
    ],
    sources: ["Bear Stearns sale to JPMorgan March 2008"],
    visibleFactions: ROOM,
    next: "lehman-2008",
  },
  {
    id: "lehman-2008",
    year: 2008,
    yearLabel: "Sep 2008",
    title: "The book will not close",
    titleUs: "Lehman",
    titleIran: "You are Fuld",
    era: "housing",
    status: "playable",
    branchPoint: true,
    referee: {
      paragraphs: [
        "Lehman Brothers. Barclays wants a clean name, a buyer without the ugly bits. Washington will not do Bear twice in public. Counterparties are the other desks on the other side of your bets: if you die overnight, they all take a hole at once. This is the unwind that will not close. Moral hazard, the fear that saving someone teaches them to build closer to the fire, is the sentence in the room.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "cia",
        audience: "us",
        rant: "No more Bear. Moral hazard. The rest of the book is not Lehman. Contained, again, as a wish.",
      },
      {
        faction: "irgc",
        audience: "iran",
        rant: "There is no warehouse to drive to that closes this. The invoice is every desk. That is the theme.",
        face: "fuld",
      },
    ],
    situationUs:
      "Sunday. Barclays wants to buy Lehman if Washington backstops the ugly bits, the way it backstopped JPMorgan on Bear. No American backstop this time. Let Lehman file for bankruptcy, or do Bear again and own it in public. Moral hazard is the sentence. Counterparties are the country.",
    situationIran:
      "You are Richard Fuld. The room of fourteen banks is not coming. 1998 was a put for Greenwich, a backstop we called private. Houston went to jail. You are the country now. There is no warehouse that closes this.",
    iranChoices: [
      {
        id: "ir-lehman-file",
        label: "File for bankruptcy",
        summary: "Chapter 11. No weekend. The counterparties take the hole at once.",
        kind: "walk",
        historical: true,
        deltas: { irgc: -18, leader: -18, street: -12, oil_pain: 16 },
        flags: { iran_face: "blankfein" },
      },
      {
        id: "ir-lehman-beg",
        label: "Beg for Bear's weekend",
        summary: "Ask for the discount window. Ask for a buyer with a backstop. They did Bear. They may not do you.",
        kind: "soft",
        deltas: { leader: -8, cia: 4 },
        ...serve("No weekend", "You begged. They had done Bear. They would not do you. You file anyway. You serve a hope. History still rides."),
      },
    ],
    usChoices: [
      {
        id: "us-lehman-file",
        label: "Let Lehman file",
        summary: "Moral hazard. Saving Bear taught the next desk that a weekend would come. Not this time.",
        kind: "hard",
        historical: true,
        deltas: { cia: -4, media: 6, street: -14, oil_pain: 16, irgc: -10 },
      },
      {
        id: "us-lehman-save",
        label: "Do Bear again",
        summary: "Backstop a buyer. Own it in public. AIG is still Monday.",
        kind: "deal",
        deltas: { cia: 4, media: -10, street: 4, saudis: -8 },
        artisticLicense: "lehman-save",
        ...adapts(
          "AIG is still Monday",
          "You saved Lehman. AIG Financial Products is still the other book. The unwind still will not close. AL on Lehman living. Not on the hole. History still rides.",
        ),
      },
    ],
    artisticLicense: [
      {
        id: "lehman-save",
        title: "Saving Lehman",
        body: "History let Lehman file. This button keeps the name alive for a week. AIG is still the next card. Labelled AL.",
      },
    ],
    sources: ["Lehman bankruptcy 15 Sep 2008"],
    visibleFactions: ROOM,
    next: "aig-2008",
  },
  {
    id: "aig-2008",
    year: 2008,
    yearLabel: "Sep 2008",
    title: "The insurance was the book",
    titleUs: "AIG Financial Products",
    titleIran: "The side bet",
    era: "housing",
    status: "playable",
    referee: {
      paragraphs: [
        "AIG Financial Products. A credit default swap is a side bet that pays if the stack goes bad, sold as insurance. In 2005 the factory collected that premium and made more loans. AIG wrote a mountain of them on the AAA slices, including the second pile, the leftover stamped safe, without holding the cash an insurer would. The insurance was the leverage. Sarbanes-Oxley does not unwind a derivative. The discount window takes 79.9 percent of the firm.",
      ],
      tags: ["LT"],
    },
    briefings: [
      {
        faction: "irgc",
        audience: "us",
        rant: "If AIG Financial Products fails, every desk that bought the insurance is naked. This is Long-Term Capital with a country attached.",
      },
      {
        faction: "cia",
        audience: "iran",
        rant: "We cannot do Lehman twice in two days. The discount window is the buyer.",
      },
    ],
    situationUs:
      "AIG Financial Products wrote side bets, credit default swaps, that pay if the AAA stacks of home loans go bad. Take 79.9 percent of the firm through the discount window, or watch every desk that bought that insurance go at once. Lehman was yesterday.",
    situationIran:
      "You sold protection on a stack of houses. The houses are the invoice. Nobody drove there. The discount window, the Fed's emergency counter, is here. Counterparties are the country.",
    iranChoices: [
      {
        id: "ir-aig-window",
        label: "Take the discount window",
        summary: "Washington takes 79.9 percent. You live. The letterhead is no longer yours.",
        kind: "deal",
        historical: true,
        deltas: { irgc: 6, leader: -10, cia: 8 },
        flags: { iran_face: "blankfein" },
      },
      {
        id: "ir-aig-file",
        label: "File for bankruptcy",
        summary: "No window. Every desk that bought the insurance is naked on the same morning.",
        kind: "walk",
        deltas: { irgc: -22, street: -18 },
        ending: "seizure",
      },
    ],
    usChoices: [
      {
        id: "us-aig-take",
        label: "Take 79.9 percent",
        summary: "The discount window buys the firm. The insurance was the country.",
        kind: "hard",
        historical: true,
        deltas: { cia: 10, media: -8, street: -6, saudis: -6 },
      },
      {
        id: "us-aig-no",
        label: "Let AIG file",
        summary: "Lehman twice. Moral hazard, said twice, in two days.",
        kind: "soft",
        deltas: { street: -20, irgc: -16, media: 4 },
        ending: "hoover",
        resultTitle: "The insurance was the country",
        result:
          "AIG Financial Products was the counterparties. You let it file. History did not take this as a complete map. AL. Time travel is the honest button.",
      },
    ],
    sources: ["AIG rescue 16 Sep 2008"],
    visibleFactions: ROOM,
    next: "tarp-fail-2008",
  },
  {
    id: "tarp-fail-2008",
    year: 2008,
    yearLabel: "Sep 2008",
    title: "The House says no",
    titleUs: "TARP fails",
    titleIran: "The backstop is a vote",
    era: "housing",
    status: "playable",
    referee: {
      paragraphs: [
        "TARP, the Troubled Asset Relief Program, first vote. Washington wants to inject cash into banks, or buy the ugly assets, so the banks do not die this week. The House of Representatives says no. The book is now a roll call. Main street watches the ticker. A put, a government backstop, that has to pass a vote is a put that can arrive late.",
      ],
      tags: ["LT"],
    },
    briefings: [
      {
        faction: "saudis",
        audience: "us",
        rant: "My caucus will not vote a bailout. They drove to their districts. The districts have empty houses.",
      },
      {
        faction: "street",
        audience: "iran",
        rant: "They will vote again. They always vote again. The put is not dead. It is late.",
      },
    ],
    situationUs:
      "The first vote on TARP, the Troubled Asset Relief Program: inject cash into banks so they do not die this week. Your caucus hates it. The ticker will punish a no. History is a no, then a yes.",
    situationIran:
      "Washington just voted the government backstop down. The book does not care about the civics. It cares about Monday. A put that has to pass a vote can arrive late.",
    iranChoices: [
      {
        id: "ir-wait-tarp",
        label: "Wait for the second vote",
        summary: "The backstop is late, not dead. They will vote again. They always vote again.",
        kind: "soft",
        historical: true,
        deltas: { irgc: -6, street: -6, media: 4 },
      },
      {
        id: "ir-raise-capital",
        label: "Raise capital without them",
        summary: "Do not wait for the put. Sell shares, cut the book, live without the vote.",
        kind: "hard",
        deltas: { irgc: 4, leader: -8 },
        ...hindsight("You raised without TARP. The rest of the street waited. You have the point."),
      },
    ],
    usChoices: [
      {
        id: "us-tarp-no",
        label: "Vote no",
        summary: "The first roll call. Your caucus will not vote a bailout. The ticker will teach them.",
        kind: "hard",
        historical: true,
        deltas: { saudis: 6, my_party: 4, street: -8, media: 8, oil_pain: 8 },
      },
      {
        id: "us-tarp-yes-1",
        label: "Whip it through the first time",
        summary: "Do not wait for the crash to teach them. Pass TARP now.",
        kind: "deal",
        deltas: { saudis: -10, my_party: -8, street: 4 },
        ...hindsight("You whipped TARP through the first time. The ticker still hated you. You have the point."),
      },
    ],
    sources: ["TARP first House vote 29 Sep 2008"],
    visibleFactions: ROOM,
    next: "campaign-2008",
  },
  {
    id: "campaign-2008",
    year: 2008,
    yearLabel: "Sep 2008",
    title: "Country or ambition",
    titleUs: "The campaigns",
    titleIran: "The election is a ticker",
    era: "housing",
    status: "playable",
    electionYear: true,
    referee: {
      paragraphs: [
        "John McCain suspends his campaign and goes to Washington. Barack Obama looks at the polls and keeps campaigning. Presidents have to deal with more than one thing. That is the sentence. Country over ambition is the offramp. Historical for the winner is keep campaigning. Obama still sits in January. TARP still happens. You have the point if you suspend.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "media",
        audience: "us",
        rant: "McCain looks serious. Obama looks like a president who can walk and chew. The polls like the chew.",
      },
      {
        faction: "street",
        audience: "iran",
        rant: "They will campaign. The book does not vote.",
      },
    ],
    situationUs:
      "You are still Bush. The nominees are the country's other desk this week. John McCain wants to suspend his campaign and go to Washington. Barack Obama looks at the polls and wants to keep campaigning. Historical for the winner is keep campaigning. Country over ambition is the offramp. You still sit until January. TARP still happens.",
    situationIran: "Washington is having a civics play about whether to pause a campaign. Your book is still open. TARP, the cash injection, is still a second vote.",
    iranChoices: [
      {
        id: "ir-ignore-campaign",
        label: "Ignore the campaigns",
        summary: "The book is the job. Politicians campaign. You have a hole.",
        kind: "ignore",
        historical: true,
        deltas: { media: 2 },
      },
      {
        id: "ir-pause-deal",
        label: "Pause the book for the vote",
        summary: "Stop making new bets while they pass TARP. Let the civics finish.",
        kind: "soft",
        deltas: { leader: -4, cia: 2 },
        ...hindsight("You paused origination while they voted. The rest of the street did not. You have the point."),
      },
    ],
    usChoices: [
      {
        id: "us-keep-campaign",
        label: "Keep campaigning",
        summary: "Presidents juggle. Obama's move. The polls like a candidate who can walk and chew.",
        kind: "hard",
        historical: true,
        deltas: { media: 6, my_party: 4, opposing_party: -2 },
      },
      {
        id: "us-suspend",
        label: "Suspend and go to Washington",
        summary: "Country over ambition. McCain's move. You still sit until January. TARP still happens.",
        kind: "deal",
        deltas: { media: -4, street: 4, saudis: 4 },
        ...hindsight(
          "You suspended. McCain's move. Country over ambition. Obama still sits in January. TARP still happens. You have the point.",
        ),
      },
    ],
    sources: ["McCain suspends campaign Sep 2008", "Obama keeps campaigning"],
    visibleFactions: ROOM,
    next: "tarp-pass-2008",
  },
  {
    id: "tarp-pass-2008",
    year: 2008,
    yearLabel: "Oct 2008",
    title: "The pause",
    titleUs: "TARP passes",
    titleIran: "The window is the desk",
    era: "housing",
    status: "playable",
    referee: {
      paragraphs: [
        "TARP, the Troubled Asset Relief Program, passes on the second vote. Capital injections: Washington forces cash into the big banks. The discount window has the real power. This is not a cleanup. It is a pause. Sarbanes-Oxley did not do this. The Resolution Trust Corporation was a cleanup: seize, sell in public, take years, some jail. This is a hold. The letterhead stays.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "cia",
        audience: "us",
        rant: "Force the capital into the big nine. Do not ask. The RTC took years. We have days.",
      },
      {
        faction: "leader",
        audience: "iran",
        rant: "You will take the money. You will say you did not need it. The window has the guns.",
        face: "blankfein",
      },
    ],
    situationUs:
      "Second vote. Pass TARP. Inject capital into the big banks. Do not pretend this is the Resolution Trust Corporation. The RTC sold wreckage in daylight over years. This is cash this week so the desks do not die. A pause, not a cleanup.",
    situationIran:
      "They will make you take the money. The letterhead stays. The real power moved to the discount window. You will say you did not need it.",
    iranChoices: [
      {
        id: "ir-take-tarp",
        label: "Take the capital",
        summary: "The discount window. You live. You will say you did not need it.",
        kind: "deal",
        historical: true,
        deltas: { irgc: 10, leader: -4, cia: 6, street: -4 },
        flags: { iran_face: "blankfein" },
      },
      {
        id: "ir-refuse-tarp",
        label: "Refuse the capital",
        summary: "Pride. The letterhead does not take charity. They will force it anyway.",
        kind: "hard",
        deltas: { leader: 4, irgc: -8 },
        ...serve("You take it anyway", "They force the capital. You serve the window. History still rides."),
      },
    ],
    usChoices: [
      {
        id: "us-tarp-pass",
        label: "Pass TARP and inject the cash",
        summary: "A pause, not a cleanup. The letterheads stay. The RTC this is not.",
        kind: "hard",
        historical: true,
        deltas: { cia: 8, saudis: -4, street: -6, media: -4, oil_pain: -6 },
      },
      {
        id: "us-rtc-again",
        label: "Stand up an RTC for the houses",
        summary: "Cleanup, do not pause. Seize, sell in daylight, take years. Congress will hate it.",
        kind: "deal",
        deltas: { europeans: 10, street: -10, saudis: -12, future_irgc_grudge: 20 },
        ...hindsight("You tried to unwind the houses in daylight, like 1989. Congress hated it. You have the point. TARP still happens."),
      },
    ],
    sources: ["TARP signed 3 Oct 2008", "Capital Purchase Program"],
    visibleFactions: ROOM,
    next: "obama-2009",
  },
  {
    id: "obama-2009",
    year: 2009,
    yearLabel: "2009",
    title: "Stress tests",
    titleUs: "You sit",
    titleIran: "The window stays",
    era: "housing",
    status: "playable",
    electionYear: true,
    referee: {
      paragraphs: [
        "Obama sits. Stress tests: Washington writes an exam that asks what happens if house prices fall, and the banks take it. The cubicle, again, with a new name, in daylight. Some new capital. Not much jail. The houses are still the book. Main street wanted the warehouse.",
      ],
      tags: ["LT"],
    },
    briefings: [
      {
        faction: "cia",
        audience: "us",
        rant: "Publish the stress tests. Make the cubicle a show of force. Do not drive to every house.",
      },
      {
        faction: "irgc",
        audience: "iran",
        rant: "You passed. Of course you passed. Accountants wrote the exam for accountants.",
      },
    ],
    situationUs:
      "You sit. Stress tests: Geithner at Treasury writes an exam for the banks, what if house prices fall, and publishes the answers. The country wants hangings and got a spreadsheet.",
    situationIran:
      "The exam is a cubicle. You will pass. Accountants wrote it. Accountants take it. Main street wanted someone to drive to the warehouse.",
    iranChoices: [
      {
        id: "ir-pass-stress",
        label: "Pass the stress test",
        summary: "The cubicle exam. Accountants wrote it. Accountants take it. Of course you pass.",
        kind: "deal",
        historical: true,
        deltas: { irgc: 6, street: -4, venezuela: 4 },
      },
      {
        id: "ir-show-houses",
        label: "Show them the houses",
        summary: "Drive. The REO list, the houses you already took back, has addresses.",
        kind: "hard",
        deltas: { drone_holes_known: 10, street: 4, leader: -6 },
        ...drive("the REO list"),
      },
    ],
    usChoices: [
      {
        id: "us-stress",
        label: "Publish the stress tests",
        summary: "A cubicle, in daylight. Some capital. Not much jail. The country wanted hangings.",
        kind: "deal",
        historical: true,
        deltas: { cia: 6, media: 4, street: -2 },
      },
      {
        id: "us-drive-reo",
        label: "Make them drive the foreclosures",
        summary: "The address on the note. The houses the banks already took back.",
        kind: "hard",
        deltas: { drone_holes_known: 12, street: 4, irgc: 4 },
        ...drive("the foreclosure list"),
      },
    ],
    sources: ["SCAP stress tests 2009"],
    visibleFactions: ROOM,
    next: "jail-2011",
  },
  {
    id: "jail-2011",
    year: 2011,
    yearLabel: "2011",
    title: "Nobody went to jail",
    titleUs: "The empty dock",
    titleIran: "The cup",
    era: "housing",
    status: "playable",
    referee: {
      paragraphs: [
        "Keating went to jail. Skilling went to jail. 2011: the housing book did not. The cubicle prosecuted nobody who designed the factory. The Resolution Trust Corporation was a cleanup. TARP was a pause. The pause held. Main street still has the houses. You cannot jail a country. That is the sentence. It is also an excuse.",
      ],
      tags: ["LT", "IT"],
    },
    briefings: [
      {
        faction: "street",
        audience: "us",
        rant: "Keating did time. This book was the country. You cannot jail a country. That is the sentence. It is also an excuse.",
      },
      {
        faction: "leader",
        audience: "iran",
        rant: "You are still the desk. The window saved the letterhead. The warehouse was always empty.",
        face: "blankfein",
      },
    ],
    situationUs:
      "The cup. File upstairs against the people who designed the factory, or hold the rail. Historical is hold. Keating and Skilling were people. This was a system. That is Irish true, an incentive reading, and a dodge.",
    situationIran:
      "You are still sitting. The 401k, the retirement account on main street, is not. The audit passed until it could not. Nobody is coming for the desk. Keating went to jail. Skilling went to jail. You did not.",
    iranChoices: [
      {
        id: "ir-hold-2011",
        label: "Hold the desk",
        summary: "The Street continues. The letterhead survived. The warehouse was always empty.",
        kind: "soft",
        historical: true,
        deltas: { leader: 4, street: -6 },
      },
      {
        id: "ir-walk-2011",
        label: "Walk",
        summary: "Leave the letterhead. A stick figure sits. The machinery grinds on.",
        kind: "walk",
        deltas: { leader: -20, street: 4 },
        ...moral("You walked. The desk stayed. It is a moral victory. The machinery grinds on."),
      },
    ],
    usChoices: [
      {
        id: "us-hold-2011",
        label: "Hold the rail",
        summary: "No perp walk for a system. Keating was a person. This was a country.",
        kind: "ignore",
        historical: true,
        deltas: { street: -4, media: -4, my_party: 4 },
      },
      {
        id: "us-file-upstairs",
        label: "File upstairs",
        summary: "Treat the factory like Keating. The dock does not have to be empty.",
        kind: "hard",
        deltas: { street: 8, media: 8, irgc: -6, saudis: -8 },
        ...hindsight("You filed upstairs. The dock was not empty. History left it empty. You have the point. The book continues on."),
      },
    ],
    sources: ["FCIC report 2011", "S&L vs 2008 prosecution comparison"],
    visibleFactions: ROOM,
    next: null,
  },
  {
    id: "three-six-three",
    year: 1966,
    yearLabel: "1966",
    title: "3-6-3",
    era: "sl",
    status: "playable",
    secret: true,
    referee: {
      paragraphs: [
        "It is good to be a savings and loan. You pay depositors 3 percent. You make thirty-year home loans at 6 percent. You count the money on the golf course by 3 in the afternoon. People in the business called that 3-6-3. This is the world Paul Volcker is about to kill. The cubicle is a teller window. The invoice is a house someone lives in.",
      ],
      tags: ["LT", "AL"],
    },
    briefings: [
      {
        faction: "irgc",
        audience: "iran",
        rant: "The book is a mortgage. Drive to it and a family opens the door. That will not last.",
      },
    ],
    situation:
      "The boring bank. Pay 3, lend 6, golf by 3. You can stay here. History will not. Volcker is coming, and with him the duration gap: money that can leave tomorrow, lent for thirty years.",
    iranChoices: [
      {
        id: "ir-stay-363",
        label: "Stay boring",
        summary: "Golf at 3. The invoice is a house someone lives in.",
        kind: "walk",
        deltas: {},
        ending: "boring_bank",
      },
      {
        id: "ir-back-1979",
        label: "Forward to 1979",
        summary: "The rate hike is coming. The 3-6-3 world ends.",
        kind: "hard",
        historical: true,
        deltas: {},
        nextCard: "volcker-1979",
      },
    ],
    usChoices: [
      {
        id: "us-stay-363",
        label: "Leave the savings and loans alone",
        summary: "The old cap on what they can pay a depositor still holds. Golf at 3.",
        kind: "walk",
        deltas: {},
        ending: "boring_bank",
      },
      {
        id: "us-back-1979",
        label: "Forward to 1979",
        summary: "Volcker is coming. Inflation first.",
        kind: "hard",
        historical: true,
        deltas: {},
        nextCard: "volcker-1979",
      },
    ],
    sources: ["3-6-3 rule of thumb"],
    visibleFactions: ["irgc", "street", "cia"],
    next: "volcker-1979",
  },
];

const BY_ID = new Map(CARDS.map((c) => [c.id, c]));

export function cardById(id: string): Card | undefined {
  return BY_ID.get(id);
}

export function playableCards(): readonly Card[] {
  return CARDS.filter((c) => !c.secret);
}

export { CARDS };
