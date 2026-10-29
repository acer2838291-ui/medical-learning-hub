# AccessMedicine access and rights review

- **Checked:** 2026-10-30 (Asia/Taipei)
- **Repository:** `acer2838291-ui/medical-learning-hub`, public GitHub Pages project
- **Purpose:** Determine whether the public site may index AccessMedicine records and process licensed text with this AI/browser workflow.
- **Important boundary:** One user-linked restricted chapter page was opened and its page text was exposed to this AI-powered browser session on 2026-10-30 before the publisher restriction was checked against the current operation. No chapter text, screenshot, image, or PDF has been committed to this public repository. Further AI interaction with restricted AccessMedicine pages has stopped pending written permission.

## Findings

### ERMG and CSMU library access

| Source | What was observed | Conclusion |
|---|---|---|
| [CSMU ReSearch Eyes ERMG](https://sw.lib.csmu.edu.tw/) | The official ERMG home page loaded on 2026-10-30. It is titled “中山醫學大學圖書館 ReSearch Eyes電子資源查詢系統” and offers database, e-journal, e-book, web-resource and online-course discovery. A public search record was visible: **AccessMedicine電子書檢索平台台(同時上線人數2人版)**, record `DB000000086`, type 資料庫, publisher The McGraw-Hill Companies, linking to the ERMG record at `https://sw.lib.csmu.edu.tw/er/geter/DB000000086/`. This is a catalog record; it does not show a current subscription term or covered user categories. The user reports that their local Chrome can authenticate through CSMU's off-campus proxy and display AccessMedicine full text; this agent did not view the content. | ERMG is an active electronic-resource discovery portal and its catalog includes an AccessMedicine record. The user-reported local session indicates functional account-level access, but **the current subscription term, covered user categories, and institutional contract scope remain unconfirmed**. |
| [CSMU library portal](https://elib.csmu.edu.tw/) | Direct browser navigation returned HTTP 403 Forbidden from the site. Search indexing exposes the official “電子資源” page at [DatabaseIntro.php](https://elib.csmu.edu.tw/AccessWeb/DatabaseIntro.php), but the indexed content only establishes that an electronic-resources section exists. | The live portal could not be inspected in this browser. It does not independently verify an AccessMedicine subscription. |
| [ERMG help / user manual](https://sw.lib.csmu.edu.tw/media/re_csmu/infosettingf/1743407521.pdf) | Linked from the ERMG home page. The resource page visibly offers Login and personal-service/favorites features. The public pages did not reveal the required CSMU account type, off-campus method, or any institution-specific license terms. | Account type and off-campus access method are **pending library confirmation**. Do not infer these from ERMG availability or a successful personal login. |

The ERMG catalog record was checked without opening AccessMedicine content. To verify the cloud-browser connection failure, the official homepage was freshly opened and its Login link followed once. The resulting redirect showed no login form; this agent tested no account and did not request or enter credentials. The user separately reports that their local Chrome session can sign in through the CSMU off-campus proxy and display full text. That report indicates functional access for the user's session, but does not establish that an external AI agent may access, process, translate, or retain the material.

### User-linked Work-mode chapter page check

- **Date:** 2026-10-30 (Asia/Taipei).
- **Entry:** The user supplied the Chapter 295 URL; the connected Chrome extension exposed the existing tab, whose page identified the institutional provider as Chung Shan Medical University.
- **Observed page metadata:** Harrison's Principles of Internal Medicine, 22nd Edition; Chapter 295, “Approach to the Patient with Disease of the Respiratory System.” The page returned readable chapter text in the AI browser context. This confirms technical access only; it does not establish that the access or processing was authorized under the publisher or institutional license.
- **Table check:** One HTML table was present with two column headers and eight table rows total (one header row plus seven data rows). Caption, footnotes, merged cells, and comparison against a publisher PDF were not verified. Therefore table completeness is **PARTIAL / NOT VERIFIED**.
- **Image check:** Nine `<img>` elements were present; none had figure-like alt text or class metadata. This does not prove there are no medical figures because figures may be implemented as CSS, links, or other embedded assets. Figure completeness is **NOT VERIFIED**.
- **PDF check:** The page showed a “Download Section PDF” control followed by “Sign in to Download.” No PDF was downloaded. PDF availability is **BLOCKED / NOT TESTED**.
- **Follow-up:** After checking the publisher's current Terms of Use, no further page interaction, extraction, screenshotting, downloading, or content-derived study material was performed. The restricted page text is not included in this report or repository.

### ERMG cloud-browser connection incident

- **Date:** 2026-10-30 (Asia/Taipei; the browser did not expose a trustworthy local time for the event).
- **Fresh entry point:** `https://sw.lib.csmu.edu.tw/` loaded successfully.
- **Failing host/path:** `elaph.csmu.edu.tw/pds` (ERMG login redirect, as displayed/reported; the full redirect URL and any session parameters are intentionally not retained).
- **Observed message:** `upstream connect error or disconnect/reset before headers. reset reason: remote connection failure`
- **Result:** No login form appeared. This is an upstream/remote connection failure, not evidence of an incorrect password. No credentials were entered. Retrying was stopped after this single fresh-homepage check. The user separately confirmed ERMG opens in their local Chrome; the failure is specific to the Work cloud browser path and does not establish a general CSMU outage.
- **Troubleshooting handoff:** CSMU IT can check the ERMG/Aleph `/pds` upstream service, reverse-proxy connectivity, DNS/TLS and availability from external/cloud egress at the reported date. OpenAI Support can be given the browser environment (Work cloud browser), successful homepage host, failing host/path, exact error, and date. Do not send credentials, cookies, or full session-bearing redirect URLs.
- **Work-session limitation:** This session exposes the Work cloud CUA browser and no connector capable of attaching to the user's Windows Chrome or switching this automation to a local browser profile. It cannot continue ERMG institutional authentication locally. The user can use the Windows desktop Work built-in/Chrome connection themselves; the cloud-browser error did not reach the authentication form.
- **Next verification:** With the user's locally authenticated browser session, verify only the official ERMG catalog record, resource status/term, covered user types, remote-access route, and any published license/terms. Do not enter restricted AccessMedicine textbook pages or process full text until the applicable institutional contract and written AI-processing permission are confirmed.

### Publisher terms

| Source | Applicable points found on 2026-10-30 | Effect on this project |
|---|---|---|
| [AccessMedicine Terms of Use](https://accessmedicine.mhmedical.com/ss/terms.aspx), checked 2026-10-30 | Sections around lines 119–129 grant a limited, non-transferable internal research/study license; permit only limited portions to be downloaded/printed for internal study; prohibit other copying, transmission, modification and derivative works; and prohibit systematic retrieval to build a database without prior written permission. Automated downloading/indexing is also restricted. The page says section-specific or institutional subscription terms can control if they conflict. | Do not scrape, batch-download, capture whole chapters, build a full-text database, or create chapter translations from AccessMedicine. CSMU's contract may add or supersede terms but has not been obtained. |
| [McGraw Hill Terms of Use](https://www.mheducation.com/about-us/policy-center/terms-use.html), page states last updated 2026-10-16 | Clauses 5(iii)–(v) prohibit agent/robot/manual systematic retrieval absent written authorization; use of McGraw Hill content or outputs in external AI/ML; and enabling a third-party AI agent or AI-enabled browser to access, read, navigate, interact with, or act in the Services, absent written authorization. Clause 5(ii) restricts derivative works unless expressly permitted by an AI Feature. Section 13 describes publisher AI Features as product-specific and does not itself grant an external agent permission. | This AI-powered browser/agent must not enter or operate AccessMedicine restricted content. Do not transmit textbook passages to external AI. No AI extraction, translation, or systematic collection. |
| [McGraw Hill Terms of Service](https://www.mheducation.com/about-us/policy-center/terms-service.html), page states last updated 2026-10-16 | Applies to a subscribing educational institution/organization and designated end users where an applicable subscriber agreement exists. Its Restrictions on Use repeat prohibitions on systematic retrieval, external AI use, and third-party AI agents unless McGraw Hill gives written authorization. Its AI Features are publisher-operated features, not a general permission for third-party AI. The contract may include institution-specific scope and terms. | A school account alone is not sufficient proof that an external AI agent may process content. **Institutional contract contents and any written AI authorization remain unconfirmed.** |
| [MedlinePlus Medical Encyclopedia: Acute kidney failure](https://medlineplus.gov/ency/article/000501.htm), reviewed during source screening | The page identifies a third-party health content provider; no open license allowing reuse was established in this review. | It was not used as a source for the published AKI demonstration. Prefer the CC BY 4.0 PubMed Central review listed on the demo page. |

## Permission decisions for this website

| Operation | Status | Decision |
|---|---|---|
| Store bibliographic fields and official book/chapter URLs | **Allowed as an index, subject to CSMU contract and ordinary attribution** | The workspace stores only metadata entered by the user and official links. It does not seed unverifiable editions or chapter lists. |
| Open or browse a restricted AccessMedicine textbook page with this Work AI browser | **Not allowed under the publisher terms reviewed, absent applicable written authorization** | Do not use the agent/browser to enter or interact with restricted textbook content. User-controlled ordinary access is separate and does not authorize agent access. |
| Automated browsing, scraping, batch downloading, screenshot extraction, or building a text database | **Prohibited absent prior written permission** | No such extraction is implemented. |
| Send licensed passages or publisher output to an external AI service | **Prohibited by the reviewed McGraw Hill Terms of Use/Service absent written authorization** | This site has no external AI API and does not transmit personal notes. |
| Generate paragraph-by-paragraph translation or a substitute Chinese version | **Not permitted absent applicable written authorization** | Publisher terms restrict modifying content and derivative works. Do not create or publish an extensive translation. |
| Save a private derivative study note based on licensed chapter text | **Contract content pending confirmation** | Personal study access does not itself settle derivative-work or AI-processing rights. Keep notes original and local; ask the library/publisher for written clarification before using licensed text as an AI input or retaining text-derived translations. |
| Use content made available under a separate publisher AI Feature | **Only if that exact feature and subscription expressly authorize the intended use** | The existence of McGraw Hill AI Features does not authorize external agents or broaden AccessMedicine rights. |

## What to ask CSMU Library

1. Is AccessMedicine currently included in a CSMU library or hospital subscription (not a trial or an individual subscription)? Which institution and user categories are covered, and what is the current term?
2. What account type is required (campus account, library account, personal publisher account, or another mechanism), and what is the official off-campus access route?
3. Does CSMU's executed subscription/license agreement or written publisher authorization expressly allow a third-party AI agent or AI-enabled browser to access/read/navigate AccessMedicine on a user's behalf?
4. Does that authorization cover sending chapter text to an external AI, paragraph translation, private derived notes, and retention in a personal knowledge base? What volume, storage, deletion, and attribution restrictions apply?
5. Does any publisher-operated AI feature cover AccessMedicine content, and is it available under CSMU's actual subscription?

Until the library or McGraw Hill provides applicable written terms, treat AI access, full-text processing, extensive translation, and derivative notes based on AccessMedicine as **not authorized**. The website permits book metadata, official hyperlinks, original notes, and openly licensed/public-domain resources with their source/license recorded. The AKI example uses an attributed CC BY 4.0 review; it does not use the MedlinePlus screening page or AccessMedicine content.
