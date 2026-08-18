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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-plum/90 backdrop-blur-md hairline border-b" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10">
        <a href="/" className="font-display text-lg font-bold tracking-tight sm:text-xl">
          REGRESSIVE
          <span className="text-ivory-dim"> ENTERPRISES</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm tracking-wide text-ivory-dim md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.phone.href}
            className="hidden text-sm font-medium tracking-wide text-ivory-dim transition-colors hover:text-ivory sm:block"
          >
            {siteConfig.phone.display}
          </a>
          <a
            href="/#start"
            className="rounded-full border hairline px-5 py-2.5 text-sm font-medium tracking-wide transition-colors hover:bg-ivory hover:text-plum"
          >
            Start a Project
          </a>
        </div>
      </div>
    </motion.header>
  );
}
