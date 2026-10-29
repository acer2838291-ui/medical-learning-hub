---
name: medical-mindmap-builder
description: Build reusable interactive medical concept maps with source-aware nodes, accessible outlines and import/export.
---

# Medical Mind Map Builder

## Inputs
- Topic, map kind (`disease-overview`, `pathophysiology-flow`, `differential-diagnosis`, `diagnostic-algorithm`, `treatment-algorithm`, `drug-mechanism`), verified source claims and linked knowledge IDs.

## Workflow
1. Reuse stable concepts and source metadata from knowledge cards rather than copying full source diagrams.
2. Apply AccessMedicine restrictions: do not reproduce textbook figures or build a derivative map from protected content without applicable written permission; use open-licensed material or original explanatory nodes.
3. Give each node an ID, parent ID, label, detail, node type, linked disease/concept, source, verification status and collapsed state.
4. Keep unsupported values and steps visibly unverified. Never infer a clinical algorithm or treatment sequence without a source.
5. Provide keyboard-accessible selection, text-outline alternative, pan/zoom, branch collapse, search, persistence and JSON/SVG export.
6. Validate that parent links exist and avoid cycles before save/export.

## Output
Schema-valid JSON map, rendered interactive map, text outline, source attribution and validation result.
