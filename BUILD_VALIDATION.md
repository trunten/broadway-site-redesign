# Build validation — revision 3

Validation run after the shared-shell, navigation, term-date and SEND integration pass.

- 83 HTML files checked.
- 1,117 static local/external references inspected by the structural validator.
- 0 missing local targets detected.
- All 83 HTML pages use the shared header mount and shared footer mount.
- No page retains a duplicated hard-coded site header/footer.
- Search data is centralised in `assets/pages.js`; no page embeds its own full page index.
- `assets/app.js` passes `node --check` syntax validation.
- `assets/pages.js` passes `node --check` syntax validation.
- The 1470px desktop header was rendered and checked: full motto stays on one line and all desktop navigation remains visible.
- Term-date, curriculum breadcrumb, SEND report and SEND Easy Read pages were rendered during the revision pass.
- Public-facing redesign commentary phrases were checked and removed.
- Old oval/pill values presentation has been removed.

The build remains fully static and GitHub Pages compatible.
