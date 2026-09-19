# CHANGELOG

Serious work. Source of truth for what we tried, including what not to do.

## 2026-09-18 Lowenstein, not memory

What: The book file is here. No haircut, not skinny. $100 billion of assets, almost all borrowed, plus more than a trillion of side bets. The consortium salary is $250,000 for the partners as a group, stay three years. Not one principal at $300,000. Drop DK on the paycheck.

Why: User attached When Genius Failed. Memory had the shape. The file has the numbers. Meriwether was the public face and the financing reason, not only the Nobels. Merrill saw only one side.

How: 1997, 1998, GLBA, glossary, receipts. Tests still ride `ir-stop-hedge` and `us-private-1997`.

### What did not work
Leaving "skinny haircut" as a glossary alias. The book joke is No-Haircut Capital Management. Zero.

## 2026-09-18 The Big Short: bonds of bonds

What: Bundling mortgages seemed like genius because people live in the house. Then a bond of bonds. Slice it: good, medium, leftover. Roll the leftover, stamp AAA. Shorting the stack pays a premium, which funds more loans. Same pile. New side bets.

Why: User memory from Lewis. 2003 is the live-in-the-house genius. 2005 is the machine.

How: New card `slices-2005`. Glossary for leftover, shorting, mortgage bond. AIG is the mountain, not the first lesson.

## 2026-09-18 LTCM: split legs, 40 percent, trillion, $300k


What: 1997 is the riddle. 40 percent a year, no place to put it, stay a hedge or split the long and the short. 1998 is the crater. A trillion in positions. Fold and the Street folds. One principal names $300,000 a year to unwind. The Street pays. They do not know the book.

Why: User memory from When Genius Failed. Haircut, both legs, doubling, the hostage. We do not have the book file. DK on the paycheck. LT that they paid.

How: New card `ltcm-1997`. Glossary for a hedge and a haircut. 2004 CSE rhymes: same courtesy, whole firm.

### What did not work
Aliasing "a hedge" without "a hedge fund" as the longer needle. Hover would have stolen the fund.

## 2026-09-18 Ratings get paid by the seller. LTCM is a story.


What: Issuer-pays is the Ratings bar, not a trailing clause. The 1998 card is the Lowenstein story: Salomon, Nobels, pennies on $30 of debt per $1, Russia, Buffett's fax, Bear's no, then the room.

Why: User correction on who pays the raters. LTCM was still a glossary dump. When Genius Failed is not in the sandbox. The beats are.

How: Glossary, bar, 2003 housing card, Greenwich 1995 as the door, 1998 as the movie. No book file here. Wikipedia plus the Fed history essay for dates. The book remains the book.

### What did not work
Aliasing "Greenwich" to the whole LTCM entry. 1995 uses the town as a destination. Hover would have spoiled the weekend.

## 2026-09-18 Copy teaches, then hover


What: Every finance term is a story on first use. Hover catches the repeats. 3-6-3 is pay depositors 3, lend at 6, golf by 3, then the nickname.

Why: Playtesting. Most people do not know the terms. Pithy copy read as haiku. This is harder than Iran History because there are fewer proper names.

How: Situations, briefings, buttons, plates, faction bars, HUD clocks, and glossary paragraphs all teach before they nickname. Volcker is a person, not another name for the Fed. SPE is a paper company, not a synonym for Enron.

### What did not work
Leaving "mark the" as a glossary alias. It would have hovered the 1979 duration card as Enron accounting.

## 2026-09-18 Title: Past Performance. Museum derived from the cards.

What: Product title is Past Performance. Street / Washington / moral victories tick from the actual hindsight and walk buttons, not a short named list.

Why: Playtesting. The overlay said you have the point. The scoreboard did not move. Unfound names staying off the chrome is the hunt. Silent finds are a bug.

How: `exits.ts` catalogs every `overlay: hindsight` as peace and every `overlay: moral` as a walk. Election loss is still the memoir.

### What did not work
A closed list of a dozen named offramps while the rail had thirty hindsight buttons. The overlay and the museum have to be the same hunt.

## 2026-09-18 Playable rail, cubicle thesis

What: Hard to Unwind is a playable briefing. Washington or the Street. 1979-2011. Hindsight overlay. Drive-to-the-invoice offramps. Quiet years 1995 / 2004 / 2006 wired. Dual plate is year-true (Fastow, the room, RTC after FIRREA, the window). Finance portraits replace Iran advisors. All faction bars show. Cubicle faith is always a clock.

Why: User said go. Enron and Crazy Eddie passed every audit. Accountants lie to accountants. Quiet years still get a sentence.

How: Forked the Iran engine. Relabelled chairs in the view. Nested unwind: RTC, LTCM room, Enron/SOX, then 2008 will not close. Museum offramps renamed off the Iran leftovers.

Hash: `6516e25` Playable rail. Cubicle thesis. Quiet years 1995/2004/2006.

### What did not work

- Empty-replace of `PlayView.tsx` and `TrainViewModel.ts`. Files were still untracked, so `git checkout` was dead. Restored from `vendor/iranhistory`, then re-patched. Standing rule: never empty-replace a source file. Git is the restore. Commit after each beat.
- Iran leftover museum ids (`hamas-us`, `hinterland`) survived the first playable pass. Renamed in `6516e25`.
- PlayView used to hardcode Washington as R. Carter is D. Engine already seats the year. View must not invent the party.

## 2026-09-18 Poll called, Enron folded in

What: Hard to Unwind is the sim (4 of 8). Enron/SOX is a middle movie, not a third chair. Partition and Memorandum shelved.

Why: User asked if Enron fits. It does, as the SOX poison between Greenwich and the houses. Single-firm fraud is not a sector unwind. That is why it earns the slot: the book *was* unwound, and 2008 still will not close.

How: `docs/NEXT-SIM.md` rewritten as the finance freeze. `docs/SHELVED.md` holds the other two. README and AGENTS.project.md stop saying the poll is open.

Hash: `13696aa` Poll called. Hard to Unwind. Enron is the middle movie.

## 2026-09-16 `twinforces/sim6` created

What: New public repo https://github.com/twinforces/sim6 . Working name. Paper freeze only.

Why: Git is the restore point. Do not rewrite `iranhistory`. This sandbox had no git.

How: Create empty repo on the twinforces user account (not an org). First commit is README, AGENTS.project.md, docs freeze, gitignore. Push `origin main`.

Hash: `d46d0f4` Paper freeze for sim6. Poll still open.

## 2026-09-16 Architect session (poll still open)

### What
Froze three Train Ride-shaped candidates off GrumpyTechBro's poll, then corrected the freeze from user notes.

### Why
Same model as Train Ride to War: one chair, face changes, two buttons, golden path is the file, dual plate, receipts. User asked /plan, then wait.

### How
Read `twinforces/iranhistory` (engine, graves, overlays, 20/20 listens, author's note). Loaded Ringmaster. Poll options were not on the tweet object the first two passes, so the Architect invented Afghanistan, Euro, COVID as bake-off fillers.

### What did not work
Inventing Afghanistan / Euro / COVID. The poll was the field. User called it. Afghanistan is out.

### Corrections
- Finance: add S&L, keep LTCM as the middle movie, 2007 as the book that will not close. Theme is unwind.
- Offramps score a point and do not steal the rail. McCain suspend vs Obama keep campaigning is the example card.
- Partition: Operation SIG (user: Project SIG) as the poison still in the water. Saudi TV as a second megaphone.
- Memorandum: US color-revolution briefing on Maidan, Baker "not one inch" as the promise Moscow heard, Holodomor as why Kyiv flies to Washington for NATO.

### Sources touched
Pacepa on Operation SIG (defector; tag DK on headcounts, LT that he published and that UN 3379 happened). Baker-Gorbachev 9 Feb 1990 (National Security Archive). Nuland-Pyatt leak (BBC/Reuters; US did not deny the call).
