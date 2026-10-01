# Broadway Academy — Website Redesign Preview

A static GitHub Pages prototype for a complete redesign of the stable, human-navigable Broadway Academy website.

## What is included

- 79 local page routes in the preview, including the complete set from the prior human-readable sitemap walk, a redesigned sitemap, an Easy Read SEND companion, and subject-detail templates.
- A new information architecture and consistent site-wide navigation.
- Responsive desktop/mobile layouts.
- Accessible keyboard navigation, skip links, visible focus, semantic landmarks and client-side search.
- Existing Broadway URL slugs retained in the preview wherever practical, so production migration can preserve routes or map them with 301 redirects.
- Download/document actions stay on the live `broadway-academy.co.uk` domain. The prototype does **not** copy policy PDFs or other documents into GitHub.
- No pupil photography is bundled into the prototype. The visual system uses the Academy crest, typography, colour, layout and non-photographic UI instead.

## Scope note

This prototype covers the stable pages identified during the human-navigation sitemap walk. Dynamic collections such as individual news posts, individual calendar events and downloadable policy/document files are represented by redesigned landing pages and live links rather than copied as static local pages.

## GitHub Pages

1. Create a new GitHub repository.
2. Upload **the contents of this folder** to the repository root.
3. Commit to `main`.
4. Open **Settings → Pages**.
5. Choose **Deploy from a branch**, `main`, `/ (root)`.
6. Save and wait for the Pages URL.

All internal links are relative, so the preview also works when GitHub Pages hosts it under a repository sub-path such as `username.github.io/broadway-redesign/`.

## Production migration principles

- Keep current public URLs where sensible, or add 301 redirects before changing any slug.
- Move repeated data (contacts, DSLs, term dates, policies, events) into single managed sources.
- Replace long all-in-one pages with reusable structured content components.
- Keep documents on one current canonical URL and redirect superseded versions.
- Audit pupil imagery before migration; use non-identifiable or non-pupil alternatives where the communication goal does not require a face.
- Run Lighthouse, WAVE/axe, keyboard, zoom/reflow and screen-reader checks on the real WordPress build.

See `REDESIGN_PLAN.md` for the design and migration plan and `CONTENT_MAP.csv` for the route inventory.


## Preview v2
- Removed redesign commentary from public pages.
- Restored the full Academy motto in the header.
- Reduced hero height and removed artificial “Explore this page” scroll buttons.
- Added substantially more Broadway content to the homepage and key landing pages.
- Kept downloadable/document destinations on the current Broadway domain where appropriate.
