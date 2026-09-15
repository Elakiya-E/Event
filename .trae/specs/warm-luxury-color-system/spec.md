# Warm Luxury Color System — Complete Website Transformation

## Problem
The current Iragu Events website uses a dark cinematic theme with extensive black/charcoal section backgrounds, neon teal accents, and bright saturated colors. The client explicitly requires a warm, soft, light luxury aesthetic inspired by premium Indian luxury event-planning studios. The dark backgrounds must be entirely eliminated across all sections, cards, overlays, forms, navigation, footer, and responsive layouts.

## Users
- **Primary**: End clients (families planning weddings, corporate HR, brand managers, and institutions across South Tamil Nadu) who visit the website to enquire about event services.
- **Secondary**: Iragu Events team (the client) who need the website to communicate luxury, warmth, creativity, and professionalism without relying on dark cinematic visuals.

## Goals
1. Transform the entire website from a dark/cinematic color system to a warm, muted, elegant visual system using ivory + cream + beige + sand + champagne + muted teal + very soft sage.
2. Remove all large black/dark charcoal section backgrounds and replace with layered warm editorial tones (warm ivory → soft off-white → cream → warm beige → off-white).
3. Ensure all text, cards, buttons, forms, overlays, badges, and UI elements adapt to the new light backgrounds with strong readability.
4. Preserve all existing website content, images, navigation structure, animations, functionality, and section order. Only visual/color properties change.
5. Deliver a result that feels like a luxury Indian event editorial magazine: soft, elegant, unique, sophisticated, and expensive — never dark, bright, neon, or overly colorful.

## Non-Goals
- Do NOT change content, images, section order, animations, GSAP timelines, ScrollTrigger, or Framer Motion behavior.
- Do NOT replace photographs or modify image paths/SVG icons.
- Do NOT change component architecture, navigation structure, or page routing.
- Do NOT add new features, forms, or sections.
- Do NOT introduce bright/vibrant colors, neon teal, strong gradients, or pure white as a dominant background.

---

## Functional Requirements

### FR-1 — Global CSS / Theme Variables
- Define all 12 palette colors as root-level CSS custom properties (NOT nested inside `@media prefers-color-scheme`) so they are universally available:
  - `--bg-primary`: #F7F3EA (warm ivory)
  - `--bg-secondary`: #FCFAF6 (soft off-white)
  - `--bg-cream`: #F1EADF (cream)
  - `--bg-beige`: #E8DFD0 (warm beige)
  - `--bg-sand`: #D8C9B5 (sand accent)
  - `--color-primary`: #292825 (deep warm charcoal — headings)
  - `--color-secondary`: #6F6A61 (warm gray — body)
  - `--color-muted`: #928B81 (muted text — small labels)
  - `--border-color`: #DED6C9 (warm light border)
  - `--accent-champagne`: #C7A978 (champagne gold — decorative)
  - `--accent-teal`: #4F918B (muted teal — small icons/labels)
  - `--accent-sage`: #AEBBAA (very soft sage — subtle details)
- Map Tailwind's `@theme` block entries (`--color-background`, `--color-foreground`, `--color-muted`, `--color-accent`, `--color-border`) to appropriate palette values.
- The `<html>`/`<body>` must use `--bg-primary` (#F7F3EA) as background and `--color-primary` (#292825) as default text color.
- No leftover `#000`, `#000000`, `black`, or near-black backgrounds anywhere unless required by a specific image/icon mask.

### FR-2 — Section Background Layered Pattern
Replace every major section background following this layered editorial pattern (top → bottom) so the page never feels flat-white:
1. Hero → warm ivory (#F7F3EA) with image surrounded by cream
2. Trust → soft off-white (#FCFAF6)
3. WhatWeDo → cream (#F1EADF)
4. USP → warm ivory (#F7F3EA)
5. CustomisedDecor → cream (#F1EADF) / beige transition
6. EventCategories → soft off-white (#FCFAF6)
7. CompleteServices → warm beige (#E8DFD0)
8. EventShowcase → warm ivory (#F7F3EA)
9. EventCreationJourney → cream (#F1EADF)
10. CaseStudies → soft off-white (#FCFAF6)
11. OurApproach → warm ivory (#F7F3EA)
12. IraguDifference → cream (#F1EADF)
13. AboutFounder → warm beige (#E8DFD0)
14. Testimonials → soft off-white (#FCFAF6)
15. Pricing → warm ivory (#F7F3EA)
16. Locations → cream (#F1EADF)
17. FAQ → soft off-white (#FCFAF6)
18. FinalCTA → warm beige (#E8DFD0)
19. Footer → warm beige (#E8DFD0) — entirely light, NOT black

### FR-3 — Typography Colors
All text must contrast properly with the new light backgrounds:
- **Headings (h1–h6)**: deep warm charcoal `#292825`. Replace any `text-white`, `text-neutral-100/200`, etc., in headings.
- **Body paragraphs**: warm gray `#6F6A61`.
- **Small labels / eyebrow tags**: muted teal `#4F918B` OR warm charcoal `#292825` (never neon teal).
- **Decorative / brand signature text**: champagne `#C7A978`.
- Never use large `text-white` on light backgrounds.
- Badges/pills should use the palette consistently (e.g., teal-950→sand/beige variants on light).

### FR-4 — Cards (Editorial Panels)
All cards become light editorial panels:
- Background: `#FCFAF6` (soft off-white)
- Border: `#DED6C9` (beige border)
- Very subtle shadow (e.g., shadow-sm or `0 1px 2px rgba(41,40,37,0.04) + 0 8px 24px rgba(41,40,37,0.04)`)
- Rounded corners where appropriate (keep existing rounded radii roughly)
- Typography inside: deep warm charcoal / warm gray
- Iconography: muted teal `#4F918B` or champagne `#C7A978` (not neon)
- Eliminate black cards, glassmorphism (backdrop-blur with dark underlay), heavy shadows, neon borders, bright gradients.
- Card hover states become slightly darker cream / slightly warmer not brighter.

### FR-5 — Buttons
- **Primary button**: muted teal `#4F918B` background + warm off-white text (e.g., #FCFAF6). Hover → darker teal `#437D77`.
- **Secondary button**: transparent warm background (or `#FCFAF6`) + deep charcoal text + thin beige `#DED6C9` border. Hover → cream `#F1EADF` fill.
- No bright cyan / neon teal buttons. No `bg-teal-500 text-black` pattern.
- Rounded pill/capsule shapes preserved.

### FR-6 — Photography Sections
- Keep the existing event photography (`/images/hero-bg.png`, `/images/hero1.png`, `/images/hero2.png`, portfolio/project images).
- **Remove or drastically lighten heavy black overlays** where they serve as cinematic darkening. Where text legibility on top of a photo requires an overlay, replace `from-black via-black/70 to-black` with a very subtle warm overlay (e.g., `from-[#F7F3EA]/40 via-transparent to-[#E8DFD0]/40`) OR use a text container panel with `#FCFAF6` bg + border around the text instead of overlaying.
- Surround photography visually with warm ivory / cream / beige / champagne accents — let the images provide the visual richness.

### FR-7 — "Trusted by People. Chosen by Brands." (TrustSection)
- Background: warm ivory `#F7F3EA`.
- Heading `#292825`; supporting text `#6F6A61`.
- Industry/card grid cards: warm off-white `#FCFAF6` with subtle beige `#DED6C9` borders.
- Muted teal used only for small icons/details; champagne for very small decorative lines/dots.
- Remove the "dark + teal ambient glow" effect.

### FR-8 — Section Dividers
- Remove all black block separators and `border-t border-neutral-800/900` dividers.
- Use one or more of: thin beige border (`#DED6C9`), large whitespace (`py-20 md:py-32`), soft cream transitions, small champagne lines (`h-px bg-[#C7A978]/40`), subtle decorative shapes (e.g., a faint curved SVG in beige), editorial spacing.

### FR-9 — Unique Subtle Visual Language
Add extremely subtle editorial details:
- Thin champagne horizontal lines alongside section eyebrow labels.
- Small numbered section markers (01, 02...) in muted teal or champagne.
- Soft paper-like tonal variation between adjacent sections (per FR-2).
- Fine borders and asymmetrical spacing where it elevates the feel.
- All additions must stay subtle — the content and images lead.

### FR-10 — Footer
- Do NOT keep the footer black.
- Footer background: warm beige `#E8DFD0`.
- Headings: deep warm charcoal `#292825`.
- Body text: warm gray `#6F6A61`.
- Links / contact labels: muted teal `#4F918B` (hover slightly darker).
- Champagne for small dividers/lines and decorative elements.
- Contact form card inside footer: soft off-white `#FCFAF6` + beige border.

### FR-11 — Navbar / Mobile Menu / Mobile CTA Bar
- Navbar: warm ivory/off-white with beige border (not dark, not white). Translucent scrolled state should be ivory-with-blur.
- Nav links: warm charcoal; active → muted teal.
- Mobile hamburger drawer: warm ivory/cream (NOT dark). Border/divider beige.
- MobileCTABar: warm ivory background + beige border (NOT `bg-neutral-900/90`). Icons follow button colors above.

### FR-12 — Forms & Inputs
- EventEnquiryForm + any inputs: soft off-white `#FCFAF6` container with beige border.
- Input/select/textarea background `#FCFAF6` (not dark). Text `#292825`. Placeholder `#928B81`.
- Focus ring: muted teal `#4F918B` / champagne `#C7A978` variants.
- Error states: muted rose-300 equivalent (keep readable).
- Success banner: soft sage or muted teal light tones, not dark.

### FR-13 — Hover / Responsive / Edge Cases
- Update every hover state, active state, and badge/tooltip to match the palette.
- Verify the mobile hamburger drawer, mobile CTA bar, and accordion FAQ rows no longer revert to the old dark theme on small viewports.
- Clean up any `backdrop-blur-md` combined with dark neutral backgrounds — keep the blur only on light panels or remove if no longer meaningful.
- Check all `color-scheme` / prefers-color-scheme code paths. Do NOT re-introduce dark through `@media (prefers-color-scheme: dark)`.

---

## Non-Functional Requirements

### NFR-1 — Scope & Fidelity
- EVERY section listed in the brief must be visually converted: Hero, Trust (Trusted by), About/Intro, USP, Customised Décor, Complete Event Planning (Categories + Services), Services, Our Work/Portfolio, Process/How We Work, Case Study, Why Iragu, Our Approach, Founder, Testimonials, Pricing, Locations, FAQ, Contact/Enquiry form, Final CTA, Footer.
- No section is "skipped because it was already partially light".

### NFR-2 — Readability & AA Contrast
- Heading/body text on every background must meet at minimum WCAG AA contrast against its local background. Verify #292825 on #F7F3EA, #FCFAF6, #F1EADF, #E8DFD0 all pass.

### NFR-3 — No Regressions on Functionality
- GSAP/ScrollTrigger animations still trigger and run identically.
- Form validation, submission states, FAQ accordion, portfolio filters, category expand/collapse all work.
- Nav spy, mobile drawer, scroll-to-form behavior, CTA links unchanged.

### NFR-4 — Consistency
- A single muted-teal/champagne accent scale is used globally rather than each component keeping its old saturated gradient accent (rose, sky, violet, amber, fuchsia "glow" classes get desaturated replacements).

---

## Constraints
- Do not modify content, images, routes, animations, order, or component structure.
- Do not install new packages or modify tailwind config.
- Only modify component files in `components/`, the global CSS at `app/globals.css`, and layout/page classes in `app/`.
- The client forbids: black/dark backgrounds, bright neon teal/cyan, highly saturated colors, strong colorful gradients, pure bright white dominance.

## Dependencies
- Existing Tailwind CSS v4 setup (current `@import "tailwindcss"` + `@theme` in `globals.css`) is the only styling engine.
- Existing components + data (`siteContent.ts`) unchanged.
- GSAP + ScrollTrigger + Framer Motion unchanged; just re-color DOM output.

## Assumptions
- Where components rely on inline Tailwind values like `bg-[#030303]`, `bg-black`, `bg-neutral-950/80`, `text-white`, `text-neutral-300`, `border-neutral-800`, those literals are converted to matching palette tones.
- Portfolio/project card image overlays (e.g., `opacity-50` + `from-neutral-950`) are lightened to keep images looking rich on warm backgrounds. This may require lowering overlay darkness and increasing the image `opacity` (e.g., 75–100% instead of 50–60%).
- "Trusted by People. Chosen by Brands." is the TrustSection heading and is restyled as specified.

## Open Questions
None at this time. All requirements are explicit in the brief.

---

## Acceptance Criteria

### Rule AC-1
No major section has a black/charcoal background. Specifically: zero instances of `bg-black`, `bg-[#020202]`, `bg-[#030303]`, `bg-[#040404]`, `bg-[#050505]`, `bg-[#0a0f0f]`, or `bg-neutral-950` on a top-level `<section>` wrapper in the diff.

### Rule AC-2
Footer background is a light tone (`#E8DFD0` preferred) and the Footer, Navbar, MobileCTABar, and mobile drawer are all light-themed with no dark wrappers.

### Rule AC-3
`globals.css` exposes all 12 palette variables at `:root` (not inside a media query) and maps `--background / --foreground / --muted / --accent / --border` correctly. `<body>` uses warm ivory by default.

### Rule AC-4
Every component file listed under `components/` (Navbar, IraguHero, TrustSection, WhatWeDo, USPSection, CustomisedDecor, EventCategories, CompleteServices, EventShowcase, EventCreationJourney, CaseStudies, OurApproach, IraguDifference, AboutFounder, Testimonials, Pricing, Locations, FAQ, FinalCTA, Footer, EventEnquiryForm, MobileCTABar) has been updated for the new palette with no residual `text-white` on plain light backgrounds.

### Rule AC-5
Primary buttons = muted teal bg + light text (not `text-black`). Secondary buttons = transparent/cream bg + charcoal text + beige border.

### Rule AC-6
Cards follow editorial styling (off-white bg + beige border + subtle shadow; not `bg-neutral-950/80 + border-neutral-800 + backdrop-blur-md` on dark).

### Rubric AC-7 — Editorial Layering (0-4, threshold ≥ 3)
- 0: Page feels flat plain white throughout.
- 1: Only one background tone used across sections; no layer separation.
- 2: Two-tone alternation (ivory↔off-white) without cream/beige transitions.
- 3: Clear four-layer progression (ivory → off-white → cream → beige) matching FR-2 sequence; section dividers use beige borders and generous whitespace.
- 4: Four-layer layering plus subtle champagne lines, numbered markers, and faint tonal shifts inside complex sections; clearly premium editorial magazine feel.

### Rubric AC-8 — Cohesion & Readability (0-4, threshold ≥ 3)
- 0: Contrast failures visible; text hard to read.
- 1: Mostly readable but inconsistent text colors across sections.
- 2: Readable; consistent heading/body/label scale but accents still feel "old theme" in places.
- 3: Fully consistent #292825 / #6F6A61 / #928B81 scale; muted teal + champagne used tastefully; every hover and focus state matches.
- 4: Fully consistent plus every single old saturated accent (rose/sky/violet "glow" gradients) has been replaced with desaturated warm / champagne / muted-teal variants, producing one unified palette.
