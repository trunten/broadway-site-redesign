# Revision 3 — shared shell and navigation refinement

This revision moves the preview closer to a maintainable production-style static site rather than a set of independent mock-up pages.

## Shared site chrome

- Header, desktop navigation, mobile navigation, search overlay and footer are now generated centrally by `assets/app.js`.
- Site-wide search data lives in `assets/pages.js`.
- Global visual changes remain in `assets/styles.css`.
- Individual pages only contain their page-specific content plus empty header/footer mount points.
- Future changes to the motto, navigation or footer therefore do not require editing every HTML page.

## Header and navigation

- Full motto retained: **Our Children. Our Community. Believe it can be done.**
- Motto reduced to a deliberately secondary 0.5rem line and kept on one line on desktop.
- Desktop navigation tightened so it fits comfortably at a 1470px viewport.
- **Parents & carers** promoted to a top-level navigation item.
- Main navigation is now: School · Learning · Student life · Sixth Form · Community · News · Parents & carers · Safeguarding · Contact.
- Added proper section-hub pages for Learning, Student life and Exams & results.
- Breadcrumb intermediate steps are now links to meaningful section hubs rather than dead text.

## Page furniture

- Heroes are shorter and content-first.
- Long hero headings are no longer artificially constrained to a narrow width.
- Very rounded pill styling has been removed from buttons, tags, directory links and values.
- Homepage quick links are now a simple text navigation strip rather than button-like tiles.
- Homepage Vision / Values / Prospectus links are now ordinary text links rather than outlined pills.
- Broadway values have been moved into a full-width values section and are no longer presented in oval chips or a sidebar panel.

## Term dates

- The term-date page now shows the Birmingham City Council dates followed by Broadway Academy.
- 2026–27 and 2027–28 dates are included.
- A direct link to the Birmingham City Council term-date source is provided.
- **Term dates** now appears in the shared footer on every page.

## SEND

- The generic redesign SEND page has been replaced with the previously developed Broadway SEND Information Report design.
- The Easy Read companion page is included at `/curriculum/sen/easy-read/`.
- Both use the new shared site header and footer while retaining their bespoke SEND content and accessibility features.

## Wording

- Removed redesign commentary and language that could read as criticism of the existing website.
- Parent/carer and other landing-page descriptions are neutral and public-facing.
