"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const NAV = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Commercial", href: "/commercial" },
  { label: "Values", href: "/#values" },
  { label: "About", href: "/#origin" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 bg-ivory/90 backdrop-blur-md transition-shadow duration-500 ${
        scrolled ? "hairline border-b" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10">
        <a href="/" className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
          REGRESSIVE
          <span className="text-ink-dim"> ENTERPRISES</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm tracking-wide text-ink-dim md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.phone.href}
            className="hidden text-sm font-medium tracking-wide text-ink-dim transition-colors hover:text-ink sm:block"
          >
            {siteConfig.phone.display}
          </a>
          <a
            href="/#start"
            className="rounded-full bg-plum px-5 py-2.5 text-sm font-medium tracking-wide text-ivory transition-transform hover:-translate-y-0.5"
          >
            Start a Project
          </a>
        </div>
      </div>
    </motion.header>
  );
}
