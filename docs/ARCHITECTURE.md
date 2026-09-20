# Architecture

The app is the briefing. The engine is a state machine.

## Why this split

Same as Train Ride. Cards declare. The engine applies. The view does not add 8 to a bar.

| Layer | Path | Allowed to |
| --- | --- | --- |
| Model | `src/model` | Own GameState. Apply deltas. Fire graves. Snapshot for time travel. |
| ViewModel | `src/viewmodel` | Turn GameState into labels, grey buttons, visible bars. |
| View | `src/view` | Paint. Call VM commands. Never move a number. |

Fork tax: chair id `us` is Washington, `iran` is the Street. Faction `irgc` is the book. `cia` is the Fed. `saudis` is Congress. `europeans` is FSLIC/FDIC. `venezuela` is ratings. `liberals` clock is the duration gap. `nuke_breakout_months` is leverage. `oil_pain` is housing. `drone_holes_known` is cubicle faith. Relabel in the view. Do not rename the ids.

## Rail

Cards are data. `historical: true` is never labelled and never a grave. Hindsight scores an offramp and keeps the chair. Moral leaves; a stick figure sits; the Street continues. Quiet years still get a sentence.

Golden path tests both desks in `src/model/engine.test.ts`.

## Graves

Street: the book. Soft plus book under 35, or book under 20, is seizure. Desk sideline twice.

Washington: election cards. Opposing ahead by 10, or a tie with bad media / red housing.

## Museum

Offramps are found-once chrome in the ViewModel, persisted in localStorage (`htu-exits`), not GameState. Unfound names stay off the meters.

## Play

Chair first. Then the situation, two buttons, then advisors. Dual plate is who has the cash: Fastow on Lay, the room on Meriwether in 1998, RTC after FIRREA, the window in 2008. You never sit the other desk.

Copy freeze: `docs/NEXT-SIM.md`.
