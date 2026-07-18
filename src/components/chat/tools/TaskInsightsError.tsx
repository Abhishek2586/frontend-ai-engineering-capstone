import React from 'react';
import { AlertCircle, Terminal, Search } from 'lucide-react';


export default function TaskInsightsError({ taskId, error }: { taskId?: string, error: string }) {
  const defaultTask = taskId || 'Unknown Task';
  
  return (
    <div className="flex flex-col gap-4 p-5 rounded-xl border border-red-500/30 bg-red-500/5 my-4">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-red-500/10 rounded-lg shrink-0 mt-1">
          <AlertCircle className="w-5 h-5 text-red-500" />
        </div>
        <div>
          <h3 className="font-semibold text-red-600 dark:text-red-400">
            Task Not Found
          </h3>
          <p className="text-sm text-red-500/90 mt-1 leading-relaxed">
            {error}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <div className="flex items-center gap-2 bg-red-500/10 px-3 py-1.5 rounded text-xs text-red-600/90 dark:text-red-400/90 border border-red-500/20 font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>Query: {defaultTask}</span>
            </div>
            <p className="text-xs text-muted-foreground flex items-center h-full sm:pt-1.5">
              Available: TASK-101, TASK-102, TASK-103
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
