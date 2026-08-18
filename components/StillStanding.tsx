import Image from "next/image";
import Reveal from "@/components/Reveal";
import { GALLERY } from "@/lib/gallery";

const FEATURED = GALLERY.filter((p) => p.image.startsWith("/gallery/site/"));

export default function StillStanding() {
  const projects = (FEATURED.length > 0 ? FEATURED : GALLERY).slice(0, 3);

  return (
    <section id="still-standing" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-ink-dim">
              Featured Projects
            </p>
            <h2 className="font-display mt-4 text-4xl font-bold leading-tight text-ink sm:text-6xl">
              Real work.
              <br />
              <span className="font-accent text-plum">Right here.</span>
            </h2>
          </div>
          <a
            href="/gallery"
            className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-plum underline underline-offset-4"
          >
            View all projects
            <span aria-hidden>&rarr;</span>
          </a>
        </Reveal>

        {projects.length > 0 ? (
          <Reveal delay={0.1} className="mt-14 grid gap-px overflow-hidden bg-ink/10 sm:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.image}
                href="/gallery"
                className="group block bg-ivory transition-colors hover:bg-ivory-dim/60"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.caption}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-dim">
                      {p.category}
                    </span>
                    <p className="font-display mt-1 text-lg font-bold text-ink">
                      {p.location ?? p.category}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="shrink-0 text-lg text-plum transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </div>
              </a>
            ))}
          </Reveal>
        ) : (
          <Reveal delay={0.1} className="mt-14">
            <a
              href="/gallery"
              className="inline-flex items-center gap-3 rounded-full bg-plum px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory transition-transform hover:-translate-y-0.5"
            >
              See the project gallery
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
