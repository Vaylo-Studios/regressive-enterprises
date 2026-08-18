import Image from "next/image";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Origin() {
  return (
    <section id="origin" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ivory-dim">
            Est. 2011
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            The name started as a joke.
          </h2>
          {siteConfig.founder.photo ? (
            <div className="relative mt-8 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border hairline">
              <Image
                src={siteConfig.founder.photo}
                alt={siteConfig.founder.name}
                fill
                sizes="(min-width: 1024px) 320px, 60vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-plum/90 to-transparent p-4">
                <p className="text-sm font-semibold text-ivory">{siteConfig.founder.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-ivory-dim">Founder</p>
              </div>
            </div>
          ) : null}
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ivory-dim">
          <p>
            Russell Mercer spent his twenties working around docks, marinas,
            and seawalls, and got tired of watching the industry get worse at
            the basics. Callbacks that never came. Crews that showed up late,
            or not at all. Estimates that changed without explanation.
          </p>
          <p>
            On an early job, another contractor told him he worked like
            someone from thirty years ago. Russ said,{" "}
            <span className="text-ivory">
              &ldquo;Maybe everybody needs to regress a little.&rdquo;
            </span>{" "}
            The line stuck, and a few weeks later, when he registered the
            business, that&rsquo;s what he called it.
          </p>
          <p>
            Fifteen years later the crew has grown, but the philosophy hasn&rsquo;t
            moved: answer the phone, show up when you said you would, explain
            the problem, charge what you said you&rsquo;d charge, and build
            things like someone&rsquo;s going to look at them in ten years.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
