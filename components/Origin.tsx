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
    <section id="origin" className="grid lg:grid-cols-2 lg:items-center">
      <Reveal className="flex justify-center px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
        <div className="w-full max-w-sm">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src={siteConfig.founder.photo ?? "/gallery/site/boat.png"}
              alt={`${siteConfig.founder.name}, founder of ${siteConfig.name}, on the dock`}
              fill
              sizes="(min-width: 1024px) 400px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="mt-6 border-l-2 border-plum pl-4">
            <p className="font-accent text-xl italic leading-snug text-ink sm:text-2xl">
              &ldquo;Maybe everybody needs to regress a little.&rdquo;
            </p>
            <p className="mt-3 text-sm font-medium tracking-wide text-ink-dim">
              {siteConfig.founder.name}
              <span className="mx-2 text-ink-dim/50">&middot;</span>
              <span className="uppercase tracking-[0.2em]">Founder</span>
            </p>
          </div>
        </div>
      </Reveal>

      <div className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
        <Image
          src="/gallery/site/leaf-background.png"
          alt=""
          aria-hidden
          fill
          sizes="50vw"
          className="pointer-events-none absolute inset-0 -z-10 object-cover opacity-40 mix-blend-multiply"
        />

        <Reveal delay={0.08}>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ink-dim">
            About {siteConfig.name}
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Marine contractors
            <br />
            <span className="font-accent text-plum">you can count on.</span>
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
              business, that&rsquo;s what he called it.{" "}
              {new Date().getFullYear() - siteConfig.founded} years later
              the crew has grown, but the philosophy hasn&rsquo;t moved:
              answer the phone, show up when you said you would, and build
              things like someone&rsquo;s going to look at them in ten
              years.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t hairline pt-8">
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
