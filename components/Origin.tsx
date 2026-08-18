import Image from "next/image";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

const STATS = [
  {
    value: `${new Date().getFullYear() - siteConfig.founded}+`,
    label: `Years on the ${siteConfig.address.city} Gulf Coast`,
  },
  { value: `${siteConfig.crew.size}`, label: "People on the crew" },
  { value: "4", label: "Counties served" },
];

export default function Origin() {
  return (
    <section id="origin" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.9fr_1.2fr_0.7fr] lg:gap-10">
        {siteConfig.founder.photo ? (
          <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-auto">
            <Image
              src={siteConfig.founder.photo}
              alt={siteConfig.founder.name}
              fill
              sizes="(min-width: 1024px) 25vw, 90vw"
              className="object-cover"
            />
          </Reveal>
        ) : null}

        <Reveal delay={0.08}>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ink-dim">
            About {siteConfig.name}
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Marine contractors you can count on.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-dim">
            <p>
              {siteConfig.founder.name} spent his twenties working around
              docks, marinas, and seawalls, and got tired of watching the
              industry get worse at the basics. Callbacks that never came.
              Crews that showed up late, or not at all. Estimates that
              changed without explanation.
            </p>
            <p>
              On an early job, another contractor told him he worked like
              someone from thirty years ago. Russ said,{" "}
              <span className="text-ink">
                &ldquo;Maybe everybody needs to regress a little.&rdquo;
              </span>{" "}
              The line stuck, and a few weeks later, when he registered the
              business, that&rsquo;s what he called it. Fifteen years later
              the crew has grown, but the philosophy hasn&rsquo;t moved:
              answer the phone, show up when you said you would, and build
              things like someone&rsquo;s going to look at them in ten
              years.
            </p>
          </div>
          <p className="font-accent mt-8 text-2xl text-plum">
            {siteConfig.founder.name}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-dim">
            Founder
          </p>
        </Reveal>

        <Reveal delay={0.16} className="flex flex-row gap-8 lg:flex-col lg:gap-10 lg:border-l lg:hairline lg:pl-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold text-plum sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 max-w-[10rem] text-xs uppercase tracking-[0.15em] text-ink-dim">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
