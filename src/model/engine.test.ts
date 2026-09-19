import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { applyChoice, newGame, overlayKindOf, iranFaceOf, currentCard } from "./engine.ts";
import { CARDS, FIRST_CARD_ID, cardById } from "./cards.ts";
import { detectExits, EXITS } from "./exits.ts";

describe("hard to unwind engine", () => {
  it("Washington golden path reaches 2011 without a grave", () => {
    let s = newGame({ chair: "us", party: "D" });
    assert.equal(s.cardId, FIRST_CARD_ID);
    const historical = [
      "us-hike",
      "us-raise-cap",
      "us-garn",
      "us-watch-lincoln",
      "us-trust-eddie",
      "us-forbear",
      "us-rtc",
      "us-rtc-close",
      "us-private-1997",
      "us-room",
      "us-glba",
      "us-water-levitt",
      "us-watch-enron",
      "us-sox-done",
      "us-ownership",
      "us-cse",
      "us-moderation",
      "us-peak-ok",
      "us-contained",
      "us-bear-backstop",
      "us-lehman-file",
      "us-aig-take",
      "us-tarp-no",
      "us-keep-campaign",
      "us-tarp-pass",
      "us-stress",
      "us-hold-2011",
    ];
    for (const id of historical) {
      assert.equal(s.phase, "playing", `died before ${id} on ${s.cardId}`);
      s = applyChoice(s, id);
    }
    assert.equal(s.cardId, "jail-2011");
    assert.equal(s.phase, "ended");
    assert.equal(s.ending?.id, "none");
  });

  it("Street golden path changes faces and does not seize on history", () => {
    let s = newGame({ chair: "iran", party: "R" });
    assert.equal(iranFaceOf(s), "thrift");
    const historical = [
      "ir-keep-30s",
      "ir-buy-brokered",
      "ir-gamble",
      "ir-lincoln-grow",
      "ir-trust-audit",
      "ir-call-five",
      "ir-seized",
      "ir-leave-dirt",
      "ir-stop-hedge",
      "ir-take-room",
      "ir-glba-yes",
      "ir-write-levitt",
      "ir-hide-spe",
      "ir-sign-sox",
      "ir-originate-sell",
      "ir-cse-yes",
      "ir-ignore-rajan",
      "ir-keep-factory",
      "ir-contained",
      "ir-bear-sold",
      "ir-lehman-file",
      "ir-aig-window",
      "ir-wait-tarp",
      "ir-ignore-campaign",
      "ir-take-tarp",
      "ir-pass-stress",
      "ir-hold-2011",
    ];
    for (const id of historical) {
      assert.equal(s.phase, "playing", `died before ${id} on ${s.cardId}`);
      s = applyChoice(s, id);
    }
    assert.equal(s.phase, "ended");
  });

  it("historical is never labelled as an overlay", () => {
    for (const card of CARDS) {
      for (const c of [...card.usChoices, ...card.iranChoices]) {
        if (c.historical) {
          assert.equal(overlayKindOf(c), null, c.id);
        }
      }
    }
  });

  it("driving to the warehouse scores a hindsight point and stays on the rail", () => {
    let s = newGame({ chair: "us", party: "D", cardId: "eddie-1987" });
    s = applyChoice(s, "us-drive-eddie");
    assert.equal(s.flags.offramps, 1);
    assert.equal(s.lastResult?.kind, "hindsight");
    assert.equal(s.cardId, "keating-1987");
    assert.equal(s.phase, "playing");
    assert.equal(detectExits(s).includes("us-drive-eddie"), true);
  });

  it("McCain suspend is hindsight and Obama still sits later", () => {
    let s = newGame({ chair: "us", party: "R", cardId: "campaign-2008" });
    s = applyChoice(s, "us-suspend");
    assert.equal(s.lastResult?.kind, "hindsight");
    assert.match(s.lastResult?.body ?? "", /You have the point/);
    assert.equal(s.cardId, "tarp-pass-2008");
  });

  it("every playable card has two chairs and a next or an ending", () => {
    for (const card of CARDS.filter((c) => !c.secret)) {
      assert.ok(card.usChoices.length >= 1, card.id);
      assert.ok(card.iranChoices.length >= 1, card.id);
      assert.ok(card.referee.paragraphs.length >= 1, card.id);
      if (card.next) assert.ok(cardById(card.next), `broken next on ${card.id}`);
    }
    assert.equal(currentCard(newGame({ chair: "us", party: "D" })).id, "volcker-1979");
    assert.ok(cardById("rtc-1995"));
    assert.ok(cardById("sec-2004"));
    assert.ok(cardById("peak-2006"));
  });

  it("every hindsight button is a museum offramp", () => {
    for (const card of CARDS) {
      for (const c of [...card.usChoices, ...card.iranChoices]) {
        if (c.overlay !== "hindsight") continue;
        assert.ok(
          EXITS.some((e) => e.choiceId === c.id && e.kind === "peace"),
          `silent hindsight ${c.id} on ${card.id}`,
        );
      }
    }
  });
});
