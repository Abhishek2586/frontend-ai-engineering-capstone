import React from 'react';
import { TaskInsightOutput } from '@/lib/ai/tools/task-insights-contract';
import { Clock, CheckCircle2, AlertTriangle, AlertCircle, Calendar, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TaskInsightsCard({ data }: { data: TaskInsightOutput }) {
  const getHealthColor = (label: string) => {
    switch (label) {
      case 'Excellent': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
      case 'On Track': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'Needs Attention': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
      case 'At Risk': return 'text-red-500 bg-red-500/10 border-red-500/20';
      default: return 'text-muted-foreground bg-muted/50 border-border';
    }
  };

  const getPriorityIconColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-500';
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-amber-500';
      default: return 'text-emerald-500';
    }
  };

  return (
    <div className="flex flex-col gap-4 p-5 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm shadow-sm overflow-hidden my-4 group">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground tracking-tight">{data.taskId}</h3>
              <span className="text-xs uppercase font-medium px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground border border-border/50">
                {data.status.replace('-', ' ')}
              </span>
            </div>
            <p className="text-sm font-medium text-foreground mt-0.5">{data.title}</p>
          </div>
        </div>
        <div className={cn('px-3 py-1 rounded-full border flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider', getHealthColor(data.healthLabel))}>
          {data.healthLabel}
          <span className="opacity-80">({data.healthScore})</span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {data.description}
      </p>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-lg bg-muted/30 border border-border/30 flex flex-col gap-1 transition-colors hover:bg-muted/50">
          <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> Progress
          </span>
          <span className="text-lg font-semibold text-foreground">
            {data.progressPercent}%
          </span>
        </div>
        <div className="p-3 rounded-lg bg-muted/30 border border-border/30 flex flex-col gap-1 transition-colors hover:bg-muted/50">
          <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Time Variance
          </span>
          <span className={cn('text-lg font-semibold', data.scheduleVarianceHours > 0 ? 'text-red-500' : 'text-emerald-500')}>
            {data.scheduleVarianceHours > 0 ? '+' : ''}{data.scheduleVarianceHours}h
          </span>
        </div>
        <div className="p-3 rounded-lg bg-muted/30 border border-border/30 flex flex-col gap-1 transition-colors hover:bg-muted/50">
          <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
            <AlertCircle className={cn('w-3.5 h-3.5', getPriorityIconColor(data.priority))} /> Priority
          </span>
          <span className="text-lg font-semibold text-foreground capitalize">
            {data.priority}
          </span>
        </div>
        <div className="p-3 rounded-lg bg-muted/30 border border-border/30 flex flex-col gap-1 transition-colors hover:bg-muted/50">
          <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> Due Date
          </span>
          <span className="text-sm font-semibold text-foreground mt-0.5">
            {new Date(data.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-muted/50 overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${data.progressPercent}%` }}
        />
      </div>

      {/* Lists (Blockers & Next Actions) */}
      {(data.blockers.length > 0 || data.nextActions.length > 0) && (
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          {data.blockers.length > 0 && (
            <div className="flex-1 p-4 rounded-xl border border-red-500/20 bg-red-500/5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Blockers
              </h4>
              <ul className="space-y-2">
                {data.blockers.map((b) => (
                  <li key={b.id} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span className="leading-tight">{b.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {data.nextActions.length > 0 && (
            <div className="flex-1 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4" /> Next Actions
              </h4>
              <ul className="space-y-2">
                {data.nextActions.map((a) => (
                  <li key={a.id} className="text-sm text-muted-foreground flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="leading-tight">{a.label}</span>
                    </div>
                    <span className="text-[10px] font-medium bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {a.owner}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
