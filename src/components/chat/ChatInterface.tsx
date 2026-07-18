'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useChat } from '@ai-sdk/react';
import MessageList from './MessageList';
import ChatComposer from './ChatComposer';
import JumpToLatestButton from './JumpToLatestButton';

import { DefaultChatTransport } from 'ai';

const STORAGE_KEY = 'fe06-chat-messages-v1';

export default function ChatInterface() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [input, setInput] = useState('');

  const {
    messages,
    status,
    stop,
    error,
    setMessages,
    sendMessage
  } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  });

  // Load from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to parse stored messages', e);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, [setMessages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput('');
  };

  // Save to local storage on changes
  useEffect(() => {
    if (isLoaded && messages.length > 0) {
      // Only save valid UI messages
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch (e) {
        console.error('Failed to save messages', e);
      }
    }
  }, [messages, isLoaded]);

  // Auto-scroll logic
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [showJumpToLatest, setShowJumpToLatest] = useState(false);

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Check if we are near the bottom (threshold of 100px)
    const { scrollTop, scrollHeight, clientHeight } = container;
    const distanceToBottom = scrollHeight - (scrollTop + clientHeight);
    const isNearBottom = distanceToBottom < 100;
    
    setIsAtBottom(isNearBottom);
    
    // Show "Jump to latest" if we are not at bottom and a stream is happening, or messages are long
    if (!isNearBottom && messages.length > 0) {
      setShowJumpToLatest(true);
    } else {
      setShowJumpToLatest(false);
    }
  }, [messages.length]);

  // Scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  // Auto-scroll effect
  useEffect(() => {
    if (isAtBottom && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, [messages, status, isAtBottom]); // Re-run when messages or status change

  const handleJumpToLatest = () => {
    setIsAtBottom(true);
    setShowJumpToLatest(false);
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clearConversation = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (!isLoaded) {
    return <div className="p-8 flex items-center justify-center h-full">Loading...</div>;
  }

  return (
    <div className="flex flex-col h-full relative">
      {messages.length > 0 && (
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={clearConversation}
            className="text-xs bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground px-3 py-1.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Clear conversation
          </button>
        </div>
      )}

      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 sm:p-6"
      >
        <MessageList messages={messages} status={status} />
        
        {error && (
          <div className="p-4 mb-4 text-sm text-destructive-foreground bg-destructive/90 rounded-lg shadow-sm" role="alert">
            <p className="font-semibold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
              Error
            </p>
            <p className="mt-1 opacity-90">The response could not be completed. Please try again.</p>
          </div>
        )}
        
        <div ref={messagesEndRef} className="h-4 w-full" />
      </div>

      <JumpToLatestButton 
        visible={showJumpToLatest} 
        onClick={handleJumpToLatest} 
      />

      <ChatComposer 
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={(e) => {
          setIsAtBottom(true);
          handleSubmit(e);
        }}
        status={status}
        stop={stop}
        setInput={setInput}
      />
    </div>
  );
}
