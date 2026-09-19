import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { asksFor, CODIFY_ASKS, draftLetter, LETTER_HOST, unknownCodifyExits } from "./letter.ts";

describe("congress letter", () => {
  it("every codify exit is a real offramp", () => {
    assert.deepEqual(unknownCodifyExits(), []);
    assert.ok(CODIFY_ASKS.length >= 8);
  });

  it("collapses warehouse drives into one audit standard", () => {
    const asks = asksFor(new Set(["us-drive-eddie", "ir-drive-spe", "us-drive-reo"]));
    assert.equal(asks.length, 1);
    assert.equal(asks[0]?.id, "invoice");
  });

  it("Levitt is a bill, a moral walk is not", () => {
    const asks = asksFor(new Set(["us-back-levitt", "ir-close-self", "nukes"]));
    assert.equal(asks.map((a) => a.id).join(), "levitt");
  });

  it("drafts the user's closer and host", () => {
    const text = draftLetter({
      asks: asksFor(new Set(["us-back-levitt", "us-close-now"])),
      signer: "Grumpy Tech Bro",
      addressee: "Senator Wyden",
    });
    assert.match(text, /^Dear Senator Wyden,/);
    assert.match(text, new RegExp(LETTER_HOST));
    assert.match(text, /Auditor independence/);
    assert.match(text, /Close insolvent books now/);
    assert.match(text, /Prevention is worth trillions in cure, I guess/);
    assert.match(text, /especially if they do not write their congressman/);
    assert.match(text, /Sincerely,\nGrumpy Tech Bro$/);
    assert.equal(text.includes("—"), false);
  });

  it("empty museum is nothing to mail", () => {
    assert.deepEqual(asksFor(new Set()), []);
  });
});
