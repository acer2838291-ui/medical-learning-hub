import { defineConfig } from 'astro/config';
import { readFileSync } from 'node:fs';
import starlight from '@astrojs/starlight';
const taxonomy = JSON.parse(readFileSync(new URL('./src/data/specialties.json', import.meta.url), 'utf8'));
const examSidebar = taxonomy.map((group) => ({
  label: `${group.examLabel}｜${group.scope}`,
  collapsed: true,
  items: [
    { label: '科別總覽', link: `/${group.exam}/` },
    ...group.specialties.map((specialty) => ({
      label: specialty.name,
      ...(specialty.children?.length ? {
        collapsed: true,
        items: [
          { label: '專科總覽', link: `/${group.exam}/${specialty.id}/` },
          ...specialty.children.map((child) => ({
            label: child.name,
            link: `/${group.exam}/${specialty.id}/${child.id}/`,
          })),
        ],
      } : { link: `/${group.exam}/${specialty.id}/` }),
    })),
  ],
}));
export default defineConfig({
  site: 'https://acer2838291-ui.github.io',
  base: '/medical-learning-hub',
  trailingSlash: 'always',
  integrations: [starlight({
    title: 'Medical Learning Hub',
    description: 'Personal Medical Knowledge & Learning Workspace：醫學知識、原文書、文獻與國考學習。',
    defaultLocale: 'root',
    locales: { root: { label: '繁體中文', lang: 'zh-TW' } },
    customCss: ['./src/styles/tokens.css', './src/styles/reference-theme.css'],
    sidebar: [
      { label: '首頁', link: '/' },
      { label: '醫學知識庫', items: [
        { label: '知識分類索引', link: '/knowledge/' },
        { label: '依疾病學習：急性腎損傷示範', link: '/knowledge/aki/' },
        { label: '既有考科與專科筆記', link: '/medicine-3/' },
      ] },
      { label: '原文書學習', items: [
        { label: '我的教科書', link: '/textbooks/' },
        { label: '章節學習工作台', link: '/textbooks/' },
      ] },
      { label: '醫學比較與心智圖', items: [
        { label: '疾病比較表', link: '/comparisons/' },
        { label: '互動式心智圖', link: '/mindmaps/' },
      ] },
      { label: '文獻與指引', items: [
        { label: '我的文獻庫', link: '/literature/' },
        { label: 'PDF 閱讀器（待完成）', link: '/literature/reader/' },
        { label: 'PICO 筆記', link: '/literature/pico/' },
        { label: '文獻比較表（待完成）', link: '/tables/literature/' },
      ] },
      { label: '學習與複習', items: [
        { label: '國考考科索引', items: examSidebar },
        { label: '示範題練習', link: '/practice/' },
        { label: '答題紀錄', link: '/practice/records/' },
      ] },
      { label: '醫學工具', items: [
        { label: '醫學計算器', link: '/calculators/' },
        { label: '表格編輯器', link: '/tables/' },
        { label: '個人資料匯入／匯出', link: '/workspace/' },
        { label: '我的收藏', link: '/saved/' },
      ] },
      { label: '內容管理後台（Pages CMS）', link: 'https://app.pagescms.org/' },
    ],
    social: [],
    lastUpdated: false,
  })],
});
