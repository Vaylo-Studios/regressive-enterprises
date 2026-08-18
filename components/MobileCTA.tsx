"use client";

import { siteConfig } from "@/lib/site-config";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t hairline bg-plum/95 backdrop-blur-md md:hidden">
      <a
        href={siteConfig.phone.href}
        className="flex flex-1 items-center justify-center border-r hairline py-4 text-sm font-semibold tracking-wide text-ivory"
      >
        Call
      </a>
      <a
        href="/#start"
        className="flex flex-1 items-center justify-center bg-ivory py-4 text-sm font-semibold tracking-wide text-plum"
      >
        Start a Project
      </a>
    </div>
  );
}
