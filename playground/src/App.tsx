import { useRef, useState } from 'react';
import { ModalDialog } from './components/handmade/ModalDialog';
import { Tabs } from './components/handmade/Tabs';
import { Disclosure } from './components/handmade/Disclosure';
import { ShadcnComparison } from './components/shadcn-demo/ShadcnComparison';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalTriggerRef = useRef<HTMLButtonElement>(null);

  const tabItems = [
    {
      id: "overview",
      label: "Overview",
      content: <p>This is the overview content.</p>,
    },
    {
      id: "activity",
      label: "Activity",
      content: <p>Here is your recent activity.</p>,
    },
    {
      id: "settings",
      label: "Settings",
      content: <p>Configure your settings here.</p>,
    },
  ];

  const disclosureItems = [
    {
      id: "q1",
      title: "What is this playground?",
      content: <p>This playground contains accessible interactive components built from scratch.</p>,
    },
    {
      id: "q2",
      title: "Keyboard testing checklist",
      content: (
        <ul className="list-disc pl-5">
          <li>Use Tab and Shift+Tab to navigate focusable elements.</li>
          <li>Use Arrow keys to switch tabs.</li>
          <li>Use Enter or Space to activate buttons and disclosures.</li>
          <li>Use Escape to close the modal.</li>
        </ul>
      ),
    },
    {
      id: "q3",
      title: "What I learned",
      content: <p>Accessibility requires careful attention to ARIA roles, focus management, and keyboard event handling.</p>,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-12 text-left">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">FE-05 Accessible Component Playground</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            A demonstration of WAI-ARIA compliant components built from scratch compared with shadcn/ui.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Handmade Modal Dialog</h2>
          <div>
            <button
              ref={modalTriggerRef}
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
            >
              Open Handmade Modal
            </button>
            <ModalDialog
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Edit Profile"
              description="Make changes to your profile here. Focus is trapped while open."
              triggerRef={modalTriggerRef}
            />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Handmade Tabs</h2>
          <Tabs tabs={tabItems} />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Handmade Disclosure</h2>
          <Disclosure items={disclosureItems} />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Keyboard Testing Checklist</h2>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg text-sm text-yellow-800 dark:text-yellow-200">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Modal:</strong> Tab moves within dialog. Shift+Tab reverses. Escape closes. Focus returns.</li>
              <li><strong>Tabs:</strong> Arrow keys move focus. Enter/Space selects.</li>
              <li><strong>Disclosure:</strong> Enter/Space toggles content. Native tab order supported.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6 pt-12 border-t">
          <ShadcnComparison />
        </section>
      </div>
    </div>
  );
}

export default App;
