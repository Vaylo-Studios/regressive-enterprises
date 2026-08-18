"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["100%", "40%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pt-32 pb-10 sm:px-10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ivory) 1px, transparent 1px), linear-gradient(90deg, var(--ivory) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 mt-16 sm:mt-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-ivory-dim"
        >
          Clearwater, Florida &middot; Est. 2011
        </motion.p>

        <h1 className="font-display text-[15vw] font-bold leading-[0.85] tracking-tight sm:text-[11vw] lg:text-[9.5rem]">
          Built to
          <br />
          <span className="text-stroke">hold up.</span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-10 max-w-xl text-lg text-ivory-dim sm:text-xl"
        >
          Dock repair. Boat lifts. Seawalls. Storm-ready waterfront work across
          Florida&rsquo;s Gulf Coast. Fifteen years in, we still answer the phone
          and stand behind the work.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#start"
            className="rounded-full bg-ivory px-7 py-3.5 text-sm font-semibold tracking-wide text-plum transition-transform hover:-translate-y-0.5"
          >
            Show Us What&rsquo;s Going On
          </a>
          <a
            href="#services"
            className="rounded-full border hairline px-7 py-3.5 text-sm font-medium tracking-wide text-ivory-dim transition-colors hover:text-ivory"
          >
            See the work
          </a>
        </motion.div>
      </motion.div>

      <div className="relative z-10 mt-20 flex items-end justify-between gap-6">
        <motion.div style={{ width: lineWidth }} className="h-px bg-ivory/30" />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="shrink-0 text-xs uppercase tracking-[0.3em] text-ivory-dim"
        >
          Scroll
        </motion.span>
      </div>
    </section>
  );
}
