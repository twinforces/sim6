import { useMemo, useState } from "react";
import { Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { draftLetter, LETTER_CLOSE, LETTER_OPEN, LETTER_SUBJECT } from "../model/letter.ts";
import type { PresentedLetter } from "../viewmodel/TrainViewModel.ts";
import { useLocale } from "./LocaleContext.tsx";

const SIGNER_KEY = "htu-letter-name";

function loadSigner(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(SIGNER_KEY) ?? "";
  } catch {
    return "";
  }
}

function saveSigner(name: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(SIGNER_KEY, name);
  } catch {
    /* private mode */
  }
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const node = document.createElement("textarea");
      node.value = text;
      node.setAttribute("readonly", "");
      node.style.position = "fixed";
      node.style.left = "-9999px";
      document.body.appendChild(node);
      node.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(node);
      return ok;
    } catch {
      return false;
    }
  }
}

export function CongressLetter({ letter }: { letter: PresentedLetter }) {
  const { t } = useLocale();
  const [addressee, setAddressee] = useState("");
  const [signer, setSigner] = useState(loadSigner);
  const [copied, setCopied] = useState(false);
  const empty = letter.asks.length === 0;
  const text = useMemo(
    () => draftLetter({ asks: letter.asks, signer, addressee }),
    [letter.asks, signer, addressee],
  );
  const mailto = `mailto:?subject=${encodeURIComponent(LETTER_SUBJECT)}&body=${encodeURIComponent(text)}`;

  return (
    <article className="letter-panel">
      <p className="kicker">{t("letterKicker")}</p>
      <h3 className="mt-1 font-serif text-xl text-fg">{t("letterTitle")}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{empty ? t("letterEmpty") : t("letterLead")}</p>
      {empty ? (
        <p className="mt-3 font-serif text-sm italic text-muted">{t("letterHunt")}</p>
      ) : (
        <>
          <div className="letter-sheet mt-4">
            <label className="letter-label">
              {t("letterToLabel")}
              <input
                className="letter-field"
                value={addressee}
                onChange={(e) => setAddressee(e.target.value)}
                placeholder={t("letterToPlaceholder")}
                autoComplete="off"
                spellCheck={false}
              />
            </label>
            <p className="mt-4 text-sm leading-relaxed">{LETTER_OPEN}</p>
            <div className="letter-body">
              {letter.asks.map((ask) => (
                <p key={ask.id}>
                  <span className="font-semibold">{ask.headline}.</span> {ask.ask}
                </p>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed">{LETTER_CLOSE}</p>
            <label className="letter-label mt-4">
              {t("letterFromLabel")}
              <input
                className="letter-field"
                value={signer}
                onChange={(e) => {
                  setSigner(e.target.value);
                  saveSigner(e.target.value);
                }}
                placeholder={t("letterFromPlaceholder")}
                autoComplete="name"
              />
            </label>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant="default"
              onClick={() => {
                void copyText(text).then((ok) => {
                  if (!ok) return;
                  setCopied(true);
                  window.setTimeout(() => setCopied(false), 1800);
                });
              }}
            >
              <Copy aria-hidden />
              {copied ? t("letterCopied") : t("letterCopy")}
            </Button>
            <Button variant="secondary" asChild>
              <a href={mailto}>
                <Mail aria-hidden />
                {t("letterMailto")}
              </a>
            </Button>
          </div>
        </>
      )}
    </article>
  );
}
