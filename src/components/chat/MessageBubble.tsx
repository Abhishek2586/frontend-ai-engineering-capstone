import React from 'react';
import { AppUIMessage } from '@/lib/ai/chat-types';
import TaskInsightsTool from './tools/TaskInsightsTool';

interface MessageBubbleProps {
  message: AppUIMessage;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div 
        className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-3 ${
          isUser 
            ? 'bg-primary text-primary-foreground rounded-br-sm' 
            : 'bg-muted/40 text-foreground border border-border rounded-bl-sm'
        }`}
      >
        <div className="font-semibold text-xs opacity-70 mb-1 flex items-center gap-2">
          {isUser ? 'You' : 'Assistant'}
        </div>
        <div 
          className="text-sm prose-sm max-w-none break-words" 
          style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}
        >
          {message.parts?.map((part, index) => {
            if (part.type === 'text') {
              return <span key={index}>{part.text}</span>;
            }
            if (part.type === 'tool-getTaskInsights') {
              return <TaskInsightsTool key={index} part={part} />;
            }
            return <span key={index} className="italic opacity-50 block mt-2">[Unsupported part: {part.type}]</span>;
          })}
        </div>
      </div>
    </div>
  );
}
