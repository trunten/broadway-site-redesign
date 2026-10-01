# Complete redesign plan

## 1. Core problems this redesign addresses

1. **Navigation depth and ambiguity** — important family tasks are scattered across menus and page bodies. The new header makes Admissions, Safeguarding, Contact, SEND, Calendar and Sixth Form predictable and easy to reach.
2. **Inconsistent visual language** — legacy pages use different heading scales, spacing, tables, embeds and button styles. The prototype uses one design system across every route.
3. **Very long pages** — Sixth Form, Leadership, curriculum and statutory pages become structured directories and repeatable content patterns rather than uninterrupted walls of text.
4. **Duplicated information** — contacts, safeguarding roles, dates and documents should be managed once and reused everywhere.
5. **Mobile usability** — large tables and deep menus are replaced with cards, lists and responsive layouts.
6. **Content age** — historic pages are visibly marked as archive/review material instead of looking operationally current.
7. **Accessibility** — navigation, focus, headings, contrast and semantic structure are built into the design system.
8. **Pupil-image risk** — the prototype deliberately proves the site can feel lively and distinctive without relying on identifiable pupil photography.

## 2. Proposed top-level information architecture

- **School** — About, Values, Vision, Leadership, Governance, Admissions, Attendance, Policies, Ofsted, Statutory information, Jobs
- **Learning** — Curriculum, Careers, SEND, Personal Development, More Able, Exams, Results
- **Student life** — Parents, Student Support, Student Voice, Student Leadership, Co-curricular, Music, Outdoor Education, Sport, Broadway Seven
- **Sixth Form** — Sixth Form, Sports Academies, Careers, Results Day
- **Community** — Community Centre, What’s On, Pricing, Fitness Suite, Room Hire, Inter-faith, Partners
- **News** — News, Newsletters, Calendar, Sports Report
- Persistent utilities: **Safeguarding · Contact · Search**

## 3. Reusable page archetypes

- Landing / directory
- Standard information article
- Contact / team directory
- Policy & document directory
- Results archive
- Subject curriculum page
- News listing
- Calendar / term dates
- Community facility page
- SEND long-form report + Easy Read companion
- Historic/archive page

## 4. Content model recommended for WordPress

Use structured fields rather than freeform page-builder content for:

- school contacts and leadership roles
- safeguarding contacts
- term dates and events
- policy title, category, review date and document URL
- subject curriculum sections
- community facilities and pricing
- Sixth Form courses
- news and newsletters
- results data

This lets one update flow through every place it is displayed.

## 5. Accessibility and UI standards

- WCAG 2.2 AA target
- keyboard-operable menus and search
- visible focus indicator
- minimum 44px touch targets where possible
- responsive reflow at 200% zoom
- no critical information embedded only in images
- semantic tables only where the relationship is genuinely tabular
- `target=_blank` used sparingly and announced for documents/external services
- downloadable documents should be accessible PDFs or, preferably for high-use information, HTML pages

## 6. Performance standards

- system-font-first stack in the preview; production can introduce one carefully loaded brand font if needed
- no page-builder animation library required
- no bundled videos; media remains streamed from the current source until a production media strategy is chosen
- responsive WebP/AVIF for retained images
- lazy-load below-the-fold images and embeds
- avoid loading maps/social feeds until requested
- page-specific CSS/JS only where necessary

## 7. Pupil imagery strategy

Use identifiable pupil imagery only where there is a clear communication need and current lawful basis/permissions. Prefer:

- wide activity scenes where pupils are not individually prominent
- hands / work / equipment
- back-of-head or non-identifiable compositions
- buildings and facilities
- student work
- illustrations and branded graphics

Strip metadata, avoid publishing oversized originals and review old images on a schedule.

## 8. Migration sequence

1. Approve information architecture and design system.
2. Clean current content using the October 2026 audit.
3. Establish structured WordPress content types/fields.
4. Migrate high-value pages first: Home, Safeguarding, Admissions, Contact, Parents, Calendar, SEND, Policies.
5. Migrate curriculum and Sixth Form using reusable templates.
6. Migrate community and enrichment sections.
7. Build redirects for any changed URLs.
8. Run accessibility, performance, broken-link and mobile testing.
9. Soft-launch to staff/parent testers.
10. Launch and monitor analytics/search queries for navigation problems.
