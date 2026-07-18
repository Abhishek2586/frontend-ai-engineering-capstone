import React from 'react';
import { UIMessage } from 'ai';
import MessageBubble from './MessageBubble';
import ThinkingIndicator from './ThinkingIndicator';

interface MessageListProps {
  messages: UIMessage[];
  status: string;
}

export default function MessageList({ messages, status }: MessageListProps) {
  // If no messages yet, show empty state
  if (messages.length === 0 && status === 'ready') {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4 text-muted-foreground">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
        </div>
        <h2 className="text-xl font-semibold text-foreground">How can I help you today?</h2>
        <p className="max-w-md text-sm">
          I&apos;m an AI assistant focused on productivity and frontend engineering.
        </p>
      </div>
    );
  }

  // Calculate if we need to show the thinking indicator
  // Show it if we are submitted (waiting for first token)
  // Or if we are streaming but the last message is from the assistant and has no content yet
  const lastMessage = messages[messages.length - 1];
  const lastMessageHasText = lastMessage?.parts?.some(p => p.type === 'text' && p.text?.length > 0);
  const isAssistantThinking = 
    status === 'submitted' || 
    (status === 'streaming' && lastMessage?.role === 'assistant' && !lastMessageHasText);

  return (
    <div className="flex flex-col py-4 w-full" aria-label="Message history">
      {messages.map((message) => {
        const hasText = message.parts?.some(p => p.type === 'text' && p.text?.length > 0);
        // Do not render empty assistant messages while streaming (thinking indicator handles this)
        if (message.role === 'assistant' && !hasText && status === 'streaming') {
          return null;
        }
        return <MessageBubble key={message.id} message={message} />;
      })}
      
      {isAssistantThinking && (
        <div className="flex w-full justify-start mb-4">
          <ThinkingIndicator />
        </div>
      )}
    </div>
  );
}
