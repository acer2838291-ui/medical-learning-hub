---
name: medical-textbook-study
description: Maintain book metadata, chapter indexes and personal reading progress while enforcing publisher permissions and keeping private study data out of public repositories.
---

# Medical Textbook Study

## Inputs
- Book title and edition or ISBN as actually observed; official source-platform URL; user-entered chapter title/URL; reading status; permission evidence.

## Workflow
1. Record bibliographic fields and provenance; distinguish verified metadata from a suggested book title.
2. Never invent edition, publication year, ISBN, author or chapter list. Leave unknowns blank.
3. For AccessMedicine/McGraw Hill, check the exact current terms and applicable institutional agreement first. Unless written permission explicitly authorizes AI access and content processing, use only user-supplied bibliographic metadata and official links. Do not open restricted chapters with an AI browser, scrape, batch download, screenshot, send text to outside AI or create extensive translations.
4. Record the narrowest supported content permission state: `unverified`, `bibliography-only`, `personal-notes`, `open-license-checked`, or `written-ai-permission-checked`. A personal login is not permission evidence.
5. Save personal reading progress and original notes only in the user's private/local workspace; remind the user that local browser data can be lost and needs export backup.

## Output
Book record, chapter-index records, explicit permission status, citation/link, and remaining unknown fields. Do not output textbook substitute translations.
