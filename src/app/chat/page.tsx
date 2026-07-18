import React from 'react';
import ChatInterface from '@/components/chat/ChatInterface';

export const metadata = {
  title: 'AI Chat - Frontend AI Capstone',
  description: 'Streaming Claude AI Chat Interface',
};

export default function ChatPage() {
  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-140px)] w-full max-w-4xl mx-auto">
      <header className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight">AI Productivity Assistant</h1>
        <p className="text-muted-foreground text-sm">Ask me for help with tasks, planning, and frontend development.</p>
      </header>
      
      <div className="flex-1 bg-card border border-border rounded-lg shadow-sm overflow-hidden flex flex-col relative">
        <ChatInterface />
      </div>
    </div>
  );
}
