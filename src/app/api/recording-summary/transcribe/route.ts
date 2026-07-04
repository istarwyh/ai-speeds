import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const DEFAULT_ASR_MODEL = 'whisper-1';
const DEFAULT_ASR_TRANSCRIPTIONS_PATH = '/audio/transcriptions';
const MAX_AUDIO_SIZE_BYTES = 50 * 1024 * 1024;

type AsrResponse = {
  text?: unknown;
  transcript?: unknown;
};

function joinUrl(baseUrl: string, path: string) {
  return `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

function getTranscript(data: AsrResponse | null) {
  if (typeof data?.text === 'string') {
    return data.text.trim();
  }

  if (typeof data?.transcript === 'string') {
    return data.transcript.trim();
  }

  return '';
}

export async function POST(request: NextRequest) {
  const baseUrl = process.env['ASR_BASE_URL'] ?? '';
  const key = process.env['ASR_API_KEY'] ?? '';
  const model = process.env['ASR_MODEL'] ?? DEFAULT_ASR_MODEL;
  const transcriptionsPath = process.env['ASR_TRANSCRIPTIONS_PATH'] ?? DEFAULT_ASR_TRANSCRIPTIONS_PATH;

  if (!baseUrl || !key) {
    return NextResponse.json({ error: 'ASR transcription service is not configured yet.' }, { status: 501 });
  }

  let formData: globalThis.FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid audio upload request.' }, { status: 400 });
  }

  const audio = formData.get('audio');
  if (!audio || typeof audio === 'string') {
    return NextResponse.json({ error: 'Please upload an audio file.' }, { status: 400 });
  }

  if (audio.size > MAX_AUDIO_SIZE_BYTES) {
    return NextResponse.json({ error: 'Audio file is too large for transcription.' }, { status: 413 });
  }

  const upstreamForm = new globalThis.FormData();
  upstreamForm.set('file', audio, audio.name || 'recording.webm');
  upstreamForm.set('model', model);

  const language = formData.get('language');
  if (typeof language === 'string' && language.trim()) {
    upstreamForm.set('language', language.trim());
  }

  try {
    const response = await fetch(joinUrl(baseUrl, transcriptionsPath), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
      },
      body: upstreamForm,
      signal: AbortSignal.timeout(120_000),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'ASR transcription service is temporarily unavailable.' }, { status: 502 });
    }

    const data = (await response.json().catch(() => null)) as AsrResponse | null;
    const transcript = getTranscript(data);

    if (!transcript) {
      return NextResponse.json({ error: 'ASR service returned an empty transcript.' }, { status: 502 });
    }

    return NextResponse.json({ transcript });
  } catch (error) {
    const message =
      error instanceof Error && error.name === 'TimeoutError'
        ? 'ASR transcription request timed out.'
        : 'Unable to transcribe audio right now.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
