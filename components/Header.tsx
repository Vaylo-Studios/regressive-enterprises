"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const NAV = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/gallery" },
  { label: "About", href: "/#origin" },
  { label: "Commercial", href: "/commercial" },
  { label: "Contact", href: "/#start" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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
        scrolled || menuOpen
          ? "hairline border-b bg-ivory/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10">
        <a href="/" className="flex items-center gap-3">
          <span className="font-accent text-4xl leading-none text-plum">R</span>
          <span className="font-accent leading-[1.05] text-ink">
            <span className="block text-base tracking-[0.08em] sm:text-lg">
              Regressive
            </span>
            <span className="block text-base tracking-[0.08em] sm:text-lg">
              Enterprises
            </span>
          </span>
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
            className="hidden text-sm font-medium tracking-wide text-ink-dim transition-colors hover:text-ink lg:block"
          >
            {siteConfig.phone.display}
          </a>
          <a
            href="/#start"
            className="hidden rounded-full bg-plum px-5 py-2.5 text-sm font-medium tracking-wide text-ivory transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Request a Consult
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t hairline bg-ivory md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-sm tracking-wide text-ink-dim transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
