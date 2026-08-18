import Reveal from "@/components/Reveal";

export default function WaterCta() {
  return (
    <section className="bg-plum px-6 py-14 sm:px-10 sm:py-16">
      <Reveal className="mx-auto flex max-w-[1600px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-display max-w-md text-3xl font-bold leading-tight text-ivory sm:text-4xl">
          Have a project
          <br />
          <span className="font-accent text-ivory-dim">on the water?</span>
        </h2>
        <div className="flex items-center gap-6">
          <p className="max-w-[14rem] text-sm text-ivory-dim">
            Let&rsquo;s talk about how we can help.
          </p>
          <a
            href="/#start"
            className="inline-flex shrink-0 items-center gap-3 rounded-full border hairline-invert px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-ivory hover:text-plum"
          >
            Request a consult
            <span aria-hidden>&rarr;</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
