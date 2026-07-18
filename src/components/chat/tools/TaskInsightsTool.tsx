import React from 'react';
import { AppUIMessage } from '@/lib/ai/chat-types';
import TaskInsightsCard from './TaskInsightsCard';
import TaskInsightsError from './TaskInsightsError';

type ToolPart = Extract<AppUIMessage['parts'][number], { type: 'tool-getTaskInsights' }>;

export default function TaskInsightsTool({ part }: { part: ToolPart }) {
  const { state, input, output, errorText } = part;

  if (state === 'input-streaming') {
    return (
      <div className="py-2 px-3 rounded-lg border border-border/20 bg-muted/10 animate-pulse text-xs text-muted-foreground my-2 flex items-center w-fit">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground animate-spin" />
          Preparing tool parameters...
        </div>
      </div>
    );
  }

  if (state === 'input-available') {
    return (
      <div className="p-4 rounded-xl border border-primary/40 bg-primary/5 shadow-sm my-4 flex items-center">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-primary tracking-tight">Executing Task Insights</span>
            <span className="text-xs text-muted-foreground mt-0.5">Fetching live metrics for {input.taskId}</span>
          </div>
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
