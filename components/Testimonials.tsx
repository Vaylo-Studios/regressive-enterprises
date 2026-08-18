import Image from "next/image";
import Reveal from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/testimonials";

// Hides itself entirely until real reviews exist in lib/testimonials.ts.
// Never seed this with invented quotes.
const TESTIMONIAL_PHOTOS = [
  "/gallery/seawall-cap-repair-01.jpg",
  "/gallery/dock-reconstruction-01.jpg",
  "/gallery/marina-dock-collage-01.jpg",
];

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="border-y hairline px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ivory-dim">
            From the water
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            What people say after we&rsquo;re gone.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="overflow-hidden rounded-2xl border hairline"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={TESTIMONIAL_PHOTOS[i % TESTIMONIAL_PHOTOS.length]}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-6 text-sm font-medium">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-ivory-dim">
                  {t.location} &middot; {t.project}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
