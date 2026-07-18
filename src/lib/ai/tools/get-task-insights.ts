import 'server-only';
import { tool } from 'ai';
import { taskInsightsInputSchema, TaskInsightOutput } from './task-insights-contract';
import { MOCK_TASKS } from './task-data';
import {
  calculateProgressPercent,
  calculateScheduleVariance,
  calculateHealthScore,
  getHealthLabel
} from './task-insights-calculations';

export const getTaskInsights = tool({
  description:
    'Retrieve and calculate structured productivity insights for a task ID. Use this when the user asks to inspect, analyze, score, review, or check the readiness of a project task.',
  inputSchema: taskInsightsInputSchema,
  execute: async ({ taskId }: { taskId: string }) => {
    // Artificial delay for tool UI state visibility
    await new Promise((resolve) => setTimeout(resolve, 800));

    const normalizedId = taskId.toUpperCase();
    const task = MOCK_TASKS.find((t) => t.id === normalizedId);

    if (!task) {
      throw new Error(`No task was found with ID ${normalizedId}.`);
    }

    const progressPercent = calculateProgressPercent(task.completedSubtasks, task.totalSubtasks);
    const scheduleVarianceHours = calculateScheduleVariance(task.spentHours, task.estimatedHours);
    const healthScore = calculateHealthScore(task);
    const healthLabel = getHealthLabel(healthScore);

    const output: TaskInsightOutput = {
      taskId: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
      healthScore,
      healthLabel,
      progressPercent,
      scheduleVarianceHours,
      dueDate: task.dueDate,
      metrics: {
        completedSubtasks: task.completedSubtasks,
        totalSubtasks: task.totalSubtasks,
        estimatedHours: task.estimatedHours,
        spentHours: task.spentHours,
      },
      blockers: task.blockers,
      nextActions: task.nextActions,
      generatedAt: new Date().toISOString(),
    };

    return output;
  },
});
