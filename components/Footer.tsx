import { siteConfig } from "@/lib/site-config";

const NAV = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Commercial", href: "/commercial" },
  { label: "Values", href: "/#values" },
  { label: "FAQ", href: "/#faq" },
  { label: "Start a Project", href: "/#start" },
];

const SOCIALS = [
  { label: "Instagram", href: siteConfig.socials.instagram },
  { label: "Facebook", href: siteConfig.socials.facebook },
  { label: "YouTube", href: siteConfig.socials.youtube },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="border-t hairline px-6 py-14 sm:px-10">
      <div className="mx-auto grid max-w-[1600px] gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-lg font-bold tracking-tight">
            REGRESSIVE
            <span className="text-ivory-dim"> ENTERPRISES</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-ivory-dim">
            Coastal property and marine infrastructure work across{" "}
            {siteConfig.address.serviceArea}.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-ivory-dim">
            The standards stay.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-ivory-dim">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-ivory">
            Navigate
          </span>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="w-fit transition-colors hover:text-ivory">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-sm text-ivory-dim">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-ivory">
            Contact
          </span>
          <a href={siteConfig.phone.href} className="w-fit transition-colors hover:text-ivory">
            {siteConfig.phone.display}
          </a>
          <a href={siteConfig.email.href} className="w-fit transition-colors hover:text-ivory">
            {siteConfig.email.display}
          </a>
          <span>
            {siteConfig.address.city}, {siteConfig.address.state}
          </span>
          <span>Since {siteConfig.founded}</span>
          {SOCIALS.length > 0 ? (
            <div className="mt-2 flex gap-4">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="transition-colors hover:text-ivory">
                  {s.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1600px] flex-col gap-2 border-t hairline pt-6 text-xs text-ivory-dim sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {siteConfig.founded}&ndash;present {siteConfig.name}. All rights reserved.</span>
        <span>
          {siteConfig.license.display} &middot; Built by{" "}
          <a
            href="https://vaylostudios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-ivory"
          >
            Vaylo Studios
          </a>
        </span>
      </div>
    </footer>
  );
}
