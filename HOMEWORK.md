# Week 3 Homework Assignment: Frontend AI Engineering

## 1. Assignment Title
Week 3 Homework Assignment - AI-Assisted Frontend Development

## 2. App Selected
Task Management App

## 3. Prompts Used
**Prompt 1:**
> "Help me design a small React task management app for my Frontend AI Engineering homework. Suggest beginner-friendly features that show React state, events, conditional rendering, and localStorage."

**Prompt 2:**
> "Build the Task Management App in this Vite React project. Create a TaskManager component, add task creation, completion toggle, delete, filters, counts, empty state, and localStorage persistence. Keep the code clean and accessible."

**Prompt 3:**
> "Review the generated React code like a frontend mentor. Identify any bugs, accessibility issues, or edge cases. Then improve the code without overcomplicating it."

**Prompt 4:**
> "Create HOMEWORK.md explaining the prompts used, how AI helped, and what manual corrections or improvements were made."

## 4. How AI Helped
The AI acted as a pair programmer throughout the development process. It significantly accelerated scaffolding by generating the initial boilerplate for the `TaskManager` component and its CSS. It provided the foundational logic for React state management (`useState`) and side effects (`useEffect`), demonstrating how to link local component state directly to browser API features like `localStorage`. The AI also assisted in establishing a clear, semantic HTML structure.

## 5. Manual Improvements and Corrections Made
While the AI generated a strong baseline, several manual adjustments and improvements were applied to ensure the code met production-grade standards:
* **Input Trimming:** Trimmed task input before saving so blank spaces cannot create empty tasks.
* **Storage Persistence:** Ensured robust `localStorage` persistence logic was implemented safely within a `try/catch` block so tasks reliably remain after a page refresh.
* **Accessibility Enhancements:** Added accessible labels (`aria-label`, `aria-pressed`, `htmlFor`) and clear button text to ensure the app is fully usable via keyboard and screen readers.
* **Filtering and Metrics:** Added task filters (All, Active, Completed) and task counts to make the app's state easier to review and manage.
* **Empty State:** Improved the empty state UI for a better, friendlier user experience when no tasks are present.

## 6. Final Feature List
- Add a new task (ignores blank or empty submissions).
- Toggle a task as completed or active.
- Delete a task.
- Filter tasks by "All", "Active", or "Completed".
- View dynamic task counts (Total, Active, Completed).
- Data persistence via `localStorage` (tasks survive browser refresh).
- Friendly "empty state" message when the task list is empty.
- Fully accessible and keyboard-navigable UI.

## 7. How to Run the Project
1. Ensure you have Node.js installed.
2. Navigate to the project directory: `cd frontend-ai-engineering-capstone`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## 8. Short Testing/Verification Note
The application has been verified to build successfully via `npm run build` with zero errors. Manual testing confirms that the add, toggle, delete, and filter functions work as expected. The `localStorage` mechanism was tested by creating tasks, refreshing the browser window, and confirming the state is correctly restored. Focus states and tab navigation have been verified for accessibility compliance.
