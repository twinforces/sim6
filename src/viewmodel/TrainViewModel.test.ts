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
});
