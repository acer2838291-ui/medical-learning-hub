const finite = (value, label, { min = -Infinity, max = Infinity } = {}) => {
  const number = Number(value);
  if (!Number.isFinite(number) || number < min || number > max) {
    throw new RangeError(`${label} 必須介於 ${min} 與 ${max}。`);
  }
  return number;
};

export function anionGap({ sodium, chloride, bicarbonate }) {
  const na = finite(sodium, 'Na⁺', { min: 0, max: 300 });
  const cl = finite(chloride, 'Cl⁻', { min: 0, max: 300 });
  const hco3 = finite(bicarbonate, 'HCO₃⁻', { min: 0, max: 100 });
  return na - cl - hco3;
}

export function correctedAnionGap({ sodium, chloride, bicarbonate, albumin }) {
  const ag = anionGap({ sodium, chloride, bicarbonate });
  const alb = finite(albumin, 'Albumin', { min: 0, max: 20 });
  return ag + 2.5 * (4 - alb);
}

export function aaGradient({ fio2 = 0.21, paCO2, paO2, barometricPressure = 760, waterVaporPressure = 47, respiratoryQuotient = 0.8 }) {
  const fi = finite(fio2, 'FiO₂', { min: 0.21, max: 1 });
  const co2 = finite(paCO2, 'PaCO₂', { min: 0, max: 300 });
  const o2 = finite(paO2, 'PaO₂', { min: 0, max: 800 });
  const pb = finite(barometricPressure, '大氣壓', { min: 300, max: 900 });
  const ph2o = finite(waterVaporPressure, '水蒸氣壓', { min: 0, max: 80 });
  const rq = finite(respiratoryQuotient, '呼吸交換率', { min: 0.1, max: 2 });
  return fi * (pb - ph2o) - co2 / rq - o2;
}

export function arterialOxygenContent({ hemoglobin, saturation, paO2 }) {
  const hb = finite(hemoglobin, 'Hb', { min: 0, max: 30 });
  const sao2 = finite(saturation, 'SaO₂', { min: 0, max: 100 }) / 100;
  const o2 = finite(paO2, 'PaO₂', { min: 0, max: 800 });
  return 1.34 * hb * sao2 + 0.003 * o2;
}

export function oxygenDelivery({ cardiacOutput, oxygenContent }) {
  const co = finite(cardiacOutput, 'CO', { min: 0, max: 50 });
  const cao2 = finite(oxygenContent, 'CaO₂', { min: 0, max: 100 });
  return co * cao2 * 10;
}

export const calculatorDefinitions = {
  'anion-gap': { label: 'Anion Gap', unit: 'mEq/L', calculate: anionGap, fields: ['sodium', 'chloride', 'bicarbonate'] },
  'corrected-anion-gap': { label: 'Albumin-corrected Anion Gap', unit: 'mEq/L', calculate: correctedAnionGap, fields: ['sodium', 'chloride', 'bicarbonate', 'albumin'] },
  'aa-gradient': { label: 'A–a Oxygen Gradient', unit: 'mmHg', calculate: aaGradient, fields: ['fio2', 'paCO2', 'paO2'] },
  'cao2': { label: 'Arterial Oxygen Content (CaO₂)', unit: 'mL O₂/dL', calculate: arterialOxygenContent, fields: ['hemoglobin', 'saturation', 'paO2'] },
  'do2': { label: 'Oxygen Delivery (DO₂)', unit: 'mL O₂/min', calculate: oxygenDelivery, fields: ['cardiacOutput', 'oxygenContent'] },
};
