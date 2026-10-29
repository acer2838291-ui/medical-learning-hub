---
name: exam-question-builder
description: Create and check Taiwanese medical and public-health practice questions from permitted materials while distinguishing self-written exercises from verifiable official past papers.
---

# Exam Question Builder

Use for multiple-choice questions, comparison drills, fill-in-the-blanks, answer keys and detailed explanations.

1. Respect any explicit source restriction, such as “only the three slides”; do not silently add external clinical or regulatory details.
2. Default to Traditional Chinese stems and English medical terms. Create four choices (A–D), one supported correct answer and an explanation addressing distractors.
3. For new practice items use `source_kind: self_written`. For course-derived practice use `source_kind: course_slide` with a source locator and private visibility until publication rights are clear.
4. `source_kind: official_past_paper` is permitted only when a verified exam, year, subject, question number and publication/reuse permission are available.
5. Preserve exact numbers, contraindications, comparisons and exceptions **only when source supports them**. Label unknown information instead of inventing.
6. Keep personal answer history outside this public Git repository.
7. If generating JSON, include stable ID, source type and ID, stem, options, correct choice, explanation, visibility and verification status; see `docs/templates/questions.sample.json`.
8. Validate structure and answers against sources before any content moves into a published page; do not treat a JSON parse as a medical answer check.
