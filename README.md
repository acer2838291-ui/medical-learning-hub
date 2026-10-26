# Medical Learning Hub

臺灣醫師國考第二階段個人醫學學習網站：依醫學（三）至醫學（六）整理筆記，並逐步加入文獻閱讀、題庫、醫學計算器與比較表。

## 專案狀態

本專案目前處於第一階段建置。已建立 Astro + Starlight 設定、考科分類、參考站稽核文件、計算器核心函式與基礎頁面原型。依賴已安裝，正式 Build 與計算器測試已通過；請查看 [`docs/test-report.md`](docs/test-report.md)。

## 技術

- Astro 7.4.x + Starlight 0.42.x
- MDX / Markdown 醫學筆記
- TypeScript 分類資料、JavaScript 計算邏輯
- PDF.js（列入依賴，閱讀器尚未完成）
- Pages CMS（內容編輯設定草案）
- Node.js test runner 的公式測試
- 部署：GitHub Pages，透過 GitHub Actions 自動建置 `main` 分支

## 開發

需使用 Node.js 22.23.4 以上及 npm 9.6.5 以上。安裝依賴後執行：

```bash
npm install
npm run dev
npm test
npm run build
```

`npm install`、`npm run build` 與 `npm test` 已在 2026-10-27 執行成功。建置會顯示一則 `/404` 路由優先順序警告，但已成功輸出 57 個頁面與 Pagefind 搜尋索引。npm 也會提示環境中的 `http-proxy` 設定名稱未知；這不影響安裝或建置。

## 內容分類

- 醫學（三）：內科、家庭醫學科。
- 醫學（四）：小兒、皮膚、神經、精神。
- 醫學（五）：外科、骨科、泌尿科。
- 醫學（六）：麻醉、眼、耳鼻喉、婦產、復健。
- 急診、影像、社區醫學、醫學倫理與法規以跨科標籤處理。

分類來源為使用者提供的建置規格。可在 `src/data/specialties.json` 維護，再執行 `node scripts/generate-specialty-pages.mjs` 更新明確的空狀態頁面。

## 隱私與授權

Repository 預計公開，只放原創程式碼與取得公開授權的示範內容。不要提交患者資料、私人研究資料、私人 PDF、個人筆記、答題紀錄、憑證或 API 金鑰。個人資料需要後續採用私有儲存與匯出／備份流程。

## CMS 與部署

根目錄 `.pages.yml` 定義 Pages CMS 的內容集合草案；正式啟用需登入 Pages CMS 並授權它讀寫目標 GitHub Repository。GitHub Pages 由 `.github/workflows/deploy-pages.yml` 自動建置並部署，輸出目錄為 `dist`。公開網址為 <https://acer2838291-ui.github.io/medical-learning-hub/>。

## 文件

- [`docs/reference-design-audit.md`](docs/reference-design-audit.md)：參考網站視覺稽核與尚待補測項目。
- [`docs/test-report.md`](docs/test-report.md)：實際驗收狀態。
- [`docs/USER-MANUAL.md`](docs/USER-MANUAL.md)：非工程背景使用者的更新手冊。
- [`AGENTS.md`](AGENTS.md)：未來 Codex/GPT 修改規則。
- [`CONTRIBUTING.md`](CONTRIBUTING.md)：分支與 Pull Request 規範。

## 授權

程式碼以 MIT License 提供。第三方教材、題目、圖表與論文全文不因本程式碼授權而自動取得重製權。
