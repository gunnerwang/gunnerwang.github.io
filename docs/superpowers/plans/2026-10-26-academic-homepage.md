# Academic Homepage Implementation Plan

> **For agentic workers:** Execute inline using superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Present Tianyu Wang's research identity and representative work clearly, with a complete searchable publication archive and a reliable contact route.

**Architecture:** Keep the static HTML/CSS/JavaScript site on GitHub Pages. Serve a concise homepage and a separate, progressively enhanced publication archive. Preserve the 38 verified citations, author emphasis, publication years, and CV PDF.

**Tech Stack:** Semantic HTML, CSS, native JavaScript modules, Node's built-in test runner.

**Spec:** The user approved the preceding five-point design proposal in chat: stronger research positioning; 3–4 representative projects with figures and links; a shorter homepage and full archive by year/type; restrained white/ink/teal visual design; replace the nonfunctional contact form with email.

## Global Constraints

- Keep all 38 verified records, including 25 journal articles, 7 conference papers, 1 chapter, and 5 preprints.
- Preserve the source CV PDF byte for byte and use only verified professional claims.
- Use published paper figures where available. Do not disclose unpublished research assets.
- No framework, package installation, backend, analytics, external font or icon dependency.
- Retain useful existing fragment URLs and keyboard navigation; support reduced motion and no JavaScript.
- Use the established SSH connection for the authorized publication to main after review.

## Review Focus

- Combined year/type/search filters must intersect and show an honest empty state.
- Missing publication dates must remain undated, not appear as year 0.
- Without JavaScript the full archive and all navigation remain usable.
- Small screens, long titles, keyboard focus, and reduced-motion preferences must remain usable.
- Contact must open an email client and must never pretend that a message was delivered.

### Task 1: Publication archive and filtering

**Files:** Create `publications.html`, `js/publication-filter.mjs`, `tests/publication-filter.test.mjs`; modify `js/main.js`.

**Interfaces:** `matchesPublication(record, {year, type, query})` accepts string fields `year`, `type`, and `text`; returns a boolean. Empty filters match every record. DOM records expose `data-year` and `data-type`.

- [x] Write and run failing tests for year/type intersection, case/accent-insensitive text, whitespace, an undated record, and no matches.
- [x] Implement the pure matching function and enhance the static archive with filters, reset, count, and empty-state feedback.
- [x] Run `node --test`; verify all 38 records remain readable without JavaScript.

### Task 2: Homepage and visual design

**Files:** Rewrite `index.html` and `css/style.css`; simplify `js/main.js`; add research thumbnails under `images/research/`.

- [x] Retain verified biography, reduce homepage to four representative projects and six selected publications, and link to the full archive.
- [x] Use semantic navigation, a native mobile menu, visible keyboard focus, compact background/education, and a mailto contact section.
- [x] Check local links, CV identity, HTML structure, and absence of misleading message-submission UI.
- [x] Inspect desktop and mobile screenshots; check no horizontal overflow, navigation, filtering, empty state, and no-JavaScript fallback.

### Task 3: Review and deployment

- [x] Run all tests, inspect the whole diff, and obtain one fresh-context review as required by executing-plans.
- [x] Resolve material findings and repeat affected verification.
- [ ] Commit, push to the existing repository through SSH, wait for Pages deployment, and compare live assets with the verified local files.

## Progress / rulings

- Design already approved in chat; proceed with inline implementation without another approval round.
- Work is isolated in a fresh repository clone on `codex/academic-homepage-redesign-2026-10-26`.
- Existing SSH authorization is available; GitHub connector writes are unavailable, so use Git for publication.

- Task 1 complete: filter regression tests observed failing against pass-through behavior, then 6/6 pass.
- Task 2 complete: browser interaction checks pass at desktop/mobile sizes; all 38 citations preserved exactly; full no-JavaScript archive and native menu verified.
- Ruling: use two published-source figures plus two explicitly labeled original conceptual illustrations, avoiding disclosure of unpublished research assets.
- Verification screenshots and machine-readable results are kept in ignored `output/playwright/`.

- Task 3 review complete: fresh reviewer found no actionable defects; confirmed keyboard focus, Escape focus return, reduced motion, narrow breakpoints, filters and no-JavaScript behavior.
