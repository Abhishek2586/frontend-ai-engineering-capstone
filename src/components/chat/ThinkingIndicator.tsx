import React from 'react';

export default function ThinkingIndicator() {
  return (
    <div 
      className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg w-fit mb-4"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
      <span className="text-sm font-medium text-muted-foreground sr-only">Claude is thinking</span>
    </div>
  );
}
