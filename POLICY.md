# Policy on the Academic Use of Generative Artificial Intelligence in Courses Taught by Anastasiia Iskandarova-Mala (Department of Software Systems, Dniprovsky State Technical University (DSTU), Ukraine)

## **0. Key Idea**

An **effective AI policy** is not a blanket ban but a **managed integration** of AI into the learning process. In my courses, AI is treated as a **cognitive partner** and a tool to deepen learning, not replace it. The ultimate **academic and professional responsibility** for the content, quality, originality, and reliability of work always lies with the learner.

## **1. Teaching Philosophy**

I view our classes not as traditional “lectures” but as **collaborative sessions**—a space for equitable exchange of ideas, experiences, and insights. In this process, my role is not an authoritarian lecturer but a **mentor and facilitator** who, at this stage, has more experience in certain areas and whose task is to help the learner unlock their potential.

We focus not on the syntax of technologies but on the competencies needed to build real, viable, and responsible projects. Key skills we develop include:

- **Team collaboration:** ability to work together effectively toward a common goal.  
- **Presentation and communication:** ability to articulate ideas and technical decisions clearly and persuasively.  
- **User empathy:** ability to research, listen to, and understand the needs of those for whom the product is created, turning user needs into functional requirements.  
- **Entrepreneurial mindset:** initiative, proactivity, responsibility, and the ability to turn ideas into real solutions and products.

**Inclusivity** is essential and manifests on two levels. First, in our interaction with learners: we create a safe environment where every voice is valued and diverse experiences are respected. Second, in our outcomes: we learn to design and develop products that are accessible and convenient for as wide an audience as possible, accounting for diverse needs and abilities.

### **Link to the AI Policy**

Within this philosophy, AI tools are not a way to avoid work or simply obtain a grade, but an **assistant for learning, accelerating development, generating ideas and hypotheses, processing information, and automating routine tasks**, allowing learners to focus on creative and strategic tasks. A learner’s ability to formulate precise engineering tasks for AI (prompt engineering), critically evaluate its outputs, and ethically integrate them into a project is just as important as the ability to write code or create design. This policy is intended to guide learners toward ethical and effective use of AI as a tool of the modern professional.

## **2. Purpose and Scope**

The policy governs the principles, rules, and procedures for using generative AI tools (LLMs, code assistants, image/audio/video generators) in all types of academic activities in my courses: lectures, labs, practicals, projects, coursework, quizzes, exams, etc.

**Official instructor resources supporting responsible AI use:**

- **Prompt-engineering learning repository** — a curated collection of guides, courses, `prompts.md` examples, common pitfalls, and templates. Continuously updated. Link: `<ADD_LINK_TO_REPOSITORY>`  
- **Instructor’s personal assistant** — a verified chatbot for clarifying assignments and the AI policy, with example prompts and micro-hints. Query logs may be included in the “AI Use Declaration” as evidence of process transparency. Link: `<ADD_LINK_TO_ASSISTANT>`  
- **RAID-G Declaration Generator** — a web tool for quickly creating and exporting the “AI Use Declaration” aligned with this policy. Link: https://steminist-ua.github.io/ai-academic-toolkit/raid-g/

> Limitations: these resources are **not** used during controlled assessments (unless explicitly permitted). Follow privacy rules; do not upload confidential data.

**If there is any conflict with university-wide regulations, the DSTU Academic Integrity Policy and other institutional regulations take precedence.**

## **3. Theoretical Foundations**

- **Pedagogical appropriateness:** AI as a **scaffolding tool** to bridge the gap between current and potential mastery, enabling higher-order tasks.  
- **Bloom’s Taxonomy:** using AI for higher-order tasks (analysis, creation, evaluation) rather than simple reproduction of information.  
- **Academic integrity:** preventing misconduct through a culture of transparency, declaration, and reproducibility of the work process.  
- **Future competencies:** developing prompt engineering, critical validation of results, ethical reflection, and metacognition (awareness of one’s learning process).

## **4. Key Terms**

- **Generative AI:** a system capable of creating new content (text, code, media) in response to a prompt.  
- **Prompt / Prompt chaining:** structured instructions for AI including context, constraints, and examples to obtain a desired result.  
- **AI Use Declaration:** a mandatory section that is a tool of **reflection** and documentation of interaction with AI. Includes tools used, prompts, personal contribution, and verification methods.  
- **Substantial modification:** changes that significantly affect logic, architecture, functionality, or key findings, not merely cosmetic edits (formatting, renaming variables). Substantial modification requires **all** of the following:  
  - structural changes/architectural decisions (ADR ≥ 1);  
  - added tests and/or empirical validation (coverage +≥15 pp from baseline **or** ≥80% target);  
  - critical review (≥200 words) with references/benchmarks;  
  - description of model risks/limitations and mitigation.  
- **Reproducibility:** the ability for another person to obtain similar results using the provided data, code, prompts, and instructions.

## **5. “Traffic-Light” Model of Use**

| Level | Description |
| --- | --- |
| 🟢 **Green (Encouraged)** | AI as an assistant to **amplify and accelerate** learner’s work. No detailed declaration required, but a mention in the general tooling description is needed. |
| 🟡 **Yellow (Allowed with Declaration)** | AI as a **co-author or component generator**. Results require the learner’s substantial modification, verification, and integration. **Declaration is mandatory.** |
| 🔴 **Red (Prohibited)** | AI as a **substitute for the learner’s thinking and work**. This is treated as academic plagiarism. |

### **Examples for Software Development and Analytics**

| Zone | Code & Software Engineering | Analytics, UX, Documentation |
| --- | --- | --- |
| 🟢 | Code autocompletion (Copilot), refactoring, generating tests for **your own** code, optimizing SQL, explaining code fragments, formatting. | Brainstorming, structuring reports, paraphrasing **your own** text, translation with verification, citation formatting. |
| 🟡 | Generating boilerplate, project scaffolds, Dockerfile/CI/CD configs, function/API prototypes, UML diagrams, synthetic test data. | Generating draft sections, data visualizations, user stories, acceptance criteria, user questionnaires. |
| 🔴 | Submitting generated code/architecture as one’s own without understanding/modification; using AI during assessments without permission; fabricating results. | Submitting generated text as one’s own analysis; hallucinated sources; data falsification. |

## **6. Policy Matrix by Assignment Type**

| Activity Type | Permission Level | Requirements |
| --- | --- | --- |
| **Labs/Practicals** (learning mini-tasks) | 🟢 / 🟡 | Declaration for any generated code/text; readiness for a short oral micro-defense (2–3 code questions). |
| **Team project** | 🟡 | Mandatory Declaration; **ADR log** justifying choices (including AI-generated components); code review. |
| **Coursework / Individual project** | 🟡 | Detailed Declaration; full reproducibility (scripts, run instructions, lock files). |
| **Controlled assessments** (exams, quizzes) | 🔴 (default) | AI use is **prohibited** unless the assignment explicitly states otherwise (e.g., controlled assistant mode). |

## **7. Requirements for the AI Use Declaration (Yellow Zone)**

Every learner submission that used AI must include a “**AI Use Declaration**” section containing:

> 💡 **Create it quickly:** Use the **RAID-G** generator — it builds a declaration skeleton aligned with this policy and examples. Link: https://steminist-ua.github.io/ai-academic-toolkit/raid-g/

1. **Tools/Models:** name, version/access date (e.g., GPT-4o, GitHub Copilot).  
2. **Purpose of use:** which tasks AI supported (e.g., boilerplate generation; refactoring; algorithm explanation).  
3. **Prompts/Prompt chains:** key prompts or a link to `prompts.md` in the repository.  
4. **Personal contribution & degree of modification:** what was changed and why; how the generated result was integrated.  
5. **Verification process:** how correctness/reliability was checked (tests, benchmarks, code review, source checking).  
6. **Critical reflection:** analysis of limitations, bias, or model errors and how they were mitigated.

### **Declaration Template**

*Tip:* you can automatically assemble this section with **RAID-G**: https://steminist-ua.github.io/ai-academic-toolkit/raid-g/

**AI Use Declaration**

- **TOOLS:** GPT-4o (via ChatGPT, 2025-09-15), GitHub Copilot (VS Code).  
- **PURPOSE:** Refactoring the event-processing module; generating unit tests for `UserService`.  
- **PROMPTS:** See `/docs/prompts.md` (commit hash: a1b2c3d).  
- **PERSONAL CONTRIBUTION:** The generated event-handler boilerplate was fully redesigned to match the project architecture. Generated tests were extended with edge cases not covered by the model.  
- **VERIFICATION:** Test coverage increased from 65% to 87%; static analysis performed; benchmark results in `/reports/bench.md`.  
- **REFLECTION:** The LLM suggested an outdated validation library, replaced with a current one. The model also missed concurrency aspects, added manually.

## **8. Quality Assurance and Assessment Principles**

Evaluation focuses **not on the ability to generate content** but on depth of understanding and quality of integration. Key criteria:

- **Added value:** justification of architectural decisions, optimizations, originality.  
- **Depth of understanding:** ability to explain any part during defense (oral/live-coding).  
- **Engineering culture:** code quality, documentation, tests, reproducibility.  
- **Critical AI interaction:** completeness and quality of reflection in the Declaration.  
- **Communication/documentation:** clarity of README, diagrams, comments.  
- **Repository as a learning log:** `prompts.md`, `decisions/ADR-*.md`, `CHANGELOG.md`, with auto-generated artifacts tagged `generated`.  
- **Code review & authorship check:** short interviews, random code questions, live-coding edits; stylometry **is not** standalone evidence but may trigger additional interview.  
- **Testing:** unit/integration/prop-based tests; dedicated edge-case tests where LLMs often err.  
- **Time and contribution logs:** for teams — role matrix, `CONTRIBUTORS.md`, automated PR/commit tracking.  
- **Exam modes:** **no AI** by default. If needed — a controlled environment (local offline assistant with logging; limited context; no external network).  
  - **Ban mode:** no AI.  
  - **Sandbox mode:** local tool without internet, prompt logging, 5 requests/hour limit.  
  - **Offline-assistant mode:** pre-prepared hints/reference set; interactions are logged.

## **10. Data Privacy and Security**

- **Prohibited** to upload personal data, student work without consent, NDA materials, keys/passwords, or proprietary code to third-party models.  
- Be mindful of the **jurisdiction and data-processing policy** of any service used. Prefer **local/institutional** model instances or providers with DPAs; disable training on user data if possible.  
- For synthetic data — label it and separate from real data; define retention and reproducibility seed policy.

## **11. Copyright and Licensing**

- Learners are responsible for lawful use of generated materials. Beware of **license inheritance** risk. A model trained on GPL-licensed code may reproduce it. You must check the provenance of generated fragments.  
- For code: state the project license (MIT/Apache-2.0, etc.), library sources; mark places assisted by AI in comments (`// Generated with LLM, substantially modified`).  
- For media: check usage/attribution terms; in reports — specify source/model/generation date.

## **12. Accessibility and Inclusion**

- Assistive AI features (TTS, text simplification, summarization, etc.) are allowed as reasonable accommodations **for** learning, not as a substitute.  
- Produced software and artifacts must comply with accessibility and inclusion basics (contrast, alt text, keyboard navigation, etc.).

## **13. Violations and Appeals Procedure**

1. **Initial interview** to clarify circumstances and analyze artifacts (repository, logs, intermediate versions).  
2. If reasonable suspicion persists — **“authorship proof” task** (e.g., live-coding modification of a key fragment, explanation of logic).  
3. Decision on violation and sanctions per university regulations (considering severity/intent/recurrence).  
4. Right to appeal in the prescribed manner.

| Violation | Measures | Appeal |
| --- | --- | --- |
| Undeclared AI use in labs/practicals/seminars | Retake and −25% of grade | 5 business days |
| Undeclared AI use in coursework/project | 0 points and topic replacement | 5 business days |
| Fabrication of sources/data | 0 points | 5 business days |

## **14. Policy Improvement**

This is a “living” document reviewed each semester based on feedback and technology evolution.

- Semesterly review: collect feedback, analyze common pitfalls, update examples and templates.  
- Pilot new modes (e.g., controlled offline assistant in exams) and evaluate impact.

## **15. Policy Effectiveness Evaluation**

### **15.1 Evaluation Goals**

- **Integrity:** reduce violations and “gray zones.”  
- **Learning quality:** increase depth of understanding, reproducibility, and engineering culture.  
- **Managed AI integration:** transparent, declared, and beneficial tool use.

### **15.2 Metrics and Thresholds (KPI)**

**A. Transparency & AI Use**

- **Declaration rate** = works with Declarations / works in the yellow zone.  
  Thresholds: 🟢 ≥90% · 🟡 75–89% · 🔴 <75%.  
- **Declaration completeness** (0–20 points across 5 items): avg ≥16 🟢, 12–15 🟡, <12 🔴.  
- **Share of works with `prompts.md`/ADR/logs**: ≥80% 🟢, 60–79% 🟡, <60% 🔴.

**B. Quality & Reproducibility**

- **Test coverage** (where applicable): median; semester growth ≥+10 pp 🟢.  
- **Reproducibility** = reproducible works / sampled works (n ≥ 10).  
  Thresholds: ≥85% 🟢, 70–84% 🟡, <70% 🔴.  
- **Evaluation/defense time:** not >10% longer semester-to-semester 🟢.

**C. Integrity**

- **Incidents** (undeclared use, fabrications): share of total works.  
  Thresholds: ≤2% 🟢, 2–5% 🟡, >5% 🔴.  
- **Share of successful authorship proofs** after suspicion: ≥80% 🟢, 60–79% 🟡, <60% 🔴.

**D. Educational Effect**

- **Growth in “depth of understanding” rubric score** from initial to final control: ≥+10% 🟢, +5–9% 🟡, <+5% 🔴.  
- **Self-assessment of skills** (prompt engineering, verification, ethics): pre/post Likert 1–5, Δ≥+0.7 🟢, +0.3–0.6 🟡, <+0.3 🔴.

### **15.3 Data Collection**

- **Repository artifacts:** presence of `prompts.md`, ADR, tests, CI/CD, `generated` tag.  
- **Rubrics:** store sub-scores by criterion.  
- **Surveys** (anonymous): start, mid-term (week 8), final.  
- **Incident log:** type, detection stage, decision, appeal.  
- **Peer review (optional):** brief cross-team reproducibility checks.

### **15.4 Tools and Automation**

- **Dashboard** (Sheets/Looker Studio): traffic-light maps and semester trends.  
- **CI hooks:** check presence of `prompts.md`, ADR, baseline tests; collect coverage.  
- **Incident form** (Google Form) with auto-aggregation.

### **15.5 Interpretation and Actions (PDCA)**

- **Monthly pulse:** if ≥1 metric is 🔴 → micro-intervention (FAQ, example declarations, reminders).  
- **End-of-semester report (2–3 pp):** KPI results, comparison to previous semester, top difficulties and fixes (changes in tasks/rubrics).

### **15.6 Sample Survey Questions (Likert 1–5)**

- “The AI policy is clear and predictable.”  
- “The AI Use Declaration does not create excessive bureaucratic pressure.”  
- “AI use improved my productivity/understanding of the topic.”  
- “I can verify AI results (facts/tests/benchmarks).”  
- Open-ended: “Describe a case where AI **significantly helped/hindered** and why.”

### **15.7 Ethics and Privacy Limits**

- Collect **aggregated** data; personal data only with informed consent.  
- De-identify prompt examples; restrict access to logs/dashboards.

### **15.8 Integral Effectiveness Index (optional)**

IEI (0–100) = 0.25·Transparency + 0.30·Quality/Reproducibility + 0.20·Integrity + 0.15·Educational effect + 0.10·Process stability.  
Thresholds: **≥80** — effective; **65–79** — needs targeted improvements; **<65** — requires revision of tasks/procedures.

## **16. Appendices**

### **Appendix A. Syllabus Clause (as needed)**

**AI use in this course:** Ethical AI use is encouraged as a tool to deepen learning, in line with the instructor’s Policy. Any generated content that is part of a final submission requires an “AI Use Declaration.” In controlled assessments, AI is prohibited unless otherwise specified. You can quickly generate a Declaration template via **RAID-G**: https://steminist-ua.github.io/ai-academic-toolkit/raid-g/

---

### **Appendix B. Example `prompts.md` Structure**

- Task context  
- Constraints/quality criteria  
- Examples (few-shot)  
- Rephrasings/variants  
- Result-verification checklist

```markdown
Task: Refactor class `PaymentController`

Problem:
The class has low cohesion and violates SRP (Single Responsibility Principle).

System Prompt:
You are a Senior Software Engineer expert in SOLID and clean architecture. Propose refactoring options in Python.

Prompt 1: Analysis
Analyze the `PaymentController` code and identify key SRP violations.

Prompt 2: Refactoring
Propose a refactor splitting into `PaymentService` and `PaymentValidator`. Code must be idiomatic for Python 3.11+.
```

**Verification checklist**

- [ ] New classes adhere to SRP.  
- [ ] Public API of the controller preserved.  
- [ ] Code covered by unit tests.

---

### **Appendix C. Checklist for Verifying Generated Code**

- **Correctness:** compiles/runs without errors?  
- **Reliability:** passes all tests? Covers edge cases?  
- **Security:** free from obvious vulnerabilities (SQLi, XSS)? SAST passed?  
- **Freshness:** avoids deprecated/unsafe libraries?  
- **Performance:** acceptable for task constraints?  
- **Error handling:** exceptional cases handled properly?

**Security sub-checklist:**

- [ ] SAST passed;  
- [ ] secret-scan (no keys/passwords in repo);  
- [ ] dependencies free of critical CVEs;  
- [ ] SBOM (if possible).

---

### **Appendix D. Assignment Redesign Proposals (for instructors)**

> Aim: shift focus from “getting the answer” to the thinking process—option analysis, justification, verification, and reflection on AI’s role.

**Generic task template**

**Original →** “…”  
**Improved wording →** “…”  
**Learner artifacts:** (e.g., code/diagram/essay, ADR, tests, experiment protocols, `prompts.md`)  
**AI role:** (green/yellow zone, constraints)  
**Assessment (key criteria):** (added value, reproducibility, AI reflection)

1. **Instead of:** “Write a program …”

   **Add:** “Investigate **3 approaches** (e.g., different data structures or algorithms), generate **draft prototypes** with AI, choose the **optimal** one and **record the rationale in ADR‑01** (goals, trade‑offs, risks). Then bring the solution to **production‑ready**: tests (unit/integration/prop‑based), logging, error handling, a short README.”

   **Artifacts:** code, ADR‑01, `tests/`, `README.md`, `prompts.md`.

   **AI role:** yellow zone — prototyping and refactoring permitted with mandatory declaration.

   **Assessment (as % of total):** correctness (30), architectural decisions (20), tests/reproducibility (20), AI reflection (15), documentation (15).

2. **Instead of:** “Draw an architecture diagram”

   **Add:** “Generate a diagram (UML/C4) with AI and **compare** it to your own version. Describe **differences**, apply revisions, and justify them in **ADR‑02** (assumptions, non‑functional requirements, trade‑offs).”

   **Artifacts:** diagram(s), ADR‑02, NFR list (performance/security/scalability).

   **AI role:** yellow zone — draft generation, **mandatory** human verification.

   **Assessment (as % of total):** requirements fit (30), diagram clarity/consistency (30), justification in ADR (25), AI reflection (15).

3. **Instead of:** “Prepare a report about algorithm …”

   **Add:** “Ask AI to generate **2–3 explanations** of the algorithm with different levels of detail. Create a **comparison table** (accuracy, completeness, errors), run **experiments** (benchmarks/asymptotics), refute or confirm AI statements. Provide **your own synthesized explanation**.”

   **Artifacts:** report with comparison table, benchmark code/notebook link, charts.

   **AI role:** yellow zone — draft text/illustrations with declaration.

   **Assessment (as % of total):** correctness & validation (35), analysis quality (30), clarity of exposition (20), AI reflection (15).

4. **Instead of:** “Compose test questions for the topic”

   **Add:** “Generate **10 questions** with AI in varied formats (MCQ, open‑ended, code snippets), run a **quality check** (duplicates, wording cues, answer correctness), report detected **biases/errors**, and submit **your edited set of 6 questions** plus an **answer key with explanations**.”

   **Artifacts:** question bank (before/after), QA protocol, answer key.

   **AI role:** green/yellow — assistive generation with mandatory manual validation.

   **Assessment (as % of total):** validity & variety (40), quality of explanations (30), process transparency (15), reflection (15).

5. **Instead of:** “Create a UI design …”

   **Add:** “Generate **2 prototype variants** in Figma with AI. Run a **usability test** (n≥3), measure **success/time/errors**, list **UX issues** (WCAG compliance), perform an **iteration**, and document changes.”

   **Artifacts:** prototypes (before/after), test scripts, metrics, change log.

   **AI role:** yellow zone — idea/layout generation with **mandatory** accessibility check.

   **Assessment (as % of total):** quality of UX decisions (35), testing data & interpretation (35), WCAG compliance (15), reflection (15).

6. **Instead of:** “Design a database schema …”

   **Add:** “Ask AI to propose an **initial ER model**. Perform **normalization** (1NF→3NF), add **constraints** and indexes, prepare a **set of test queries**, and compare **execution plans** (EXPLAIN/ANALYZE) before/after optimizations. Record decisions in **ADR‑03**.”

   **Artifacts:** ER diagram, DDL, test/data scripts, EXPLAIN report, ADR‑03.

   **AI role:** yellow zone — model draft with mandatory refinement.

   **Assessment (as % of total):** integrity/constraints (30), performance (30), rationale (25), reflection (15).

7. **Instead of:** “Mark up a page (HTML/CSS) …”

   **Add:** “Generate a base layout with AI, then **add semantics** (`<header>/<nav>/<main>/<footer>`), ensure **responsiveness** (mobile‑first, media queries) and **accessibility** (ARIA, contrast). Run **validation** (W3C), a Lighthouse audit, and record fixes.”

   **Artifacts:** HTML/CSS, validator screenshots, Lighthouse report, brief `A11y.md`.

   **AI role:** green/yellow — draft generation with mandatory manual review.

   **Assessment (as % of total):** validity & accessibility (40), responsiveness (30), semantic/clean markup (20), reflection (10).

8. **Instead of:** “Group presentation …”

   **Add:** “Use AI for the **presentation outline** and visual drafts, but content and examples must be **your own**. Add a **contribution matrix** (role/time/PR), run a **rehearsal‑defense** with 3 unexpected questions from another team, and record answers.”

   **Artifacts:** slides, contribution matrix (`CONTRIBUTORS.md`), rehearsal video or Q&A notes.

   **AI role:** green zone — support materials only, no generation of final conclusions.

   **Assessment (as % of total):** content & evidential support (35), team interaction/roles (25), delivery quality (25), reflection (15).

---

### **Appendix E. AI Use Declaration Examples**

Quick draft from examples — via **RAID-G**: https://steminist-ua.github.io/ai-academic-toolkit/raid-g/

**Example 1. OOP (C++)**

```markdown
TOOLS: ChatGPT (GPT-4o, 2025-09-15), GitHub Copilot (VS Code).

PURPOSE: Generate an example `Student` class with fields and methods (name, age, printInfo).

PROMPTS:
  1. "Write an example of a `Student` class in C++ with two fields (name, age) and a method to print information."
  2. "Add a constructor and a destructor."

PERSONAL CONTRIBUTION: The generated code was simplified (removed unnecessary array examples), encapsulation was added (private fields, public getters/setters), and declarations were split into .h with implementation in .cpp.

VERIFICATION: Code compiled with g++; tested with 3 different student instances; verified correct destructor behavior.

REFLECTION: The AI initially suggested an example with `std::string*` and dynamic memory, which complicated the task. This was replaced with plain `std::string`, keeping the example suitable for an introductory level.
```

---

**Example 2. Web Development (React)**

```markdown
TOOLS: GPT-4o (ChatGPT, 2025-09-14), GitHub Copilot (VS Code).

PURPOSE: Auto-generate a React component template for a user registration form with basic validation.

PROMPTS:
  1. "Create a React component using the `useState` hook for a registration form (name, email, password)."
  2. "Add simple client-side validation: minimum 8 characters for the password."

PERSONAL CONTRIBUTION: The generated component was rewritten in TypeScript, integrated with `react-hook-form`, accessibility attributes (aria-*) were added, and styling was adapted to the course design system.

VERIFICATION: Manual testing in Chrome/Firefox; added 5 unit tests with Jest.

REFLECTION: The model used outdated event handling syntax (`onSubmit={this.handle}`), which was modernized. The AI also missed accessibility issues (missing `label for`), which I added manually.
```

---

**Example 3. Software Architecture & Design (UML)**

```markdown
TOOLS: GPT-4o (ChatGPT, 2025-09-14), Mermaid.js plugin.

PURPOSE: Generate a draft UML class diagram for a “Library” system.

PROMPTS:
  1. "Generate a UML class diagram in Mermaid format for a Library Management system (User, Book, Loan)."
  2. "Add inheritance relationships for `Student` and `Teacher` classes that are subclasses of `User`."

PERSONAL CONTRIBUTION: The generated code was substantially modified: added the Repository pattern for book management, extracted interfaces for services, and added attributes for access control.

VERIFICATION: Diagram discussed during the seminar; ADR-01 documented (choice of the Repository pattern).

REFLECTION: The AI produced an overly simplified model without business logic (e.g., overdue penalties). I expanded it manually.
```

---

**Example 4. Databases (SQL)**

```markdown
TOOLS: GPT-4o (ChatGPT, 2025-09-14), Copilot (DataGrip).

PURPOSE: Prepare a starter SQL statement to create an `Orders` table with a foreign key to `Customers`.

PROMPTS:
  1. "Write SQL DDL to create an `Orders` table with attributes order_id, customer_id, status, total_amount."
  2. "Add a foreign key to the `Customers` table and a default value `new` for the status."

PERSONAL CONTRIBUTION: The code was adapted for PostgreSQL (types `SERIAL`, `NUMERIC(10,2)`), added a constraint check (`CHECK (status IN ('new','shipped','cancelled'))`), and an index on `customer_id`.

VERIFICATION: Performed test inserts/deletes, added 5 SELECT queries for edge cases, ran `EXPLAIN ANALYZE` for performance.

REFLECTION: The AI generated incorrect syntax for the default value (`DEFAULT = 'new'`); I fixed it manually. Indexes were also added to speed up JOINs.
```

---

**Example 5. UI/UX Design**

```markdown
TOOLS: ChatGPT (GPT-4o, 2025-09-15), Figma AI plugin.

PURPOSE: Generate initial ideas for the interface of a “To-Do List” mobile app and create a basic prototype in Figma.

PROMPTS:
  1. "Propose three layout options for the main screen of a To-Do List mobile app."
  2. "Create examples of concise, accessible button and menu text labels."

PERSONAL CONTRIBUTION: Selected one of the suggested layouts, manually reworked the color palette according to WCAG contrast principles, changed icons for better intuitiveness, and conducted usability testing with 3 classmates.

VERIFICATION: Built an interactive prototype in Figma; users completed tasks (add a task, mark as done) without additional prompts.

REFLECTION: The AI initially generated an overloaded interface with extra elements. I kept a minimalist variant and adapted it for mobile usage scenarios.
```

---

**Example 6. Internet Development (HTML, CSS)**

```markdown
TOOLS: ChatGPT (GPT-4o, 2025-09-15), GitHub Copilot (VS Code).

PURPOSE: Create a basic HTML page with a navigation menu and CSS styling.

PROMPTS:
  1. "Write an example HTML page with a header, a three-item menu, and a footer."
  2. "Add CSS for a responsive menu (flexbox) and a light/dark color scheme."

PERSONAL CONTRIBUTION: The generated code was optimized: added semantic tags (<header>, <nav>, <main>, <footer>), manually adjusted fonts and colors per the course brand book, and adapted for mobile devices (media queries).

VERIFICATION: Code validated with the W3C validator (no errors), tested in Chrome and Firefox; verified display on a 320 px mobile screen.

REFLECTION: The AI initially suggested the deprecated `<center>` tag and inline styles. These were corrected by applying modern flexbox layout and separating HTML/CSS.
```

---

### **Appendix F. Technical Defense Checklist**

- [ ] Show commit history evidencing iterative work.  
- [ ] Answer 3–5 questions about key architectural decisions.  
- [ ] Perform a live-coding modification of one code fragment.  
- [ ] Explain model limitations and how you accounted for them.

---

### **Appendix G. Glossary of Terms**

| Term | Explanation |
| --- | --- |
| **A11y (Accessibility)** | Abbreviation for “Accessibility”; a general name for practices and requirements of digital product accessibility (see also WCAG). |
| **A11y.md** | A short file/notes on accessibility in a repository (checklists, contrast, alt-texts, keyboard navigation). |
| **Acceptance criteria** | Criteria used to determine whether a feature meets the requirements. |
| **Accessibility (WCAG)** | Accessibility of digital products for people with different abilities; WCAG is the international Web Content Accessibility Guidelines standard. |
| **ADR (Architecture Decision Record)** | A log of architectural decisions, a document that records key technical choices and their rationale. |
| **AI code assistant** | An AI tool for code autocompletion, refactoring, and explanation (e.g., GitHub Copilot). |
| **API (Application Programming Interface)** | An application programming interface, a set of rules and methods for interaction between programs. |
| **ARIA (Accessible Rich Internet Applications)** | A set of attributes to improve the accessibility of web interfaces for screen readers. |
| **Backlog** | A list of product tasks or features awaiting implementation. |
| **Benchmark** | Measurement of algorithm/system performance or efficiency. |
| **Bias** | Systematic errors or distortions in results caused by data or algorithms. |
| **Bloom’s Taxonomy** | A model of learning objectives: remember → understand → apply → analyze → evaluate → create. |
| **Boilerplate** | Template code or a ready-made piece for speeding up development. |
| **C4 Model** | A hierarchy of architecture diagrams (Context–Container–Component–Code) for system visualization. |
| **CI hook** | An automatic trigger/script in a CI pipeline that runs checks/collects metrics. |
| **CI/CD (Continuous Integration / Continuous Deployment)** | Processes of continuous integration and deployment of software. |
| **CHANGELOG** | A project change log containing a list of all new features, fixes, and version updates. |
| **Code review** | Review of code by other team members to improve quality. |
| **Commit hash** | A unique identifier of a code version in a version control system. |
| **CONTRIBUTORS.md** | A file in the repository containing the list of project contributors and their contributions. |
| **Copilot (GitHub Copilot)** | AI code assistant for autocompletion, refactoring, and code explanation in an editor (e.g., VS Code). |
| **Coverage (test coverage)** | The percentage of code covered by automated tests. |
| **CVE (Common Vulnerabilities and Exposures)** | A public registry of identifiers of known vulnerabilities. |
| **Dashboard** | An interactive panel of indicators/graphs for monitoring metrics. |
| **Dockerfile** | A declarative instruction file for building a Docker image. |
| **Edge cases** | Boundary or atypical scenarios that must be considered in testing. |
| **ER model / ERD (Entity-Relationship Diagram)** | An entity-relationship diagram for database design. |
| **EXPLAIN / ANALYZE (SQL)** | DBMS tools for viewing query execution plans and measuring performance. |
| **Few-shot** | A method where an AI model is given a few examples to tune its response. |
| **Flexbox** | A CSS layout model for flexible arrangement of elements in rows/columns. |
| **Fork** | A copy of a repository created for independent work, allowing changes without affecting the original repository. |
| **Git** | A distributed version control system that allows tracking code changes and collaborating on a project. |
| **GitHub, GitLab** | Popular online platforms for hosting repositories, collaborating on code, task tracking, and CI/CD. |
| **GPL, MIT, Apache-2.0** | Common types of software licenses with different usage terms. |
| **Integration tests** | Tests that verify the interaction of multiple modules/services and their compatibility. |
| **Issue** | A description of a problem, bug, or task in a project tracking system (e.g., GitHub Issues, Jira). |
| **KPI (Key Performance Indicator)** | A key performance indicator; a metric to measure goal achievement. |
| **Lighthouse** | A Chrome tool for auditing web pages (performance, accessibility, SEO, best practices). |
| **LLM (Large Language Model)** | A large language model that generates text based on training on large data corpora. |
| **Live-coding** | Writing or modifying code in real time (e.g., during project defense). |
| **Lock-file** | A dependency version lock file for reproducible builds (e.g., `package-lock.json`, `poetry.lock`). |
| **Looker Studio (ex-Data Studio)** | A Google service for building dashboards and data visualization. |
| **Media queries** | CSS rules for responsive layouts for different screen sizes/devices. |
| **Mermaid (Mermaid.js)** | A text syntax for generating diagrams (UML, C4, sequence diagrams, etc.) in Markdown. |
| **Merge request / Pull request** | A request to merge changes from one branch or fork into the main repository; undergoes review and discussion before merging. |
| **Mobile-first** | An approach to responsive design where design and CSS are initially created for mobile screens. |
| **NDA (Non-Disclosure Agreement)** | A confidentiality agreement. |
| **Normalization (1NF–3NF)** | The process of structuring a DB schema to reduce redundancies and anomalies. |
| **PDCA (Plan-Do-Check-Act)** | A cycle of continuous improvement: plan–do–check–act. |
| **Peer-review** | Mutual expert evaluation or peer review of student or colleague work to improve quality, objectivity, and critical analysis skills. |
| **Pattern Repository (Repository pattern)** | A data access layer that isolates domain logic from the data source. |
| **Production-ready** | Readiness of a solution for production use: logging, error handling, adequate test coverage, configuration, security, CI/CD, and documentation. |
| **prompts.md** | An artifact containing prompts and prompt chains used in a project (trace of AI interaction). |
| **Prompt / Prompt chaining** | A request to AI / a sequence of requests enabling more complex results. |
| **Prompt engineering** | The practice of creating, formulating, and optimizing prompts for AI models to obtain the most relevant and high-quality results. Includes instruction refinement, few-shot examples, constraints, and context structuring. |
| **Property-based tests** | Tests that automatically generate diverse input data and verify system invariants/properties (e.g., Hypothesis, QuickCheck). |
| **Pull** | Operation of fetching the latest changes from a remote repository into a local one. |
| **Push** | Operation of sending local changes to a remote repository. |
| **README.md** | The main file describing the project, usage instructions, installation, and other important information. |
| **Random seed (seed)** | The initial value for random number generators; required for experiment reproducibility. |
| **Refactoring** | Redesign or optimization of code without changing its functionality. |
| **Repository** | A storage location for project code and materials (e.g., GitHub, GitLab). |
| **Reproducibility** | The ability to reproduce results under the same conditions (data, code, instructions). |
| **SBOM (Software Bill of Materials)** | A list of components and dependencies of a software product. |
| **SAST / DAST** | Static/Dynamic Application Security Testing. |
| **Scaffolding tool** | A “cognitive scaffold”, a supporting tool for the learning process. |
| **Secret-scan** | Repository scan for secrets/access keys. |
| **SOLID / SRP (Single Responsibility Principle)** | A set of OOP design principles; SRP means each class has a single responsibility. |
| **SQL (Structured Query Language)** | A structured query language for working with databases. |
| **SQL DDL / DML / DQL** | SQL subsets: data definition (CREATE/ALTER), manipulation (INSERT/UPDATE/DELETE), and queries (SELECT). |
| **Static analysis** | Code analysis without execution (linting, type checking, vulnerability scan). |
| **Stylometry** | Analysis of code/text “style” based on stylistic features. |
| **Synthetic data** | Artificially generated data for testing. |
| **Tag** | A label in a version control system that marks a particular release or repository state. |
| **TTS (Text-to-Speech)** | A technology that converts text into synthesized speech. |
| **Trade-offs** | Compromises between alternatives (e.g., speed vs. memory, convenience vs. security); a reasoned choice recorded in ADR. |
| **TypeScript** | A superset of JavaScript with a type system. |
| **UI (User Interface)** | The user interface of a product. |
| **UML (Unified Modeling Language)** | A standardized modeling language for visualizing and designing systems. |
| **Unit tests** | Tests that check small code units (functions/classes) in isolation from external dependencies. |
| **Usability testing** | User testing: task success, time, errors. |
| **User stories** | Short scenarios describing user needs in the form of functional requirements. |
| **UX (User Experience)** | User experience during interaction with a product. |
| **HTML Validation (W3C Validator)** | Checking HTML code for compliance with W3C standards. |
| **AI (Artificial Intelligence)** | Artificial intelligence, a system capable of performing tasks that traditionally require human intelligence. |
| **Likert scale** | Rating of statements on a fixed scale (e.g., 1–5) in surveys. |

---

### **Appendix H. Official Instructor Resources for Responsible AI Use**

1. **Prompt-engineering learning repository** — curated guides, courses, `prompts.md` examples, common pitfalls, templates. Link: `<ADD_LINK_TO_REPOSITORY>`  
2. **Instructor’s personal assistant** — verified chatbot for policy/assignment clarifications; logs may be included in the Declaration. Link: `<ADD_LINK_TO_ASSISTANT>`  
3. **RAID-G Declaration Generator** — https://steminist-ua.github.io/ai-academic-toolkit/raid-g/