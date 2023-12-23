
// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from 'next/server'
import { Ai } from '@cloudflare/ai'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const myKv = process.env['MY_KV_1'];
  await myKv.put('foo', 'bar');
  const valueFromKv = await myKv.get('foo');

  const ai = new Ai(process.env.AI);

  const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
      prompt: "What is the origin of the phrase Hello, World"
    }
  );

  return new Response(JSON.stringify({ response: response }))
}
