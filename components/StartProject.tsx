import Reveal from "@/components/Reveal";

const QUESTIONS = [
  "What type of property is this?",
  "What's going on with it?",
  "Dock, lift, seawall, or something else?",
  "Where is the property?",
  "Is it urgent?",
];

export default function StartProject() {
  return (
    <section id="start" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ivory-dim">
            Start a project
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            Show us what&rsquo;s going on.
          </h2>
          <p className="mt-6 text-lg text-ivory-dim">
            Send a few photos and tell us where the property is. We&rsquo;ll
            tell you what the next step should be, no generic contact form
            required.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal delay={0.1} className="grid gap-3 sm:grid-cols-2">
            {QUESTIONS.map((q) => (
              <div
                key={q}
                className="rounded-xl border hairline px-5 py-4 text-sm text-ivory-dim"
              >
                {q}
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            {/* TODO: wire to Regressive's real phone number and intake form */}
            <a
              href="#top"
              className="inline-flex items-center gap-3 rounded-full bg-ivory px-8 py-4 text-base font-semibold tracking-wide text-plum transition-transform hover:-translate-y-0.5"
            >
              Call the office
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
