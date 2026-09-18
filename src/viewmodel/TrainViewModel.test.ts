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
});
