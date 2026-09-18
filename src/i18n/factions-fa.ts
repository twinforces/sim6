import { FACTION_BLURB, FACTION_LABEL } from "../model/constants.ts";
import type { FactionId } from "../model/types.ts";

export const FACTION_LABEL_FA: Record<FactionId, string> = { ...FACTION_LABEL };
export const FACTION_BLURB_FA: Record<FactionId, string> = { ...FACTION_BLURB };
