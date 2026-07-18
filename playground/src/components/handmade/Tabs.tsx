import { useState, useRef } from "react";
import type { KeyboardEvent, ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTabId?: string;
}

export const Tabs = ({ tabs, defaultTabId }: TabsProps) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    defaultTabId || (tabs.length > 0 ? tabs[0].id : "")
  );

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let newIndex = -1;

    switch (e.key) {
      case "ArrowLeft":
        newIndex = index === 0 ? tabs.length - 1 : index - 1;
        break;
      case "ArrowRight":
        newIndex = index === tabs.length - 1 ? 0 : index + 1;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = tabs.length - 1;
        break;
      case "Enter":
      case " ":
        setActiveTabId(tabs[index].id);
        e.preventDefault();
        break;
      default:
        break;
    }

    if (newIndex !== -1) {
      e.preventDefault();
      tabRefs.current[newIndex]?.focus();
    }
  };

  return (
    <div className="w-full max-w-md">
      <div
        role="tablist"
        aria-label="Example Tabs"
        className="flex space-x-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-800"
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[index] = el; }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTabId(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2 ${
                isActive
                  ? "bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-white"
                  : "text-gray-500 hover:bg-white/[0.12] hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-2">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              tabIndex={0}
              hidden={!isActive}
              className={`rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2 dark:bg-gray-900 dark:text-gray-300 ${
                !isActive ? "hidden" : "block"
              }`}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
