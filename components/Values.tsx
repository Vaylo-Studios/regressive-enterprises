import Reveal from "@/components/Reveal";

const VALUES = [
  {
    title: "Accountability",
    desc: "If we say someone's coming Tuesday, somebody comes Tuesday. If something changes, you hear about it.",
  },
  {
    title: "Longevity",
    desc: "The job isn't done when it's finished. It's done when it still makes sense five years later.",
  },
  {
    title: "Clarity",
    desc: "What's happening, why it's happening, what it costs, what's next. No surprises in the invoice.",
  },
  {
    title: "Craft",
    desc: "People on our crew are proud to put their name behind what they build.",
  },
  {
    title: "Preparedness",
    desc: "Florida punishes property owners who wait. We help you handle problems before they're emergencies.",
  },
  {
    title: "Useful Progress",
    desc: "Technology should remove friction. It should never remove accountability.",
  },
];

export default function Values() {
  return (
    <section id="values" className="border-t hairline bg-plum-deep px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ivory-dim">
            Keep the Standards
          </p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Progress doesn&rsquo;t require lowering your standards.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.08}>
              <div className="border-t hairline pt-6">
                <h3 className="font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-ivory-dim">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
