import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { glossaryById, glossaryForClock, linkify } from "./glossary.ts";

describe("glossary", () => {
  it("marks the cubicle and Enron in the lesson", () => {
    const parts = linkify("Enron passed every audit. Leave the cubicle. Drive to the SPE.");
    const ids = parts.map((p) => p.id).filter(Boolean);
    assert.equal(ids.includes("enron"), true);
    assert.equal(ids.includes("cubicle"), true);
    assert.equal(ids.includes("spe"), true);
  });

  it("explains the book and the Fed", () => {
    const book = glossaryById("irgc");
    assert.match(book?.definition ?? "", /positions/);
    const fed = glossaryById("cia");
    assert.match(fed?.definition ?? "", /window/);
  });

  it("teaches 3-6-3 and the duration gap as stories, not nicknames", () => {
    const rule = glossaryById("three-six-three");
    assert.match(rule?.definition ?? "", /golf course/);
    assert.match(rule?.definition ?? "", /3 percent/);
    const gap = glossaryById("duration-gap");
    assert.match(gap?.definition ?? "", /thirty years/);
    const parts = linkify("People in the business called that 3-6-3. The duration gap was already there.");
    const ids = parts.map((p) => p.id).filter(Boolean);
    assert.equal(ids.includes("three-six-three"), true);
    assert.equal(ids.includes("duration-gap"), true);
  });

  it("does not treat Volcker as just another name for the Fed", () => {
    const parts = linkify("Volcker at the Federal Reserve wants to hike.");
    const ids = parts.map((p) => p.id).filter(Boolean);
    assert.equal(ids.includes("volcker"), true);
    assert.equal(ids.includes("cia"), true);
  });

  it("maps HUD clocks to teaching entries", () => {
    assert.equal(glossaryForClock("liberals")?.id, "duration-gap");
    assert.equal(glossaryForClock("holes")?.id, "cubicle");
    assert.equal(glossaryForClock("nuke")?.id, "leverage");
    assert.equal(glossaryForClock("missiles")?.id, "ted");
  });
});
