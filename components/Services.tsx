import Reveal from "@/components/Reveal";

const SERVICES = [
  { n: "01", title: "Dock Repair & Reconstruction", desc: "From spot repairs to full rebuilds, decked out to take the next fifteen years." },
  { n: "02", title: "Boat Lift Service & Replacement", desc: "Cables, motors, cradles, full replacements. Diagnosed straight, fixed right." },
  { n: "03", title: "Seawall & Cap Repair", desc: "Cracking, undermining, and cap failure caught before it becomes a bigger bill." },
  { n: "04", title: "Waterfront Structural Maintenance", desc: "Preventative work that keeps the emergency call from ever happening." },
  { n: "05", title: "Storm Prep & Recovery", desc: "Before the season and after the storm, on properties across the Gulf Coast." },
  { n: "06", title: "Commercial Marine Maintenance", desc: "Marinas, hospitality, and condo association properties on a real schedule." },
  { n: "07", title: "Waterfront Inspections", desc: "A straight read on what's actually going on before you buy, sell, or renew a policy." },
  { n: "08", title: "Exterior Coastal Repairs", desc: "Salt, sun, and storm surge wear down more than the dock. We handle the rest of the exterior too." },
  { n: "09", title: "Small-Scale Marine Construction", desc: "New structures built to the same standard as everything we maintain." },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ivory-dim">
            What we do
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-6xl">
            The parts of a waterfront property that take the most punishment.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border hairline sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05} className="hairline border-b border-r bg-plum p-8 sm:p-10">
              <span className="font-display text-sm text-ivory-dim">{s.n}</span>
              <h3 className="font-display mt-4 text-xl font-bold leading-snug sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory-dim">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
