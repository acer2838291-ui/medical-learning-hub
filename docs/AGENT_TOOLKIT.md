# Medical Agent Toolkit：公開網站整合指南

本頁說明已整合至 `medical-learning-hub` 的公開安全子集。Codex 可以從專案根目錄讀取 `AGENTS.md`，並按需求載入 `.agents/skills/<skill-name>/SKILL.md`。

## 安裝範圍與功能

| Skill | 使用情境 | 硬性限制 |
| --- | --- | --- |
| `medical-hub-maintainer` | Astro/Starlight 網站更新、醫學計算器、分類維護 | 保留既有網站與樣式；修改後驗證 |
| `medical-textbook-study` | 書目、章節索引、閱讀進度 | 不猜版本或章節；AccessMedicine 須通過 AI 授權關卡 |
| `medical-chapter-explainer` | 已授權章節的繁中教學說明 | 未獲書面授權，不讓外部 AI 讀取或逐段翻譯受限全文 |
| `medical-knowledge-organizer` | 系統化疾病知識卡 | 逐主張追蹤來源、版本、驗證與授權 |
| `medical-comparison-table` | 疾病、診斷、治療與藥物比較 | 無來源的數值與建議留白或標為待驗證 |
| `medical-mindmap-builder` | 疾病、機轉、診斷與治療心智圖 | 共用概念 ID；不可重製未授權教科書圖表 |
| `medical-source-verifier` | DOI/PMID/指南及授權查核 | 元資料不等於全文核對；開放存取不等於開放授權 |
| `medical-slide-notes` | 使用已提供的投影片／講義整理醫學筆記 | 僅依指定來源；清楚分離原文、翻譯、考點 |
| `exam-question-builder` | 四選一、填充題、練習題與答案解析 | 自編題不可冒充正式國考考古題 |
| `literature-evidence-audit` | DOI/PMID、文獻矩陣、來源核對 | 未讀到原文的結論必須註明未驗證 |
| `publication-safety-review` | 發布前審核內容與授權 | 未授權／私人／敏感內容禁止公開 |

## 絕不能直接推入本公開 Repo 的內容

- TriNetX 原始 Query／Advanced Analytics 輸出、LIVE SOP 的私有原件與 `TriNetX_Methodology.pdf`；上一版工具包中的完整研究個案數據與 source ledger。
- 研究 Protocol 未發表版本、IRB 相關未公開資料、任何患者或機構敏感資料。
- 未確認允許重製與公開的投影片、教科書 PDF、補習班考題、原始測驗紀錄、個人閱讀註解與私密 API 憑證。

## AccessMedicine / McGraw Hill AI 授權關卡

本次查得 McGraw Hill Terms of Use / Terms of Service 限制外部 AI、AI agent、AI-enabled browser 與系統性擷取，除非有適用的書面授權。AccessMedicine 另限制系統性擷取和建立內容資料庫；機構協議可能調整適用條款。CSMU 合約目前尚未取得或核實，因此：

- 可以管理使用者新增的書目欄位、章節標題索引和官方連結；未知書目或章節不得猜填。
- 不讓 Work AI 瀏覽器進入 AccessMedicine 受限章節；不抓取、批次下載、截圖擷取、送外部 AI、逐段翻譯或公開內容衍生物。
- 只有取得明確適用於外部 AI 存取及指定處理方式的書面授權後，才可重新評估。
- 學校帳號或校外可連線只能證明存取途徑，不能證明 AI 處理權。

**注意：** `src/content.config.ts` 中的 `draft` 是專案自訂欄位；`draft: true` 不會阻止 GitHub 公開檔案，也不能保證 Astro 不產生該頁面。若內容無公開授權，一開始就應存於 Repository 外的私有位置。只在合法公開前將已核對內容移入 `src/content/docs/`。

`.gitignore` 是防止意外加入的輔助措施，不是保密或撤銷已上傳資料的機制。

## v1.2 私有研究模組如何搭配

完整版 `Medical Agent Toolkit v1.2`（內含 `trinetx-protocol-auditor`、`rwe-stat-integrity`、`manuscript-rwe-review`，以及使用者提供的 LIVE SOP 與 Methodology）必須安裝在**公開 Repo 外的私有研究工作區**。Codex 需要能存取該私有工作區，才可使用其中的來源核對規則。

執行研究審查時，請區分：
1. Source checked：有對應的原始文件、版本和定位。
2. Reported：只有研究摘要或郵件記錄。
3. Unverified：缺少第一手報告／欄位核對。
4. Historical version：數值屬於舊版分析，不可移入目前研究版本。

任何方法學指引都不等於個別 TriNetX Query／AA 已在 LIVE 系統查核完成。

## 典型工作流程

1. 在 Codex 中開啟此專案，先讀 `AGENTS.md`。
2. 根據任務讀對應的 `.agents/skills/.../SKILL.md`，而不是一次載入全部。
3. 新內容先審核來源、授權與敏感資訊；只提交核准公開的原創內容或授權材料。
4. 知識卡依疾病／系統／專科／機轉分類，必要時再連結國考考科；遵守 `src/content.config.ts` schema 與科別 ID。
5. 個人書目、筆記、比較表、心智圖和答題資料只留本機 IndexedDB 或私有儲存，定期 JSON 備份；不自動傳送到外部 AI API。
6. 有程式修改時執行 `npm test` 與 `npm run build`。若環境無法執行，清楚報告未驗證。
7. 回報修改檔案、Commit SHA、PR、GitHub Actions 與部署狀態；不把提交成功當成建置或部署成功。

## Codex 指令範例

> 請閱讀 AGENTS.md、.agents/skills/medical-hub-maintainer/SKILL.md 與 .agents/skills/publication-safety-review/SKILL.md。先確認我的教材是否可以公開，再把已授權的神經科內容整理成醫學（四）的 MDX 筆記。保留原文與繁中翻譯分層、來源及考點，不改配色或網站架構。完成後執行 npm test、npm run build，回報修改檔案及未完成的核對。
