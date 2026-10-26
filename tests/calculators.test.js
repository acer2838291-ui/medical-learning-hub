import test from 'node:test';
import assert from 'node:assert/strict';
import { anionGap, correctedAnionGap, aaGradient, arterialOxygenContent, oxygenDelivery } from '../src/lib/calculators.js';

test('anion gap uses sodium minus chloride minus bicarbonate', () => {
  assert.equal(anionGap({ sodium: 140, chloride: 104, bicarbonate: 24 }), 12);
});

test('albumin-corrected anion gap uses 2.5 correction factor', () => {
  assert.equal(correctedAnionGap({ sodium: 140, chloride: 104, bicarbonate: 24, albumin: 2 }), 17);
});

test('A–a gradient uses the stated alveolar gas equation defaults', () => {
  assert.ok(Math.abs(aaGradient({ fio2: 0.21, paCO2: 40, paO2: 90 }) - 9.73) < 0.01);
});

test('CaO2 and DO2 reproduce SOP example values', () => {
  const cao2 = arterialOxygenContent({ hemoglobin: 15, saturation: 98, paO2: 100 });
  assert.ok(Math.abs(cao2 - 20.0) < 0.1);
  assert.ok(Math.abs(oxygenDelivery({ cardiacOutput: 5, oxygenContent: cao2 }) - 1000) < 5);
});

test('invalid input is rejected instead of returning NaN or Infinity', () => {
  assert.throws(() => anionGap({ sodium: 'x', chloride: 100, bicarbonate: 20 }), RangeError);
  assert.throws(() => aaGradient({ fio2: 21, paCO2: 40, paO2: 90 }), RangeError);
});
