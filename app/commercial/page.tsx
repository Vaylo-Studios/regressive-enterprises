import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Commercial & Association Maintenance | ${siteConfig.name}`,
  description:
    "Recurring marine maintenance programs for condo associations, marinas, waterfront hospitality, and property management companies.",
};

const AUDIENCE = [
  {
    title: "Condominium associations",
    detail:
      "Board-approved maintenance schedules and documented condition reporting, so the association isn't reacting to surprises at annual meetings.",
  },
  {
    title: "Property management companies",
    detail:
      "One point of contact across multiple properties, with consistent scheduling and reporting you can hand to owners.",
  },
  {
    title: "Marinas",
    detail:
      "Multi-structure upkeep across docks, seawalls, and lifts, scoped to keep the marina operating through the season.",
  },
  {
    title: "Waterfront restaurants & hospitality",
    detail:
      "Maintenance timed around your operating hours and busy seasons, not ours.",
  },
  {
    title: "General contractors & real estate",
    detail:
      "Marine scope handled as a subcontracted piece of a larger project, or a pre-listing inspection before a waterfront property goes to market.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <Header />
      <main id="main" className="px-6 pb-24 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-ink-dim">
              Commercial &amp; recurring
            </p>
            <h1 className="font-display mt-4 text-4xl font-bold leading-tight text-ink sm:text-6xl">
              &ldquo;Call us when something breaks&rdquo; becomes &ldquo;we
              help make sure it doesn&rsquo;t.&rdquo;
            </h1>
            <p className="mt-6 text-lg text-ink-dim">
              Annual and semiannual maintenance programs for the properties
              that can&rsquo;t afford surprises.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {AUDIENCE.map((a, i) => (
              <Reveal
                key={a.title}
                delay={i * 0.05}
                className="rounded-2xl border hairline p-8 sm:p-10"
              >
                <h2 className="font-display text-xl font-bold text-ink">{a.title}</h2>
                <p className="mt-3 text-ink-dim">{a.detail}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16 rounded-2xl bg-plum p-8 sm:p-12">
            <h2 className="font-display text-2xl font-bold text-ivory sm:text-3xl">
              How a maintenance program works
            </h2>
            <ol className="mt-6 grid gap-6 sm:grid-cols-3">
              <li>
                <span className="font-display text-2xl font-bold text-ivory-dim">01</span>
                <p className="mt-2 text-sm text-ivory-dim">
                  Walkthrough of every structure on the property to establish
                  a baseline condition.
                </p>
              </li>
              <li>
                <span className="font-display text-2xl font-bold text-ivory-dim">02</span>
                <p className="mt-2 text-sm text-ivory-dim">
                  A recurring schedule (typically semiannual) built around
                  what that property actually needs.
                </p>
              </li>
              <li>
                <span className="font-display text-2xl font-bold text-ivory-dim">03</span>
                <p className="mt-2 text-sm text-ivory-dim">
                  Documented visits and findings, so the board or owner
                  always has a record.
                </p>
              </li>
            </ol>
            <a
              href="/#start"
              className="mt-10 inline-block rounded-full bg-ivory px-7 py-3.5 text-sm font-semibold tracking-wide text-plum transition-transform hover:-translate-y-0.5"
            >
              Talk to us about a maintenance program
            </a>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
