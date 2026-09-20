import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { TrainViewModel } from "./TrainViewModel.ts";
import { memoryMuseumStore, memoryFinishedStore } from "../model/exits.ts";
import { CARDS } from "../model/cards.ts";

describe("TrainViewModel", () => {
  it("presents Washington 1979 without labelling historical", () => {
    const vm = new TrainViewModel("us", "D", undefined, { museum: memoryMuseumStore() });
    const ui = vm.getState();
    assert.equal(ui.card.id, "volcker-1979");
    assert.ok(ui.choices.length >= 2);
    assert.equal(
      ui.choices.some((c) => c.label.toLowerCase().includes("historical")),
      false,
    );
    assert.equal(ui.leader.id, "carter");
    assert.ok(ui.bars.some((b) => b.id === "irgc"));
    assert.ok(ui.clocks.some((c) => c.id === "holes"));
  });

  it("presents the Street as a thrift in 1979", () => {
    const vm = new TrainViewModel("iran", "R", undefined, { museum: memoryMuseumStore() });
    const ui = vm.getState();
    assert.equal(ui.face, "thrift");
    assert.match(ui.leader.youAre, /thrift/i);
  });

  it("a hindsight click ticks Washington on the scoreboard", () => {
    const vm = new TrainViewModel("us", "D", "eddie-1987", { museum: memoryMuseumStore() });
    assert.equal(vm.getState().museum.usFound, 0);
    vm.choose("us-drive-eddie");
    const ui = vm.getState();
    assert.equal(ui.lastResult?.kind, "hindsight");
    assert.equal(ui.museum.usFound, 1);
    assert.ok(ui.museum.usNames.length === 1);
  });

  it("a Street walk ticks moral victories, not Washington", () => {
    const vm = new TrainViewModel("iran", "R", "garn-1982", { museum: memoryMuseumStore() });
    vm.choose("ir-close-self");
    const ui = vm.getState();
    assert.equal(ui.lastResult?.kind, "moral");
    assert.ok(ui.museum.moralFound >= 1);
    assert.equal(ui.museum.usFound, 0);
  });

  it("the letter waits until both chairs have finished the cup", () => {
    const finished = memoryFinishedStore();
    const museum = memoryMuseumStore(["us-back-levitt", "us-close-now", "us-drive-eddie"]);
    const first = new TrainViewModel("us", "D", "jail-2011", { museum, finished });
    first.hydrateMuseum();
    first.choose("us-hold-2011");
    const waiting = first.getState();
    assert.equal(waiting.phase, "ended");
    assert.equal(waiting.letter, null);
    assert.equal(waiting.otherChair, "iran");

    const second = new TrainViewModel("iran", "R", "jail-2011", { museum, finished });
    second.hydrateMuseum();
    second.choose("ir-hold-2011");
    const both = second.getState();
    assert.ok(both.letter);
    assert.equal(both.otherChair, null);
    const ids = both.letter?.asks.map((a) => a.id) ?? [];
    assert.equal(ids.includes("levitt"), true);
    assert.equal(ids.includes("close-now"), true);
    assert.equal(ids.includes("invoice"), true);

    const history = new TrainViewModel("us", "D", "jail-2011", {
      museum: memoryMuseumStore(),
      finished: memoryFinishedStore(["iran"]),
    });
    history.hydrateMuseum();
    history.choose("us-hold-2011");
    assert.equal(history.getState().letter?.asks.length, 0);
  });

  it("a grave is not a letter", () => {
    const vm = new TrainViewModel("iran", "R", "volcker-1979", { museum: memoryMuseumStore(["us-back-levitt"]) });
    vm.hydrateMuseum();
    assert.equal(vm.getState().letter, null);
  });

  it("hash-swaps two doors from the card id, and does not stamp historical", () => {
    const firstOf = (id: string) => {
      const vm = new TrainViewModel("us", "D", id, { museum: memoryMuseumStore() });
      const ui = vm.getState();
      assert.equal(
        ui.choices.some((c) => c.label.toLowerCase().includes("historical")),
        false,
        id,
      );
      return ui.choices.map((c) => c.id);
    };
    assert.deepEqual(firstOf("volcker-1979"), firstOf("volcker-1979"));
    const samples = CARDS.filter((c) => !c.secret).slice(0, 12).map((c) => c.id);
    let swapped = 0;
    let authored = 0;
    for (const id of samples) {
      const card = CARDS.find((c) => c.id === id);
      const hist = card?.usChoices.find((c) => c.historical)?.id;
      if (!hist) continue;
      const first = firstOf(id)[0];
      if (first === hist) authored += 1;
      else swapped += 1;
    }
    assert.ok(swapped > 0, "some cards should swap doors");
    assert.ok(authored > 0, "some cards should keep authored order");
  });
});
