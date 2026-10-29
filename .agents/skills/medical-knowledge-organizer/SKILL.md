---
name: medical-knowledge-organizer
description: Organize medical information into a reusable, source-traceable Traditional Chinese disease knowledge card.
---

# Medical Knowledge Organizer

## Inputs
- Disease/concept, user-provided or openly licensed sources, target audience and requested scope.

## Workflow
1. Search existing knowledge cards and reuse canonical concept IDs before creating duplicates.
2. Verify each source and its license. For AccessMedicine/McGraw Hill, bibliography and official links only unless written permission explicitly authorizes external AI access and the requested processing. Never scrape, batch download, screenshot or translate protected content.
3. Use a stable card structure: Definition; Epidemiology; Etiology; Risk Factors; Pathophysiology; Clinical Manifestations; Diagnostic Approach; Diagnostic Criteria; Differential Diagnosis; Laboratory & Imaging; Management; Pharmacology; Complications; Prognosis; Clinical Pearls; Comparison Tables; Mind Map; References.
4. Fill only fields supported by sources. Mark unavailable details as `Not provided by checked source` or `Not verified`.
5. Explain English term → Chinese translation → mechanism → clinical meaning. Label AI synthesis and keep abbreviations expanded at first mention.
6. For doses, guidelines and diagnostic criteria, record source date, version, population and locator. Do not answer from model memory alone.

## Output
Reusable knowledge card with stable IDs, tags for systems/specialties/diseases/mechanisms/drugs, per-claim citations and verification/permission status.
