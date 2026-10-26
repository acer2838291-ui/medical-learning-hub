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
    description: '臺灣醫師國考第二階段筆記、文獻閱讀與練習工具。',
    defaultLocale: 'root',
    locales: { root: { label: '繁體中文', lang: 'zh-TW' } },
    customCss: ['./src/styles/tokens.css', './src/styles/reference-theme.css'],
    sidebar: [
      { label: '首頁', link: '/' },
      { label: '醫學筆記', items: examSidebar },
      { label: '文獻閱讀', items: [
        { label: '我的文獻庫', link: '/literature/' },
        { label: 'PDF 閱讀器（待完成）', link: '/literature/reader/' },
        { label: 'PICO 筆記', link: '/literature/pico/' },
        { label: '文獻比較表（待完成）', link: '/tables/literature/' },
      ] },
      { label: '國考練習', items: [
        { label: '示範題練習', link: '/practice/' },
        { label: '答題紀錄', link: '/practice/records/' },
      ] },
      { label: '醫學計算器', link: '/calculators/' },
      { label: '表格整理', link: '/tables/' },
      { label: '我的收藏', link: '/saved/' },
      { label: '內容管理後台（Pages CMS）', link: 'https://app.pagescms.org/' },
    ],
    social: [],
    lastUpdated: false,
  })],
});
