import React, { useRef, useEffect } from 'react';

interface ChatComposerProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  status: string;
  stop: () => void;
  setInput: (input: string) => void;
}

export default function ChatComposer({ 
  input, 
  handleInputChange, 
  handleSubmit, 
  status, 
  stop,
  setInput
}: ChatComposerProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isGenerating = status === 'submitted' || status === 'streaming';
  
  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (e.nativeEvent.isComposing) return; // Ignore IME composition
      e.preventDefault();
      
      const trimmedInput = input.trim();
      if (!trimmedInput || isGenerating) return;
      
      const formEvent = new Event('submit', { bubbles: true, cancelable: true }) as unknown as React.FormEvent<HTMLFormElement>;
      handleSubmit(formEvent);
    }
  };

  return (
    <div className="p-4 bg-card border-t border-border mt-auto">
      <form 
        onSubmit={(e) => {
          const trimmedInput = input.trim();
          if (!trimmedInput && !isGenerating) {
            e.preventDefault();
            return;
          }
          handleSubmit(e);
        }}
        className="relative max-w-4xl mx-auto flex items-end gap-2 bg-background border border-border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-accent focus-within:border-accent transition-all shadow-sm"
      >
        <label htmlFor="chat-input" className="sr-only">Type your message</label>
        <textarea
          id="chat-input"
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          placeholder="Ask the AI productivity assistant..."
          autoComplete="off"
          disabled={isGenerating}
          rows={1}
          className="flex-1 max-h-[150px] min-h-[24px] bg-transparent resize-none outline-none py-1.5 text-sm w-full disabled:opacity-50"
        />
        
        <div className="flex-shrink-0 mb-1">
          {isGenerating ? (
            <button
              type="button"
              onClick={stop}
              className="p-2 bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-destructive"
              aria-label="Stop generation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="6" y="6" width="12" height="12" rx="2" ry="2"/></svg>
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 disabled:opacity-50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
