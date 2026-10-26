# Medical Learning Hub 使用與更新手冊

## 目前可以做什麼

目前有四大考科／專科分類頁、示範計算器、自編示範題、答題紀錄、本機文獻書目欄位、PICO 草稿與瀏覽器本機表格。網站依賴尚未安裝，頁面尚未通過正式 Build，因此目前不是已發布網站。

## 新增筆記

1. 確認教材及圖片是否允許公開；有疑慮先放私有資料夾，不要提交到公開 GitHub。
2. 在 `src/content/docs/` 找到醫學（三）至醫學（六）中正確專科資料夾。
3. 新增 `.mdx` 文件，填入標題、摘要、考科、專科、標籤及來源。
4. 保留教材原文、醫學英文名詞、翻譯與清楚的來源註記。
5. 新文章不要直接放入患者可識別資訊或受限制 PDF。

Pages CMS 尚未完成登入授權；啟用後可從 CMS 集合新增或編輯內容，變更會直接提交到 GitHub。

## 文獻、題目與表格

- 文獻書目與 PICO 範本目前存在此瀏覽器的 localStorage，清除瀏覽資料會遺失。JSON 匯出可作備份。
- PDF.js 閱讀器、逐頁註解和合法 PDF 私有儲存尚未實作。
- 國考頁只有一題自編示範題；不是正式歷屆題庫。紀錄可匯出 JSON。
- 表格可編輯、儲存到本機並匯出 CSV／Markdown；目前 CSV 匯入只涵蓋簡單格式，需補強引號與逗號解析。
- 計算器核心含 AG、修正 AG、A–a、CaO₂、DO₂；需完成 Build 與頁面實測後才能視為可發布功能。

## 更新與回復

GitHub Repository 已建立。GitHub Pages 會由 `.github/workflows/deploy-pages.yml` 自動建置並部署 `main` 分支；網站網址為 <https://acer2838291-ui.github.io/medical-learning-hub/>。Pages CMS 尚待登入授權。未來改內容可使用 `content/...` 分支，加功能用 `feature/...`，修錯用 `fix/...`；經 Pull Request 檢查後再合併 `main`。

## 求助 Codex/GPT

提供具體文章或功能名稱、正確考科與專科、來源／公開授權、需要修改的內容，以及是否屬於私人資料。修改後要求回報檔案、測試結果、Commit、預覽網址與發布狀態；未完成項目必須標示清楚。
