import 'server-only';

export type CapstoneTask = {
  id: string;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'blocked' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  completedSubtasks: number;
  totalSubtasks: number;
  estimatedHours: number;
  spentHours: number;
  dueDate: string;
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
};

export const MOCK_TASKS: CapstoneTask[] = [
  {
    id: 'TASK-101',
    title: 'Implement accessible settings form',
    description: 'Create a fully accessible form for user preferences following WCAG 2.1 AA guidelines.',
    status: 'in-progress',
    priority: 'high',
    completedSubtasks: 3,
    totalSubtasks: 5,
    estimatedHours: 8,
    spentHours: 6,
    dueDate: '2026-07-25',
    blockers: [],
    nextActions: [
      { id: 'na-1', label: 'Add aria-describedby to input fields', owner: 'Frontend Team' },
      { id: 'na-2', label: 'Test with VoiceOver on iOS', owner: 'QA Team' }
    ]
  },
  {
    id: 'TASK-102',
    title: 'Complete streaming chat verification',
    description: 'Ensure the AI streaming responses display smoothly and scroll naturally.',
    status: 'blocked',
    priority: 'critical',
    completedSubtasks: 2,
    totalSubtasks: 6,
    estimatedHours: 12,
    spentHours: 14,
    dueDate: '2026-07-20',
    blockers: [
      { id: 'b-1', label: 'Vercel timeout limits causing incomplete streams', severity: 'high' }
    ],
    nextActions: [
      { id: 'na-3', label: 'Upgrade Vercel functions to maxDuration: 60', owner: 'DevOps' }
    ]
  },
  {
    id: 'TASK-103',
    title: 'Add analytics dashboard cards',
    description: 'Render high-level KPIs based on the user task completion data.',
    status: 'not-started',
    priority: 'medium',
    completedSubtasks: 0,
    totalSubtasks: 4,
    estimatedHours: 16,
    spentHours: 0,
    dueDate: '2026-08-05',
    blockers: [],
    nextActions: [
      { id: 'na-4', label: 'Finalize the KPI metrics with Product', owner: 'Product Manager' },
      { id: 'na-5', label: 'Design the card components in Figma', owner: 'Design Team' }
    ]
  }
];
