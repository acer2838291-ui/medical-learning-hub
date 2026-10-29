---
name: medical-comparison-table
description: Create editable 2–5 condition comparison tables from verified knowledge-card fields without filling unsupported medical claims.
---

# Medical Comparison Table

## Inputs
- 2–5 conditions, comparison question, verified knowledge cards/sources, desired export format.

## Workflow
1. Resolve each condition to a stable disease ID where one exists; allow custom names but mark unsourced entries.
2. Define rows from the user's question: mechanism, presentation, diagnostics, treatment, drug mechanism, adverse effects or infections.
3. Populate a cell only from a source-checked knowledge card. Leave unsupported numeric values blank and mark incomplete cells `Not verified`.
4. Include source locator and verification status per cell; mark a discriminating feature only when evidence supports its use.
5. For restricted textbook sources, apply the AccessMedicine permission gate; do not use AI-accessed text absent written authorization.
6. Check internal links, row alignment and horizontal-scroll behavior; export Markdown/CSV while preserving provenance.

## Output
Editable comparison matrix, sources per cell, blank/unknown indicators and optional Markdown/CSV export.
