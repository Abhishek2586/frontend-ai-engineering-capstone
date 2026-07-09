## Assignment Submission: FE-01 Environment and AI Toolchain

**GitHub Repository URL:**
https://github.com/Abhishek2586/frontend-ai-engineering-capstone

**Project Overview:**
I successfully completed the Week 1 setup assignment by creating a Vite + React frontend environment for the Frontend AI Engineering track. The repository includes all required files: `README.md`, `CLAUDE.md`, `.gitignore`, and an MIT `LICENSE`.

**AI Assistance Summary:**
I used Antigravity as my AI-assisted development environment. The AI assistant helped scaffold the project structure, generate documentation, define coding conventions, and support the Conventional Commits workflow.

During the review phase, the AI assistant acted as a senior frontend engineer and critiqued the `README.md`. Based on that review, I improved the README by replacing the basic development command with a more complete **Available Scripts** section. This now documents how to run, build, lint, and preview the application.

**Status:**

* [x] Vite + React environment setup completed
* [x] Required files added: `README.md`, `CLAUDE.md`, `.gitignore`, and `LICENSE`
* [x] Conventional Commits used in Git history
* [x] AI coding instructions added in `CLAUDE.md`
* [x] README critique completed and improvement applied
* [x] Screenshot captured showing AI assistant working in the development environment

---

## Assignment Submission: FE-03 AI-Assisted Workflow Drill

**Branch 1 (Vague Prompt):**
https://github.com/Abhishek2586/frontend-ai-engineering-capstone/tree/fe-03-vague-settings-form

**Branch 2 (Precise Prompt):**
https://github.com/Abhishek2586/frontend-ai-engineering-capstone/tree/fe-03-precise-settings-form

**Project Overview:**
Successfully completed the AI workflow drill by building a Settings Form twice to highlight the difference between vague and precise AI prompting. 

**Workflow Comparison Summary:**
- The vague branch (`fe-03-vague-settings-form`) resulted in a structurally poor component with zero validation, accessibility, or testing logic. The AI focused entirely on generating a simple UI that allowed empty or invalid inputs.
- The precise branch (`fe-03-precise-settings-form`) generated a robust, production-ready form. Through detailed constraints in the prompt, the AI built out proper state-driven validation (length checks, email regex), accessibility attributes (`aria-invalid`, `aria-describedby`), and a complete Vitest/React Testing Library test suite ensuring form state behaved exactly as expected.
- `WORKFLOW.md` was authored comparing both branches, explicitly analyzing correctness, edge-case management, and the review effort required.
- `CLAUDE.md` was updated with the core rules learned from the drill (e.g., inspecting beyond visuals, explicitly driving requirements with tests, and utilizing a rigid inspect-plan-code-verify methodology).

**Status:**
- [x] Both branches created from the default branch.
- [x] Settings form implemented in both branches.
- [x] Tests added and passing in the precise branch.
- [x] Both branches build successfully.
- [x] `WORKFLOW.md` and `CLAUDE.md` finalized.
