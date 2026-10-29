# Medical Learning Hub

**Medical Learning Hub — Personal Medical Knowledge & Learning Workspace**

個人醫學知識與學習工作區，提供繁體中文疾病知識卡、教科書書目／章節索引、疾病比較、互動心智圖、文獻閱讀、醫學計算器及學習複習。國考筆記仍保留為醫學（三）至醫學（六）的學習模式。

## 專案狀態

本專案使用 Astro + Starlight。新增的書目、章節、比較表、心智圖、收藏及個人複習資料以 IndexedDB 保存在目前瀏覽器，並可透過工作區匯出／匯入 JSON。它不是雲端備份：換電腦、清除網站資料或共用裝置都可能造成遺失或暴露，請定期匯出並妥善保管備份。私人資料不會自動傳送至外部 AI API。

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

`npm ci`、`npm test` 與 `npm run build` 用於驗證變更。部署及測試狀態請查看最新 Pull Request 的 GitHub Actions 執行結果。

## 個人工作區與授權

教科書目錄只保存使用者輸入的書目和官方連結，不預置未核實版本或虛構章節。AccessMedicine 的目錄連結不表示網站取得全文或 AI 處理授權；請先閱讀 [`docs/accessmedicine-access-review.md`](docs/accessmedicine-access-review.md)。在適用的書面授權確認前，不要讓 AI Agent 存取受限制全文、批次擷取內容或製作逐段翻譯。示範疾病條目明確標示來源、授權與待驗證資訊。

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

## Codex／Medical Agent Toolkit

本 Repository 已整合可公開的專案級 Codex Skills，放在 `.agents/skills/`，用於醫學筆記、題庫、文獻證據檢查、網站維護與公開前安全審查。

- 詳細流程：[Agent Toolkit 整合說明](docs/AGENT_TOOLKIT.md)
- 筆記範本：[docs/templates/medical-note.template.mdx](docs/templates/medical-note.template.mdx)
- 自編題資料範本：[docs/templates/questions.sample.json](docs/templates/questions.sample.json)

**重要：** 私人 TriNetX LIVE SOP／Methodology 文件、原始 Advanced Analytics 報告、來源驗證台帳、個人教材與未發表研究不包含在公開 Repository。它們應保存在獨立私有工作區。自訂 `draft: true` 欄位不會讓已提交的檔案變成私人檔案。

## 授權

程式碼以 MIT License 提供。第三方教材、題目、圖表與論文全文不因本程式碼授權而自動取得重製權。
