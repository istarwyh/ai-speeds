import type { Env } from '../../env';

export interface TestResult {
  name: string;
  pass: boolean;
  status?: number;
  contentType?: string | null;
  error?: string | undefined;
}

// Pick a stable HTTPS image endpoint
const DEFAULT_IMG = 'https://httpbin.org/image/png';

export async function runImgProxyHappy(_env: Env, baseUrl: string, src?: string): Promise<TestResult> {
  const name = 'img-proxy happy case (HTTPS, allowed by whitelist)';
  try {
    const target = encodeURIComponent(src || DEFAULT_IMG);
    const url = new URL(`/img-proxy?src=${target}`, baseUrl);
    const resp = await fetch(url.toString(), { method: 'GET' });

    const contentType = resp.headers.get('content-type');
    const pass = resp.ok && !!contentType && contentType.startsWith('image/');

    return {
      name,
      pass,
      status: resp.status,
      contentType,
      error: pass ? undefined : `Unexpected response: status=${resp.status}, content-type=${contentType}`,
    };
  } catch (e: unknown) {
    return { name, pass: false, error: e instanceof Error ? e.message : String(e) };
  }
}
