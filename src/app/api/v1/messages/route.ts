import { NextRequest, NextResponse } from 'next/server';
import { formatAnthropicToOpenAI, formatOpenAIToAnthropic } from '@/services/llm-provider/adapters/format';
import { streamOpenAIToAnthropic } from '@/services/llm-provider/adapters/stream';
import { PROVIDER_CONFIGS } from '@/services/llm-provider/providers';
import type { Provider } from '@/services/llm-provider/types';

/**
 * 选择合适的 API 提供商
 */
function selectProvider(env: Record<string, string | undefined>): { provider: Provider; baseUrl: string } {
  // Check specific provider configurations first
  if (env['DEEPSEEK_BASE_URL']) {
    return { provider: 'deepseek', baseUrl: env['DEEPSEEK_BASE_URL'] };
  }
  if (env['OPENAI_BASE_URL']) {
    return { provider: 'openai', baseUrl: env['OPENAI_BASE_URL'] };
  }
  if (env['KIMI_BASE_URL']) {
    return { provider: 'kimi', baseUrl: env['KIMI_BASE_URL'] };
  }
  if (env['SILICONFLOW_BASE_URL']) {
    return { provider: 'siliconflow', baseUrl: env['SILICONFLOW_BASE_URL'] };
  }

  // Auto-detect provider from generic OPENAI_COMPATIBLE_BASE_URL
  if (env['OPENAI_COMPATIBLE_BASE_URL']) {
    const baseUrl = env['OPENAI_COMPATIBLE_BASE_URL'].toLowerCase();

    if (baseUrl.includes('deepseek')) {
      return { provider: 'deepseek', baseUrl };
    } else if (baseUrl.includes('openai')) {
      return { provider: 'openai', baseUrl };
    } else if (baseUrl.includes('moonshot')) {
      return { provider: 'kimi', baseUrl };
    } else if (baseUrl.includes('siliconflow')) {
      return { provider: 'siliconflow', baseUrl };
    }
    // 如果无法检测，默认使用 'openai' 提供商配置
    return { provider: 'openai', baseUrl };
  }

  // Default to OpenRouter
  return {
    provider: 'openrouter',
    baseUrl: env['OPENROUTER_BASE_URL'] || PROVIDER_CONFIGS.openrouter.defaultBaseUrl,
  };
}

export async function POST(request: NextRequest) {
  try {
    const anthropicRequest = await request.json();
    const bearerToken = request.headers.get('x-api-key');

    if (!bearerToken) {
      return NextResponse.json({ error: 'Missing API key' }, { status: 401 });
    }

    const { provider, baseUrl } = selectProvider(process.env);
    const openaiRequest = formatAnthropicToOpenAI(anthropicRequest, provider, PROVIDER_CONFIGS);

    const openaiResponse = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(openaiRequest),
    });

    if (!openaiResponse.ok) {
      const error = await openaiResponse.text();
      return NextResponse.json({ error }, { status: openaiResponse.status });
    }

    if (openaiRequest.stream) {
      const anthropicStream = streamOpenAIToAnthropic(openaiResponse.body as ReadableStream, openaiRequest.model);

      return new NextResponse(anthropicStream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
        },
      });
    }

    const openaiData = await openaiResponse.json();
    const anthropicResponse = formatOpenAIToAnthropic(openaiData, openaiRequest.model);

    return NextResponse.json(anthropicResponse);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export const runtime = 'nodejs';
