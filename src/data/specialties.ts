import taxonomy from './specialties.json';

export type Specialty = { id: string; name: string; children?: Specialty[] };
export type ExamGroup = { exam: string; examLabel: string; scope: string; specialties: Specialty[] };
export const specialtyGroups = taxonomy as ExamGroup[];
export const crossCuttingTags = [
  { id: 'emergency-medicine', name: '急診醫學' },
  { id: 'radiology', name: '影像醫學' },
  { id: 'community-medicine', name: '社區醫學' },
  { id: 'medical-ethics-law', name: '醫學倫理及相關法規' },
];
