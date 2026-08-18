"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-config";

// Years-in-business and counties-served are derived from site-config and are
// real. Crew size and referral share are pulled from siteConfig.crew, which
// is still marked isPlaceholder — see the round-2 audit's data-needed list.
const STATS = [
  { value: new Date().getFullYear() - siteConfig.founded, suffix: "+", label: `Years in ${siteConfig.address.city}` },
  { value: siteConfig.crew.size, suffix: "", label: "People on crew" },
  { value: 4, suffix: "", label: "Counties served" },
  { value: siteConfig.crew.referralSharePercent, suffix: "%", label: "Business from referrals" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsMarquee() {
  return (
    <section className="border-y hairline">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 divide-x divide-y hairline sm:grid-cols-4 sm:divide-y-0">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-6 py-10 text-center sm:py-14">
            <div className="font-display text-4xl font-bold sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-ivory-dim sm:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
