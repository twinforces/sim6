import type { CardFa } from "./types.ts";

export const CARDS_FA: Record<string, CardFa> = {};

export function cardFa(id: string): CardFa | undefined {
  return CARDS_FA[id];
}
