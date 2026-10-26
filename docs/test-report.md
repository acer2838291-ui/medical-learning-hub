# 建置與驗收紀錄

查核日期：2026-10-27

## 狀態

| 項目 | 狀態 | 證據／限制 |
|---|---|---|
| 參考網站首頁與指定文章可開啟 | PASS | 已查看首頁及指定 hypoxemia 教材頁 |
| 視覺稽核文件 | PARTIAL | 桌面視窗已觀察；手機、完整頁長與 Computed Style 尚未測得 |
| 計算器公式測試 | PASS | `npm test`：5 tests passed，涵蓋 AG、albumin-corrected AG、A–a、CaO₂、DO₂ 與非法輸入拒絕 |
| Astro + Starlight 專案設定檔 | PASS | 已修正 Starlight sidebar 設定與繁體中文 i18n schema |
| 套件安裝 | PASS | `npm install --no-audit --no-fund` 成功，安裝 283 個套件並產生 `package-lock.json` |
| `npm create astro` 初始化 | RECOVERED | 初次初始化下載失敗；改在已建好的專案直接安裝依賴後恢復 |
| Astro production build | PASS WITH WARNING | `npm run build` 成功產生 57 個頁面及 Pagefind 搜尋索引；`/404` 內容頁與 Starlight 404 路由有一則優先順序警告。環境另提示未知的 npm `http-proxy` 設定，均未阻止建置 |
| GitHub Repository | BLOCKED | 已確認連接帳號為 `acer2838291-ui`，目前 repository list 為空；瀏覽器 GitHub 頁面要求登入，尚未建立 repo |
| GitHub Pages 部署 | PASS | Cloudflare 未連接，因此改用 GitHub Pages；GitHub Actions 首次部署成功，公開首頁已開啟驗證，最新導覽前綴修正正在重新部署 |
| Pages CMS | NOT STARTED | 設定檔已備妥；需登入及授權 GitHub App 後才能實測 |
| PDF.js | NOT IMPLEMENTED | 已列入依賴規劃；未安裝、未實作 |
| IndexedDB／私人內容 | NOT IMPLEMENTED | 尚未接入；禁止把個人筆記或 PDF 放入公開內容目錄 |

## 已有自動化計算測試

`npm test` 已執行：5 tests passed，0 failed。這只驗證純計算函式，不代表計算器頁面或整個網站驗收通過。

## 最終驗收矩陣

按 SOP 第十三階段，完整網站／文章／搜尋／文獻閱讀器／題庫／計算器 UI／表格／CMS／部署仍須逐項實測；本次 Build 只證明 Astro 專案可編譯及輸出靜態頁面，不代表上述功能已完整驗收。不得以本紀錄中的原型檔案或設定檔代替完整驗收。
