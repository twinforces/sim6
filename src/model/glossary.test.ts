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

  it("says the ratings firms get paid by the people selling the product", () => {
    const ratings = glossaryById("venezuela");
    assert.match(ratings?.definition ?? "", /paid by the people selling the product they are rating/);
    const parts = linkify("The credit-rating firm stamps the stack AAA.");
    const ids = parts.map((p) => p.id).filter(Boolean);
    assert.equal(ids.includes("venezuela"), true);
  });

  it("teaches a hedge as both legs, and does not steal hedge fund", () => {
    const hedge = glossaryById("a-hedge");
    assert.match(hedge?.definition ?? "", /Both sides/);
    const hair = glossaryById("haircut");
    assert.match(hair?.definition ?? "", /Extra collateral/);
    const parts = linkify("A hedge fund is allowed to stop being a hedge. They paid no haircut.");
    const ids = parts.map((p) => p.id).filter(Boolean);
    assert.equal(ids.includes("hedge-fund"), true);
    assert.equal(ids.includes("a-hedge"), true);
    assert.equal(ids.includes("haircut"), true);
  });

  it("says Long-Term paid no haircut, and names the borrowed pile versus the side bets", () => {
    const hair = glossaryById("haircut");
    assert.match(hair?.definition ?? "", /Zero/);
    assert.match(hair?.definition ?? "", /refuse/);
    const ltcm = glossaryById("ltcm");
    assert.match(ltcm?.definition ?? "", /100 billion/);
    assert.match(ltcm?.definition ?? "", /trillion/);
  });

  it("teaches a bond of bonds without stealing a hedge", () => {
    const cdo = glossaryById("cdo");
    assert.match(cdo?.definition ?? "", /bond of bonds/);
    const parts = linkify("Slice it. Roll the leftover. People are shorting the stack.");
    const ids = parts.map((p) => p.id).filter(Boolean);
    assert.equal(ids.includes("leftover"), true);
    assert.equal(ids.includes("shorting"), true);
  });

  it("does not steal shorting when the shorts sit with the longs", () => {
    const parts = linkify("The shorts sat with the longs. People are shorting the stack.");
    const ids = parts.map((p) => p.id).filter(Boolean);
    assert.equal(ids.includes("shorting"), true);
    assert.equal(ids.includes("a-hedge"), true);
  });

  it("maps HUD clocks to teaching entries", () => {
    assert.equal(glossaryForClock("liberals")?.id, "duration-gap");
    assert.equal(glossaryForClock("holes")?.id, "cubicle");
    assert.equal(glossaryForClock("nuke")?.id, "leverage");
    assert.equal(glossaryForClock("missiles")?.id, "ted");
  });
});
