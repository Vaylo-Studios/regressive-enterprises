import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { GALLERY } from "@/lib/gallery";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Project Gallery | ${siteConfig.name}`,
  description: `Completed dock, seawall, and boat lift work across ${siteConfig.address.serviceArea}.`,
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main id="main" className="px-6 pb-24 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-ivory-dim">
              Gallery
            </p>
            <h1 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-6xl">
              The work, not just the pitch.
            </h1>
          </Reveal>

          {GALLERY.length > 0 ? (
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY.map((p, i) => (
                <Reveal
                  key={p.image}
                  delay={i * 0.04}
                  className="overflow-hidden rounded-2xl border hairline"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.caption} className="aspect-[4/3] w-full object-cover" />
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-ivory-dim">
                      {p.category}
                      {p.location ? ` · ${p.location}` : ""}
                      {p.year ? ` · ${p.year}` : ""}
                    </span>
                    <p className="mt-2 text-sm text-ivory-dim">{p.caption}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={0.1} className="mt-16 rounded-2xl border hairline p-10 sm:p-16">
              <p className="text-lg text-ivory-dim">
                We&rsquo;re building out a real photo record of finished
                work, project by project. Check back soon, or call us and
                we&rsquo;ll walk you through recent jobs directly.
              </p>
              <a
                href={siteConfig.phone.href}
                className="mt-8 inline-flex items-center justify-center rounded-full border hairline px-8 py-4 text-base font-semibold tracking-wide text-ivory transition-colors hover:bg-ivory hover:text-plum"
              >
                Call {siteConfig.phone.display}
              </a>
            </Reveal>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
