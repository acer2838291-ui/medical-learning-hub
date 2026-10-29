---
name: literature-evidence-audit
description: Verify medical literature claims from DOI/PMID and actual source passages when preparing evidence matrices, related-literature notes, or research summaries.
---

# Literature Evidence Audit

1. Identify the task's known literature set and whether the user has authorized outside search.
2. Verify bibliographic identity (DOI, PMID, authors, year, version). Abstract/metadata alone establishes screening evidence, not a verified finding.
3. For claims supporting conclusions, check the relevant full-text Methods, Results, tables, figures and supplements; record the source locator and which portions were actually reviewed.
4. Compare population, baseline/index, exposure/comparator, outcome, study design, statistical effect (HR/RR/OR), confidence interval, follow-up, limitations and applicability.
5. Record status `source_checked`, `reported_only`, or `unverified` separately. Do not invent citations, passages, effect sizes or methodological checks.
6. Distinguish old versus new publications, corrections, preprints and analysis versions. Contradictions should remain visible instead of being silently reconciled.
7. For private TriNetX/RWE projects, perform the source ledger and evidence matrix in an **external private workspace**, not `.research/` inside this public repository.
8. Only publish bibliographic data and analysis commentary after checking rights, sensitivity and whether unpublished findings would be disclosed.
