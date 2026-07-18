import type { UIMessage } from 'ai';
import type { chatTools } from './tools';
import type { InferUITools } from 'ai';

export type AppUITools = InferUITools<typeof chatTools>;
export type AppUIMessage = UIMessage<never, never, AppUITools>;
