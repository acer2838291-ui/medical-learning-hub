# 專案協作規則

1. 將網站定位為個人醫學知識與學習工作區；醫學（三）至（六）保留為國考模式入口，不要求其他疾病知識硬套考科。
2. 新增筆記前先搜尋既有文章，優先更新既有內容，避免重複建立。
3. 保留正式醫學英文專有名詞；翻譯使用臺灣繁體中文。縮寫第一次出現須附英文全名。
4. 不捏造來源中的數字、年份、考點、論文結果、版本、章節目錄或參考文獻。缺少資訊要標成缺乏資料或待驗證。
5. 清楚區分原始來源內容、中文整理、AI 機轉解釋與未驗證資訊。重要主張記錄來源類型、版本／年份、章節／頁碼、URL／DOI／PMID、查核日期、驗證狀態與授權。
6. 不修改使用者未要求修改的醫學文章或網站設定；拓展網站時沿用 Astro + Starlight 與低飽和暖米白、深綠灰、陶土色設計 token。
7. 不把 AI 推論冒充來源，不把自編題冒充正式國考歷屆試題。
8. 新增計算器須附公式來源、單位、適用範圍、輸入驗證及測試；劑量、診斷標準、治療建議須標日期、族群與原始來源。
9. 個人書目、章節進度、私有筆記、答題紀錄、比較表和心智圖存於瀏覽器 IndexedDB 或私有端；不得送到外部 AI API。IndexedDB 不是雲端備份或安全資料庫，需提供匯出備份。
10. 公開 Repository 不得包含患者資料、私人研究文件、私人 PDF、帳密、API 金鑰、未授權教科書全文／翻譯或個人答題紀錄。`draft: true` 不代表私有。
11. AccessMedicine 等訂閱平台先檢查服務條款和適用機構合約。McGraw Hill 條款未明確允許外部 AI agent、AI-enabled browser、抓取或向外部 AI 傳送內容前，只能管理書目與官方連結；不得進入受限全文、爬取、批次下載、截圖擷取或產生全文翻譯。機構合約不明就標示「合約內容待確認」。
12. 只有授權明確的開放資料、使用者原創內容或符合書面授權的內容才可處理和公開；授權狀態不明就不要將內容放進公開追蹤檔。
13. 修改後依需求執行 `npm test`、`npm run build`，檢查新增路由、內部連結、水平溢出與手機版閱讀；只回報實際跑過的驗證。
14. 未被要求時不更換框架、不重寫整站。
15. 更新完成後回報修改檔案、Commit、PR、測試、Pages 部署、來源／授權及未完成項目。提交不等於建置成功，建置不等於已部署。

## Agent Toolkit：公開網站專用整合

- Codex Skills 位於 `.agents/skills/`，依任務選用：`medical-hub-maintainer`、`medical-textbook-study`、`medical-chapter-explainer`、`medical-knowledge-organizer`、`medical-comparison-table`、`medical-mindmap-builder`、`medical-source-verifier`、`medical-slide-notes`、`exam-question-builder`、`literature-evidence-audit`、`publication-safety-review`。
- 修改內容或準備公開前，先閱讀 `docs/AGENT_TOOLKIT.md` 和適用 Skill，核對來源、授權及是否含私人資料。
- `draft: true` 是自訂 metadata，不是存取控制；未授權教材、私人筆記、研究報告或敏感資料不可放入公開追蹤路徑。
- AccessMedicine / McGraw Hill：若適用授權未明確允許外部 AI agent 與內容處理，只能處理書目、官方連結、公開授權來源及原創內容。不要進入受限全文或將內容交給外部 AI。學校帳號不等於 AI 使用授權。
- 只有查過原始來源或已提供材料的主張才標記為 `source_checked`；區分 `reported_only`、`unverified` 與歷史版本。方法學指引不能冒充 LIVE 驗證。
- 個人學習資料應留在本機 IndexedDB 或其他私有儲存位置，並提供使用者控制的匯出備份。
