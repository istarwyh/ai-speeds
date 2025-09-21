import { Env } from './env';
import { formatAnthropicToOpenAI } from '../api/adapters/format';
import { streamOpenAIToAnthropic } from '../api/adapters/stream';
import { formatOpenAIToAnthropic } from '../api/adapters/format';
import { indexHtml } from '../templates/index';
import { DEFAULT_SECTION_ID } from '../config/navigation';
import { termsHtml } from '../templates/terms';
import { privacyHtml } from '../templates/privacy';
import { Provider } from '../api/types';
import { PROVIDER_CONFIGS } from '../api/providers';
import { handleImgProxy } from './routes/imgProxy';

/**
 * 选择合适的 API 提供商
 */
function selectProvider(env: Env): { provider: Provider; baseUrl: string } {
  // Check specific provider configurations first
  if (env.DEEPSEEK_BASE_URL) {
    return { provider: 'deepseek', baseUrl: env.DEEPSEEK_BASE_URL };
  }
  if (env.OPENAI_BASE_URL) {
    return { provider: 'openai', baseUrl: env.OPENAI_BASE_URL };
  }
  if (env.KIMI_BASE_URL) {
    return { provider: 'kimi', baseUrl: env.KIMI_BASE_URL };
  }
  if (env.SILICONFLOW_BASE_URL) {
    return { provider: 'siliconflow', baseUrl: env.SILICONFLOW_BASE_URL };
  }

  // Auto-detect provider from generic OPENAI_COMPATIBLE_BASE_URL
  if (env.OPENAI_COMPATIBLE_BASE_URL) {
    const baseUrl = env.OPENAI_COMPATIBLE_BASE_URL.toLowerCase();

    if (baseUrl.includes('deepseek')) {
      return { provider: 'deepseek', baseUrl };
    } else if (baseUrl.includes('openai')) {
      return { provider: 'openai', baseUrl };
    } else if (baseUrl.includes('moonshot')) {
      return { provider: 'kimi', baseUrl };
    } else if (baseUrl.includes('siliconflow')) {
      return { provider: 'siliconflow', baseUrl };
    }
    // 如果无法检测，默认使用 'openai' 提供商配置，因为它是 OpenAI 兼容的 URL
    return { provider: 'openai', baseUrl };
  }

  // Default to OpenRouter
  return {
    provider: 'openrouter',
    baseUrl: env.OPENROUTER_BASE_URL || PROVIDER_CONFIGS.openrouter.defaultBaseUrl,
  };
}

/**
 * Helper function to handle markdown file requests
 */
async function handleMarkdownFile(url: URL, env: Env, pathPrefix: string, assetPath: string): Promise<Response> {
  try {
    // Extract and sanitize filename from path
    const pathSegments = url.pathname.split('/');
    const fileName = pathSegments.pop();

    // Prevent path traversal
    if (!fileName || pathSegments.some(segment => segment.includes('..'))) {
      return new Response('Invalid file path', { status: 400 });
    }

    // Use Assets binding to serve static files
    const assetResponse = await env.ASSETS.fetch(new Request(`http://placeholder/${assetPath}${fileName}`));

    if (assetResponse.ok) {
      const content = await assetResponse.text();
      return new Response(content, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        },
      });
    } else {
      return new Response('Article not found', { status: 404 });
    }
  } catch (error) {
    console.error(`Error loading ${pathPrefix} article:`, error);
    return new Response('Error loading article', { status: 500 });
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/' && request.method === 'GET') {
      // Redirect root to a stable path with hash so browser URL reflects default section
      const target = new URL(`/home#${DEFAULT_SECTION_ID}`, url);
      return Response.redirect(target.toString(), 302);
    }

    // Serve SPA at /home (no redirect loop; fragments aren't sent to server)
    if (url.pathname === '/home' && request.method === 'GET') {
      return new Response(indexHtml, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    if (url.pathname === '/terms' && request.method === 'GET') {
      return new Response(termsHtml, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    if (url.pathname === '/privacy' && request.method === 'GET') {
      return new Response(privacyHtml, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    // Lightweight health check for test orchestration
    if (url.pathname === '/__test/health' && request.method === 'GET') {
      return new Response('ok', { status: 200 });
    }

    // Versioned ping to verify hot reload of server code
    if (url.pathname === '/__test/ping/v2' && request.method === 'GET') {
      return new Response(JSON.stringify({ ok: true, v: 2 }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Image proxy with CORS, whitelist, and caching
    if (url.pathname === '/img-proxy') {
      return handleImgProxy(url, request, env);
    }

    // Test route: happy-case validation for /img-proxy using direct handler invocation
    if (url.pathname === '/__test/img-proxy/happy' && request.method === 'GET') {
      const src = url.searchParams.get('src') || 'https://httpbin.org/image/png';
      const testUrl = new URL(url.toString());
      testUrl.pathname = '/img-proxy';
      testUrl.search = `src=${encodeURIComponent(src)}`;

      const testReq = new Request(testUrl.toString(), { method: 'GET' });
      const resp = await handleImgProxy(testUrl, testReq, env);
      const contentType = resp.headers.get('content-type');
      const reason = resp.headers.get('X-ImgProxy-Reason') || null;
      const pass = resp.ok && contentType !== null && contentType.startsWith('image/');
      let debugBody: string | undefined = undefined;
      if (!pass) {
        try {
          debugBody = await resp.clone().text();
        } catch {}
      }
      const out = {
        name: 'img-proxy happy case (HTTPS, allowed by whitelist)',
        pass,
        status: (resp as any).status,
        contentType,
        error: pass ? undefined : `Unexpected response: status=${(resp as any).status}, content-type=${contentType}`,
        reason,
        src,
        body: debugBody?.slice(0, 256),
      };
      return new Response(JSON.stringify(out), {
        headers: { 'Content-Type': 'application/json' },
        status: pass ? 200 : 500,
      });
    }

    // Handle markdown file requests for best practices articles
    if (
      url.pathname.startsWith('/src/features/best-practices/articles/') &&
      url.pathname.endsWith('.md') &&
      request.method === 'GET'
    ) {
      return await handleMarkdownFile(url, env, 'best practices', '');
    }

    // Handle markdown file requests for How to Apply CC articles
    if (
      url.pathname.startsWith('/src/features/how-to-apply-cc/content/') &&
      url.pathname.endsWith('.md') &&
      request.method === 'GET'
    ) {
      return await handleMarkdownFile(url, env, 'How to Apply CC', 'howToApplyCC-content/');
    }

    if (url.pathname === '/v1/messages' && request.method === 'POST') {
      const anthropicRequest = await request.json();
      const bearerToken = request.headers.get('x-api-key');

      // Select provider and base URL based on environment configuration
      const { provider, baseUrl } = selectProvider(env);

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
        return new Response(await openaiResponse.text(), { status: openaiResponse.status });
      }

      if (openaiRequest.stream) {
        const anthropicStream = streamOpenAIToAnthropic(openaiResponse.body as ReadableStream, openaiRequest.model);
        return new Response(anthropicStream, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
          },
        });
      } else {
        const openaiData = await openaiResponse.json();
        const anthropicResponse = formatOpenAIToAnthropic(openaiData, openaiRequest.model);
        return new Response(JSON.stringify(anthropicResponse), {
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response('Not Found', { status: 404 });
  },
};
