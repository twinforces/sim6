import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { applyChoice, newGame } from "./engine.ts";
import { detectExits, EXITS } from "./exits.ts";

describe("exits", () => {
  it("catalog is closed", () => {
    assert.ok(EXITS.length > 5);
    const ids = EXITS.map((e) => e.id);
    assert.equal(new Set(ids).size, ids.length);
  });

  it("1982 close-now is a Washington offramp", () => {
    let s = newGame({ chair: "us", party: "R", cardId: "garn-1982" });
    s = applyChoice(s, "us-close-now");
    assert.equal(detectExits(s).includes("us-close-now"), true);
  });
});
