# FE-05 Accessible Component Fundamentals Notes

## Assignment Overview

For this assignment, I built a Modal Dialog, Tabs, and Disclosure component from scratch in React + TypeScript. I then installed shadcn/ui Dialog and Tabs for comparison. The goal was to understand accessible component fundamentals by manually implementing ARIA authoring practices, and to see what robust component libraries handle that handmade versions often miss.

## Handmade Components

- **Modal Dialog**: Implements `role="dialog"` and `aria-modal="true"`. I manually added focus trapping by listening to Tab and Shift+Tab keydown events to cycle focus within the modal's focusable elements. It also closes on Escape and returns focus to the trigger button when unmounted.
- **Tabs**: Uses `role="tablist"`, `tab`, and `tabpanel`. I implemented roving `tabIndex` so only the active tab is focusable. Arrow keys move focus between tabs, while Enter and Space activate them. Home and End keys immediately jump to the first and last tabs, respectively.
- **Disclosure**: Uses a native `<button>` element with `aria-expanded` and `aria-controls`. Content is toggled visibly and hidden from screen readers appropriately. The native button ensures proper tab focus and Enter/Space activation without extra keyboard event handlers.

## Keyboard Testing

### Modal
- Tab moves focus within the dialog only.
- Shift+Tab cycles backward inside the dialog.
- Escape closes the modal.
- Focus returns to the trigger button after close.

### Tabs
- Tab reaches the active tab.
- Left/Right arrows move between tabs.
- Home and End move to the first and last tab.
- Enter/Space activate the focused tab.
- Tab moves into the active panel content.

### Disclosure
- Tab reaches the disclosure buttons.
- Enter/Space toggles the content.
- `aria-expanded` updates correctly.

## What shadcn/ui Handled That My Version Missed

1. **Robust Focus Trapping & Portals**: While my modal manually calculates focusable elements, shadcn's Dialog (via Radix UI) uses a `Portal` to render at the top of the DOM, avoiding z-index issues. It also handles edge cases for focus trapping and locks body scrolling more cleanly without hardcoding style changes directly on `document.body`.
2. **Composition and Reusability**: My components take monolithic prop structures (e.g., passing an array of objects for tabs). shadcn Tabs use composable primitives (`TabsList`, `TabsTrigger`, `TabsContent`), which separate styling, state, and accessibility concerns, allowing maximum flexibility in layout.

## Manual Improvements Made

- Added focus return to the modal trigger.
- Added a focus trap for the modal.
- Added Escape close behavior.
- Added roving `tabIndex` to the tabs component.
- Added Home/End key support for tabs.
- Added `aria-expanded` and `aria-controls` to the disclosure component.
- Removed unsafe TypeScript `any` types.
- Added visible focus states to all interactive elements.

## AI Assistance Reflection

The AI helped translate WAI-ARIA requirements into structural React patterns. It assisted in creating the correct keyboard event logic, particularly for focus trapping within the modal and handling roving tab indexes. It also helped review the TypeScript props to ensure everything was strictly typed without relying on `any`. Lastly, it helped contrast the handmade code against shadcn's generated source, highlighting architectural differences. I manually verified the generated code's keyboard interactions rather than blindly trusting the output.

## Verification

- `npm run build` passes.
- TypeScript compiles successfully.
- No `any` used in component props.
- Components were tested manually via keyboard and behave as expected.
