'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { BrandIcon } from '@/components/brand';
import { UI_TEXTS } from '@/config/ui-texts';

type ApiType = 'openai' | 'anthropic';

interface TestResult {
  status: number;
  statusText: string;
  latency: number;
  data: unknown;
}

const DEFAULT_URL = 'https://aispeeds.me';

export default function PlaygroundPage() {
  const [apiType, setApiType] = useState<ApiType>('openai');
  const [url, setUrl] = useState(DEFAULT_URL);
  const [model, setModel] = useState('');
  const [key, setKey] = useState('');
  const [message, setMessage] = useState('');
  const [timeout, setTimeout_] = useState(60);
  const [showKey, setShowKey] = useState(false);
  const [loading, setLoading] = useState(false);
  const [streamText, setStreamText] = useState('');
  const [rawLines, setRawLines] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'rendered' | 'raw'>('rendered');
  const [streamDone, setStreamDone] = useState(false);
  const [streamLatency, setStreamLatency] = useState<number | null>(null);
  const [models, setModels] = useState<string[]>([]);
  const [modelsLoading, setModelsLoading] = useState(false);
  const [modelsHint, setModelsHint] = useState('');
  const [result, setResult] = useState<TestResult | null>(null);
  const [error, setError] = useState('');
  const abortRef = useRef<AbortController | null>(null);

  const handleSend = async () => {
    if (!url || !model || !key) {
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError('');
    setResult(null);
    setStreamText('');
    setRawLines([]);
    setViewMode('rendered');
    setStreamDone(false);
    setStreamLatency(null);

    const start = Date.now();

    try {
      const res = await fetch('/api/playground', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, model, key, apiType, message: message || undefined, timeout }),
        signal: controller.signal,
      });

      const serverLatency = res.headers.get('X-Playground-Latency');
      const serverStatus = res.headers.get('X-Playground-Status');

      const contentType = res.headers.get('content-type') ?? '';

      if (contentType.includes('text/event-stream') && res.body) {
        // Streaming mode — read SSE and render progressively
        const status = serverStatus ? Number(serverStatus) : res.status;
        setStreamLatency(serverLatency ? Number(serverLatency) : Date.now() - start);

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let text = '';

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() ?? '';

            for (const line of lines) {
              if (line.startsWith('event:') || line.startsWith(':')) {
                // Collect SSE event type lines and comments
                setRawLines(prev => [...prev, line]);
                continue;
              }
              if (!line.startsWith('data:')) {
                continue;
              }
              const payload = line.slice(5).trim();
              setRawLines(prev => [...prev, `data: ${payload}`]);
              if (payload === '[DONE]') {
                continue;
              }

              try {
                const json = JSON.parse(payload) as Record<string, unknown>;

                // OpenAI format: choices[0].delta.content
                const choices = json['choices'] as Array<{ delta?: { content?: string } }> | undefined;
                if (choices?.[0]?.delta?.content) {
                  text += choices[0].delta.content;
                  setStreamText(text);
                  continue;
                }

                // Anthropic format: delta.text
                const delta = json['delta'] as { text?: string; type?: string } | undefined;
                if (delta?.type === 'content_block_delta' && delta.text) {
                  text += delta.text;
                  setStreamText(text);
                  continue;
                }
                // Also handle when type is at top level
                if (json['type'] === 'content_block_delta') {
                  const d = json['delta'] as { text?: string } | undefined;
                  if (d?.text) {
                    text += d.text;
                    setStreamText(text);
                  }
                }
              } catch {
                // skip malformed lines
              }
            }
          }
        } finally {
          reader.releaseLock();
        }

        setStreamDone(true);
        setStreamLatency(serverLatency ? Number(serverLatency) : Date.now() - start);
        setResult({
          status,
          statusText: status >= 200 && status < 300 ? 'OK' : 'Error',
          latency: serverLatency ? Number(serverLatency) : Date.now() - start,
          data: { content: text },
        });
      } else {
        // Non-streaming fallback
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || `Request failed (${res.status})`);
        } else {
          setResult(data);
        }
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        return;
      }
      setError(err instanceof Error ? err.message : 'Network error');
    } finally {
      setLoading(false);
    }
  };

  const handleStop = () => {
    abortRef.current?.abort();
    setLoading(false);
    setStreamDone(true);
  };

  const handleFetchModels = async () => {
    if (!url.trim() || !key.trim()) {
      return;
    }

    setModelsLoading(true);
    setModels([]);
    setModelsHint('');

    try {
      const res = await fetch('/api/playground/models', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, key, apiType }),
      });
      const data = await res.json();
      if (data.models?.length) {
        setModels(data.models);
      }
      if (data.hint) {
        setModelsHint(data.hint);
      }
    } catch (err) {
      setModelsHint(err instanceof Error ? err.message : 'Failed to fetch models');
    } finally {
      setModelsLoading(false);
    }
  };

  const canSend = url.trim() && model.trim() && key.trim() && !loading;

  return (
    <main className='min-h-screen bg-bg-secondary text-text-primary'>
      <header className='flex h-12 shrink-0 items-center gap-3 border-b border-border-light bg-bg-primary px-4'>
        <Link href='/' className='flex items-center gap-2 text-text-muted transition-colors hover:text-text-primary'>
          <BrandIcon size={24} />
          <span className='text-sm font-semibold italic'>AI Speeds</span>
        </Link>
        <span className='text-text-muted'>|</span>
        <span className='text-sm font-medium text-text-secondary'>{UI_TEXTS.NAVIGATION.PLAYGROUND}</span>
      </header>

      <div className='mx-auto max-w-2xl px-4 py-8'>
        <div className='space-y-6'>
          {/* API Type Toggle */}
          <div className='flex gap-2'>
            {(['openai', 'anthropic'] as const).map(type => (
              <button
                key={type}
                onClick={() => setApiType(type)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  apiType === type
                    ? 'bg-teal-500 text-white shadow-sm'
                    : 'bg-bg-primary text-text-secondary hover:bg-bg-tertiary border border-border-light'
                }`}
              >
                {type === 'openai' ? 'OpenAI Compatible' : 'Anthropic'}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className='rounded-xl border border-border-light bg-bg-primary p-6 shadow-sm space-y-4'>
            <div>
              <label className='mb-1.5 block text-sm font-medium text-text-primary'>URL</label>
              <input
                type='text'
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder={DEFAULT_URL}
                className='w-full rounded-lg border border-border-medium px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none'
              />
            </div>

            <div>
              <div className='mb-1.5 flex items-center justify-between'>
                <label className='text-sm font-medium text-text-primary'>Model</label>
                <button
                  type='button'
                  onClick={handleFetchModels}
                  disabled={!url.trim() || !key.trim() || modelsLoading}
                  className='text-xs text-teal-600 hover:text-teal-500 disabled:cursor-not-allowed disabled:text-text-muted transition-colors'
                >
                  {modelsLoading ? 'Fetching...' : 'Fetch Models'}
                </button>
              </div>
              <input
                type='text'
                value={model}
                onChange={e => setModel(e.target.value)}
                placeholder={apiType === 'openai' ? 'gpt-4o' : 'claude-sonnet-4-20250514'}
                className='w-full rounded-lg border border-border-medium px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none'
              />
              {modelsHint && <p className='mt-1.5 text-xs text-text-muted'>{modelsHint}</p>}
              {models.length > 0 && (
                <div className='mt-2 flex flex-wrap gap-1.5'>
                  {models.map(m => (
                    <button
                      key={m}
                      type='button'
                      onClick={() => setModel(m)}
                      className={`rounded-md px-2 py-0.5 text-xs transition-colors ${
                        model === m
                          ? 'bg-teal-500 text-white'
                          : 'bg-bg-tertiary text-text-secondary hover:bg-teal-500/10 hover:text-teal-600'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className='mb-1.5 block text-sm font-medium text-text-primary'>API Key</label>
              <div className='relative'>
                <input
                  type={showKey ? 'text' : 'password'}
                  value={key}
                  onChange={e => setKey(e.target.value)}
                  placeholder='sk-...'
                  className='w-full rounded-lg border border-border-medium px-3 py-2 pr-10 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none'
                />
                <button
                  type='button'
                  onClick={() => setShowKey(!showKey)}
                  className='absolute right-2 top-1/2 -translate-y-1/2 p-1 text-text-muted hover:text-text-primary transition-colors'
                  aria-label={showKey ? 'Hide API Key' : 'Show API Key'}
                >
                  {showKey ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-4 w-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-4 w-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
                      />
                      <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className='mb-1.5 block text-sm font-medium text-text-primary'>
                Message <span className='font-normal text-text-muted'>(optional)</span>
              </label>
              <input
                type='text'
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='Say hello in one sentence.'
                className='w-full rounded-lg border border-border-medium px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none'
              />
            </div>

            {/* Timeout */}
            <div>
              <label className='mb-1.5 block text-sm font-medium text-text-primary'>Timeout</label>
              <div className='flex items-center gap-2'>
                <input
                  type='number'
                  value={timeout}
                  onChange={e => setTimeout_(Math.max(10, Number(e.target.value) || 60))}
                  min={10}
                  step={10}
                  className='w-24 rounded-lg border border-border-medium px-3 py-2 text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none'
                />
                <span className='text-sm text-text-muted'>seconds</span>
              </div>
            </div>

            {loading ? (
              <button
                onClick={handleStop}
                className='w-full rounded-lg bg-error px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:opacity-90'
              >
                Stop
              </button>
            ) : (
              <button
                onClick={handleSend}
                disabled={!canSend}
                className='w-full rounded-lg bg-teal-500 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50'
              >
                Send Test
              </button>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className='rounded-xl border border-error/30 bg-error/5 p-4'>
              <p className='text-sm font-medium text-error'>Error</p>
              <p className='mt-1 text-sm text-error/80'>{error}</p>
            </div>
          )}

          {/* Streaming Output */}
          {streamText && (
            <div className='rounded-xl border border-border-light bg-bg-primary p-6 shadow-sm space-y-3'>
              <div className='flex items-center justify-between text-sm'>
                <div className='flex items-center gap-4'>
                  {streamLatency !== null && <span className='text-text-muted'>Latency: {streamLatency}ms</span>}
                  {!streamDone && (
                    <span className='inline-flex items-center gap-1.5 text-xs text-teal-600'>
                      <span className='inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500' />
                      Streaming...
                    </span>
                  )}
                  {streamDone && <span className='text-xs text-success'>Done</span>}
                </div>
                <div className='flex rounded-md border border-border-light'>
                  <button
                    type='button'
                    onClick={() => setViewMode('rendered')}
                    className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                      viewMode === 'rendered' ? 'bg-teal-500 text-white' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    Rendered
                  </button>
                  <button
                    type='button'
                    onClick={() => setViewMode('raw')}
                    className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                      viewMode === 'raw' ? 'bg-teal-500 text-white' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    Raw
                  </button>
                </div>
              </div>

              {viewMode === 'rendered' ? (
                <div className='rounded-lg bg-text-primary text-text-inverse p-4 text-sm leading-relaxed whitespace-pre-wrap'>
                  {streamText}
                  {!streamDone && (
                    <span className='inline-block w-2 h-4 ml-0.5 bg-teal-400 animate-pulse align-text-bottom' />
                  )}
                </div>
              ) : (
                <pre className='overflow-auto rounded-lg bg-text-primary text-text-inverse p-4 text-xs leading-relaxed max-h-96'>
                  {rawLines.join('\n')}
                  {!streamDone && (
                    <span className='inline-block w-2 h-3 ml-0.5 bg-teal-400 animate-pulse align-text-bottom' />
                  )}
                </pre>
              )}
            </div>
          )}

          {/* Non-streaming Result */}
          {!streamText && result && (
            <div className='rounded-xl border border-border-light bg-bg-primary p-6 shadow-sm space-y-3'>
              <div className='flex items-center gap-4 text-sm'>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    result.status >= 200 && result.status < 300
                      ? 'bg-success/10 text-success'
                      : 'bg-error/10 text-error'
                  }`}
                >
                  {result.status} {result.statusText}
                </span>
                <span className='text-text-muted'>{result.latency}ms</span>
              </div>
              <pre className='overflow-auto rounded-lg bg-text-primary text-text-inverse p-4 text-xs leading-relaxed'>
                {JSON.stringify(result.data, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
