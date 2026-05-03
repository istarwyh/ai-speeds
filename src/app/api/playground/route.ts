import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface PlaygroundRequest {
  url: string;
  model: string;
  key: string;
  apiType: 'openai' | 'anthropic';
  message?: string;
  timeout?: number;
  stream?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as PlaygroundRequest;
    const { url, model, key, apiType, message, timeout, stream } = body;

    if (!url || !model || !key) {
      return NextResponse.json({ error: 'url, model, and key are required' }, { status: 400 });
    }

    const testMessage = message || 'Say hello in one sentence.';
    const timeoutMs = Math.max((timeout ?? 60) * 1000, 10_000);
    const useStream = stream !== false;

    let targetUrl: string;
    let headers: Record<string, string>;
    let requestBody: string;

    if (apiType === 'anthropic') {
      targetUrl = url.replace(/\/$/, '') + '/v1/messages';
      headers = {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
      };
      requestBody = JSON.stringify({
        model,
        max_tokens: 1024,
        stream: useStream,
        messages: [{ role: 'user', content: testMessage }],
      });
    } else {
      targetUrl = url.replace(/\/$/, '') + '/chat/completions';
      headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      };
      requestBody = JSON.stringify({
        model,
        max_tokens: 1024,
        stream: useStream,
        messages: [{ role: 'user', content: testMessage }],
      });
    }

    const start = Date.now();
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers,
      body: requestBody,
      signal: AbortSignal.timeout(timeoutMs),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      return NextResponse.json({
        status: response.status,
        statusText: response.statusText,
        latency: Date.now() - start,
        data,
      });
    }

    if (useStream && response.body) {
      // Forward SSE stream to client
      return new NextResponse(response.body, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'X-Playground-Latency': String(Date.now() - start),
          'X-Playground-Status': String(response.status),
        },
      });
    }

    // Non-streaming fallback
    const data = await response.json().catch(() => null);
    return NextResponse.json({
      status: response.status,
      statusText: response.statusText,
      latency: Date.now() - start,
      data,
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
