const QUESTIONS: { q: string; freeze: string }[] = [
  {
    q: "Who sits the Street?",
    freeze:
      "A thrift, then Keating, Meriwether, Lay, Mozilo, Cayne, Fuld, Blankfein. Dual plate is Fastow, the RTC, the room, the window. You never sit the guns.",
  },
  {
    q: "When does a chair die?",
    freeze:
      "Seizure when the book falls. Election loss on Washington. Historical never graves. Hindsight keeps the chair and scores a point.",
  },
  {
    q: "The cubicle?",
    freeze:
      "Enron passed every audit. So did Crazy Eddie. Accountants lie to accountants. The offramp is drive to the address on the invoice.",
  },
  {
    q: "Nested put?",
    freeze: "RTC worked. LTCM room worked. SOX worked. 2008 will not close. TARP is a pause.",
  },
];

export function DesignView() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <p className="kicker">Design freeze</p>
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-fg">Hard to Unwind</h1>
      </header>
      <ol className="flex flex-col gap-4">
        {QUESTIONS.map((item) => (
          <li key={item.q} className="dossier px-5 py-4">
            <p className="font-serif text-lg text-ink">{item.q}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/80">{item.freeze}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
