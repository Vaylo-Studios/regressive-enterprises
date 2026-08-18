import Image from "next/image";
import Reveal from "@/components/Reveal";
import { GALLERY } from "@/lib/gallery";

export default function StillStanding() {
  return (
    <section id="still-standing" className="border-y hairline px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ivory-dim">
            Still standing
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            We don&rsquo;t build for the photograph. We build for the fifth
            hurricane season.
          </h2>
          <p className="mt-6 text-lg text-ivory-dim">
            Every so often we go back and check on work we finished years
            ago. We&rsquo;re building out a photo record of that work,
            project by project, so you can see it instead of taking our
            word for it.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          {GALLERY.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-3">
              {GALLERY.slice(0, 3).map((p) => (
                <div key={p.image} className="group relative overflow-hidden rounded-2xl border hairline">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={p.image}
                      alt={p.caption}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-display text-sm text-ivory-dim">{p.category}</span>
                    <p className="mt-2 text-sm leading-relaxed text-ivory-dim">{p.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <a
              href="/gallery"
              className="inline-flex items-center gap-3 rounded-full border hairline px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-ivory hover:text-plum"
            >
              See the project gallery
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
