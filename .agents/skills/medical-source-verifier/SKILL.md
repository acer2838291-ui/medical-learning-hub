---
name: medical-source-verifier
description: Verify medical citations, source versions, publication facts and processing permissions without overstating evidence.
---

# Medical Source Verifier

## Inputs
- Claim list or draft, source URL/DOI/PMID/book edition, intended publication location, access/permission evidence.

## Workflow
1. Locate the primary source and confirm title, authors, date/version, identifier and relevant section/page.
2. Match each claim with the actual passage/table and relevant population, setting, date, endpoint and units. Search snippets and abstracts are screening evidence only unless the claim is limited to metadata.
3. Record status as `source_checked`, `reported_only`, `bibliography_only` or `unverified`; record last-checked date and evidence locator.
4. Verify the applicable reuse license separately from source accuracy. An openly accessible page is not necessarily openly licensed.
5. For AccessMedicine/McGraw Hill, review product terms and institution contract. Without explicit written authorization for third-party AI access and the specific processing, do not enter restricted pages, extract content, send it to external AI or translate it.
6. For clinical criteria, dose or guidelines, check version date, population and whether superseding guidance exists. Mark historical criteria as historical.

## Output
Claim-to-source ledger, permissions status, date/version scope, unresolved questions and corrected wording. Never silently upgrade unverified claims.
