import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../view/AppShell.tsx";
import { PlayView } from "../view/PlayView.tsx";
import { RailPending } from "../view/RailPending.tsx";
import type { Chair } from "../model/types.ts";

type PlaySearch = { card?: string; chair?: "us" | "street" };

export const Route = createFileRoute("/play")({
  pendingComponent: RailPending,
  pendingMs: 400,
  validateSearch: (s: Record<string, unknown>): PlaySearch => {
    const out: PlaySearch = {};
    if (typeof s.card === "string" && s.card.length > 0) out.card = s.card;
    if (s.chair === "us") out.chair = "us";
    if (s.chair === "street" || s.chair === "iran") out.chair = "street";
    return out;
  },
  component: Play,
});

function Play() {
  const { card, chair } = Route.useSearch();
  const seated: Chair | undefined = chair === "street" ? "iran" : chair;
  return (
    <AppShell current="/play">
      <PlayView initialCard={card} initialChair={seated} />
    </AppShell>
  );
}