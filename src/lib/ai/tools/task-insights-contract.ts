import { z } from 'zod';

export const taskInsightsInputSchema = z.object({
  taskId: z
    .string()
    .trim()
    .min(1)
    .max(30)
    .describe('The task identifier to inspect, for example TASK-101.'),
});

export type TaskInsightsInput = z.infer<typeof taskInsightsInputSchema>;

export type TaskInsightOutput = {
  taskId: string;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'blocked' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  healthScore: number;
  healthLabel: 'At Risk' | 'Needs Attention' | 'On Track' | 'Excellent';
  progressPercent: number;
  scheduleVarianceHours: number;
  dueDate: string;
  metrics: {
    completedSubtasks: number;
    totalSubtasks: number;
    estimatedHours: number;
    spentHours: number;
  };
  blockers: Array<{
    id: string;
    label: string;
    severity: 'low' | 'medium' | 'high';
  }>;
  nextActions: Array<{
    id: string;
    label: string;
    owner: string;
  }>;
  generatedAt: string;
};
