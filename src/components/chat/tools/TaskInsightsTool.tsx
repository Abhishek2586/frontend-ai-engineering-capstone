import React from 'react';
import { AppUIMessage } from '@/lib/ai/chat-types';
import TaskInsightsCard from './TaskInsightsCard';
import TaskInsightsError from './TaskInsightsError';

type ToolPart = Extract<AppUIMessage['parts'][number], { type: 'tool-getTaskInsights' }>;

export default function TaskInsightsTool({ part }: { part: ToolPart }) {
  const { state, input, output, errorText } = part;

  if (state === 'input-streaming') {
    return (
      <div className="p-4 rounded-xl border border-border/40 bg-muted/20 animate-pulse text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          Preparing task analysis for {input?.taskId || '...'}
        </div>
      </div>
    );
  }

  if (state === 'input-available') {
    return (
      <div className="p-4 rounded-xl border border-border/40 bg-muted/20 animate-pulse text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          Analyzing task: {input.taskId}
        </div>
      </div>
    );
  }

  if (state === 'output-error') {
    return (
      <TaskInsightsError 
        taskId={input?.taskId} 
        error={errorText || 'Failed to generate insights'} 
      />
    );
  }

  if (state === 'output-available' && output) {
    return <TaskInsightsCard data={output} />;
  }

  return null;
}
