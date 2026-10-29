# Medical Agent Toolkit：公開網站整合指南

本頁說明已整合至 `medical-learning-hub` 的公開安全子集。Codex 可以從專案根目錄讀取 `AGENTS.md`，並按需求載入 `.agents/skills/<skill-name>/SKILL.md`。

## 安裝範圍與功能

| Skill | 使用情境 | 硬性限制 |
| --- | --- | --- |
| `medical-hub-maintainer` | Astro/Starlight 網站更新、醫學計算器、分類維護 | 保留既有網站與樣式；修改後驗證 |
| `medical-slide-notes` | 使用已提供的投影片／講義整理醫學筆記 | 僅依指定來源；清楚分離原文、翻譯、考點 |
| `exam-question-builder` | 四選一、填充題、練習題與答案解析 | 自編題不可冒充正式國考考古題 |
| `literature-evidence-audit` | DOI/PMID、文獻矩陣、來源核對 | 未讀到原文的結論必須註明未驗證 |
| `publication-safety-review` | 發布前審核內容與授權 | 未授權／私人／敏感內容禁止公開 |

## 絕不能直接推入本公開 Repo 的內容

- TriNetX 原始 Query／Advanced Analytics 輸出、LIVE SOP 的私有原件與 `TriNetX_Methodology.pdf`；上一版工具包中的完整研究個案數據與 source ledger。
- 研究 Protocol 未發表版本、IRB 相關未公開資料、任何患者或機構敏感資料。
- 未確認允許重製與公開的投影片、教科書 PDF、補習班考題、原始測驗紀錄、個人閱讀註解與私密 API 憑證。

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
3. 新內容先在 **Repo 外**審核來源、授權與敏感資訊；只提交核准公開的內容。
4. 新筆記遵守 `src/content.config.ts` 的 schema 和 `src/data/specialties.json` 的科別 ID；參考 `docs/templates/`。
5. 有程式修改時執行 `npm test` 與 `npm run build`。若環境無法執行，清楚報告未驗證。
6. 回報修改檔案、Commit SHA、GitHub Actions 狀態及是否實際部署；不把提交成功當成建置成功。

## Codex 指令範例

> 請閱讀 AGENTS.md、.agents/skills/medical-hub-maintainer/SKILL.md 與 .agents/skills/publication-safety-review/SKILL.md。先確認我的教材是否可以公開，再把已授權的神經科內容整理成醫學（四）的 MDX 筆記。保留原文與繁中翻譯分層、來源及考點，不改配色或網站架構。完成後執行 npm test、npm run build，回報修改檔案及未完成的核對。
