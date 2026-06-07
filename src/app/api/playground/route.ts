import { NextRequest, NextResponse } from 'next/server';
import { validateProxyUrl } from '@/lib/url-validation';

export const runtime = 'nodejs';

type ApiType = 'openai' | 'anthropic' | 'openai-responses';
type PlaygroundMode = 'agnes' | 'custom';

const AGNES_BASE_URL = 'https://apihub.agnes-ai.com/v1';
const AGNES_MODEL = 'agnes-2.0-flash';

interface PlaygroundRequest {
  mode?: PlaygroundMode;
  url?: string;
  model?: string;
  key?: string;
  apiType?: ApiType;
  message?: string;
  timeout?: number;
  stream?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as PlaygroundRequest;
    const { message, timeout, stream } = body;
    const mode = body.mode ?? 'custom';

    let model: string;
    let key: string;
    let apiType: ApiType;
    let baseUrl: string;

    if (mode === 'agnes') {
      key = process.env['AGNES_API_KEY'] ?? '';
      if (!key) {
        return NextResponse.json({ error: 'AGNES_API_KEY is not configured on the server' }, { status: 503 });
      }

      model = AGNES_MODEL;
      apiType = 'openai';
      baseUrl = AGNES_BASE_URL;
    } else {
      if (!body.url || !body.model || !body.key) {
        return NextResponse.json({ error: 'url, model, and key are required' }, { status: 400 });
      }

      const validation = validateProxyUrl(body.url);
      if (!validation.ok) {
        return NextResponse.json({ error: validation.error }, { status: 400 });
      }

      model = body.model;
      key = body.key;
      apiType = body.apiType ?? 'openai';
      baseUrl = validation.url.href.replace(/\/$/, '');
    }

    const testMessage = message || 'Say hello in one sentence.';
    const timeoutMs = Math.min(Math.max((timeout ?? 60) * 1000, 10_000), 120_000);
    const useStream = stream !== false;

    let targetUrl: string;
    let headers: Record<string, string>;
    let requestBody: string;

    if (apiType === 'anthropic') {
      targetUrl = `${baseUrl}/v1/messages`;
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
    } else if (apiType === 'openai-responses') {
      targetUrl = `${baseUrl}/v1/responses`;
      headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      };
      requestBody = JSON.stringify({
        model,
        stream: useStream,
        input: [{ role: 'user', content: testMessage }],
      });
    } else {
      targetUrl = `${baseUrl}/chat/completions`;
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
      return new NextResponse(response.body, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'X-Playground-Latency': String(Date.now() - start),
          'X-Playground-Status': String(response.status),
        },
      });
    }

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
