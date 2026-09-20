import { GlossText } from "./Gloss.tsx";
import { useLocale } from "./LocaleContext.tsx";

export function QuantsView() {
  const { t } = useLocale();
  return (
    <div className="flex flex-col gap-6">
      <article className="dossier max-w-2xl px-5 py-6 sm:px-8 sm:py-8">
        <p className="kicker">{t("quantsKicker")}</p>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("quantsTitle")}
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/80">
          <GlossText text={t("quantsP1")} />
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
          <GlossText text={t("quantsP2")} />
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
          <GlossText text={t("quantsP3")} />
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
          <GlossText text={t("quantsP4")} />
        </p>
        <p className="mt-4 font-serif text-sm italic text-ink/70">
          <GlossText text={t("quantsP5")} />
        </p>
      </article>
    </div>
  );
}
