import { createAnthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';

async function test() {
  const anthropic = createAnthropic({
    apiKey: process.env.FASTROUTER_API_KEY,
    baseURL: 'https://api.fastrouter.ai/api/v1',
  });

  const model = anthropic('anthropic/claude-haiku-4.5');

  try {
    const { text } = await generateText({
      model,
      prompt: 'Say "hello world"',
    });
    console.log('Success:', text);
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
