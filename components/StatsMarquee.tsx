import Reveal from "@/components/Reveal";

const TRUST_ROW = [
  {
    title: "Built for the Coast",
    desc: "Materials and methods chosen for what Florida's marine environment actually does to a structure.",
    icon: (
      <path
        d="M4 17c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0M4 12c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0M12 3v6"
        strokeWidth="1.6"
      />
    ),
  },
  {
    title: "Quality. No Shortcuts.",
    desc: "The same crew, the same standards, whether it's a cap repair or a full rebuild.",
    icon: <path d="M5 12.5l4.5 4.5L19 7" strokeWidth="1.8" />,
  },
  {
    title: "Clear Communication",
    desc: "What's happening, why, and what it costs. No surprises in the invoice.",
    icon: (
      <path
        d="M4 5h16v11H8l-4 4V5z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Local & Reliable",
    desc: "Serving the Gulf Coast since 2011, with a reputation built on showing up.",
    icon: (
      <path
        d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z M12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function StatsMarquee() {
  return (
    <section className="bg-plum px-6 py-14 sm:px-10 sm:py-16">
      <div className="mx-auto grid max-w-[1600px] gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_ROW.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              className="h-7 w-7 text-ivory-dim"
              aria-hidden
            >
              {item.icon}
            </svg>
            <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-ivory">
              {item.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory-dim">
              {item.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
