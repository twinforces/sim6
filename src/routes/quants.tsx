import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../view/AppShell.tsx";
import { QuantsView } from "../view/QuantsView.tsx";

export const Route = createFileRoute("/quants")({ component: Quants });

function Quants() {
  return (
    <AppShell current="/quants">
      <QuantsView />
    </AppShell>
  );
}
