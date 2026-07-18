import { streamText, convertToModelMessages, UIMessage } from 'ai';
import { getModel, SYSTEM_PROMPT, MAX_OUTPUT_TOKENS, TEMPERATURE } from '@/lib/ai/config';
import { chatTools } from '@/lib/ai/tools';
import { NextResponse } from 'next/server';

export const maxDuration = 60; // Allow Vercel Function up to 60s

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body as { messages: UIMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid or missing messages array.' },
        { status: 400 }
      );
    }

    // Limit conversation size to 40 messages
    const limitedMessages = messages.slice(-40);
    
    // Validate message content lengths
    for (const msg of limitedMessages) {
      if (msg.role === 'user' && msg.parts) {
        const textParts = msg.parts.filter(p => p.type === 'text') as { type: 'text', text: string }[];
        const totalLength = textParts.reduce((acc, part) => acc + (part.text?.length || 0), 0);
        if (totalLength > 8000) {
          return NextResponse.json(
            { error: 'User message exceeds maximum allowed length.' },
            { status: 400 }
          );
        }
      }
    }

    const model = getModel();

    const result = streamText({
      model,
      system: SYSTEM_PROMPT,
      messages: await convertToModelMessages(limitedMessages),
      maxOutputTokens: MAX_OUTPUT_TOKENS,
      temperature: TEMPERATURE,
      abortSignal: req.signal,
      tools: chatTools,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    // Only log non-sensitive info safely
    console.error('Chat API Error:', error instanceof Error ? error.message : 'Unknown error');
    
    return NextResponse.json(
      { error: 'An error occurred during chat processing. Please try again.' },
      { status: 500 }
    );
  }
}
