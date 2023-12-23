
// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const myKv = process.env['MY_KV_1'];
  await myKv.put('foo', 'bar');
  const valueFromKv = await myKv.get('foo');

  return new Response(JSON.stringify({ name: valueFromKv }))
}
