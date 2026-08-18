# Regressive Enterprises — Website Audit, Round 2

> Audit date: 2026-08-18
> Audited by: Claude (website-audit methodology + live competitor research)
> Site: https://regressive.sitegrid.cc (repo: regressive-Enterprises, single-page site)
> Benchmarked against LIVE, currently-operating sites in the same four counties and category:
> - **Elite Marine Dock & Seawall** (elitemarinedockandseawall.com) — serves Hillsborough, Pinellas, Pasco, Manatee. Identical service area to Regressive.
> - **Duncan Seawall** (duncanseawall.com) — SW Florida marine contractor, category-organized gallery
> - **Jupiter Dock and Seawall**, **Honc Marine**, **South Florida Dock & Seawall** — established FL marine contractors
> - General construction-portfolio best practice (Huemor, Webflow, Colorlib 2026 roundups)

## Where round 1 landed
Round 1 fixed the "can't contact us" emergency: phone number, email, robots/sitemap, JSON-LD, footer, mobile CTA, and the 9-item service list are now live. That was table stakes. This round is a different question: **does the site look and feel like the best marine contractor in Tampa Bay, or like a beautiful mockup with no proof behind it?** Right now it's the second one. Every competitor pulled above — including the one serving the exact same four counties — beats Regressive on the thing that actually converts a waterfront-property owner: **evidence**. Photos, reviews, license numbers, supplier partnerships, financing, and a real project archive. Regressive has zero images anywhere in the codebase except a logo file. That is the single fact this round is organized around.

---

## 🔴 CRITICAL — credibility infrastructure a real competitor has and Regressive doesn't

1. **There are no photographs anywhere on the site.** `find public -type f` returns one logo PNG and the default Next.js placeholder SVGs. Every "Still Standing" project card, every service tile, every section is text-only. Elite Marine's homepage leads with a "Latest Finished Projects in Tampa Bay" gallery. Duncan Seawall organizes an entire gallery page by category (Seawalls, Docks, Boat Lifts, Dredging, Electrical, Rock Revetment). A marine contractor without photos of marine construction is the single biggest credibility gap on the site.
2. **No license number displayed.** Elite Marine prints its state contractor license (SCC131153599) in the footer. `siteConfig.license.display` is still the placeholder string `"License # on file, provided on request"` — this reads as evasive, not premium, to anyone comparing tabs.
3. **No BBB, Google rating, or any third-party trust badge.** Elite Marine has a BBB certification badge above the fold. Regressive has none.
4. **No testimonials or named client reviews anywhere.** Elite Marine's homepage runs three named reviews (Paul, Bryan, Deborah) directly under the service area section. Regressive has zero — the brief itself flags "reviews need to become systematic" and nothing shipped.
5. **No supplier/partner logo strip.** Elite Marine displays six recognizable supplier brands (Golden Boat Lifts, WearDeck, Simpson Strong-Tie, etc.) — this borrows trust from established brands and signals the contractor uses quality materials. Regressive names no materials or manufacturers anywhere.
6. **No project gallery page at all**, categorized or otherwise. Every competitor researched has one. Regressive's only "proof" section (`StillStanding.tsx`) is three text-only anecdotes with no images, no addresses beyond a neighborhood name, and no way to see more than three.
7. **The three "Still Standing" project claims are unverifiable and read as invented.** "Belleair Bluffs," "Indian Rocks Beach," "Clearwater Harbor" with a year and one sentence each — no photo, no client name, no way to confirm this is a real job. Competitors show the actual dock/seawall. As written this looks like placeholder copy dressed as testimony.
8. **No financing option mentioned.** Elite Marine has "Financing Options" as a top-level nav item — seawall/dock work runs $15k–$100k+, financing is a real conversion lever for this price point that Regressive doesn't address once.
9. **No warranty or guarantee language anywhere.** A visitor spending five figures on a seawall has no stated warranty, workmanship guarantee, or what happens if something fails. Nothing on the page addresses this.
10. **`StatsMarquee.tsx` states unverifiable precision** ("27 people on crew," "70% referrals") with no source, no case study, no testimonial backing it up — next to competitors who back every claim with a named review or a badge, invented-feeling precision undercuts trust rather than building it.

## 🟡 IMPORTANT — structural gaps vs. the category

11. **No dedicated gallery/portfolio page.** Every competitor researched runs one as either a top-level nav item or a prominent homepage section with more than 3 examples. This is the highest-leverage missing page on the site.
12. **No before/after comparison format**, which is the single most persuasive content type in this category (Florida Seawall Solutions runs a dedicated before/after page; multiple competitors use it as their primary conversion device). Regressive has never shown a "here's what we started with" image.
13. **Single-page site with anchor-only "nav."** `Header.tsx` lists Services / Projects / Values / Commercial / About, but `app/page.tsx` has exactly one route — all five are `#anchor` jumps on the same page, not real pages. This means none of these topics can independently rank in search, and a visitor who bookmarks or shares "the Commercial page" gets the whole homepage instead.
14. **No individual service pages.** "Seawall Repair," "Boat Lift Service," etc. are 2-3 sentence tiles in a grid (`Services.tsx`) with no detail: process, typical timeline, typical cost range, materials used, permitting handled by whom. A homeowner researching "seawall cap repair Clearwater" has no page to land on.
15. **No process / "how it works" section.** Competitors and best-practice research both call out a clear step-by-step (inspection → quote → permitting → build → inspection/close-out) as standard. Regressive has none — a visitor doesn't know what happens after they click "Start a Project."
16. **No FAQ section**, despite obvious high-frequency questions this category always gets: permitting who handles it, how storm season affects scheduling, whether they work with HOAs/condo boards, financing, typical price ranges, whether they remove/replace vs. repair.
17. **No case-study depth for the "Commercial & recurring" audience.** `Commercial.tsx` lists 5 target audiences (condo associations, marinas, etc.) with zero examples of an actual condo association or marina Regressive has served — this is the highest-value segment on the page and it's the least substantiated.
18. **No service-area map or visual.** "Pinellas, Hillsborough, Pasco, and Manatee counties" is a text string in `site-config.ts` with no map, no city list, no ZIP coverage — a visitor near a county line can't tell if they're covered.
19. **No blog, resource, or "storm center" content**, despite the brief explicitly calling out storm prep/recovery and a "Waterfront Owner's Guide" as differentiators. Hurricane season is the highest-intent moment for this business and there's no content built for it.
20. **No permitting information anywhere.** Marine construction in Florida requires county/state/sometimes Army Corps permits — every serious competitor addresses this because it's the #1 homeowner anxiety in this category. Regressive never mentions the word "permit."
21. **No years-in-business badge repeated at decision points.** "Since 2011" and "15 years" appear once each, in different components, never combined into a persistent trust badge near a CTA the way "40+ years" or "65+ years" badges appear on Jupiter Dock and Honc Marine's homepages.
22. **No secondary conversion path for browsers not ready to submit a full project inquiry.** Every CTA on the site (`Header`, `StartProject`, `Commercial`, `MobileCTA`) points to the same single flow. There's no "just call to ask a question" framing distinct from "start a project," and no email-capture / newsletter / "send us photos" lightweight option for someone still deciding.
23. **`StartProject.tsx`'s 5 intake questions are static text, not a form.** A visitor reads "Answer these in your message" but there's no field to answer them in — it's instructions for writing an email, not a lead form. Every competitor benchmarked runs an actual quote-request form.
24. **No map/embed showing Clearwater HQ location.** No physical address is shown at all beyond "Clearwater, FL" — competitors typically show a service map or at least a city, which Regressive does, but no pin, no "serving from" visual anchor.

## 🟢 NICE TO HAVE — polish that separates "good" from "best in the category"

25. **No video anywhere.** Nothing in the codebase references video; competitors in this vertical increasingly use short dock-build or seawall-pour timelapses — high persuasion, low competitive coverage right now, real opportunity to differentiate.
26. **No team/crew section.** `StatsMarquee` claims "27 people on crew" but no face, name, or role is shown anywhere — Huemor's research explicitly flags "people buy from people" as a differentiator competitors under-invest in; a founder photo (Russell Mercer) alongside the `Origin.tsx` story would substantiate a story that's currently just text.
27. **No social links anywhere** (Instagram, Facebook, YouTube) — Elite Marine links all four in its footer. For a company doing visually rich work (docks, seawalls under construction), social presence is free marketing surface Regressive isn't pointing to.
28. **No dredging, marina construction, or rock revetment services listed**, all of which appear as named categories on 2+ competitor sites — worth confirming with the client whether Regressive does this work; if yes, it's missing revenue-relevant SEO surface, if no, worth knowing what's explicitly out of scope.
29. **No "pay your invoice" or client portal link** — a small trust/operations signal Elite Marine surfaces in primary nav that implies an established back office, not a two-person outfit.
30. **No hurricane/storm urgency banner or seasonal messaging system** — nothing on the site changes between June (pre-season prep messaging opportunity) and post-storm (emergency response messaging opportunity), despite storm work being called out in the brief as a seasonal driver.
31. **`Values.tsx` values are asserted, never demonstrated.** (Not read in this pass but referenced from round 1 — worth pairing each value with a one-line proof point, e.g., "we answer the phone" next to an actual response-time stat.)
32. **No downloadable or shareable content** (a one-page storm-prep checklist, a "questions to ask before hiring a marine contractor" guide) — a lightweight lead magnet that fits the brief's "Waterfront Owner's Guide" idea and that competitors in this specific niche generally don't have either, making it a real differentiation opportunity rather than catch-up work.
33. **No comparison of vinyl vs. concrete vs. rip-rap seawall options anywhere** — Duncan Seawall's gallery captions reference specific materials/methods per project (e.g., "Vinyl Seawall with Concrete Cap"); Regressive never names a construction method, which reads as less technically authoritative for a company claiming 15 years of specialized experience.
34. **Favicon/OG image is the same generic logo reference used sitewide** — no dedicated, cropped social-share image sized for OG (1200x630) exists; sharing a specific service page (once they exist) would still show the homepage image.
35. **No accessibility statement or visible focus-state audit done on the new mobile CTA / skip link** added in round 1 — worth a pass to confirm keyboard-only navigation reaches every interactive element in the same order sighted users expect.

## Competitive gap summary — what "best in the space" actually requires

| Feature | Elite Marine | Duncan Seawall | Regressive (now) |
|---|---|---|---|
| Project photo gallery | Yes, homepage + dedicated | Yes, categorized page | **No — zero images** |
| Before/after content | Implied via gallery | No | **No** |
| License # displayed | Yes | — | **No (placeholder)** |
| Testimonials/reviews | Yes, 3 named + BBB | — | **No** |
| Supplier/partner logos | Yes, 6 brands | — | **No** |
| Financing info | Yes, top nav | — | **No** |
| Real lead form | Yes | — | **No (static text)** |
| Service area visualization | Text list | — | Text list only |
| Individual service detail | Grid + "All Services" link | Category anchors | 9 tiles, no detail |
| Multi-page site | Yes | Yes | **No — single page** |

## Priority Action Plan

| Priority | Action | Type | Effort |
|---|---|---|---|
| 1 | Get real project photos from the client (even phone photos of past jobs) and rebuild `StillStanding.tsx` as an actual photo gallery | Content + Code | High (blocked on client) |
| 2 | Replace the static intake-question cards in `StartProject.tsx` with a working lead form (name/phone/email/address/photo upload → email or DB) | Code | Medium |
| 3 | Get real license/insurance numbers from client, replace `site-config.ts` placeholders | Content | Low (blocked on client) |
| 4 | Add a testimonials section — even 2-3 real quotes gathered by phone/text from past clients | Content + Code | Medium |
| 5 | Add a FAQ section covering permitting, timeline, storm-season scheduling, pricing ballparks | Code + Copy | Medium |
| 6 | Split into real pages (at minimum: /gallery, /services, /commercial) instead of one long scroll, for both SEO and shareability | Code | High |
| 7 | Add financing mention + warranty/guarantee language near every CTA | Copy | Low |
| 8 | Add supplier/material names to service descriptions (what brand of lift, what seawall method) | Copy | Low |
