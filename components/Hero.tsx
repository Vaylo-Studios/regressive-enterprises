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
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-6 pb-14 pt-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-10 lg:pb-0 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ink-dim">
            Florida Gulf Coast
          </p>

          <h1 className="font-display mt-4 text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Marine construction.
            <br />
            <span className="font-accent text-plum">Built to last.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-ink-dim">
            Dock repair, boat lifts, seawalls, and storm-ready waterfront
            structures across Florida&rsquo;s Gulf Coast. Fifteen years in,
            we still answer the phone and stand behind the work.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#still-standing"
              className="rounded-full bg-plum px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-transform hover:-translate-y-0.5"
            >
              View Our Work
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink transition-colors hover:text-plum"
            >
              Our Services
              <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[16/10] lg:aspect-[4/5] lg:h-[80vh] lg:max-h-[820px]"
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
