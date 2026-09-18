import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { leaderFor, partyForUsYear, imamFor } from "./leaders.ts";

describe("leaders", () => {
  it("Washington faces follow the calendar", () => {
    assert.equal(leaderFor({ chair: "us", year: 1979, iranFace: "thrift" }).id, "carter");
    assert.equal(leaderFor({ chair: "us", year: 1982, iranFace: "thrift" }).id, "reagan");
    assert.equal(leaderFor({ chair: "us", year: 2008, iranFace: "fuld" }).id, "bush43");
    assert.equal(leaderFor({ chair: "us", year: 2009, iranFace: "blankfein" }).id, "obama");
    assert.equal(partyForUsYear(1979), "D");
    assert.equal(partyForUsYear(1981), "R");
  });

  it("Street faces sit, dual plate is not the player", () => {
    const lay = leaderFor({ chair: "iran", year: 2001, iranFace: "lay" });
    assert.equal(lay.id, "lay");
    const guns = imamFor({ chair: "iran", iranFace: "lay" });
    assert.equal(guns?.id, "fastow");
    assert.equal(imamFor({ chair: "us", iranFace: "lay" }), null);
    assert.equal(imamFor({ chair: "iran", iranFace: "keating", year: 1984 }), null);
    assert.equal(imamFor({ chair: "iran", iranFace: "keating", year: 1989 })?.id, "rtc");
    assert.equal(imamFor({ chair: "iran", iranFace: "meriwether", year: 1998 })?.id, "room");
  });
});
