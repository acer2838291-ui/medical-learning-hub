import fs from 'node:fs';
import path from 'node:path';

const taxonomyPath = new URL('../src/data/specialties.json', import.meta.url);
const base = new URL('../src/content/docs/', import.meta.url);
const groups = JSON.parse(fs.readFileSync(taxonomyPath, 'utf8'));
const slugify = (text) => text.normalize('NFKD').replace(/[^\p{Letter}\p{Number}]+/gu, '-').replace(/^-|-$/g, '').toLowerCase();

for (const group of groups) {
  const examDir = new URL(`${group.exam}/`, base);
  fs.mkdirSync(examDir, { recursive: true });
  const examText = `---\ntitle: ${group.examLabel}\ndescription: ${group.scope}\n---\n\n範圍：${group.scope}。點選專科進入筆記清單；尚無公開內容時會顯示明確的空狀態。\n`;
  const examFile = new URL('index.mdx', examDir);
  if (!fs.existsSync(examFile)) fs.writeFileSync(examFile, examText);
  for (const specialty of group.specialties) {
    const parentDir = new URL(`${group.exam}/${specialty.id}/`, base);
    fs.mkdirSync(parentDir, { recursive: true });
    const children = specialty.children ?? [];
    const listing = children.length
      ? `\n## 子分類\n\n${children.map((child) => `- [${child.name}](./${child.id}/)`).join('\n')}\n`
      : `\n<div class="empty-state">目前沒有已發布的示範筆記。新增筆記後，請填入考科、專科、標籤與來源欄位。</div>\n`;
    const specialtyFile = new URL('index.mdx', parentDir);
    if (!fs.existsSync(specialtyFile)) fs.writeFileSync(specialtyFile, `---\ntitle: ${specialty.name}\ndescription: ${group.examLabel}｜${specialty.name}\n---\n\n分類：${group.examLabel}。${listing}`);
    for (const child of children) {
      const childDir = new URL(`${group.exam}/${specialty.id}/${child.id}/`, base);
      fs.mkdirSync(childDir, { recursive: true });
      const childFile = new URL('index.mdx', childDir);
      if (!fs.existsSync(childFile)) fs.writeFileSync(childFile, `---\ntitle: ${child.name}\ndescription: ${group.examLabel}｜${child.name}\n---\n\n<div class="empty-state">目前沒有已發布的示範筆記。新增教材前，請確認公開授權並保留教材原文、來源與日期。</div>\n`);
    }
  }
}
