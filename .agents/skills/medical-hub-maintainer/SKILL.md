---
name: medical-hub-maintainer
description: Maintain the existing Astro/Starlight Taiwanese physician exam website when editing pages, taxonomy, calculators, navigation or CMS; preserve current design and check changes.
---

# Medical Hub Maintainer

Apply this skill when asked to update the Medical Learning Hub website.

1. Before editing read `AGENTS.md`, `README.md`, `src/content.config.ts`, `src/data/specialties.json`, and affected files.
2. Keep Astro + Starlight and the existing warm neutral / deep green-grey / terracotta tokens unless redesign was requested.
3. Classify content using only defined `medicine-3`, `medicine-4`, `medicine-5`, `medicine-6` and the current specialty IDs; do not fabricate paths or duplicate slugs.
4. Frontmatter must follow the actual docs schema: `title`, `description`, optional `exam`, `specialty`, `tags`, `relatedSpecialties`, `relatedLiterature`, `relatedQuestions`, `sources`, `draft`.
5. Read `publication-safety-review` before moving content into `src/content/docs` or `public`. `draft: true` is **not** privacy protection. Never move private research, patient information, copyrighted slides, or unpublished drafts into public tracked paths.
6. When adding calculators, document formula origin, units, applicable populations, limits, inputs, and boundary tests.
7. Run `npm test` and `npm run build` for relevant changes when the host supports them; inspect mobile layout and links if UI changes.
8. Report files changed, tests actually run, commit/deployment status if performed, remaining blockers. Never state a test passed without executing it.
