import React, { useState } from "react";

interface DisclosureItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface DisclosureProps {
  items: DisclosureItem[];
}

export const Disclosure: React.FC<DisclosureProps> = ({ items }) => {
  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      {items.map((item) => (
        <DisclosureItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};

const DisclosureItemComponent: React.FC<{ item: DisclosureItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-white dark:bg-gray-900 dark:border-gray-800">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`content-${item.id}`}
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75 dark:text-gray-100 dark:hover:bg-gray-800 rounded-lg"
        >
          <span>{item.title}</span>
          <svg
            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180 transform" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </h3>
      <div
        id={`content-${item.id}`}
        role="region"
        className={`px-4 pb-4 pt-2 text-sm text-gray-500 dark:text-gray-400 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {item.content}
      </div>
    </div>
  );
};
