# Implementation Tasks — Warm Luxury Color System

Tasks are ordered by dependency. Complete them top-to-bottom. Status markers live per heading.

## Task 1: Global Theme & CSS Variables Foundation
- **Status**: completed
- **Priority**: high
- **Files**: [app/globals.css](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/app/globals.css)
- **Parent Criterion**: AC-1, AC-2, AC-3

### Work
1. Restructure `:root` to expose all 12 palette CSS custom properties at root level (NOT inside `@media prefers-color-scheme`):
   - `--bg-primary: #F7F3EA`
   - `--bg-secondary: #FCFAF6`
   - `--bg-cream: #F1EADF`
   - `--bg-beige: #E8DFD0`
   - `--bg-sand: #D8C9B5`
   - `--color-primary: #292825`
   - `--color-secondary: #6F6A61`
   - `--color-muted: #928B81`
   - `--border-color: #DED6C9`
   - `--accent-champagne: #C7A978`
   - `--accent-teal: #4F918B`
   - `--accent-sage: #AEBBAA`
2. Update Tailwind `@theme` block aliases (`--color-background`, `--color-foreground`, `--color-muted`, `--color-accent`, `--color-border`) to map to palette values (background → bg-primary, foreground → color-primary, muted → color-secondary, accent → accent-teal, border → border-color). Also add an accent-champagne alias if useful.
3. Ensure `<html>/<body>` picks up warm ivory and deep charcoal defaults. Keep Lenis/scroll rules intact.
4. Remove or move out the errant `@media (prefers-color-scheme: light)` wrapper currently hiding palette vars — palette must always be active.

### Test Requirements
- **Rule TR 1.1**: Palette variables defined directly in `:root`; `--bg-primary` resolves to `#F7F3EA` and `--color-primary` to `#292825` regardless of system preference.
- **Rule TR 1.2**: Body element in DOM inspector shows `background-color` equivalent to `#F7F3EA` and `color` equivalent to `#292825`.
- **Rubric TR 1.3** (0-2, threshold ≥ 2): All 12 palette vars present, no duplicate definitions, and no dark-only fallbacks left behind; `@theme` block aliases correctly mirror them.
  - 0: Vars missing or still media-wrapped.
  - 1: Vars defined but aliases inconsistent.
  - 2: Exactly 12 vars at `:root` plus correct Tailwind aliases.
- **Completion Evidence**: Snippet of `globals.css` `:root` block with all vars; DevTools computed body colors.

---

## Task 2: Navbar + Mobile UI (Navbar, MobileCTABar, Mobile Hamburger Drawer)
- **Status**: completed
- **Priority**: high
- **Files**:
  - [components/Navbar.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/Navbar.tsx)
  - [components/MobileCTABar.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/MobileCTABar.tsx)
- **Parent Criterion**: AC-2, AC-4, AC-5

### Work
1. **Navbar header wrapper**: Replace scrolled/non-scrolled `bg-primary / bg-secondary` (which were pointing to the old dark palette) with `bg-[#FCFAF6]/95 backdrop-blur-md border-b border-[#DED6C9]` (off-white translucent + beige border).
2. **Desktop nav links**: Convert `text-neutral-300 hover:text-white` and active `text-teal-400` → `text-[#292825]` default, active `text-[#4F918B] font-semibold`. Active underline stays `#4F918B`.
3. **Primary nav CTA button**: Convert `bg-teal-500 text-black` → `bg-[#4F918B] text-[#FCFAF6] hover:bg-[#437D77]`.
4. **Mobile hamburger toggle**: Replace `bg-neutral-900/80 border-neutral-800 text-white` → `bg-[#FCFAF6] border-[#DED6C9] text-[#292825] hover:text-[#4F918B] hover:border-[#4F918B]/40`.
5. **Mobile hamburger drawer panel**: Replace `bg-primary / border-border` (old dark) with `bg-[#F7F3EA] border-t border-[#DED6C9]`. Update drawer internals:
   - Section header divider `border-neutral-800/80` → `border-[#DED6C9]`; text `text-neutral-400` → `text-[#6F6A61]`.
   - Nav links: convert old `bg-neutral-900 text-teal-400 / text-neutral-300 hover:text-white hover:bg-neutral-900/50` → inactive links `text-[#292825] hover:bg-[#F1EADF]`; active link `bg-[#F1EADF] text-[#4F918B] border border-[#DED6C9]`.
   - Mobile drawer primary CTA: same as Task 2 step 3 (muted teal + light text).
   - Mobile drawer footer contact tiles: `border-neutral-800 bg-neutral-900/60 text-neutral-300` → `border-[#DED6C9] bg-[#FCFAF6] text-[#292825]` with muted teal icons.
6. **MobileCTABar**: Fixed bottom bar bg `bg-neutral-900/90 border-neutral-800` → `bg-[#F7F3EA]/95 backdrop-blur-md border-t border-[#DED6C9]`.
   - CALL: `text-teal-400 hover:text-white` → `text-[#4F918B] hover:text-[#292825]`.
   - WHATSAPP: keep #25D366 text but make surrounding bg/panel work on light.
   - PLAN EVENT: `text-teal-500 bg-teal-950` → `text-[#FCFAF6] bg-[#4F918B] hover:bg-[#437D77]` rounded.

### Test Requirements
- **Rule TR 2.1**: Navbar bg is a light tone at all scroll states; no `neutral-900/80` or `bg-black` class left.
- **Rule TR 2.2**: Navbar active link uses `#4F918B` and never `text-teal-400` neon.
- **Rule TR 2.3**: Mobile hamburger drawer opens with an ivory/cream background, not a dark one.
- **Rule TR 2.4**: MobileCTABar at xl breakpoint uses `#F7F3EA` class family (not `bg-neutral-900*`).
- **Rubric TR 2.5** (0-2, threshold ≥ 2): All hover/active/focus/scroll states across Navbar + drawer + CTA bar have been re-themed consistently and nothing reverts to dark under 360–425px widths.
  - 0: Multiple states still dark.
  - 1: Mostly light but some hovers still show old teal/dark.
  - 2: Every state uses palette and mobile widths confirmed clean.
- **Completion Evidence**: 2 screenshots (navbar scrolled + mobile drawer open) + 1 of mobile CTA bar.

---

## Task 3: Hero Section (IraguHero)
- **Status**: completed
- **Priority**: high
- **Files**: [components/IraguHero.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/IraguHero.tsx)
- **Parent Criterion**: AC-1, AC-4, AC-6, FR-6

### Work
1. Section wrapper bg: `bg-[#0a0f0f]` → `bg-[#F7F3EA]`.
2. Left content panel: `text-white` plus `clipPath` band previously used on dark. Replace with a warm panel (e.g., `text-[#292825]` on `bg-[#F1EADF]` or just ivory; keep the clip shape but swap its SVG path fill from `#0a0f0f` → `#F7F3EA`).
3. Badge: `border-teal-400/70 text-teal-400 bg-primary` (old dark bg-primary) → `border-[#4F918B]/40 text-[#4F918B] bg-[#FCFAF6]`; pulse dot → `bg-[#C7A978]`.
4. H1 heading: mix of white + text-primary (old dark). All headings become `text-[#292825]`; the accent phrase ("Create Stress-Free") becomes `text-[#4F918B]` or champagne `text-[#C7A978]` per typography rules.
5. Description p: `text-neutral-300` → `text-[#6F6A61]`.
6. CTAs:
   - Primary: `bg-accent-teal hover:bg-accent-teal/80 text-primary font-bold` (old "teal bg + near-black text" combo) → `bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6]`.
   - Secondary: `border-primary text-primary font-bold hover:bg-primary/10` → `border-[#DED6C9] text-[#292825] hover:bg-[#F1EADF]`.
7. Feature icons (Leaf / Calendar / Sparkles): Currently text-`[#d4af37]` champagne on dark. Keep champagne `#C7A978` icons; make labels `text-[#292825]`; drop any "text-white" on secondary feature labels.
8. Bottom tagline: `text-white/70` → `text-[#6F6A61]`; the accent line keeps champagne `#C7A978`.
9. Right photo panel overlays: currently `bg-gradient-to-r from-[#0a0f0f]` (×2) to "fade photo into dark". Replace left-edge fade with very subtle warm fade: `from-[#F7F3EA] via-[#F7F3EA]/60 to-transparent` AND increase image legibility by removing the redundant double-black-gradient; keep only one soft warm fade on left edge.
10. Script overlay top-right: `text-white italic` → `text-[#292825]` on a small translucent ivory chip if needed, or just position with margin; champagne line beneath remains `#C7A978`.
11. Bottom-right small cards: `border-white/30` → `border-[#DED6C9]`; badges "MORE THAN EVENTS": `bg-primary text-xs uppercase text-primary` (old) → `bg-[#FCFAF6] text-[#292825] border border-[#DED6C9]` with champagne divider.
12. Curved SVG separator path `fill="#0a0f0f"` → `fill="#F7F3EA"`.

### Test Requirements
- **Rule TR 3.1**: Hero `bg-[#0a0f0f]` removed; section uses warm palette bg.
- **Rule TR 3.2**: No `text-white` in hero left-panel text (except possibly a button with explicit light text on teal button, which is allowed).
- **Rule TR 3.3**: Photo left-edge SVG fill and gradients use the ivory value.
- **Rubric TR 3.4** (0-2, threshold ≥ 2): Editorial look achieved — photo surrounded by warm tones with soft subtle champagne/teal accents; no residual dark cinematic effect.
  - 0: Obvious dark holes remain.
  - 1: Converted but still feels "photo on flat white".
  - 2: Layered warmth (ivory panel + cream badges + champagne lines) matches the editorial target.
- **Completion Evidence**: Full-viewport hero screenshot (desktop) and one 375px-wide mobile crop.

---

## Task 4: Trust Section / Clients & Collaborations
- **Status**: completed
- **Priority**: high
- **Files**: [components/TrustSection.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/TrustSection.tsx)
- **Parent Criterion**: AC-1, AC-4, AC-6, FR-7

### Work
1. Section bg `bg-[#030303] border-t border-neutral-800/70` → `bg-[#FCFAF6] border-t border-[#DED6C9]`.
2. Remove ambient teal-500/5 glow blur or replace with a very faint champagne cream glow (`bg-[#C7A978]/5`).
3. Section eyebrow badge: old teal-950/30 teal-400 → `border border-[#4F918B]/30 bg-[#FCFAF6] text-[#4F918B]`; pulse dot → `bg-[#C7A978]`.
4. H2: `text-white` → `text-[#292825]`.
5. P: `text-neutral-400` → `text-[#6F6A61]`.
6. Brand logo cards / Industry cards: convert `border-neutral-800/80 bg-neutral-950/70 backdrop-blur-md hover:border-teal-500/40` → `border-[#DED6C9] bg-[#FCFAF6] hover:border-[#C7A978]/60 shadow-sm`; drop heavy dark shadows; icon container: `bg-neutral-900 border-neutral-800 text-teal-400 group-hover:bg-teal-500 group-hover:text-black` → `bg-[#F1EADF] border-[#DED6C9] text-[#4F918B] group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]`.
7. Card headings: `text-white group-hover:text-teal-300` → `text-[#292825] group-hover:text-[#4F918B]`.
8. Card descriptions: `text-neutral-400` → `text-[#6F6A61]`.
9. Card footer: `border-t border-neutral-800/50 text-neutral-500` + teal-400 icon → `border-t border-[#DED6C9] text-[#928B81]` with `text-[#4F918B]` icon.
10. Bottom "Client & brand logos published…" note: `bg-neutral-900/40 border-neutral-800/80 text-neutral-400` → `bg-[#F1EADF] border-[#DED6C9] text-[#6F6A61]`. Inquire link `text-teal-400` → `text-[#4F918B]`.

### Test Requirements
- **Rule TR 4.1**: Section has no `bg-[#030303]` or `bg-neutral-950` card classes.
- **Rule TR 4.2**: H2 heading is `#292825`; supporting text `#6F6A61`.
- **Rubric TR 4.3** (0-2, threshold ≥ 2): The "Trusted by People. Chosen by Brands." section reads as an editorial client grid on warm ivory/off-white with champagne/teal micro-details.
  - 0: Still "dark grid with teal glow".
  - 1: Light but inconsistent card treatments.
  - 2: Consistent warm off-white cards + beige borders + muted teal icons only.
- **Completion Evidence**: Section screenshot (desktop + mobile grid).

---

## Task 5: WhatWeDo, USPSection, CustomisedDecor — Three Middle-Top Sections
- **Status**: completed
- **Priority**: high
- **Files**:
  - [components/WhatWeDo.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/WhatWeDo.tsx)
  - [components/USPSection.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/USPSection.tsx)
  - [components/CustomisedDecor.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/CustomisedDecor.tsx)
- **Parent Criterion**: AC-1, AC-4, AC-6, AC-8, FR-2, FR-6, FR-9

### Work — WhatWeDo (bg → cream #F1EADF)
1. Section `bg-[#050505] text-white border-t border-neutral-900` → `bg-[#F1EADF] border-t border-[#DED6C9]`.
2. Eyebrow `text-teal-400` → `text-[#4F918B]`.
3. H2 `text-white` → `text-[#292825]`.
4. Subheading `text-teal-400` → `text-[#C7A978]` (champagne, decorative).
5. Intro box: `bg-neutral-900/80 border-neutral-800 text-neutral-200` → `bg-[#FCFAF6] border-[#DED6C9] text-[#292825]`.
6. Body intro paragraph `text-white` → `text-[#292825]`; body rest `text-neutral-300` → `text-[#6F6A61]`.
7. Highlight blockquote: `border-l-2 border-teal-500 pl-4 text-teal-300 italic` → `border-l-2 border-[#C7A978] text-[#4F918B] italic`.

### Work — USPSection (bg → warm ivory #F7F3EA)
1. Section wrapper `bg-[#050505]` → `bg-[#F7F3EA]`.
2. Remove radial gradient `rgba(13,148,136,0.08)` and the old white-dot texture → replace with optional very faint champagne paper texture using `rgba(199,169,120,0.04)` dots.
3. Eyebrow badge, H2, body text: same pattern as above (`text-[#292825]` headings, `text-[#6F6A61]` body, `text-[#4F918B]` accent phrase + eyebrow).
4. 4 process cards: `border-neutral-800/80 bg-neutral-900/40 backdrop-blur-md` → `border-[#DED6C9] bg-[#FCFAF6] shadow-sm`. Remove saturated gradients `from-amber-500 to-yellow-400` etc → desaturate to `from-[#C7A978]/40 via-[#D8C9B5]/30 to-transparent` and muted teal/sage variants. Icon container `bg-gradient-to-br from-X to-Y` → `bg-[#F1EADF] border-[#DED6C9] text-[#4F918B]` (or champagne). Step numbers: `text-neutral-500` → `text-[#928B81]`. H3 card title: `text-white` → `text-[#292825]`. Description: `text-neutral-400` → `text-[#6F6A61]`. Connector arrows `text-neutral-600` → `text-[#928B81]`.
5. Mobile process connector visual underline: `text-neutral-400` labels → `text-[#6F6A61]`; arrows stay `text-[#4F918B]`.

### Work — CustomisedDecor (bg → cream / beige transition; cinematic header becomes editorial)
1. Section `bg-black` → multi-tone: cinematic header band uses a soft warm overlay (not black), and body uses cream. Suggest `bg-[#F1EADF]` wrapper.
2. Cinematic header band `min-h-[50vh]`: remove `from-black via-black/70 to-black` triple dark gradient and `from-black/60...to-black/60` overlay → replace with subtle warm overlay: e.g., `from-[#F7F3EA]/60 via-[#F7F3EA]/10 to-[#F1EADF]/70`. Remove saturated pink/rose ambient glow.
3. Decor eyebrow badge (pink-950/20 text-pink-300) → neutralized: `border-[#4F918B]/30 bg-[#FCFAF6] text-[#4F918B]`.
4. H2: `text-white` → `text-[#292825]`. The gradient span `from-pink-400 via-rose-300 to-amber-300` → replace with solid champagne `text-[#C7A978]` (no bright gradient per FR).
5. Subheading `text-neutral-200` → `text-[#6F6A61]`.
6. Intro paragraph `text-white` → `text-[#292825]`; secondary `text-neutral-300` → `text-[#6F6A61]`.
7. 7 element grid cards + closing card: `bg-neutral-950/60 backdrop-blur-md… border-X/20` → `bg-[#FCFAF6] border-[#DED6C9] hover:border-[#C7A978]/60`. Desaturate all 7 color-scheme gradients (rose, amber, pink, violet, teal, sky, yellow) → unified warm palette variants `from-[#C7A978]/20 via-[#F1EADF] to-transparent`. Icon bg `bg-neutral-800/80` → `bg-[#F1EADF] border-[#DED6C9]`; icon text colors → muted teal or champagne only. Card titles: `text-white` → `text-[#292825]`; descriptions: `text-neutral-400` → `text-[#6F6A61]`.
8. Closing teal quote card: `bg-gradient-to-br from-teal-950/30 to-neutral-950/60` → `bg-[#F1EADF] border-[#DED6C9]` with quote text `text-[#4F918B]` instead of `text-teal-300`.
9. CTA button `from-pink-500 to-rose-500 text-white` → `bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6]`.

### Test Requirements
- **Rule TR 5.1**: Zero `bg-black`, `bg-[#050505]`, `bg-neutral-950/60`, or `from-black via-black/70 to-black` left in these three files.
- **Rule TR 5.2**: USPSection process cards have editorial light styling per AC-6 (no backdrop-blur on dark).
- **Rule TR 5.3**: CustomisedDecor cinematic header does not use black triple-gradient; image is surrounded by warm overlay tones.
- **Rubric TR 5.4** (0-2, threshold ≥ 2): Section sequence feels layered editorial (cream → ivory → cream/beige) with champagne accent lines and muted teal eyebrow labels, never flat.
  - 0: Plain white dump.
  - 1: Colors changed but flat single-tone in each.
  - 2: Clearly three distinct warm backgrounds + subtle inside-section tonal shifts.
- **Completion Evidence**: Per-section desktop screenshots.

---

## Task 6: EventCategories + CompleteServices (Services & Event Planning Grids)
- **Status**: completed
- **Priority**: high
- **Files**:
  - [components/EventCategories.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/EventCategories.tsx)
  - [components/CompleteServices.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/CompleteServices.tsx)
- **Parent Criterion**: AC-1, AC-4, AC-6, AC-8, FR-2, FR-4, FR-5

### Work — EventCategories (bg → off-white #FCFAF6)
1. Section `bg-[#030303]` → `bg-[#FCFAF6]`. Remove dark ambient glows; replace with faint cream blurs if any.
2. Tabs/filters buttons: `bg-teal-500 text-black / bg-neutral-900/60 text-neutral-400 hover:bg-neutral-800 border-neutral-800` → active `bg-[#4F918B] text-[#FCFAF6]`; inactive `border-[#DED6C9] bg-[#F7F3EA] text-[#6F6A61] hover:text-[#292825] hover:border-[#C7A978]/60`.
3. Main category cards: `border-neutral-800/90 bg-neutral-950/70 backdrop-blur-md` + life/corporate/institutional/brand color accents → `border-[#DED6C9] bg-[#F7F3EA]`. Keep 4 distinct theme identities but **desaturate** all 4 `categoryTheme` configs: replace saturated `rose/teal/amber/purple -500/30/950` with warm equivalents using champagne `#C7A978`, muted teal `#4F918B`, sand `#D8C9B5`, and sage `#AEBBAA`.
4. Category card header titles: `text-white` → `text-[#292825]`. Descriptions: `text-neutral-400` → `text-[#6F6A61]`.
5. "Discuss" and explore/collapse buttons: dark border variants → `bg-[#FCFAF6] border-[#DED6C9] text-[#292825] hover:text-[#4F918B] hover:border-[#4F918B]/40`.
6. ItemsWithDesc sub-cards `border-neutral-800/80 bg-neutral-900/40 hover:bg-neutral-900/70` → `border-[#DED6C9] bg-[#FCFAF6] hover:bg-[#F1EADF]`. H4 `text-white group-hover:text-teal-300` → `text-[#292825] group-hover:text-[#4F918B]`. P `text-neutral-400` → `text-[#6F6A61]`. Icon container + color use unified warm/teal palette.
7. Format pills grid items: same `border-[#DED6C9] bg-[#F7F3EA]` pattern.

### Work — CompleteServices (bg → warm beige #E8DFD0)
1. Section `bg-[#030303] border-t border-neutral-800/60` → `bg-[#E8DFD0] border-t border-[#DED6C9]`.
2. 10 service cards (`serviceItems` config): transform `border-neutral-800/80 bg-neutral-950/60 backdrop-blur-md` → `border-[#DED6C9] bg-[#FCFAF6] shadow-sm hover:shadow-md`. Each `iconBg/badge/accentDot/gradient` uses the new desaturated warm palette mapping for each category (muted teal/champagne/sage/sand/rose muted desaturated / amber muted desaturated per card). No `group-hover:bg-teal-500 group-hover:text-black` → `group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]`.
3. Text swaps: H3 `text-white` → `text-[#292825]`. P `text-neutral-400` → `text-[#6F6A61]`. Numbers `text-neutral-500` → `text-[#928B81]`.
4. Closing trust banner: `border-neutral-800/80 bg-neutral-900/40 backdrop-blur-md` → `border-[#DED6C9] bg-[#F7F3EA]`. Text scale same as above.

### Test Requirements
- **Rule TR 6.1**: Not a single `bg-neutral-950*`, `backdrop-blur-md on dark`, or `border-neutral-800*` base card remains in these two files.
- **Rule TR 6.2**: No active tab/button uses `text-black`; light text on muted teal prevails.
- **Rubric TR 6.3** (0-2, threshold ≥ 2): Both grids look premium-editorial (subtle borders + soft paper-like panels, not heavy cards) while still visually distinguishing the 4 categories & 10 services via muted accents.
  - 0: Plain tables.
  - 1: Light but everything identical/boring.
  - 2: Clearly premium editorial panels with 4 distinct-but-muted sub-themes.
- **Completion Evidence**: Desktop screenshots of (a) EventCategories expanded and (b) CompleteServices 10-card grid.

---

## Task 7: EventShowcase (Portfolio/Our Work), EventCreationJourney, CaseStudies
- **Status**: completed
- **Priority**: high
- **Files**:
  - [components/EventShowcase.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/EventShowcase.tsx)
  - [components/EventCreationJourney.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/EventCreationJourney.tsx)
  - [components/CaseStudies.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/CaseStudies.tsx)
- **Parent Criterion**: AC-1, AC-4, AC-6, FR-6, FR-8

### Work — EventShowcase (bg → warm ivory #F7F3EA)
1. Section bg `bg-[#030303] border-t border-neutral-800/70` → `bg-[#F7F3EA] border-t border-[#DED6C9]`.
2. Filters/tabs: `bg-teal-500 text-black` + dark variants → same pattern from Task 6.
3. Project cards: `border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md hover:border-teal-500/50` → `border-[#DED6C9] bg-[#FCFAF6] hover:border-[#C7A978]/60`. Remove heavy neon teal shadow; replace with subtle champagne/cream shadow.
4. Image header: `bg-neutral-900` + `opacity-50` image + `from-neutral-950 via-neutral-950/50 to-transparent` overlay → increase image opacity to ~0.85–0.95; replace overlay with very subtle warm `from-[#FCFAF6]/80 via-transparent to-transparent` for text chip legibility OR put category badges inside small translucent ivory panels.
5. Badges & metadata chips: convert from `bg-secondary backdrop-blur-md border-teal-500/30 text-teal-300` → `bg-[#F7F3EA]/95 border-[#DED6C9] text-[#4F918B]`.
6. Content: H3 `text-white group-hover:text-teal-300` → `text-[#292825] group-hover:text-[#4F918B]`. P `text-neutral-300` → `text-[#6F6A61]`. Service pills: `bg-neutral-900 border-neutral-800 text-neutral-400` → `bg-[#F1EADF] border-[#DED6C9] text-[#6F6A61]`. Footer `border-t border-neutral-800/80` → `border-t border-[#DED6C9]`. "View Project" link: `text-teal-400` → `text-[#4F918B]`. Verified label `text-neutral-500` → `text-[#928B81]`.
7. Empty state card: same editorial panel conversion; primary CTA `bg-teal-500 hover:bg-teal-400 text-black` → `bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6]`.

### Work — EventCreationJourney (bg → cream #F1EADF)
1. Section bg, eyebrow badge, H2, P: same color rules as above. Remove dark ambient glows.
2. Desktop 6 timeline cards: `border-neutral-800/90 bg-neutral-950/70 backdrop-blur-md` → `border-[#DED6C9] bg-[#FCFAF6]`. Desaturate 6 `stepAccents` (teal/sky/violet/amber/rose/emerald) → warm palette 6-tone distribution using champagne, muted teal, sage, sand, light rose, light amber. Remove strong glow shadows; keep very subtle cream shadows. Icon container `group-hover:bg-X group-hover:text-black` → `group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]`.
3. Top ↔ bottom connector gradients `from-teal-500/30 via-sky…` → desaturated → `from-[#C7A978]/40 via-[#DED6C9] to-[#4F918B]/30`.
4. "Concept & Planning → Execution & Celebration" pill: `border-neutral-800 bg-neutral-900/60 text-neutral-400` → `border-[#DED6C9] bg-[#F7F3EA] text-[#6F6A61]`. Arrow `text-teal-400` + label `text-teal-400` → keep `text-[#4F918B]`.
5. Mobile timeline: `ml-6 border-l-2 border-teal-500/30` → `border-l-2 border-[#C7A978]/50`. Node marker `bg-primary border-2 border-teal-400` → `bg-[#FCFAF6] border-2 border-[#4F918B]`. Card panel same editorial light.
6. Closing promise banner: `border-neutral-800/80 bg-gradient-to-r from-neutral-950 via-neutral-900/60 to-neutral-950` → `border-[#DED6C9] bg-gradient-to-r from-[#F7F3EA] via-[#FCFAF6] to-[#F7F3EA]`. Teal radial light → faint champagne.

### Work — CaseStudies (bg → off-white #FCFAF6)
1. Section bg, eyebrow, H2, supporting, description same palette. Remove dark blurs.
2. Case-study layout card `border-neutral-800/90 bg-neutral-950/80` → `border-[#DED6C9] bg-[#F7F3EA]`.
3. Left visual 5-col column: `border-b lg:border-r border-neutral-800/80 bg-neutral-900/40` → `bg-[#F1EADF]`.
   - Image container `bg-neutral-900` + overlay + `opacity-60` image → remove dark overlay, raise image opacity to ~0.9; use warm frame.
   - Timeframe pill `bg-rose-950/80 border-rose-500/40 text-rose-300` → `bg-[#FCFAF6] border-[#C7A978]/50 text-[#6F6A61]` (rose desaturated).
   - Title H3 `text-white` → `text-[#292825]`. Event pill `bg-neutral-900 border-neutral-800` → `bg-[#FCFAF6] border-[#DED6C9] text-[#6F6A61]`.
   - CTA button `bg-teal-500 hover:bg-teal-400 text-black` → `bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6]`.
4. Right 7-col narrative (Challenge / Plan / Execution / Result):
   - Challenge P `text-white` → `text-[#292825]`; label rose-400 → `text-[#C7A978]` (champagne decorative). Requirements checklist panel `bg-neutral-900/60 border-neutral-800/80` → `bg-[#FCFAF6] border-[#DED6C9]`. Checklist `text-neutral-300` → `text-[#6F6A61]`; check icon teal-400 → `text-[#4F918B]`.
   - Plan label sky-400 → `text-[#4F918B]`; Execution label amber-400 → `text-[#C7A978]`; content P → `text-[#6F6A61]`.
   - Result label emerald-400 → `text-[#AEBBAA]` (sage); P `text-neutral-200` → `text-[#292825]`. Closing quote `border-teal-500/30 bg-teal-950/20 text-teal-300` → `border-[#C7A978]/50 bg-[#F1EADF] text-[#4F918B]`.
   - Divider borders `border-t border-neutral-800/60` → `border-t border-[#DED6C9]`.
5. Case-Study detail modal: dark panel + inputs → same editorial panel (Task 12 will verify overall forms). Use `bg-[#FCFAF6] border-[#DED6C9] text-[#292825]` throughout.
6. Bottom CTA button: same primary button rule (`#4F918B` + light text).

### Test Requirements
- **Rule TR 7.1**: No `bg-neutral-950/80` base wrappers or `text-white` titles in these three files; portfolio image overlays warmed.
- **Rule TR 7.2**: Case-study modal opens on a light panel (confirm in code — no `bg-neutral-950 p-6…` pattern).
- **Rubric TR 7.3** (0-2, threshold ≥ 2): Portfolio cards, 6-step journey, and case-study narrative 4-pillar layout all feel luxurious-editorial (champagne borders, muted teal accents, no neon glows) while existing image content stays legible.
  - 0: Still dark/heavy in places.
  - 1: Light but jarring bright legacy accents remain.
  - 2: Seamless premium result across all three.
- **Completion Evidence**: Desktop screenshot of each section.

---

## Task 8: OurApproach, IraguDifference, AboutFounder
- **Status**: completed
- **Priority**: medium
- **Files**:
  - [components/OurApproach.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/OurApproach.tsx)
  - [components/IraguDifference.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/IraguDifference.tsx)
  - [components/AboutFounder.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/AboutFounder.tsx)
- **Parent Criterion**: AC-1, AC-4, AC-6, AC-7, FR-2, FR-9

### Work — OurApproach (bg → warm ivory #F7F3EA)
1. Section palette: bg → `#F7F3EA`; eyebrow badge, H2 → `#292825`; subheading → `#C7A978`. Remove dark blurs.
2. Left philosophy panel `bg-neutral-900/40 border-neutral-800/80` → `bg-[#F1EADF] border-[#DED6C9] text-[#6F6A61]` content; label `text-neutral-400` → `text-[#928B81]`.
3. Five question cards (`questionAccents` desaturated): convert 5 saturated themes → champagne / muted teal / sage / sand / light rose. Base: `border-[#DED6C9] bg-[#FCFAF6]`; icon hover: `group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]`. Number color, tag: muted variants.
4. List header divider `border-b border-neutral-800/80 text-neutral-400` → `border-b border-[#DED6C9] text-[#6F6A61]`; HelpCircle `text-teal-400` → `text-[#4F918B]`.
5. Closing standard banner: dark gradient panel → `border-[#DED6C9] bg-[#F1EADF]` with faint champagne radial; signature line `text-teal-400` → `text-[#C7A978]`.

### Work — IraguDifference (bg → cream #F1EADF)
1. bg, eyebrow badge, H2 `text-white`, subheading `text-neutral-400` conversions as above.
2. 6 differentiator cards (6 `cardAccents` desaturated): `border-neutral-800/90 bg-neutral-950/70` → `border-[#DED6C9] bg-[#FCFAF6]`. Remove saturated `bg-gradient-to-br from-teal-500/15 …` → 6 warm variants. Hover `-translate-y-2` + light shadow okay.
3. Inside: 0X number badge `bg-neutral-900/90 border-neutral-800` → `bg-[#F7F3EA] border-[#DED6C9] text-[#928B81]`; icon container warm + hover muted-teal-light-text.
4. Title `text-white` → `text-[#292825]`; description `text-neutral-400` → `text-[#6F6A61]`; bottom tag badge + divider `border-neutral-800/60` → `border-[#DED6C9]` + muted palette.

### Work — AboutFounder (bg → warm beige #E8DFD0)
1. bg → `#E8DFD0`; eyebrow badge, H2 → `#292825`; subheading → `#4F918B`.
2. Story cards 1–3: `border-neutral-800/80 bg-neutral-950/70 backdrop-blur-md` → `border-[#DED6C9] bg-[#FCFAF6]`. Challenge tags `bg-rose-950/30 border-rose-500/20 text-rose-300` → `bg-[#F1EADF] border-[#DED6C9] text-[#6F6A61]`; dot `bg-rose-400` → `bg-[#C7A978]`. Headings `text-white` → `text-[#292825]`; text `text-neutral-300` → `text-[#6F6A61]`. Solution eyebrow teal-400 → `text-[#4F918B]`. North star card gradient `from-teal-950/30 via-neutral-950/80` → `from-[#F1EADF] via-[#FCFAF6] to-[#F7F3EA] border-[#C7A978]/50`.
3. Founder card overall: `border-neutral-800/90 bg-neutral-950/80` → `border-[#DED6C9] bg-[#FCFAF6]`.
   - Profile badge panel (4 cols): remove `from-black via-neutral-950/80 to-teal-950/30` overlay entirely; frame the monogram area `bg-[#F1EADF] border-[#DED6C9] text-[#4F918B]`. Leadership pill `bg-teal-950/60 border-teal-500/30 text-teal-400` → `bg-[#F7F3EA] border-[#C7A978]/50 text-[#C7A978]`. Founder name `text-white` → `text-[#292825]`; role teal-400 → `text-[#4F918B]`; location MapPin teal-400 → keep.
   - Founder message 8-col: eyebrow badge same pattern; heading `text-white` → `text-[#292825]`. Quote border `border-l-2 border-teal-400/80 bg-neutral-900/30` → `border-l-2 border-[#C7A978] bg-[#F1EADF]`; paras `text-neutral-200` → `text-[#292825]`. Closing line champagne. CTA: primary button rule (`#4F918B` + light text).

### Test Requirements
- **Rule TR 8.1**: All three files free of `bg-neutral-950*`, `backdrop-blur-md on dark`, and `bg-[#030303]/bg-[#040404]`.
- **Rule TR 8.2**: All headings in these three components use `#292825` (or explicit `text-[#292825]`) except decorative accent spans.
- **Rubric TR 8.3** (0-2, threshold ≥ 2): Three consecutive sections show clear layering (ivory → cream → beige) per FR-2, with champagne lines and subtle editorial details.
  - 0: Still flat-dark in spots.
  - 1: Colors converted but no between-section variety.
  - 2: Obvious progression of tones plus internal panels.
- **Completion Evidence**: Desktop screenshot of each of the three sections.

---

## Task 9: Testimonials, Pricing, Locations, FAQ — Four Utility Sections
- **Status**: completed
- **Priority**: medium
- **Files**:
  - [components/Testimonials.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/Testimonials.tsx)
  - [components/Pricing.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/Pricing.tsx)
  - [components/Locations.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/Locations.tsx)
  - [components/FAQ.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/FAQ.tsx)
- **Parent Criterion**: AC-1, AC-4, AC-5, AC-6, FR-5, FR-10

### Work — Testimonials (bg → off-white #FCFAF6)
1. bg, eyebrow badge, H2, subheading → palette swap.
2. Testimonial cards: `border-neutral-800/90 bg-neutral-950/80` → `border-[#DED6C9] bg-[#F7F3EA]`. Quote icon `text-teal-400/40` → `text-[#4F918B]/40`; verified status pill `bg-teal-950/60 border-teal-500/30 text-teal-300` → `bg-[#F1EADF] border-[#C7A978]/50 text-[#C7A978]`.
3. Testimonial body `text-neutral-200` → `text-[#292825]` italic.
4. Avatar fallback circle `bg-teal-500/10 border-teal-500/30 text-teal-400` → `bg-[#F1EADF] border-[#DED6C9] text-[#4F918B]`.
5. Client name `text-white` → `text-[#292825]`; metadata `text-neutral-400` → `text-[#6F6A61]`. Divider `border-t border-neutral-800/60` → `border-t border-[#DED6C9]`.
6. CMS empty-state shell card + schema preview grid → editorial panels; follow Task 7 empty-state rules.
7. Bottom CTA: primary button rule.

### Work — Pricing (bg → warm ivory #F7F3EA)
1. bg, eyebrow, H2, P.
2. Highlight quotation factors panel `border-neutral-800/90 bg-neutral-950/80` → `border-[#DED6C9] bg-[#FCFAF6]`.
   - Décor baseline banner: `bg-gradient-to-r from-neutral-900/90 via-neutral-900/60` → `from-[#F1EADF] via-[#FCFAF6] to-[#F1EADF] border-[#DED6C9]`. Text `text-white / text-neutral-300` → `text-[#292825] / text-[#6F6A61]`. 100% Tailored pill `bg-teal-950/50 border-teal-500/30 text-teal-300` → `bg-[#F7F3EA] border-[#C7A978]/60 text-[#C7A978]`.
   - Factors title divider `border-neutral-800` → `border-[#DED6C9]`; text `text-neutral-300` → `text-[#292825]`. Factors items: `bg-neutral-900/70 border-neutral-800/90` → `bg-[#F1EADF] border-[#DED6C9] text-[#292825]`.
   - Additional content card `bg-neutral-900/40 border-neutral-800/80` → `bg-[#F7F3EA] border-[#DED6C9]`. CTA: primary button rule.

### Work — Locations (bg → cream #F1EADF)
1. bg, eyebrow badge, H2, subheading → palette. Remove dark blurs.
2. City pills: `bg-neutral-950/80 backdrop-blur-md` + shadow teal → `bg-[#FCFAF6] border-[#DED6C9] hover:border-[#C7A978]/60 shadow-sm`. HQ Nagercoil: keep subtle elevated treatment with `border-[#4F918B]/50` + champagne shadow.
3. Pill labels `text-white group-hover:text-teal-300` → `text-[#292825] group-hover:text-[#4F918B]`; base HQ badge `bg-teal-950/70 border-teal-500/40 text-teal-300` → `bg-[#F7F3EA] border-[#4F918B]/50 text-[#4F918B]`.
4. Closing card: `bg-gradient-to-br from-neutral-950/90 via-neutral-900/60 to-neutral-950/90` → `from-[#F7F3EA] via-[#FCFAF6] to-[#F7F3EA] border-[#DED6C9]`. Heading `text-white` → `text-[#292825]`; text `text-neutral-300` → `text-[#6F6A61]`. CTA: primary button rule.

### Work — FAQ (bg → off-white #FCFAF6)
1. bg, eyebrow badge, H2, supporting P → palette.
2. FAQ rows: open `border-teal-500/50 bg-neutral-950/90 shadow-teal` → `border-[#4F918B]/50 bg-[#F7F3EA] shadow-sm`. Closed `border-neutral-800/80 bg-neutral-950/60 hover:border-neutral-700/90` → `border-[#DED6C9] bg-[#FCFAF6] hover:border-[#C7A978]/60`.
3. Number badges: open `bg-teal-500 text-black` → `bg-[#4F918B] text-[#FCFAF6]`; closed `bg-neutral-900 text-neutral-400 border-neutral-800` → `bg-[#F1EADF] text-[#6F6A61] border-[#DED6C9]`.
4. Question text: open → `text-[#292825] font-semibold`; closed → `text-[#292825] hover:text-[#292825]` (already dark; drop `hover:text-white`).
5. Chevron container: open state `bg-teal-950/60 border-teal-500/40 text-teal-400` → `bg-[#F1EADF] border-[#4F918B]/50 text-[#4F918B]`; closed state `bg-neutral-900 border-neutral-800 text-neutral-400` → `bg-[#F7F3EA] border-[#DED6C9] text-[#928B81]`.
6. Answer text: `text-neutral-300` → `text-[#6F6A61]`; answer divider `border-t border-neutral-800/60` → `border-t border-[#DED6C9]`.
7. Bottom additional questions banner: `bg-neutral-900/40 border-neutral-800/80` → `bg-[#F1EADF] border-[#DED6C9]`. H4 `text-white` → `text-[#292825]`; subtext `text-neutral-400` → `text-[#6F6A61]`. CTA button: primary button rule.
8. Accordion focus ring offset `ring-offset-black` → `ring-offset-[#FCFAF6]`.

### Test Requirements
- **Rule TR 9.1**: Four section wrappers use the FR-2 sequence (off-white → ivory → cream → off-white).
- **Rule TR 9.2**: FAQ focus ring offset uses a light value, never `ring-offset-black`.
- **Rule TR 9.3**: Pricing factor tiles, city pills, testimonial avatars, and FAQ rows use the editorial panel spec `#FCFAF6 bg + #DED6C9 border`.
- **Rubric TR 9.4** (0-2, threshold ≥ 2): Four utility sections are cohesive, each distinctively toned, with no residual `text-teal-300` or `bg-neutral-950` UI chips.
  - 0: Multiple leftover chips.
  - 1: Mostly done but 1–2 components skipped details.
  - 2: Clean and cohesive.
- **Completion Evidence**: Desktop screenshot per section.

---

## Task 10: FinalCTA + Footer + EventEnquiryForm
- **Status**: completed
- **Priority**: high
- **Files**:
  - [components/FinalCTA.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/FinalCTA.tsx)
  - [components/Footer.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/Footer.tsx)
  - [components/EventEnquiryForm.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/components/EventEnquiryForm.tsx)
- **Parent Criterion**: AC-2, AC-5, AC-6, FR-5, FR-10, FR-12

### Work — FinalCTA (bg → warm beige #E8DFD0)
1. Section `bg-[#020202] text-white border-t border-neutral-800/80` → `bg-[#E8DFD0] border-t border-[#DED6C9]`. Remove big teal glow → optional faint champagne/cream blur.
2. Eyebrow badge, H2, description P → palette (H2 `text-[#292825]`; P `text-[#6F6A61]`).
3. Primary CTA `bg-teal-500 hover:bg-teal-400 text-black` → `bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6]`.

### Work — Footer (bg → warm beige #E8DFD0)
1. Footer `bg-[#020202] text-white border-t border-neutral-800/80` → `bg-[#E8DFD0] border-t border-[#DED6C9]`. Default inner text color now `text-[#292825]`; drop "text-white" defaults.
2. Right-side Direct Verified Channels card: `border-neutral-800/90 bg-neutral-950/70 backdrop-blur-md` → `border-[#DED6C9] bg-[#FCFAF6]`.
   - Tagline `text-teal-400 uppercase` → `text-[#4F918B]`. P `text-neutral-400` → `text-[#6F6A61]`. Location pin + `text-teal-400` → keep `text-[#4F918B]`.
   - 4 channel rows (Phone/WhatsApp/Email/Instagram):
     - Phone/Email: `bg-neutral-900/60 border-neutral-800 hover:border-teal-500/40 text-neutral-300 hover:text-white` → `bg-[#F7F3EA] border-[#DED6C9] hover:border-[#4F918B]/50 text-[#292825]`. Icon tile `bg-neutral-800 text-teal-400 group-hover:bg-teal-500 group-hover:text-black` → `bg-[#F1EADF] text-[#4F918B] group-hover:bg-[#4F918B] group-hover:text-[#FCFAF6]`. "Call Us" label `text-teal-400` → `text-[#4F918B]`.
     - WhatsApp special green: keep `#25D366` brand color for icon/label (it's a brand, not the palette) but the row panel must be light: `bg-[#25D366]/10 border-[#25D366]/40` → keep similar, but text should use `text-[#292825]` not `text-neutral-300`.
3. Structured navigation columns:
   - Column headers: `text-white uppercase` → `text-[#292825]`. Leading dot `bg-teal-400` → `bg-[#C7A978]`.
   - Services/Explore links: `text-neutral-400 hover:text-teal-400` → `text-[#6F6A61] hover:text-[#4F918B]`.
   - Contact column phone/email/location: `text-neutral-300` → `text-[#292825]`; icons `text-teal-400` → `text-[#4F918B]`.
   - Social: Instagram/WhatsApp/LinkedIn icons follow brand colors where appropriate but the text/labels must be `text-[#292825]` with `hover:text-[#4F918B]`.
4. Brand statement footer bar: `border-t border-neutral-900 text-neutral-500` → `border-t border-[#DED6C9] text-[#928B81]`. Copyright `text-neutral-300` → `text-[#292825]` italic serif fine.

### Work — EventEnquiryForm (contained in Footer left 7-col)
1. Outer container: `border-neutral-800/90 bg-neutral-950/85 backdrop-blur-md shadow-2xl` → `border-[#DED6C9] bg-[#FCFAF6] shadow-sm hover:shadow-md`.
2. Header eyebrow badge, H3, subtitle → palette. H3 `text-white` → `text-[#292825]`; subtitle `text-neutral-400` → `text-[#6F6A61]`; required marker text `text-neutral-500` → `text-[#928B81]`.
3. Success banner `bg-teal-950/40 border-teal-500/60 text-teal-200` → `bg-[#AEBBAA]/20 border-[#4F918B]/50 text-[#292825]`; title `text-white` → `text-[#292825]`; subtext `text-neutral-300` → `text-[#6F6A61]`; check icon `text-teal-400` → `text-[#4F918B]`.
4. Error banner `bg-rose-950/40 border-rose-500/50 text-rose-300` → `bg-[#C7A978]/10 border-[#C7A978]/60 text-[#6F6A61]`; icon rose-400 → `text-[#C7A978]` (desaturated).
5. Input labels: `text-neutral-300` → `text-[#292825]`; icon-right `text-neutral-500` → `text-[#928B81]`.
6. Input/select/textarea elements: `bg-neutral-900/90 border-neutral-800 text-white placeholder-neutral-500 focus:border-teal-500` → `bg-[#F7F3EA] border-[#DED6C9] text-[#292825] placeholder-[#928B81] focus:border-[#4F918B] focus:ring-[#4F918B]/30`. Error state `border-rose-500/80 ring-rose-500/30` → keep rose for error but desaturated to something like `border-[#C7A978]/80 ring-[#C7A978]/30` or warm rose `#C77778` if readable.
7. Services toggle buttons: selected `bg-teal-950/60 border-teal-500/80 text-teal-200` → `bg-[#F1EADF] border-[#4F918B]/60 text-[#292825]`; unselected `bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700` → `bg-[#F7F3EA] border-[#DED6C9] text-[#6F6A61] hover:text-[#292825] hover:border-[#C7A978]/60`.
8. Budget buttons: selected `bg-teal-500 text-black` → `bg-[#4F918B] text-[#FCFAF6]`; unselected `bg-neutral-900/80 border-neutral-800 text-neutral-300` → `bg-[#F7F3EA] border-[#DED6C9] text-[#6F6A61] hover:border-[#C7A978]/60 hover:text-[#292825]`.
9. Submit button: `bg-teal-500 hover:bg-teal-400 text-black` → `bg-[#4F918B] hover:bg-[#437D77] text-[#FCFAF6]` (loading spinner keeps dark? no — spinner color becomes `text-[#FCFAF6]`).

### Test Requirements
- **Rule TR 10.1**: Footer wrapper uses `#E8DFD0` family classes and no `bg-[#020202]`, `text-white` defaults.
- **Rule TR 10.2**: EventEnquiryForm inputs use `bg-[#F7F3EA]` (or `#FCFAF6`) with beige borders; no dark input backgrounds.
- **Rule TR 10.3**: FinalCTA primary button uses muted-teal + light text (no `text-black`).
- **Rubric TR 10.4** (0-2, threshold ≥ 2): The entire bottom of the site (FinalCTA + Footer + Form) reads as a cohesive warm luxury wrap-around with champagne/teal micro-details and strong form readability.
  - 0: Still "dark footer with light top".
  - 1: Light but color inconsistencies between panel types.
  - 2: Seamless editorial close.
- **Completion Evidence**: Full-scroll screenshot from FinalCTA through Footer; also a crop of just the form.

---

## Task 11: app/page.tsx wrapper class, contact/page, residual cleanup & final global sweep
- **Status**: completed
- **Priority**: high
- **Files**:
  - [app/page.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/app/page.tsx)
  - [app/contact/page.tsx](file:///C:/Users/Elakiya/Downloads/Bezlon/Bezlon/app/contact/page.tsx) (if any dark wrappers)
- **Parent Criterion**: AC-1, AC-3, AC-7

### Work
1. `page.tsx` main wrapper class: `<main className="…bg-primary overflow-x-hidden…">` — confirm `bg-primary` (Tailwind alias now maps to `#F7F3EA` globally after Task 1). If not, explicitly set `bg-[#F7F3EA]` and drop old dark names.
2. Open `app/contact/page.tsx` if present and apply same warm wrapper + section title conversions. (If absent, this step is skipped.)
3. Run a final search sweep (ripgrep) across `components/**/*.tsx`, `app/**/*.css`, `app/**/*.tsx` for residual dark literals: `bg-[#0` and `bg-black` and `bg-neutral-950` and `text-white` (excluding the intentional button/WhatsApp cases) and `border-neutral-800` and `ring-offset-black` and `from-black`/`to-black`. Replace any leftovers consistent with the palette. DO NOT change the color of WhatsApp brand green if it is still `text-[#25D366]` — that is brand-correct. Also DO NOT change SVG/image files.

### Test Requirements
- **Rule TR 11.1**: Post-sweep grep produces 0 matches for `bg-[#020202]`, `bg-[#030303]`, `bg-[#040404]`, `bg-[#050505]`, `bg-[#0a0f0f]`, `bg-black`, `ring-offset-black` in any section-level class.
- **Rule TR 11.2**: 0 `border-neutral-800` remain on base cards/section dividers (they are fine inside old code only if the component was missed — the rule is they shouldn't exist at the base card/section level).
- **Rubric TR 11.3** (0-2, threshold ≥ 2): The site has been swept and edge cases (hover text, empty states, modals, error states) have been colored consistently.
  - 0: Clear missed cases.
  - 1: Mostly clean but 2–3 lingering classes in rarely-seen states.
  - 2: Clean sweep, WhatsApp brand green preserved, no other exceptions.
- **Completion Evidence**: Ripgrep output (truncated) for the dark patterns searched, showing 0 section-level hits; mention explicit WhatsApp brand green retention.

---

## Task 12: Build, Diagnostics, and Functional Verification
- **Status**: completed
- **Priority**: high
- **Files**: whole repo
- **Parent Criterion**: all ACs, NFR-1, NFR-3

### Work
1. Run `npm install` if needed (usually not required if node_modules present), then `npm run build` (or the build command from package.json).
2. Run VS Code diagnostics (`GetDiagnostics`); 0 TS errors.
3. Start dev server (`npm run dev`) on a free port, verify:
   - Nav scroll states.
   - Mobile drawer opens/closes; all links render with light drawer bg.
   - Hero renders; CTAs clickable.
   - Trust grid cards render; hover states.
   - Portfolio filter tabs work.
   - FAQ accordion opens/closes.
   - Category expand/collapse works.
   - Case-study modal opens on click with light panel.
   - Form inputs accept typing; submit shows success banner; errors show on bad input.
4. If anything is broken by color changes (e.g., contrast, illegible focus ring), fix it before marking complete.

### Test Requirements
- **Rule TR 12.1**: `npm run build` exits with code 0.
- **Rule TR 12.2**: `GetDiagnostics` returns 0 TS/ESLint errors (warnings acceptable).
- **Rule TR 12.3**: The 8 functional checklist items above have been sanity-checked on dev server.
- **Rubric TR 12.4** (0-2, threshold ≥ 2): Overall result visually matches the brief.
  - 0: Clear build or rendering issues.
  - 1: Runs but subtle problems (contrast, hover).
  - 2: Build clean, diagnostics clean, interactions pass.
- **Completion Evidence**: (a) build log tail with exit 0, (b) diagnostics count, (c) one screenshot of the FAQ open-state + modal open state.
