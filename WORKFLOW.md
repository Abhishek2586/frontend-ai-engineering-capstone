# FE-03: AI-Assisted Workflow Drill

## Feature Selected
Settings Form with validation (Display Name, Email, Theme Preference, and Email Notifications).

## Round One: Vague Prompt Summary
In the first round, the AI was given a highly vague prompt: "Add a settings form to this React app." Without specific constraints or requirements, the AI generated a basic, minimally viable form in a single file (`src/SettingsForm.jsx`). The generated code lacked validation, tests, styling, and structural depth.

## Round Two: Precise Prompt Summary
In the second round, the AI received a detailed, precise prompt. This prompt included specific functional constraints (e.g., minimum character length, email regex), accessibility requirements (`aria-invalid`, `aria-describedby`), testing criteria (Vitest & React Testing Library), and structural expectations (separate CSS, file paths).

## Specific Diffs Between Branches
The difference between the two approaches is stark when viewing the Git diff:
- **Architecture**: The vague branch placed a basic form in `src/SettingsForm.jsx` with no styling. The precise branch structured the feature into `src/components/SettingsForm.jsx` and `src/components/SettingsForm.css`, maintaining better separation of concerns.
- **Validation**: The vague branch allowed submission of completely empty data. The precise branch included state-driven, real-time validation logic ensuring fields were correctly populated before enabling the submit button.
- **Accessibility**: The precise branch introduced ARIA attributes linking error messages directly to the input fields (`aria-describedby`), marking invalid inputs (`aria-invalid`), and announcing success (`role="status"`). The vague version had none of this.
- **Testing**: The precise branch included a comprehensive test suite (`SettingsForm.test.jsx`) to verify input behaviors, disabled button states, and error rendering. The vague branch lacked tests entirely.

## Comparison Analysis
### Correctness & Edge Cases
The vague branch completely failed at edge-case handling. A user could submit an empty display name or an improperly formatted email address. The precise branch handled these edge cases through controlled input states and explicit error boundary checking, preventing submission until the form was fully valid. 

### Accessibility
The precise branch vastly outperformed the vague branch in accessibility. By explicitly declaring relationships between inputs and error messages, screen reader users would be notified exactly why their form submission was blocked. The vague version only provided visual labels.

### Review Effort
The vague code would require significant review effort, followed by extensive back-and-forth iteration to build out missing validation, tests, and accessibility features. The precise prompt minimized review effort by directly injecting these requirements into the initial generation.

### AI Mistake Caught
The vague version focused purely on the visual appearance of a form, neglecting all functional validation. It did not use `aria-describedby` or `aria-invalid`, highlighting a common AI pitfall: without explicit instructions, AI prioritizes "looking right" over "functioning correctly" and "being accessible".

## Rules Added to CLAUDE.md
Based on this drill, the following rules were formalized in `CLAUDE.md`:
1. **Holistic Form Development**: Include robust validation and accessibility attributes.
2. **Beyond Visuals**: Inspect markup for correctness, not just visual appeal.
3. **Test-Driven Requirements**: Include tests for invalid inputs, disabled states, and successful submissions.
4. **Precision Prompting**: Define file paths, structural constraints, expected behaviors, and explicit verification steps.
5. **Inspect-Plan-Code-Verify**: Adopt a disciplined workflow when collaborating with AI tools.
