"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { FAQ } from "@/lib/faq";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y hairline px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ivory-dim">
            Questions
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            What people ask before they call.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y hairline border-t hairline">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-bold sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-2xl text-ivory-dim transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 max-w-2xl text-ivory-dim">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
