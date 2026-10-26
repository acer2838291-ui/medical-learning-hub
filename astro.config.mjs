import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://acer2838291-ui.github.io',
  base: '/medical-learning-hub',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Medical Learning Hub',
      description: '臺灣醫師國考第二階段筆記、文獻閱讀與練習工具。',
      defaultLocale: 'root',
      locales: { root: { label: '繁體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/tokens.css', './src/styles/reference-theme.css'],
      sidebar: [
        { label: '首頁', link: '/' },
        { label: '醫學筆記', items: [
          { label: '醫學（三）｜內科、家庭醫學科', items: [{ autogenerate: { directory: 'medicine-3' } }] },
          { label: '醫學（四）｜小兒、皮膚、神經、精神', items: [{ autogenerate: { directory: 'medicine-4' } }] },
          { label: '醫學（五）｜外科、骨科、泌尿科', items: [{ autogenerate: { directory: 'medicine-5' } }] },
          { label: '醫學（六）｜麻醉、眼、耳鼻喉、婦產、復健', items: [{ autogenerate: { directory: 'medicine-6' } }] },
        ] },
        { label: '文獻閱讀', items: [
          { label: '我的文獻庫', link: '/literature/' },
          { label: 'PDF 閱讀器', link: '/literature/reader/' },
          { label: 'PICO 筆記', link: '/literature/pico/' },
          { label: '文獻比較表', link: '/tables/literature/' },
        ] },
        { label: '國考練習', items: [
          { label: '依考科練習', link: '/practice/' },
          { label: '錯題本與紀錄', link: '/practice/records/' },
        ] },
        { label: '醫學計算器', link: '/calculators/' },
        { label: '表格整理', link: '/tables/' },
        { label: '我的收藏', link: '/saved/' },
        { label: '內容管理後台', link: 'https://pagescms.org/' },
      ],
      social: [],
      lastUpdated: false,
    }),
  ],
});
