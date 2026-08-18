import Image from "next/image";
import Reveal from "@/components/Reveal";
import { GALLERY } from "@/lib/gallery";

export default function StillStanding() {
  return (
    <section id="still-standing" className="bg-ivory-dim/40 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ink-dim">
            Featured Projects
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight text-ink sm:text-6xl">
            We don&rsquo;t build for the photograph.
            <br />
            <span className="font-accent text-plum">We build for the fifth hurricane season.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-dim">
            Every so often we go back and check on work we finished years
            ago. We&rsquo;re building out a photo record of that work,
            project by project, so you can see it instead of taking our
            word for it.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          {GALLERY.length > 0 ? (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {GALLERY.slice(0, 3).map((p) => (
                  <div
                    key={p.image}
                    className="group overflow-hidden rounded-2xl border hairline bg-ivory"
                  >
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
                      <span className="inline-block rounded-full bg-plum/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-plum">
                        {p.category}
                      </span>
                      <p className="mt-3 text-sm leading-relaxed text-ink-dim">{p.caption}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/gallery"
                className="mt-10 inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-plum underline underline-offset-4"
              >
                See all {GALLERY.length} projects
              </a>
            </>
          ) : (
            <a
              href="/gallery"
              className="inline-flex items-center gap-3 rounded-full bg-plum px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-transform hover:-translate-y-0.5"
            >
              See the project gallery
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}
