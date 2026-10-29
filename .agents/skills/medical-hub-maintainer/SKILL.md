---
name: medical-hub-maintainer
description: Maintain the Astro/Starlight Medical Learning Hub as a personal medical knowledge and learning workspace while preserving its exam sections and design system.
---

# Medical Hub Maintainer

Use when updating site architecture, navigation, content, tools, taxonomy or visual design.

1. Read `AGENTS.md`, `docs/AGENT_TOOLKIT.md`, `README.md`, `src/content.config.ts`, taxonomy data and affected pages first.
2. Extend Astro + Starlight; preserve warm beige, green-grey, terracotta tokens and dark mode.
3. Keep Medical Knowledge organized by disease/system/specialty/mechanism. Preserve `medicine-3` through `medicine-6` as exam-mode taxonomy; do not fabricate routes or specialty IDs.
4. Validate Starlight frontmatter against the actual schema. Use the structured disease template and source labels rather than assuming every field is known.
5. Before publishing content, run `publication-safety-review`. `draft: true` is not access control. Do not put patient information, private research, restricted books or personal records in tracked public paths.
6. Keep personal learning data in IndexedDB/local browser storage or a properly private backend; do not add external AI transmission. Include JSON backup/restore and explain local-storage risks.
7. For calculators, document formula, units, population, limitations, validation and boundary tests. For all medical claims, preserve source/version/date and label inference.
8. Run requested `npm test` and `npm run build`; check added routes, mobile layout, dark mode, data import/export and links.
9. Report changed files, actual test results, commit/PR/deploy state, source permissions and blockers. Never claim a test or deployment passed without evidence.
