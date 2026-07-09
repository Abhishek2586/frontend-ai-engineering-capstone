# AI Development Rules and Guidelines

## Project Overview
This project is the Frontend AI Engineering Capstone for Week 1 Assignment FE-01. It serves as a foundational React and Vite frontend project where AI-assisted development tools are used to scaffold, build, and document the environment according to industry best practices.

## Tech Stack
- React
- Vite
- JavaScript
- ESLint
- CSS
- Git & GitHub

## Coding Conventions
- Write clean, readable, and modular JavaScript code.
- Avoid deep nesting; favor early returns.
- Keep functions pure and focused on a single responsibility.
- Use ES6+ syntax (arrow functions, destructuring, template literals).
- Adhere strictly to the provided ESLint configuration.

## React Component Rules
- Use functional components and React hooks exclusively.
- Extract reusable logic into custom hooks when appropriate.
- Keep components small and focused.
- Define prop types or use default parameters to make data expectations clear.

## File Naming Rules
- React components: PascalCase (e.g., `UserProfile.jsx`).
- Utility functions and hooks: camelCase (e.g., `useFetch.js`, `formatDate.js`).
- CSS files: match the component name (e.g., `UserProfile.css`) or use standard lowercase naming (`index.css`).
- Non-component files: kebab-case (e.g., `config-overrides.js`).

## CSS Conventions
- Use standard, vanilla CSS for styling.
- Keep styles scoped to components when possible.
- Avoid using arbitrary magic numbers; use CSS variables for colors, spacing, and typography.
- Use a mobile-first approach for responsive design.

## Git Commit Rules
- All commits must follow the Conventional Commits format.
- Ensure commit messages are descriptive and explain the "what" and "why".
- Keep commits focused on a single logical change.
- Do not commit broken code or `console.log` statements.

## Conventional Commits Examples
- `feat: add user authentication form`
- `fix: resolve crash on invalid login credentials`
- `docs: update setup instructions in README`
- `chore: update dependencies and configure ESLint`
- `style: format code using Prettier`
- `refactor: extract button logic into reusable component`

## AI Assistant Instructions
- **Tool Usage:** Always use the most specific tool available (e.g., `write_to_file` over a bash echo).
- **Code Generation:** Do not overcomplicate code. Keep it beginner-friendly and maintainable.
- **Tone:** Use professional wording in all documentation and comments.
- **Workflow:** Review the environment and requirements before making changes.

## Code Quality Expectations
- Zero ESLint warnings or errors before committing.
- Clean, self-documenting code with comments only where logic is complex or non-obvious.
- Proper error handling implemented for all asynchronous operations.
- Application must be fully functional and free of console errors.

## FE-03 Workflow Rules Learned
1. **Holistic Form Development:** Interactive form components must not only look good but must include robust validation, comprehensive accessibility attributes (like `aria-invalid` and `aria-describedby`), and proper edge-case handling.
2. **Beyond Visuals:** Never accept AI-generated UI solely because it looks visually correct. Always inspect the underlying markup for correctness and resilience.
3. **Test-Driven Requirements:** New form features must always include a test suite that explicitly checks for invalid inputs, disabled states, and successful submissions.
4. **Precision Prompting:** AI prompts should clearly define file paths, structural constraints, expected behaviors, and explicit verification steps to produce production-ready code.
5. **Inspect-Plan-Code-Verify:** Adopt a disciplined inspect-plan-code-verify workflow when collaborating with AI tools before finalizing and committing changes.
