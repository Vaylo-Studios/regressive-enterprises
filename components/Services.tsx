import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/services";

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ink-dim">
            What we do
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold leading-tight text-ink sm:text-6xl">
            The parts of a waterfront property that take the most punishment.
          </h2>
        </Reveal>

        <Reveal delay={0.06} className="relative mt-10 aspect-[21/9] w-full overflow-hidden rounded-2xl border hairline sm:mt-14">
          <Image
            src="/gallery/crew-seawall-cap-pour-01.jpg"
            alt="Regressive Enterprises crew forming and pouring a seawall cap on-site"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border hairline sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05} className="hairline border-b border-r bg-ivory p-8 sm:p-10">
              <span className="font-display text-sm text-ink-dim">{s.n}</span>
              <h3 className="font-display mt-4 text-xl font-bold leading-snug text-ink sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <a
            href="/services"
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-plum underline underline-offset-4"
          >
            See what&rsquo;s covered, service by service
          </a>
        </Reveal>
      </div>
    </section>
  );
}
