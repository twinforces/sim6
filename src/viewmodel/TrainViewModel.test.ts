import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { TrainViewModel } from "./TrainViewModel.ts";
import { memoryMuseumStore } from "../model/exits.ts";

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

  it("the cup drafts a letter from found offramps, not from riding history", () => {
    const seeded = new TrainViewModel("us", "D", "jail-2011", {
      museum: memoryMuseumStore(["us-back-levitt", "us-close-now", "us-drive-eddie"]),
    });
    seeded.hydrateMuseum();
    seeded.choose("us-hold-2011");
    const withFinds = seeded.getState();
    assert.equal(withFinds.phase, "ended");
    assert.ok(withFinds.letter);
    const ids = withFinds.letter?.asks.map((a) => a.id) ?? [];
    assert.equal(ids.includes("levitt"), true);
    assert.equal(ids.includes("close-now"), true);
    assert.equal(ids.includes("invoice"), true);

    const history = new TrainViewModel("us", "D", "jail-2011", { museum: memoryMuseumStore() });
    history.choose("us-hold-2011");
    assert.equal(history.getState().letter?.asks.length, 0);
  });

  it("a grave is not a letter", () => {
    const vm = new TrainViewModel("iran", "R", "volcker-1979", { museum: memoryMuseumStore(["us-back-levitt"]) });
    vm.hydrateMuseum();
    assert.equal(vm.getState().letter, null);
  });
});
