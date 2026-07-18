import React from 'react';

export default function JumpToLatestButton({ onClick, visible }) {
  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg text-sm font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-accent transition-all z-10 flex items-center gap-2"
      aria-label="Jump to latest message"
    >
      <span>↓ Jump to latest message</span>
    </button>
  );
}
