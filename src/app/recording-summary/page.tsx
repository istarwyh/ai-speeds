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

type AudioTrackLike = {
  stop(): void;
};

type AudioStreamLike = {
  getTracks(): AudioTrackLike[];
};

type MediaRecorderDataEventLike = {
  data: globalThis.Blob;
};

type MediaRecorderLike = {
  mimeType: string;
  state: string;
  ondataavailable: ((event: MediaRecorderDataEventLike) => void) | null;
  onerror: (() => void) | null;
  onstop: (() => void) | null;
  start(timeslice?: number): void;
  stop(): void;
};

type MediaRecorderConstructor = {
  new (stream: AudioStreamLike, options?: { mimeType?: string }): MediaRecorderLike;
  isTypeSupported?: (mimeType: string) => boolean;
};

type RecordingBrowserWindow = {
  MediaRecorder?: MediaRecorderConstructor;
  SpeechRecognition?: SpeechRecognitionConstructor;
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
};

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
const AUDIO_MIME_TYPES = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4'] as const;

type BrowserSupportStatus = typeof SUPPORT_CHECKING | typeof SUPPORT_SUPPORTED | typeof SUPPORT_UNSUPPORTED;

function getRecordingWindow(): RecordingBrowserWindow | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }

  return window as unknown as RecordingBrowserWindow;
}

function getSpeechRecognitionConstructor(): SpeechRecognitionConstructor | undefined {
  const recordingWindow = getRecordingWindow();

  return recordingWindow?.SpeechRecognition ?? recordingWindow?.webkitSpeechRecognition;
}

function getMediaRecorderConstructor(): MediaRecorderConstructor | undefined {
  return getRecordingWindow()?.MediaRecorder;
}

function getPreferredMimeType(Recorder: MediaRecorderConstructor) {
  return AUDIO_MIME_TYPES.find(mimeType => Recorder.isTypeSupported?.(mimeType));
}

function getErrorMessage(error: string) {
  if (error === 'not-allowed' || error === 'service-not-allowed') {
    return '草稿转写权限被拒绝。录音仍会保留，你可以停止后手动整理文字。';
  }

  if (error === 'no-speech') {
    return '草稿转写没有检测到清晰语音，但录音仍在继续。';
  }

  if (error === 'network') {
    return '浏览器草稿转写服务暂时不可用，录音仍会保留。';
  }

  return '草稿转写中断了，录音仍会保留。';
}

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

export default function RecordingSummaryPage() {
  const [recorderSupport, setRecorderSupport] = useState<BrowserSupportStatus>(SUPPORT_CHECKING);
  const [speechSupport, setSpeechSupport] = useState<BrowserSupportStatus>(SUPPORT_CHECKING);
  const [identity, setIdentity] = useState(DEFAULT_IDENTITY);
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT);
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [summary, setSummary] = useState('');
  const [error, setError] = useState('');
  const [draftNotice, setDraftNotice] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [audioUrl, setAudioUrl] = useState('');
  const [audioMimeType, setAudioMimeType] = useState('');
  const recorderRef = useRef<MediaRecorderLike | null>(null);
  const audioChunksRef = useRef<globalThis.Blob[]>([]);
  const audioUrlRef = useRef('');
  const mediaStreamRef = useRef<AudioStreamLike | null>(null);
  const recordingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const recordingActiveRef = useRef(false);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const recognitionActiveRef = useRef(false);
  const stopRequestedRef = useRef(false);
  const mountedRef = useRef(true);

  const clearRecordingTimer = () => {
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }
  };

  const stopMediaStream = () => {
    mediaStreamRef.current?.getTracks().forEach(track => track.stop());
    mediaStreamRef.current = null;
  };

  const revokeAudioUrl = () => {
    if (audioUrlRef.current) {
      globalThis.URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = '';
    }
  };

  const stopDraftTranscription = () => {
    stopRequestedRef.current = true;
    recognitionActiveRef.current = false;
    recognitionRef.current?.stop();
    setInterimTranscript('');
  };

  useEffect(() => {
    setRecorderSupport(getMediaRecorderConstructor() ? SUPPORT_SUPPORTED : SUPPORT_UNSUPPORTED);
    setSpeechSupport(getSpeechRecognitionConstructor() ? SUPPORT_SUPPORTED : SUPPORT_UNSUPPORTED);

    return () => {
      mountedRef.current = false;
      recordingActiveRef.current = false;
      stopRequestedRef.current = true;
      recognitionActiveRef.current = false;
      recognitionRef.current?.stop();
      clearRecordingTimer();

      if (recorderRef.current && recorderRef.current.state !== 'inactive') {
        recorderRef.current.stop();
      }

      stopMediaStream();
      revokeAudioUrl();
    };
  }, []);

  const startDraftTranscription = () => {
    if (recognitionActiveRef.current) {
      return;
    }

    recognitionActiveRef.current = true;
    stopRequestedRef.current = false;
    setInterimTranscript('');
    setDraftNotice('');

    const Recognition = getSpeechRecognitionConstructor();
    if (!Recognition) {
      recognitionActiveRef.current = false;
      setSpeechSupport(SUPPORT_UNSUPPORTED);
      setDraftNotice('当前浏览器不支持草稿转写。录音完成后可以播放音频并手动整理文字。');
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
        setDraftNotice(getErrorMessage(event.error));
      };

      recognition.onend = () => {
        const shouldRestart =
          mountedRef.current && recordingActiveRef.current && recognitionActiveRef.current && !stopRequestedRef.current;
        recognitionActiveRef.current = false;

        if (!mountedRef.current) {
          return;
        }

        setInterimTranscript('');

        if (shouldRestart) {
          startDraftTranscription();
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch {
      recognitionActiveRef.current = false;
      setDraftNotice('草稿转写无法启动。录音完成后可以播放音频并手动整理文字。');
    }
  };

  const stopRecording = () => {
    recordingActiveRef.current = false;
    stopDraftTranscription();
    clearRecordingTimer();

    if (recorderRef.current && recorderRef.current.state !== 'inactive') {
      recorderRef.current.stop();
      return;
    }

    stopMediaStream();
    setIsRecording(false);
  };

  const startRecording = async () => {
    if (recordingActiveRef.current || isRecording) {
      return;
    }

    const Recorder = getMediaRecorderConstructor();
    if (!Recorder || !navigator.mediaDevices?.getUserMedia) {
      setRecorderSupport(SUPPORT_UNSUPPORTED);
      setError('当前浏览器不支持页面录音。你可以使用系统录音工具后粘贴整理好的文字。');
      return;
    }

    recordingActiveRef.current = true;
    setError('');
    setDraftNotice('');
    setSummary('');
    setInterimTranscript('');
    setRecordingSeconds(0);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      if (!mountedRef.current || !recordingActiveRef.current) {
        stream.getTracks().forEach(track => track.stop());
        recordingActiveRef.current = false;
        return;
      }

      revokeAudioUrl();
      setAudioUrl('');
      setAudioMimeType('');
      audioChunksRef.current = [];
      mediaStreamRef.current = stream;

      const mimeType = getPreferredMimeType(Recorder);
      const recorder = mimeType ? new Recorder(stream, { mimeType }) : new Recorder(stream);
      recorderRef.current = recorder;

      recorder.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onerror = () => {
        if (!mountedRef.current) {
          return;
        }

        setError('录音中断了，请保存已有内容后重试。');
        stopRecording();
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: recorder.mimeType || mimeType || 'audio/webm' });
        stopMediaStream();
        clearRecordingTimer();
        recorderRef.current = null;
        recordingActiveRef.current = false;

        if (!mountedRef.current) {
          return;
        }

        setIsRecording(false);
        setAudioMimeType(audioBlob.type || 'audio/webm');

        if (audioBlob.size > 0) {
          const nextAudioUrl = globalThis.URL.createObjectURL(audioBlob);
          audioUrlRef.current = nextAudioUrl;
          setAudioUrl(nextAudioUrl);
        }
      };

      recorder.start(1000);
      setIsRecording(true);
      recordingTimerRef.current = setInterval(() => {
        setRecordingSeconds(seconds => seconds + 1);
      }, 1000);
      startDraftTranscription();
    } catch {
      if (!mountedRef.current || !recordingActiveRef.current) {
        recordingActiveRef.current = false;
        return;
      }

      recordingActiveRef.current = false;
      setError('无法获取麦克风权限。你可以使用系统录音工具后粘贴整理好的文字。');
      setIsRecording(false);
      clearRecordingTimer();
      stopMediaStream();
    }
  };

  const discardActiveRecording = () => {
    recordingActiveRef.current = false;
    stopDraftTranscription();
    clearRecordingTimer();

    if (recorderRef.current) {
      recorderRef.current.ondataavailable = null;
      recorderRef.current.onerror = null;
      recorderRef.current.onstop = null;

      if (recorderRef.current.state !== 'inactive') {
        recorderRef.current.stop();
      }

      recorderRef.current = null;
    }

    stopMediaStream();
    setIsRecording(false);
  };

  const clearContent = () => {
    if (isRecording) {
      discardActiveRecording();
    }

    revokeAudioUrl();
    audioChunksRef.current = [];
    setAudioUrl('');
    setAudioMimeType('');
    setRecordingSeconds(0);
    setTranscript('');
    setInterimTranscript('');
    setSummary('');
    setDraftNotice('');
    setError('');
  };

  const generateSummary = async () => {
    const cleanTranscript = transcript.trim();
    if (isRecording) {
      setError('请先停止录音，再整理文字并生成总结。');
      return;
    }

    if (!cleanTranscript) {
      setError('请先停止录音后整理草稿转写，或手动粘贴录音文字。');
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

  const recorderStatusText =
    recorderSupport === SUPPORT_CHECKING
      ? '正在检测浏览器录音能力…'
      : recorderSupport === SUPPORT_SUPPORTED
        ? '录音会先保存在当前页面，停止后可播放或下载；不会自动上传到本服务。'
        : '当前浏览器不支持页面录音，请使用系统录音工具后粘贴整理好的文字。';
  const draftStatusText =
    speechSupport === SUPPORT_CHECKING
      ? '正在检测草稿转写能力…'
      : speechSupport === SUPPORT_SUPPORTED
        ? '录音时会同步尝试生成 Web Speech 草稿；它只是辅助，最终以你编辑后的文字为准。'
        : '当前浏览器不支持草稿转写，录音完成后可播放音频并手动整理文字。';

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
              <span className={`h-2 w-2 rounded-full ${isRecording ? 'bg-error' : 'bg-primary'} shadow-primary-glow`} />
              Recording Summary
            </div>
            <h1 className='mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-7xl'>
              先录音，再整理成贴合身份的总结
            </h1>
            <p className='mt-5 max-w-2xl text-lg leading-8 text-text-secondary'>
              先把音频保存在浏览器里，停止后播放、下载、整理草稿文字，再由 Agnes 按你的身份和提示词生成结构化总结。
            </p>
          </div>
          <div className='grid gap-3 rounded-[1.5rem] border border-floating-border bg-floating-surface-strong p-4 text-sm text-text-secondary shadow-floating lg:w-80'>
            <p className='font-semibold text-text-primary'>录音后处理流程</p>
            <div className='grid gap-2'>
              {['本地录音', '播放/下载备份', '整理草稿文字', 'Agnes 生成总结'].map(item => (
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
                <h2 className='mt-2 text-2xl font-black tracking-[-0.03em]'>先录音</h2>
              </div>
              <span className='rounded-pill border border-floating-border bg-floating-surface-strong px-4 py-2 text-sm font-semibold text-text-secondary'>
                {isRecording ? `录音中 ${formatDuration(recordingSeconds)}` : audioUrl ? '已保存音频' : '等待录音'}
              </span>
            </div>

            <div className='mt-6 grid gap-3 rounded-[1.5rem] border border-floating-border bg-floating-surface-strong p-4 text-sm leading-6 text-text-secondary shadow-floating'>
              <p>{recorderStatusText}</p>
              <p>{draftStatusText}</p>
            </div>
            <div className='mt-3 rounded-[1.5rem] border border-warning/30 bg-warning/10 p-4 text-sm leading-6 text-text-secondary'>
              30 分钟内的页面录音更适合当前版本；长录音请保持页面前台运行，并在停止后下载音频备份。
            </div>
            <details className='mt-3 rounded-[1.25rem] border border-floating-border bg-floating-surface/70 p-3 text-xs leading-5 text-text-muted'>
              <summary className='cursor-pointer font-semibold text-text-secondary'>高级：ASR 接口预留</summary>
              <p className='mt-2'>
                当前不会自动上传音频；后续可在服务端配置 ASR 接口，将录音发送到
                <code className='mx-1 rounded bg-bg-secondary px-1 py-0.5'>/api/recording-summary/transcribe</code>
                后返回转写文本。
              </p>
            </details>

            {error && (
              <div className='mt-4 rounded-[1.5rem] border border-error/30 bg-error/10 p-4 text-sm font-semibold leading-6 text-text-primary'>
                {error}
              </div>
            )}
            {draftNotice && (
              <div className='mt-4 rounded-[1.5rem] border border-accent/30 bg-accent/10 p-4 text-sm leading-6 text-text-secondary'>
                {draftNotice}
              </div>
            )}

            <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
              <button
                type='button'
                onClick={isRecording ? stopRecording : startRecording}
                disabled={recorderSupport === SUPPORT_CHECKING}
                className='inline-flex items-center justify-center rounded-pill border border-floating-border bg-primary px-6 py-3 font-bold text-primary-foreground shadow-floating transition hover:translate-y-lift hover:border-primary-dark hover:bg-primary-dark active:scale-press disabled:cursor-not-allowed disabled:opacity-60'
              >
                {isRecording ? '停止录音' : '开始录音'}
              </button>
              <button
                type='button'
                onClick={clearContent}
                className='inline-flex items-center justify-center rounded-pill border border-floating-border bg-floating-surface px-6 py-3 font-bold text-text-primary shadow-floating backdrop-blur-floating transition hover:translate-y-lift hover:border-primary hover:bg-floating-surface-strong active:scale-press'
              >
                清空内容
              </button>
            </div>

            {audioUrl && (
              <div className='mt-6 rounded-[1.5rem] border border-floating-border bg-floating-surface-strong p-4 shadow-floating'>
                <p className='text-sm font-bold text-text-primary'>录音已保存</p>
                <audio className='mt-3 w-full' controls src={audioUrl} />
                <div className='mt-3 flex flex-wrap items-center gap-3 text-sm text-text-secondary'>
                  <a
                    href={audioUrl}
                    download={`recording-summary.${audioMimeType.includes('mp4') ? 'm4a' : 'webm'}`}
                    className='rounded-pill border border-floating-border bg-floating-surface px-4 py-2 font-semibold text-text-primary shadow-floating transition hover:translate-y-lift hover:border-primary hover:bg-floating-surface-strong active:scale-press'
                  >
                    下载音频备份
                  </a>
                  <span>{audioMimeType || 'audio/webm'}</span>
                </div>
              </div>
            )}

            <label className='mt-8 block text-sm font-bold text-text-primary' htmlFor='transcript'>
              停止后整理文字
            </label>
            <textarea
              id='transcript'
              value={transcript}
              onChange={event => setTranscript(event.target.value)}
              placeholder='录音时会尽量生成草稿转写；停止后请播放音频核对、补充或直接粘贴整理好的文字。'
              className='mt-3 min-h-80 w-full resize-y rounded-[1.5rem] border border-floating-border bg-floating-surface-strong p-4 text-base leading-7 text-text-primary shadow-inner outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-4 focus:ring-primary/10'
            />
            {interimTranscript && (
              <div className='mt-3 rounded-[1.25rem] border border-accent/30 bg-accent/10 p-4 text-sm leading-6 text-text-secondary'>
                草稿识别中：{interimTranscript}
              </div>
            )}
          </section>

          <section className='rounded-[2rem] border border-floating-border bg-floating-surface p-5 shadow-floating backdrop-blur-floating sm:p-6 lg:p-8'>
            <div>
              <p className='text-sm font-bold uppercase tracking-[0.24em] text-primary'>Step 02</p>
              <h2 className='mt-2 text-2xl font-black tracking-[-0.03em]'>整理并总结</h2>
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
              disabled={isGenerating || isRecording || !transcript.trim()}
              className='mt-6 inline-flex w-full items-center justify-center rounded-pill border border-floating-border bg-text-primary px-6 py-3 font-black text-text-inverse shadow-floating transition hover:translate-y-lift hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-press disabled:cursor-not-allowed disabled:opacity-60'
            >
              {isGenerating ? '正在生成总结…' : isRecording ? '停止录音后再总结' : '生成录音总结'}
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
                  <p className='mt-5 font-semibold'>停止录音并整理文字后，结构化总结会显示在这里。</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
