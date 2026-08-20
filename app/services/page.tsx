import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { SERVICES } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Marine Construction Services | ${siteConfig.name}`,
  description:
    "Dock repair, boat lift service, seawall and cap repair, storm prep and recovery, and commercial marine maintenance across Pinellas, Hillsborough, Pasco, and Manatee counties.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main" className="px-6 pb-24 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-ink-dim">
              Services
            </p>
            <h1 className="font-display mt-4 text-4xl font-bold leading-tight text-ink sm:text-6xl">
              Everything the waterline touches.
            </h1>
            <p className="mt-6 text-lg text-ink-dim">
              Nine categories of work, all handled by the same crew. Every
              job starts with a real look at the property, not a guess over
              the phone.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-ink-dim">
              {siteConfig.certifications.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 0.04}
                className="rounded-2xl border hairline p-8 sm:p-10"
              >
                <span className="font-display text-sm text-plum">{s.n}</span>
                <h2 className="font-display mt-4 text-2xl font-bold leading-snug text-ink">
                  {s.title}
                </h2>
                <p className="mt-3 text-ink-dim">{s.desc}</p>

                <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-ink-dim">
                  What&rsquo;s covered
                </p>
                <ul className="mt-3 space-y-2 text-sm text-ink-dim">
                  {s.whatItCovers.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-plum" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-ink-dim">
                  Typical timeline
                </p>
                <p className="mt-2 text-sm text-ink-dim">{s.typicalTimeline}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16">
            <a
              href="/#start"
              className="inline-flex items-center justify-center rounded-full bg-ivory px-8 py-4 text-base font-semibold tracking-wide text-plum transition-transform hover:-translate-y-0.5"
            >
              Start a project
            </a>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
