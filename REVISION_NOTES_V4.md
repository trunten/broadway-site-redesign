# Broadway Academy redesign preview — v4

## Shared site shell
- Global header remains sticky and now collapses after scrolling: crest shrinks, school name/motto hide, and navigation padding tightens.
- Header content aligns to the same 1180px content width as the page body.
- Motto is reduced to 0.5rem and kept on one line at desktop widths.
- Desktop navigation remains available down to 1180px; below that the compact mobile menu takes over.
- Parents & carers remains a top-level navigation item.
- The header exposes its live height as `--site-header-height`, allowing SEND and Easy Read sticky controls to sit directly underneath it.

## Footer and term dates
- The footer now displays the current school term, term start/end dates and half-term dates on every page.
- A small script selects the active term automatically; between terms it shows the next term.
- The full Term Dates page keeps 2026–27 and 2027–28 dates and a simple link to Birmingham City Council without an explanatory source panel.

## SEND
- Standard SEND report masthead now uses the main site's navy treatment and a normal Arial/Helvetica heading rather than the condensed display face.
- Removed the duplicate Academy crest from the SEND report masthead.
- Removed the duplicate crest from Easy Read while preserving the Easy Read visual treatment.
- SEND floating navigation now uses the measured global header height rather than a large fixed offset.
- Easy Read display toolbar also stays below the sticky global header.

## Styling
- Generic cream/blue callout panels have been flattened into ordinary content with restrained rules.
- Reduced corner radii across buttons, cards and directory items; removed pill-style values.
- Broadway Values page now uses a simple two-column ruled list and no repeated motto.
- Removed redesign/prototype commentary from several public-facing pages.

## Broadway Dining
- Rebuilt into the shared site design.
- Uses the current in-house catering facts, including the requested wording “Since September 2025”.
- Includes breakfast, break-time, lunch, Arbor Pay/biometrics, farm-to-kitchen, dietary requirements and policy links.
- Existing Broadway policy/document URLs remain external so the preview does not duplicate or stale those files.

## Architecture
- Header, main navigation, search, breadcrumbs, compact-on-scroll behaviour, current-term footer and footer navigation remain centralised in `assets/app.js`.
- Shared styling remains in `assets/styles.css`, so persistent changes do not require editing every HTML page.
