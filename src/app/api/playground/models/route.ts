import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface ModelsRequest {
  url: string;
  key: string;
  apiType: 'openai' | 'anthropic';
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ModelsRequest;
    const { url, key, apiType } = body;

    if (!url || !key) {
      return NextResponse.json({ error: 'url and key are required' }, { status: 400 });
    }

    if (apiType === 'anthropic') {
      return NextResponse.json({
        models: [],
        hint: 'Anthropic does not expose a models list endpoint. Please enter the model ID manually.',
      });
    }

    const targetUrl = url.replace(/\/$/, '') + '/models';
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${key}`,
      },
      signal: AbortSignal.timeout(15_000),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      return NextResponse.json({
        models: [],
        hint: `Failed to fetch models (${response.status}). Please enter the model ID manually.`,
        detail: text.slice(0, 200),
      });
    }

    const data = (await response.json()) as { data?: Array<{ id: string }> };
    const models = (data.data ?? []).map(m => m.id).sort();

    if (models.length === 0) {
      return NextResponse.json({
        models: [],
        hint: 'No models returned by this endpoint. Please enter the model ID manually.',
      });
    }

    return NextResponse.json({ models });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({
      models: [],
      hint: `Could not connect: ${msg}. Please enter the model ID manually.`,
    });
  }
}
