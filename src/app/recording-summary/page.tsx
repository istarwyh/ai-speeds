'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type SpeechRecognitionAlternative = {
  transcript: string;
};

type SpeechRecognitionResult = {
  isFinal: boolean;
  0: SpeechRecognitionAlternative;
};

type SpeechRecognitionResultList = {
  length: number;
  item(index: number): SpeechRecognitionResult;
};

type SpeechRecognitionEventLike = {
  resultIndex: number;
  results: SpeechRecognitionResultList;
};

type SpeechRecognitionErrorEventLike = {
  error: string;
};

type SpeechRecognitionLike = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

type RecordingSummaryResponse = {
  summary?: string;
  error?: string;
};

const DEFAULT_IDENTITY = '用户';
const DEFAULT_PROMPT = '请根据我的身份和要求总结录音内容，输出概览、关键要点、重要细节、行动项/待办、后续建议。';
const PROMPT_TEMPLATES = [
  {
    label: '通用总结',
    identity: '用户',
    prompt: DEFAULT_PROMPT,
  },
  {
    label: '教师课堂',
    identity: '教师',
    prompt: '请总结课堂录音，输出课程主题、主要知识点、课堂活动、学生表现、作业/待办。',
  },
  {
    label: '产品会议',
    identity: '产品经理',
    prompt: '请总结会议录音，输出讨论背景、关键决策、用户问题、行动项、风险与后续跟进。',
  },
  {
    label: '采访笔记',
    identity: '采访者',
    prompt: '请整理采访录音，输出受访者观点、关键引述、重要细节、待追问问题、可用素材。',
  },
  {
    label: '学习笔记',
    identity: '学生',
    prompt: '请整理学习录音，输出主题概览、核心概念、例子与细节、疑问点、复习待办。',
  },
] as const;
const SUPPORT_CHECKING = 'checking';
const SUPPORT_SUPPORTED = 'supported';
const SUPPORT_UNSUPPORTED = 'unsupported';

type SpeechSupportStatus = typeof SUPPORT_CHECKING | typeof SUPPORT_SUPPORTED | typeof SUPPORT_UNSUPPORTED;

type SpeechRecognitionWindow = {
  SpeechRecognition?: SpeechRecognitionConstructor;
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
};

function getSpeechRecognitionConstructor(): SpeechRecognitionConstructor | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const speechWindow = window as unknown as SpeechRecognitionWindow;

  return speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition;
}

function getErrorMessage(error: string) {
  if (error === 'not-allowed' || error === 'service-not-allowed') {
    return '麦克风权限被拒绝。你仍然可以手动粘贴或编辑转写文本。';
  }

  if (error === 'no-speech') {
    return '没有检测到清晰语音，请靠近麦克风后重试。';
  }

  if (error === 'network') {
    return '语音识别网络服务暂时不可用，请稍后重试或手动输入。';
  }

  return '语音识别中断了，请重试或手动编辑转写文本。';
}

export default function RecordingSummaryPage() {
  const [speechSupport, setSpeechSupport] = useState<SpeechSupportStatus>(SUPPORT_CHECKING);
  const [identity, setIdentity] = useState(DEFAULT_IDENTITY);
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const recognitionActiveRef = useRef(false);
  const stopRequestedRef = useRef(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    setSpeechSupport(getSpeechRecognitionConstructor() ? SUPPORT_SUPPORTED : SUPPORT_UNSUPPORTED);

    return () => {
      mountedRef.current = false;
      stopRequestedRef.current = true;
      recognitionActiveRef.current = false;
      recognitionRef.current?.stop();
    };
  }, []);

  const stopListening = () => {
    stopRequestedRef.current = true;
    recognitionActiveRef.current = false;
    recognitionRef.current?.stop();
    setIsListening(false);
    setInterimTranscript('');
  };

  const startListening = () => {
    if (recognitionActiveRef.current) {
      return;
    }

    recognitionActiveRef.current = true;
    stopRequestedRef.current = false;
    setError('');
    setInterimTranscript('');

    const Recognition = getSpeechRecognitionConstructor();
    if (!Recognition) {
      recognitionActiveRef.current = false;
      setSpeechSupport(SUPPORT_UNSUPPORTED);
      setError('当前浏览器不支持 Web Speech API。你可以直接粘贴录音转写文本。');
      return;
    }

    try {
      const recognition = new Recognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'zh-CN';

      recognition.onresult = event => {
        let finalText = '';
        let interimText = '';

        for (let index = event.resultIndex; index < event.results.length; index += 1) {
          const result = event.results.item(index);
          const text = result[0].transcript;

          if (result.isFinal) {
            finalText += text;
          } else {
            interimText += text;
          }
        }

        if (finalText) {
          setTranscript(current => `${current}${current ? '\n' : ''}${finalText.trim()}`);
        }

        setInterimTranscript(interimText.trim());
      };

      recognition.onerror = event => {
        recognitionActiveRef.current = false;
        setError(getErrorMessage(event.error));
        setIsListening(false);
      };

      recognition.onend = () => {
        const shouldRestart = mountedRef.current && recognitionActiveRef.current && !stopRequestedRef.current;
        recognitionActiveRef.current = false;

        if (!mountedRef.current) {
          return;
        }

        setInterimTranscript('');

        if (shouldRestart) {
          void startListening();
          return;
        }

        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
      setIsListening(true);
    } catch {
      if (!mountedRef.current || !recognitionActiveRef.current || stopRequestedRef.current) {
        recognitionActiveRef.current = false;
        return;
      }

      recognitionActiveRef.current = false;
      setError('无法获取麦克风权限。你仍然可以手动粘贴或编辑转写文本。');
      setIsListening(false);
    }
  };

  const generateSummary = async () => {
    const cleanTranscript = transcript.trim();
    if (!cleanTranscript) {
      setError('请先录音转写，或手动粘贴录音转写文本。');
      return;
    }

    setError('');
    setSummary('');
    setIsGenerating(true);

    try {
      const response = await fetch('/api/recording-summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identity, prompt, transcript: cleanTranscript }),
      });
      const data = (await response.json().catch(() => null)) as RecordingSummaryResponse | null;

      if (!response.ok || !data?.summary) {
        setError(data?.error ?? '总结生成失败，请稍后重试。');
        return;
      }

      setSummary(data.summary);
    } catch {
      setError('无法连接总结服务，请检查网络后重试。');
    } finally {
      setIsGenerating(false);
    }
  };

  const speechStatusText =
    speechSupport === SUPPORT_CHECKING
      ? '正在检测浏览器语音识别能力…'
      : speechSupport === SUPPORT_SUPPORTED
        ? '浏览器支持实时转写，音频不会上传到服务器。'
        : '当前浏览器不支持实时转写，请手动粘贴或编辑转写文本。';

  return (
    <main className='min-h-screen overflow-hidden bg-bg-warm text-text-primary'>
      <div className='pointer-events-none fixed inset-0 opacity-80'>
        <div className='absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl' />
        <div className='absolute right-[-10rem] top-24 h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-3xl' />
        <div className='absolute bottom-[-16rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary-light/20 blur-3xl' />
      </div>

      <section className='relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-6 sm:px-8 lg:px-10 lg:py-10'>
        <header className='flex flex-col gap-6 rounded-[2rem] border border-floating-border bg-floating-surface p-6 shadow-floating backdrop-blur-floating lg:flex-row lg:items-end lg:justify-between lg:p-8'>
          <div className='max-w-3xl'>
            <Link
              href='/'
              className='inline-flex items-center rounded-pill border border-floating-border bg-floating-surface px-4 py-2 text-sm font-semibold text-text-secondary shadow-floating backdrop-blur-floating transition hover:translate-y-lift hover:border-primary hover:bg-floating-surface-strong hover:text-text-primary active:scale-press'
            >
              返回首页
            </Link>
            <div className='mt-8 inline-flex items-center gap-2 rounded-pill border border-floating-border bg-floating-surface-strong px-4 py-2 text-sm font-semibold text-text-secondary shadow-floating'>
              <span className={`h-2 w-2 rounded-full ${isListening ? 'bg-error' : 'bg-primary'} shadow-primary-glow`} />
              Recording Summary
            </div>
            <h1 className='mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-7xl'>
              把录音整理成贴合身份的总结
            </h1>
            <p className='mt-5 max-w-2xl text-lg leading-8 text-text-secondary'>
              使用浏览器实时转写录音内容，保留可编辑文本，再由 Agnes 按你的身份和提示词生成结构化总结。
            </p>
          </div>
          <div className='grid gap-3 rounded-[1.5rem] border border-floating-border bg-floating-surface-strong p-4 text-sm text-text-secondary shadow-floating lg:w-80'>
            <p className='font-semibold text-text-primary'>通用输出模块</p>
            <div className='grid grid-cols-2 gap-2'>
              {['概览', '关键要点', '重要细节', '行动项/待办', '后续建议'].map(item => (
                <span key={item} className='rounded-pill bg-bg-secondary px-3 py-2 text-center font-semibold'>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className='grid gap-6 lg:grid-cols-[0.95fr_1.05fr]'>
          <section className='rounded-[2rem] border border-floating-border bg-floating-surface p-5 shadow-floating backdrop-blur-floating sm:p-6 lg:p-8'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <div>
                <p className='text-sm font-bold uppercase tracking-[0.24em] text-primary'>Step 01</p>
                <h2 className='mt-2 text-2xl font-black tracking-[-0.03em]'>录音与转写</h2>
              </div>
              <span className='rounded-pill border border-floating-border bg-floating-surface-strong px-4 py-2 text-sm font-semibold text-text-secondary'>
                {isListening ? '正在听写' : '可手动编辑'}
              </span>
            </div>

            <div className='mt-6 rounded-[1.5rem] border border-floating-border bg-floating-surface-strong p-4 text-sm leading-6 text-text-secondary shadow-floating'>
              {speechStatusText}
            </div>
            <div className='mt-3 rounded-[1.5rem] border border-warning/30 bg-warning/10 p-4 text-sm leading-6 text-text-secondary'>
              浏览器实时转写适合短到中等录音，超过 1 小时无法保证稳定；长录音建议分段转写，或等待后续服务端
              ASR/音频上传能力。
            </div>

            {error && (
              <div className='mt-4 rounded-[1.5rem] border border-error/30 bg-error/10 p-4 text-sm font-semibold leading-6 text-text-primary'>
                {error}
              </div>
            )}

            <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
              <button
                type='button'
                onClick={isListening ? stopListening : startListening}
                disabled={speechSupport === SUPPORT_CHECKING}
                className='inline-flex items-center justify-center rounded-pill border border-floating-border bg-primary px-6 py-3 font-bold text-primary-foreground shadow-floating transition hover:translate-y-lift hover:border-primary-dark hover:bg-primary-dark active:scale-press disabled:cursor-not-allowed disabled:opacity-60'
              >
                {isListening ? '停止转写' : '开始转写'}
              </button>
              <button
                type='button'
                onClick={() => {
                  setTranscript('');
                  setInterimTranscript('');
                  setSummary('');
                }}
                className='inline-flex items-center justify-center rounded-pill border border-floating-border bg-floating-surface px-6 py-3 font-bold text-text-primary shadow-floating backdrop-blur-floating transition hover:translate-y-lift hover:border-primary hover:bg-floating-surface-strong active:scale-press'
              >
                清空文本
              </button>
            </div>

            <label className='mt-8 block text-sm font-bold text-text-primary' htmlFor='transcript'>
              录音转写文本
            </label>
            <textarea
              id='transcript'
              value={transcript}
              onChange={event => setTranscript(event.target.value)}
              placeholder='开始转写后文本会出现在这里；也可以直接粘贴已有录音记录。'
              className='mt-3 min-h-80 w-full resize-y rounded-[1.5rem] border border-floating-border bg-floating-surface-strong p-4 text-base leading-7 text-text-primary shadow-inner outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-4 focus:ring-primary/10'
            />
            {interimTranscript && (
              <div className='mt-3 rounded-[1.25rem] border border-accent/30 bg-accent/10 p-4 text-sm leading-6 text-text-secondary'>
                实时识别中：{interimTranscript}
              </div>
            )}
          </section>

          <section className='rounded-[2rem] border border-floating-border bg-floating-surface p-5 shadow-floating backdrop-blur-floating sm:p-6 lg:p-8'>
            <div>
              <p className='text-sm font-bold uppercase tracking-[0.24em] text-primary'>Step 02</p>
              <h2 className='mt-2 text-2xl font-black tracking-[-0.03em]'>总结提示词</h2>
            </div>

            <div className='mt-6 grid gap-5'>
              <div>
                <p className='text-sm font-bold text-text-primary'>快速模板</p>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {PROMPT_TEMPLATES.map(template => (
                    <button
                      key={template.label}
                      type='button'
                      onClick={() => {
                        setIdentity(template.identity);
                        setPrompt(template.prompt);
                      }}
                      className='rounded-pill border border-floating-border bg-floating-surface px-4 py-2 text-sm font-semibold text-text-primary shadow-floating backdrop-blur-floating transition hover:translate-y-lift hover:border-primary hover:bg-floating-surface-strong active:scale-press'
                    >
                      {template.label}
                    </button>
                  ))}
                </div>
              </div>

              <label className='block'>
                <span className='text-sm font-bold text-text-primary'>身份</span>
                <input
                  value={identity}
                  onChange={event => setIdentity(event.target.value)}
                  className='mt-3 w-full rounded-pill border border-floating-border bg-floating-surface-strong px-5 py-3 text-base font-semibold text-text-primary shadow-inner outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-4 focus:ring-primary/10'
                  placeholder='教师 / 产品经理 / 采访者 / 学生 / 咨询师'
                />
              </label>

              <label className='block'>
                <span className='text-sm font-bold text-text-primary'>总结提示词</span>
                <textarea
                  value={prompt}
                  onChange={event => setPrompt(event.target.value)}
                  className='mt-3 min-h-40 w-full resize-y rounded-[1.5rem] border border-floating-border bg-floating-surface-strong p-4 text-base leading-7 text-text-primary shadow-inner outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-4 focus:ring-primary/10'
                  placeholder={DEFAULT_PROMPT}
                />
              </label>
            </div>

            <button
              type='button'
              onClick={generateSummary}
              disabled={isGenerating || !transcript.trim()}
              className='mt-6 inline-flex w-full items-center justify-center rounded-pill border border-floating-border bg-text-primary px-6 py-3 font-black text-text-inverse shadow-floating transition hover:translate-y-lift hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-press disabled:cursor-not-allowed disabled:opacity-60'
            >
              {isGenerating ? '正在生成总结…' : '生成录音总结'}
            </button>

            <div className='mt-8 min-h-96 rounded-[1.75rem] border border-floating-border bg-floating-surface-strong p-5 shadow-floating'>
              <div className='flex items-center justify-between gap-4'>
                <h3 className='text-lg font-black tracking-[-0.02em]'>Agnes 总结</h3>
                <span className='rounded-pill bg-bg-secondary px-3 py-1 text-xs font-bold text-text-secondary'>
                  不返回上游原始响应
                </span>
              </div>

              {summary ? (
                <div className='mt-5 whitespace-pre-wrap text-base leading-8 text-text-primary'>{summary}</div>
              ) : (
                <div className='mt-16 text-center text-text-secondary'>
                  <div className='mx-auto h-16 w-16 rounded-full border border-floating-border bg-bg-warm shadow-floating' />
                  <p className='mt-5 font-semibold'>生成后，结构化录音总结会显示在这里。</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
