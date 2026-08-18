# Regressive Enterprises — Website Audit

> Audit date: 2026-08-17
> Audited by: Claude (VVibe full pipeline + website-audit)
> Site: https://regressive.sitegrid.cc (repo: regressive-Enterprises, single-page site)
> Benchmarked against: The Dock Experts, Kroeger Marine, ShoreMaster (premium marine-construction positioning)

## Executive Summary
The site has a strong visual foundation (grain texture, scroll parallax, restrained plum/ivory palette, confident type) but reads as a **portfolio piece, not a lead-generation site for a 15-year-old business**. The single biggest problem: there is **no way to actually contact Regressive** anywhere on the page — no phone number, no email, no address, and the primary CTA ("Call the office") links to `#top` and does nothing. Every premium competitor benchmarked (Dock Experts, Kroeger Marine) leads with license numbers, years-in-business proof, and a phone number in the header. Regressive has the origin story but none of the credibility infrastructure. Fix the contact/trust layer first; the design polish is secondary.

---

## 🔴 CRITICAL (fix before launch)

1. **Primary CTA is a dead link.** `StartProject.tsx:44` — "Call the office" button `href="#top"` just scrolls to the hero. No phone number exists anywhere in the codebase. Has an explicit `{/* TODO */}` comment acknowledging it.
2. **Zero contact information on the entire site.** No phone, no email, no physical/mailing address, in header or footer. A visitor ready to buy has no path to convert.
3. **No real phone number captured from the client.** The brand brief (1217 lines) never states one — this needs to come from Kyle/the client before launch, not be invented.
4. **No lead-capture form.** `StartProject.tsx` shows 5 intake questions as static, non-interactive cards — they look like a form but submit nothing.
5. **Services list is missing 3 of 9 categories** the brief specifies. Current `Services.tsx` has 6: Dock Repair, Boat Lift Service, Seawall & Cap Repair, Waterfront Structural Maintenance, Storm Prep & Recovery, Commercial Marine Maintenance. Missing: **Waterfront Inspections, Exterior Coastal Repairs, Small-Scale Marine Construction.**
6. **No licensing/insurance credentials shown.** Both benchmarked competitors (Dock Experts, Kroeger Marine) lead with license numbers and insurance/bonding language — table stakes for a marine contractor. Regressive shows none. Need real license # from client.
7. **No social proof anywhere** — no testimonials, no Google review count/rating, no client logos (condo associations, marinas, GCs). The brief explicitly calls review infrastructure a strategic priority (line 971: "Reviews need to become systematic") but the live site has zero.
8. **No `robots.txt` / `sitemap.xml`.** Site is effectively invisible to search engines as configured.
9. **No structured data (JSON-LD).** A `LocalBusiness`/`HomeAndConstructionBusiness` schema is close to mandatory for a local service business and costs nothing to add.
10. **No Open Graph / Twitter Card metadata.** Sharing the link in iMessage, Slack, or social produces a bare title with no image.

## 🟡 IMPORTANT (fix in week one)

11. **`StillStanding.tsx` lost its visual identity.** Reverted to plain bordered text cards during a mid-build merge; the brief's "Still Standing" concept (proof-of-durability case studies) deserves the strongest visual treatment on the page, not the weakest.
12. **No project photography anywhere.** Every section is text-only. A marine construction company's single strongest asset — before/after dock and seawall photos — is completely absent. This is the #1 differentiator vs. every competitor benchmarked.
13. **Single-page architecture undersells 15 years of work.** The brief recommends 9+ pages (Residential, Commercial, Projects/case studies, Storm Center, Waterfront Owner's Guide, Service Area, About, Start a Project). Current site is one long scroll — fine for a v1, but there's no room to rank for or answer service-specific searches ("seawall repair Clearwater," "boat lift replacement Pinellas").
14. **No FAQ / objection-handling section.** Common concerns (permitting, timelines, storm-season scheduling, price ballparks) go unaddressed anywhere on the page.
15. **No storm-readiness urgency section**, despite the brief treating storm prep/recovery as a major seasonal driver and differentiator (line: "before the season and after the storm").
16. **Footer has no navigation, no legal links, no social, no secondary CTA.** It's three lines of brand copy — a wasted opportunity on every page's most-visited utility zone.
17. **Header nav has 4 links but the page has 6+ sections** — Values and Start a Project aren't reachable from nav.
18. **No sticky/persistent mobile CTA.** On a service business, a fixed "Call now" or "Start a project" bar at the bottom of the mobile viewport is standard practice and directly lifts conversion — absent here.
19. **`Commercial.tsx` and `StartProject.tsx` both end in nearly identical ivory-pill CTAs** with no visual distinction between "talk about a maintenance program" and "start a project" — a commercial-property visitor and a homeowner get the same funnel.
20. **No years-in-business number stated near the CTA.** "Since 2011" only appears once, buried in the footer — should reinforce trust right where the visitor is asked to act.
21. **Service area is stated as 4 counties but never mapped or visualized** — a simple service-area list or map graphic would reduce "do they cover me?" uncertainty, a top objection per the brief (line 660: "What is the property address?").
22. **No differentiation between residential and commercial visitor paths on entry.** The brief's recommended IA splits these; the current homepage treats them identically until `Commercial.tsx`, two-thirds down the page.

## 🟢 NICE TO HAVE (polish)

23. **`.text-stroke` outline-text technique is WebKit-only** (`-webkit-text-stroke`) with no fallback — renders as solid/invisible text in non-WebKit browsers depending on fallback color.
24. **Hero headline uses unclamped viewport units** for sizing in places — can overshoot on ultra-wide monitors without a `clamp()` ceiling.
25. **No skip-to-content link** for keyboard/screen-reader users before the fixed header.
26. **Stats in `StatsMarquee.tsx` (15+ years, 27 people, 4 counties, 70% referral) have no source/citation** — fine internally, but a visitor has no reason to trust an uncited "70%."
27. **No favicon/OG-image generation step confirmed** beyond the copied logo screenshot — worth verifying `app/icon.png` / `apple-icon.png` exist and render correctly.
28. **Reveal-on-scroll animation (`Reveal.tsx`) uses identical timing/easing everywhere** — every section arrives the same way, which flattens the "premium, alive" feeling the design system is going for. Vary delay/distance by section weight.
29. **No dark/light theme consideration** — fine as a deliberate choice (all competitors are light/navy), but should be a stated decision, not an oversight, given Vaylo's own design system defaults dark.
30. **Values section (`Values.tsx`) sits on the same `bg-plum-deep` as Commercial** directly below it — two consecutive dark sections without change in texture/typographic treatment mutes contrast.
31. **No hover/focus state differentiation for keyboard users** on the pill CTAs beyond the default browser outline (or lack thereof, depending on Tailwind reset).
32. **`StillStanding` and `Origin` both use the identical 2-col `Reveal` grid pattern** back to back — visually repetitive in a 6-section page.

## Content & Copy Issues

33. Homepage headline "Built to hold up." is strong and on-brand — keep.
34. "The name started as a joke." (Origin) is a good hook but undersells the actual punchline ("Maybe everybody needs to regress a little") by putting it mid-paragraph instead of as a pull-quote — the original draft (large pull-quote treatment) tested better structurally and should be restored.
35. Commercial section quote-headline ("'Call us when something breaks' becomes 'we help make sure it doesn't.'") is the single best line on the site — everything else should be held to that bar.
36. `StartProject.tsx` intro copy promises "no generic contact form required" directly above what is, functionally, a non-interactive contact form mockup — copy overpromises against the actual UX.
37. No mention of the 27-person crew, storm-season responsiveness, or commercial recurring-maintenance angle in the meta description — SEO/social copy undersells the differentiators that are actually on the page.

## Technical Issues

38. `app/layout.tsx` metadata has no `metadataBase`, `openGraph`, or `twitter` fields.
39. No `robots.ts` / `sitemap.ts` route handlers (Next.js App Router convention).
40. No `alt` text audit possible — there are currently no `<img>`/`next/image` elements on the page at all (zero photography, per #12).
41. No analytics/conversion tracking (GA4, GSC verification tag, or Site-Grid equivalent) confirmed wired up — can't measure whether any of these fixes move the needle without it.
42. No 404 page customization confirmed (default Next.js catch-all).
43. No form validation/error states to review since the only "form" (`StartProject`) doesn't submit.
44. No rate limiting/spam protection to review since there's no live form yet — flag as a requirement once the intake form ships (brief explicitly plans AI-assisted intake).
45. No environment-based contact info (e.g. a `siteConfig.ts` single source of truth for phone/email/address) — once real contact info arrives, it should live in one config object, not be hardcoded in three components.

## Strategic Gaps vs. Brand Brief

46. Brief's **AI phone reception / after-hours capture concept** (lines 710-740) — a real differentiator vs. every competitor benchmarked — isn't represented anywhere on the site, even as a future-facing mention.
47. Brief's **"Still Standing" durability concept** deserves its own dedicated page with real photography, not a 3-card afterthought mid-scroll.
48. Brief's **6 values** (Accountability, Longevity, Clarity, Craft, Preparedness, Useful Progress) are listed but never *demonstrated* through proof points elsewhere on the page — they read as assertions, not evidence.
49. No **case-study depth** — `StillStanding` gives year/type/one-line note; the brief's vision (line 953: "several weeks later they receive a review request") implies a fuller before/during/after narrative per project is the intended long-term content model.
50. Competitor benchmark takeaway: **Dock Experts and Kroeger Marine both put license numbers, years-in-business, and a phone number above the fold, before any brand storytelling.** Regressive currently leads with brand storytelling and never gets to credibility. Invert the order, or at minimum surface both simultaneously.

---

## Priority Action Plan

| Priority | Action | Type |
|---|---|---|
| 🔴 P0 | Get real phone/email/address/license # from client; wire into a single `siteConfig` | Data + Code |
| 🔴 P0 | Fix "Call the office" CTA to a real `tel:`/`mailto:` action | Code |
| 🔴 P0 | Restore all 9 services from the brief | Code |
| 🔴 P0 | Add phone number + CTA to header and a full footer (nav, contact, legal) | Code |
| 🟡 P1 | Add JSON-LD LocalBusiness schema + OG/Twitter metadata + robots/sitemap | Code |
| 🟡 P1 | Restore `StillStanding` visual treatment | Code |
| 🟡 P1 | Add sticky mobile CTA bar | Code |
| 🟡 P1 | Get real project photography from client; replace text-only case studies | Data + Code |
| 🟡 P1 | Add testimonials/review section (placeholder structure now, real reviews when available) | Code |
| 🟢 P2 | Fix `.text-stroke` fallback, add skip-link, vary Reveal timing by section | Code |
| 🟢 P2 | Split into multi-page IA per brief (Residential/Commercial/Projects/Storm Center) | Code |

This pass implements everything tagged **Code** above that doesn't require client-supplied data (phone number, license #, real photography, real reviews). Those four items are flagged inline in the code as `TODO(client-data)` and need to come from Kyle/the client before the CTA and trust sections can go fully live.
