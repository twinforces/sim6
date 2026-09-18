import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { glossaryById, linkify } from "./glossary.ts";

describe("glossary", () => {
  it("marks the cubicle and Enron in the lesson", () => {
    const parts = linkify("Enron passed every audit. Leave the cubicle. Drive to the SPE.");
    const ids = parts.map((p) => p.id).filter(Boolean);
    assert.equal(ids.includes("enron"), true);
    assert.equal(ids.includes("cubicle"), true);
  });

  it("explains the book and the Fed", () => {
    const book = glossaryById("irgc");
    assert.match(book?.definition ?? "", /positions/);
    const fed = glossaryById("cia");
    assert.match(fed?.definition ?? "", /window/);
  });
});
