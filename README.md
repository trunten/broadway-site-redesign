# Broadway Academy — Website Redesign Preview

A static GitHub Pages prototype for a complete redesign of the stable, human-navigable Broadway Academy website.

## Architecture

Although the preview is static, repeated site furniture is deliberately centralised:

- `assets/app.js` — shared header, desktop/mobile navigation, footer, search overlay and breadcrumb enhancement.
- `assets/pages.js` — client-side page/search index.
- `assets/styles.css` — the shared visual system and responsive behaviour.
- Individual `index.html` files — page-specific content only, with header/footer mount points.

This means a change to the motto, navigation, footer or other persistent chrome is made once rather than repeated across dozens of pages. The approach is fully compatible with GitHub Pages because the shared shell is injected client-side.

## What is included

- Every stable user-accessible route identified during the human-navigation sitemap walk, plus useful section hubs.
- A consistent information architecture and navigation system.
- Responsive desktop/mobile layouts.
- Accessible keyboard navigation, skip links, visible focus, semantic landmarks and client-side search.
- Existing Broadway URL slugs retained in the preview wherever practical.
- Download/document actions stay on the live `broadway-academy.co.uk` domain; policy PDFs and other documents are not copied into GitHub.
- The bespoke SEND Information Report and Easy Read companion created during this project.
- No pupil photography bundled into the prototype. Branding, typography, colour and layout provide the visual identity.

## GitHub Pages

1. Put **the contents of this folder** at the repository root.
2. Commit to `main`.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, `main`, `/ (root)`.
5. Save and wait for the Pages URL.

Internal links are relative, so the preview works under a repository sub-path such as `username.github.io/broadway-site-redesign/`.

## Updating an existing preview repository

Replace the repository contents with this version, then run:

```bash
git add -A
git commit -m "Refine shared navigation, term dates and SEND"
git push
```

## Scope note

The prototype covers stable pages identified through normal site navigation. Dynamic collections such as individual news posts, individual calendar events and downloadable policy/document files are represented by landing pages and links to their current live sources rather than copied wholesale into the static preview.

See `REDESIGN_PLAN.md`, `CONTENT_MAP.csv`, `REVISION_NOTES_V3.md` and `BUILD_VALIDATION.md` for supporting detail.
