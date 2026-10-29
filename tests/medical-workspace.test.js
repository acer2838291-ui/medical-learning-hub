import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const readJson = async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'));

test('medical knowledge cards retain provenance and processing permission fields', async () => {
  const schema = await readJson('../docs/schemas/medical-knowledge-card.schema.json');
  const required = schema.required;
  for (const field of ['conceptId', 'title', 'sections', 'references']) assert.ok(required.includes(field), `missing required field: ${field}`);
  const reference = schema.$defs.reference;
  for (const field of ['sourceType', 'title', 'verification', 'permission']) assert.ok(reference.required.includes(field), `missing reference field: ${field}`);
});

test('mind map schema supports reusable concept identifiers, node kinds, and provenance', async () => {
  const schema = await readJson('../docs/schemas/mindmap.schema.json');
  assert.ok(schema.required.includes('nodes'));
  const node = schema.properties.nodes.items;
  for (const field of ['id', 'label', 'type']) assert.ok(node.required.includes(field));
  assert.ok(node.properties.conceptId);
  assert.ok(node.properties.source);
});

test('textbook records describe metadata and do not require full text', async () => {
  const schema = await readJson('../docs/schemas/textbook-record.schema.json');
  for (const field of ['id', 'title', 'edition', 'url', 'permission', 'rights', 'progress']) assert.ok(schema.properties[field], `missing property: ${field}`);
  assert.ok(!schema.required.includes('fullText'));
});

test('AKI public example records its open-license source and uncertainty', async () => {
  const page = await readFile(new URL('../src/pages/knowledge/aki.astro', import.meta.url), 'utf8');
  assert.match(page, /CC BY 4\.0/);
  assert.match(page, /待驗證|待查證|未提供/);
  assert.match(page, /References|參考資料/);
});
