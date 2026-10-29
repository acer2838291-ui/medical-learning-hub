# 專案協作規則

1. 新增筆記前先搜尋既有文章，優先更新既有內容，避免重複建立。
2. 保留教材原文與正式醫學英文專有名詞；翻譯要自然且準確。
3. 不捏造教材中的數字、年份、考點、論文結果或參考文獻。
4. 清楚區分投影片原文、翻譯、編輯整理與 AI 推論。
5. 可依需求以粗體及設計系統指定顏色標示考點。
6. 不修改使用者未要求修改的文章或設定。
7. 不把 AI 推論冒充文獻原文或把自編題冒充正式國考歷屆試題。
8. 新增計算器須附公式來源、單位、適用範圍、輸入驗證及測試。
9. 修改後執行 `npm run build`；計算邏輯修改時執行 `npm test`。
10. 檢查內部連結、頁面水平溢出及手機版閱讀。
11. 保留本專案的低飽和暖米白、深綠灰與陶土色設計 token。
12. 未被要求時不更換框架、不重寫整站。
13. 不將患者資料、私人筆記、私人 PDF、API 金鑰或個人紀錄提交到公開 Repository。
14. 更新完成後回報修改檔案、Commit、預覽網址、部署狀態及未完成項目。
15. 任何醫學內容若來源或授權不清楚，先以私有內容處理，並在公開前取得公開授權。


## Agent Toolkit v1.2：公開網站專用整合

- 本專案的 Codex Skills 位於 `.agents/skills/`，依任務選用：`medical-hub-maintainer`、`medical-slide-notes`、`exam-question-builder`、`literature-evidence-audit`、`publication-safety-review`。
- 修改內容或準備公開前，先閱讀 `docs/AGENT_TOOLKIT.md`，核對來源、授權及是否含私人資料。
- `draft: true` 是 `src/content.config.ts` 的自訂 metadata，**不是存取控制或保密措施**；不可將未授權教材、私人筆記、研究報告或任何敏感檔案放入 `src/content/docs/`、`public/` 或提交到公開 Git。
- TriNetX LIVE SOP、TriNetX Methodology 以及 Medical Agent Toolkit v1.2 的私有研究模組保留在 repo 外的本機私有工作區；不可直接複製至本專案。方法學檢查不能冒充 LIVE 驗證。
- 只有查過原始來源或已提供材料的數據才可標示已驗證；把 `unverified` 與 `source_checked` 分開，禁止以歷史版本數據覆蓋新版本。
- 新增可公開內容時優先使用 `docs/templates/` 作為離線範本；獲得公開權限並核對完成後才移入網站內容目錄。
