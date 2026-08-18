"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

const PROJECT_TYPES = [
  "Dock repair",
  "Boat lift service",
  "Seawall & cap repair",
  "Storm damage",
  "Commercial / association",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function StartProject() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      address: data.get("address"),
      projectType: data.get("projectType"),
      details: data.get("details"),
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(result.error ?? "Something went wrong. Please call us instead.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us instead.");
    }
  }

  return (
    <section id="start" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-ivory-dim">
            Start a project
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            Show us what&rsquo;s going on.
          </h2>
          <p className="mt-6 text-lg text-ivory-dim">
            Tell us about the property and what&rsquo;s happening with it.
            We&rsquo;ll follow up to schedule a look and give you a real
            estimate, not a guess.
          </p>
          {siteConfig.financing.available && siteConfig.financing.blurb ? (
            <p className="mt-3 text-sm text-ivory-dim">
              {siteConfig.financing.blurb}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          <Reveal delay={0.1}>
            {status === "success" ? (
              <div className="rounded-2xl border hairline p-8 sm:p-10">
                <h3 className="font-display text-2xl font-bold">
                  Got it. We&rsquo;ll be in touch.
                </h3>
                <p className="mt-3 text-ivory-dim">
                  Someone from the crew will follow up shortly. If it&rsquo;s
                  urgent, call us directly at{" "}
                  <a href={siteConfig.phone.href} className="text-ivory underline">
                    {siteConfig.phone.display}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid gap-5 rounded-2xl border hairline p-6 sm:grid-cols-2 sm:p-10"
              >
                <Field label="Name" name="name" required autoComplete="name" />
                <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
                <Field label="Email" name="email" type="email" autoComplete="email" />
                <Field label="Property address" name="address" autoComplete="street-address" />

                <label className="sm:col-span-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-ivory-dim">
                    Project type
                  </span>
                  <select
                    name="projectType"
                    defaultValue=""
                    className="mt-2 w-full rounded-md border hairline bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-ivory"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-plum">
                        {t}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="sm:col-span-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-ivory-dim">
                    What&rsquo;s going on?
                  </span>
                  <textarea
                    name="details"
                    required
                    rows={4}
                    className="mt-2 w-full resize-none rounded-md border hairline bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-ivory"
                    placeholder="Tell us what you're seeing, whether it's urgent, and anything else that helps"
                  />
                </label>

                {status === "error" ? (
                  <p className="text-sm text-rust sm:col-span-2">{errorMessage}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-fit items-center justify-center rounded-full bg-ivory px-8 py-4 text-base font-semibold tracking-wide text-plum transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:col-span-2"
                >
                  {status === "submitting" ? "Sending…" : "Send it"}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-3 rounded-full border hairline px-8 py-4 text-base font-semibold tracking-wide text-ivory transition-colors hover:bg-ivory hover:text-plum"
            >
              Or call the office
            </a>
            <a
              href={`${siteConfig.email.href}?subject=New%20project%20inquiry`}
              className="inline-flex items-center justify-center gap-3 rounded-full border hairline px-8 py-4 text-base font-semibold tracking-wide text-ivory transition-colors hover:bg-ivory hover:text-plum"
            >
              Email photos directly
            </a>
            {siteConfig.warranty.display ? (
              <p className="mt-2 text-xs leading-relaxed text-ivory-dim">
                {siteConfig.warranty.display}
              </p>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label>
      <span className="text-xs uppercase tracking-[0.2em] text-ivory-dim">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-md border hairline bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-ivory"
      />
    </label>
  );
}
