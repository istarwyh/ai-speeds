import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const AGNES_BASE_URL = 'https://apihub.agnes-ai.com/v1';
const AGNES_MODEL = 'agnes-2.0-flash';
const DEFAULT_IDENTITY = '用户';
const DEFAULT_PROMPT = '请根据我的身份和要求总结录音内容，输出概览、关键要点、重要细节、行动项/待办、后续建议。';
const MAX_TRANSCRIPT_LENGTH = 20_000;
const MAX_FIELD_LENGTH = 1_000;

type RecordingSummaryRequest = {
  identity?: unknown;
  prompt?: unknown;
  transcript?: unknown;
};

type AgnesCompletionResponse = {
  choices?: Array<{
    message?: {
      content?: unknown;
    };
  }>;
};

function normalizeText(value: unknown, fallback: string, maxLength: number) {
  if (typeof value !== 'string') {
    return fallback;
  }

  const trimmedValue = value.trim();
  if (!trimmedValue) {
    return fallback;
  }

  return trimmedValue.slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  let body: RecordingSummaryRequest;

  try {
    body = (await request.json()) as RecordingSummaryRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON request body.' }, { status: 400 });
  }

  try {
    const key = process.env['AGNES_API_KEY'] ?? '';
    if (!key) {
      return NextResponse.json({ error: 'Agnes summary service is not configured yet.' }, { status: 503 });
    }

    const identity = normalizeText(body.identity, DEFAULT_IDENTITY, MAX_FIELD_LENGTH);
    const prompt = normalizeText(body.prompt, DEFAULT_PROMPT, MAX_FIELD_LENGTH);
    const transcript = normalizeText(body.transcript, '', MAX_TRANSCRIPT_LENGTH);

    if (!transcript) {
      return NextResponse.json({ error: 'Please provide a transcript before generating a summary.' }, { status: 400 });
    }

    const response = await fetch(`${AGNES_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: AGNES_MODEL,
        max_tokens: 1600,
        stream: false,
        messages: [
          {
            role: 'system',
            content:
              'You generate concise recording summaries in Chinese. Choose the structure based on the identity and user prompt. For general recordings, use sections like 概览、关键要点、重要细节、行动项/待办、后续建议. Only use classroom sections such as 课程主题、主要知识点、课堂活动、学生表现、作业/待办 when the identity or prompt clearly involves teachers, classes, courses, or learning contexts.',
          },
          {
            role: 'user',
            content: `身份：${identity}\n\n总结要求：${prompt}\n\n录音转写：\n${transcript}`,
          },
        ],
      }),
      signal: AbortSignal.timeout(60_000),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Agnes summary service is temporarily unavailable.' }, { status: 502 });
    }

    const data = (await response.json().catch(() => null)) as AgnesCompletionResponse | null;
    const summary = data?.choices?.[0]?.message?.content;

    if (typeof summary !== 'string' || !summary.trim()) {
      return NextResponse.json({ error: 'Agnes returned an empty summary. Please try again.' }, { status: 502 });
    }

    return NextResponse.json({ summary: summary.trim() });
  } catch (error) {
    const message =
      error instanceof Error && error.name === 'TimeoutError'
        ? 'Agnes summary request timed out.'
        : 'Unable to generate summary right now.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
