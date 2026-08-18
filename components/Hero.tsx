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
    <section id="top" ref={ref} className="relative pt-24 sm:pt-28">
      <div className="grid min-h-[560px] items-stretch sm:min-h-[640px] lg:grid-cols-[1fr_1.15fr] lg:min-h-[680px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:py-20"
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ink-dim">
            Florida Gulf Coast
          </p>

          <h1 className="font-display mt-4 text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Built for
            <br />
            <span className="font-accent text-plum">the coast.</span>
          </h1>

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

        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[320px] w-full overflow-hidden lg:min-h-0"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[8%] h-[116%]">
            <Image
              src="/gallery/site/hero-waterfront.png"
              alt="Waterfront seawall and dock along a Florida Gulf Coast property"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
