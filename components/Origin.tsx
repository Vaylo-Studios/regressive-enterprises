import Image from "next/image";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Origin() {
  return (
    <section id="origin" className="grid lg:grid-cols-2">
      <Reveal className="relative min-h-[320px] w-full overflow-hidden lg:min-h-[560px]">
        <Image
          src="/gallery/site/boat.png"
          alt="Regressive Enterprises crew on the water off Florida's Gulf Coast"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </Reveal>

      <div className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
        <Image
          src="/gallery/site/leaf-background.png"
          alt=""
          aria-hidden
          fill
          sizes="50vw"
          className="pointer-events-none absolute inset-0 -z-10 object-cover opacity-40 mix-blend-multiply"
        />

        <Reveal delay={0.08}>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ink-dim">
            About {siteConfig.name}
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Marine contractors
            <br />
            <span className="font-accent text-plum">you can count on.</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-dim">
            <p>
              Founded in {siteConfig.address.city}, we&rsquo;ve spent over{" "}
              {new Date().getFullYear() - siteConfig.founded} years earning
              the trust of homeowners, businesses, and communities across
              the Gulf Coast.
            </p>
            <p>
              We communicate clearly, show up when we say we will, and
              build solutions that last.
            </p>
          </div>
          <p className="font-accent mt-8 text-2xl text-plum">
            {siteConfig.founder.name}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-dim">
            Founder
          </p>
        </Reveal>
      </div>
    </section>
  );
}
