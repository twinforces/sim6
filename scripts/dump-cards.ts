/**
 * What: dump every card into docs/CARDS.md for a morning copy review.
 * Why: GTB asked for the rail on paper, not a recap.
 */
import { writeFileSync } from "node:fs";
import { ui } from "../src/i18n/ui.ts";
import { CARDS, FIRST_CARD_ID } from "../src/model/cards.ts";
import type { Briefing, Card, Choice } from "../src/model/types.ts";

const ERA: Record<Card["era"], string> = {
  sl: "S&L",
  ltcm: "LTCM",
  enron: "Enron",
  housing: "Housing",
};

function choiceMark(c: Choice): string {
  const bits: string[] = [];
  if (c.historical) bits.push("HISTORY");
  if (c.overlay) bits.push(c.overlay.toUpperCase());
  if (c.ending) bits.push(`ending:${c.ending}`);
  if (c.nextCard) bits.push(`next:${c.nextCard}`);
  if (c.epilogue) bits.push("epilogue");
  if (c.artisticLicense) bits.push("AL");
  bits.push(c.kind);
  return bits.join(" · ");
}

function faceOf(value: Briefing["face"] | Choice["face"]): string {
  if (!value) return "";
  return Array.isArray(value) ? value.join(", ") : value;
}

function dumpChoices(choices: readonly Choice[]): string {
  return choices
    .map((c) => {
      const lines = [
        `- **${c.label}** \`${c.id}\` (${choiceMark(c)})`,
        `  ${c.summary}`,
      ];
      if (c.greyText) lines.push(`  Grey: ${c.greyText}`);
      if (c.artisticLicense) lines.push(`  AL: ${c.artisticLicense}`);
      if (c.resultTitle) lines.push(`  Overlay title: ${c.resultTitle}`);
      if (c.result) {
        for (const para of c.result.split("\n")) lines.push(`  ${para}`);
      }
      const face = faceOf(c.face);
      if (face) lines.push(`  Face: ${face}`);
      return lines.join("\n");
    })
    .join("\n");
}

function dumpBriefings(card: Card, audience: "iran" | "us"): string {
  const rows = card.briefings.filter((b) => b.audience === audience);
  if (!rows.length) return "_none_";
  return rows
    .map((b) => {
      const face = faceOf(b.face);
      const who = face ? `${b.faction} · ${face}` : b.faction;
      const closer = b.closer ? `\n\n_${b.closer}_` : "";
      return `**${who}**\n\n${b.rant}${closer}`;
    })
    .join("\n\n");
}

function dumpCard(card: Card, index: number): string {
  const flags = [
    card.status,
    card.branchPoint ? "branch" : null,
    card.electionYear ? "election" : null,
    card.midterm ? "midterm" : null,
    card.clocksOn ? "clocks" : null,
    card.secret ? "secret" : null,
    `next:${card.next ?? "null"}`,
  ]
    .filter(Boolean)
    .join(" · ");

  const situationStreet = card.situationIran ?? card.situation ?? "_missing Street situation_";
  const situationWash = card.situationUs ?? card.situation ?? "_missing Washington situation_";

  const al = card.artisticLicense?.length
    ? card.artisticLicense.map((a) => `**${a.title}** (\`${a.id}\`)\n\n${a.body}`).join("\n\n")
    : "";

  return [
    `## ${index + 1}. ${card.yearLabel} · \`${card.id}\``,
    "",
    `- Street title: **${card.titleIran ?? card.title}**`,
    `- Washington title: **${card.titleUs ?? card.title}**`,
    `- Shared: ${card.title}`,
    `- Era: ${ERA[card.era]}`,
    `- ${flags}`,
    `- Tags: ${card.referee.tags.join(", ") || "none"}`,
    `- Sources: ${card.sources.join("; ") || "none"}`,
    "",
    "### Referee",
    "",
    card.referee.paragraphs.join("\n\n"),
    "",
    "### Street",
    "",
    situationStreet,
    "",
    dumpChoices(card.iranChoices),
    "",
    "Street briefings",
    "",
    dumpBriefings(card, "iran"),
    "",
    "### Washington",
    "",
    situationWash,
    "",
    dumpChoices(card.usChoices),
    "",
    "Washington briefings",
    "",
    dumpBriefings(card, "us"),
    al ? `\n### Artistic license\n\n${al}\n` : "",
  ].join("\n");
}

function main() {
  const home = [
    "# Past Performance · card review",
    "",
    "Generated from `src/model/cards.ts` and the home strings. This is the rail on paper, for a morning redline. History buttons are marked here. The player never sees that label.",
    "",
    `First card: \`${FIRST_CARD_ID}\`. ${CARDS.length} cards. Secret cards stay at the end.`,
    "",
    "## Front",
    "",
    `**${ui("en", "homeTitle")}**`,
    "",
    ui("en", "homeP1"),
    "",
    ui("en", "homeP2"),
    "",
    ui("en", "homeP3"),
    "",
    "### Chair cards",
    "",
    `**Street.** ${ui("en", "homeIranBlurb")}`,
    "",
    `**Washington.** ${ui("en", "homeUsBlurb")}`,
    "",
    `**Time travel.** ${ui("en", "chairBody")}`,
    "",
    "## Index",
    "",
    "| # | Year | Id | Street | Washington | Status |",
    "|---|------|----|--------|------------|--------|",
    ...CARDS.map((c, i) => {
      const st = [c.status, c.secret ? "secret" : "", c.branchPoint ? "branch" : ""]
        .filter(Boolean)
        .join(" ");
      return `| ${i + 1} | ${c.yearLabel} | [\`${c.id}\`](#${i + 1}-${c.yearLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${c.id}) | ${c.titleIran ?? c.title} | ${c.titleUs ?? c.title} | ${st} |`;
    }),
    "",
    ...CARDS.map((c, i) => dumpCard(c, i)),
    "",
  ].join("\n");

  writeFileSync("docs/CARDS.md", home.endsWith("\n") ? home : `${home}\n`);
}

main();
