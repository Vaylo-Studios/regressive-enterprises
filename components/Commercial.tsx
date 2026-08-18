import Reveal from "@/components/Reveal";

const AUDIENCE = [
  "Condominium associations",
  "Property management companies",
  "Marinas",
  "Waterfront restaurants & hospitality",
  "General contractors & real estate",
];

export default function Commercial() {
  return (
    <section id="commercial" className="bg-plum px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ivory-dim">
            Commercial &amp; recurring
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight text-ivory sm:text-6xl">
            &ldquo;Call us when something breaks&rdquo; becomes &ldquo;we
            help make sure it doesn&rsquo;t.&rdquo;
          </h2>
          <p className="mt-6 max-w-lg text-lg text-ivory-dim">
            Annual and semiannual maintenance programs for the properties that
            can&rsquo;t afford surprises.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="space-y-4">
            {AUDIENCE.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-b hairline-invert pb-4 text-lg text-ivory"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ivory" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#start"
              className="inline-block rounded-full bg-ivory px-7 py-3.5 text-sm font-semibold tracking-wide text-plum transition-transform hover:-translate-y-0.5"
            >
              Talk to us about a maintenance program
            </a>
            <a
              href="/commercial"
              className="inline-flex items-center rounded-full border hairline-invert px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-ivory hover:text-plum"
            >
              How it works
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
