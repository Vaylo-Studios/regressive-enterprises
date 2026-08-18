"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section id="top" ref={ref} className="relative min-h-[640px] overflow-hidden sm:min-h-[720px] lg:min-h-[820px]">
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[8%] h-[116%]">
        <Image
          src="/gallery/site/hero-waterfront.png"
          alt="Waterfront seawall and dock along a Florida Gulf Coast property"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ivory/85 via-ivory/25 to-transparent sm:from-ivory/80 sm:via-ivory/10" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex min-h-[640px] max-w-xl flex-col justify-center px-6 pt-28 pb-14 sm:min-h-[720px] sm:px-10 sm:pt-32 lg:min-h-[820px]"
      >
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-ink-dim">
          Florida Gulf Coast
        </p>

        <h1 className="font-accent mt-4 text-5xl uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Built for
          <br />
          <span className="italic text-plum">the coast.</span>
        </h1>

        <div className="mt-6 h-px w-12 bg-ink/30" />

        <p className="mt-6 max-w-sm text-lg text-ink-dim">
          Marine construction and waterfront solutions that hold up to
          Florida&rsquo;s harshest conditions.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#still-standing"
            className="rounded-full bg-plum px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-transform hover:-translate-y-0.5"
          >
            View Our Work
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border hairline px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-plum hover:text-ivory"
          >
            Our Services
            <span aria-hidden>&rarr;</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
