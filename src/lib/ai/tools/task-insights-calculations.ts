import { CapstoneTask } from './task-data';
import { TaskInsightOutput } from './task-insights-contract';

export function calculateProgressPercent(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

export function calculateScheduleVariance(spent: number, estimated: number): number {
  return spent - estimated;
}

export function calculateHealthScore(task: CapstoneTask): number {
  let score = 100;
  
  // Progress
  const progress = calculateProgressPercent(task.completedSubtasks, task.totalSubtasks);
  
  // Penalize based on status
  if (task.status === 'blocked') score -= 30;
  else if (task.status === 'not-started') score -= 10;
  
  // Schedule variance
  const variance = calculateScheduleVariance(task.spentHours, task.estimatedHours);
  if (variance > 0) {
    // subtract 5 points per hour over
    score -= (variance * 5);
  }
  
  // Blockers penalty
  if (task.blockers.length > 0) {
    task.blockers.forEach(b => {
      if (b.severity === 'high') score -= 20;
      else if (b.severity === 'medium') score -= 10;
      else score -= 5;
    });
  }
  
  return Math.max(0, Math.min(100, Math.round(score)));
}

export function getHealthLabel(score: number): TaskInsightOutput['healthLabel'] {
  if (score >= 85) return 'Excellent';
  if (score >= 60) return 'On Track';
  if (score >= 40) return 'Needs Attention';
  return 'At Risk';
}
