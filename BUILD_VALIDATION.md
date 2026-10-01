# Build validation

This static prototype was generated and checked before hand-off.

## Automated checks completed

- 79 routed preview pages generated, plus the project-root `404.html`.
- All 80 HTML files parse successfully with the static checker.
- 9,295 local references (page links, styles, scripts and images across all generated pages) were resolved against the repository tree: **0 missing local targets**.
- Every generated HTML file has a page title, `lang="en-GB"`, responsive viewport metadata and exactly one `h1`.
- All images in generated HTML have an `alt` attribute.
- No duplicate element IDs were found.
- `assets/app.js` passes JavaScript syntax validation.
- Unverified prototype subject-detail pages use the current live Curriculum landing page for their source/comparison link rather than guessing a potentially dead live route.
- Direct document links included in the prototype point to the current Broadway-hosted files identified during the audit/research; other document directories intentionally link back to the current live Broadway source page so stale PDF URLs are not copied into the prototype.

## Browser testing note

The build was designed for and linked with standard static-hosting behaviour (including GitHub Pages repository sub-paths). The execution environment used for this hand-off blocked automated Chromium navigation to both local `file:` URLs and localhost, so interactive browser automation could not be completed here. The static link/structure checks above passed. After publishing to GitHub Pages, complete a quick desktop/mobile interaction pass and then run Lighthouse/WAVE against the published URL.
