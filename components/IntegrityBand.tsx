import Reveal from "@/components/Reveal";

export default function IntegrityBand() {
  return (
    <section className="relative overflow-hidden bg-plum px-6 py-16 sm:px-10 sm:py-20">
      <svg
        viewBox="0 0 200 200"
        aria-hidden
        className="pointer-events-none absolute -right-6 top-1/2 h-40 w-40 -translate-y-1/2 text-ivory opacity-[0.08] sm:h-56 sm:w-56 lg:h-72 lg:w-72"
      >
        <text
          x="0"
          y="160"
          fontFamily="var(--font-display), sans-serif"
          fontWeight="700"
          fontSize="220"
        >
          R
        </text>
      </svg>

      <Reveal className="mx-auto grid max-w-[1600px] gap-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <h2 className="font-display text-3xl font-bold leading-tight text-ivory sm:text-4xl">
          We build with <span className="font-accent text-ivory-dim">integrity.</span> We
          stand <span className="font-accent text-ivory-dim">behind our work.</span>
        </h2>
        <p className="max-w-md text-lg text-ivory-dim">
          From small repairs to full-scale construction, we deliver lasting
          solutions for docks, seawalls, boat lifts, and more.
        </p>
      </Reveal>
    </section>
  );
}
