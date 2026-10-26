# 2026-10-27 網站程式碼稽核與視覺修正

## 已確認並修正

- 側邊欄白字白底：Starlight 把 `--sl-color-white` 當成語意上的「高對比文字」，淺色模式應為深色，而原 CSS 把此變數一律設定成白色。
- 主標題難閱讀：同一語意色票使 PageTitle 變成白字。
- 英文路徑外露及目錄過深：替換原始 `autogenerate`，從 `src/data/specialties.json` 建立繁體中文專科選單。
- 重複頁面 H1：移除自動產生分類頁內額外的 Markdown H1，讓 Starlight PageTitle 成為唯一主標題。
- 生成器覆蓋舊筆記：新增存在檢查，缺檔才建立分類首頁。
- 明暗主題不同步：一般工具頁使用與 Starlight 相同的 `starlight-theme` 偏好。
- 內容後台網址：導覽改連 Pages CMS 登入入口，但授權與管理功能仍待實測。

## 全站靜態查核

| 項目 | 程式碼現況 | 驗收狀態 |
|---|---|---|
| 醫學筆記分類 | 4 考科、所有專科的 MDX 索引頁 | 存在，尚無正式筆記 |
| 網站搜尋 | Starlight + Pagefind | 已設定，線上互動待測 |
| 文獻庫 | localStorage 書目增刪、JSON 匯出 | 原型，無跨裝置同步 |
| PDF 閱讀器 | 只有未完成說明 | NOT IMPLEMENTED |
| PICO | 單一草稿 localStorage | 原型 |
| 國考練習 | 1 題自編 SpO₂ 示範題 | 原型，非完整國考題庫 |
| 答題紀錄 | localStorage + JSON 匯出 | 原型 |
| 計算器 | AG、修正 AG、A–a、CaO₂、DO₂ | 純函式已有既存測試，介面待實測 |
| 表格工具 | 可增刪列欄、匯入匯出 CSV/MD | 原型；CSV 解析不完整 |
| 收藏 | localStorage 收藏連結 | 原型 |
| Pages CMS | 有 .pages.yml | 未完成 GitHub 授權測試 |
| GitHub Pages | 已有 GitHub Actions 設定 | 須待 CI 與部署結果確認 |

## 限制

本次讀取的是 GitHub 原始碼與使用者截圖，因網頁即時抓取連線受限，尚未進行真實手機版、在線搜尋與跨頁點擊測試。本次色票沿用 `docs/reference-design-audit.md` 對原參考網站的估算值，不是原站 CSS 的精確 HEX 值。
