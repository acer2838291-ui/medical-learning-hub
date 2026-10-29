---
name: publication-safety-review
description: Review any medical note, question set, research summary, document or media asset before publishing it to this public GitHub Pages repository.
---

# Publication Safety Review

Before writing to `src/content/docs/`, `src/pages/`, `public/` or any Git-tracked public content:

1. Identify the exact origin and rights for every third-party passage, slide, PDF, table, question, image or screenshot. Unknown rights => do not publish the source material.
2. Check for patient identifiers, unpublished research, institutional reports, private messages, access tokens and personal learning data. Store such material only in an external private workspace.
3. Check whether medical claims and numbers are actually supported. Record source, version and section/page; do not call email summaries or generated text independently verified reports.
4. If preparing a TriNetX-related article, keep cohort definitions, AA values and analysis versions distinct; do not imply LIVE verification from a methodology checklist.
5. `draft: true` is only an optional custom frontmatter field and **does not** make GitHub files or Pages private.
6. A Git commit is public history; `.gitignore` cannot undo disclosure of a committed file. Do not add a restricted source even temporarily.
7. Report pass/fail/unknown publication decisions for the actual content; stop publication when essential authorization or source evidence is missing.

This skill does not grant permissions to publish and does not override `AGENTS.md`.
