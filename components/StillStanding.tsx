import Reveal from "@/components/Reveal";

const PROJECTS = [
  { year: "2013", type: "Seawall Cap Repair", note: "Belleair Bluffs. Still holding, no re-cap needed." },
  { year: "2017", type: "Boat Lift Replacement", note: "Indian Rocks Beach. Same cradle, three storm seasons later." },
  { year: "2019", type: "Full Dock Rebuild", note: "Clearwater Harbor. Rebuilt after direct hurricane impact, untouched since." },
];

export default function StillStanding() {
  return (
    <section id="still-standing" className="border-y hairline px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ivory-dim">
            Still standing
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            We don&rsquo;t build for the photograph. We build for the fifth
            hurricane season.
          </h2>
          <p className="mt-6 text-lg text-ivory-dim">
            Every so often we go back and check on work we finished years ago.
            That&rsquo;s better proof than anything we could say about
            ourselves.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.year} delay={i * 0.08} className="rounded-2xl border hairline p-8">
              <span className="font-display text-3xl font-bold text-ivory-dim">
                {p.year}
              </span>
              <h3 className="font-display mt-4 text-xl font-bold">{p.type}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory-dim">{p.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
