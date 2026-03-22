import type { Provider } from '../types';

// === TYPE DEFINITIONS ===

interface ProviderConfig {
  defaultBaseUrl: string;
  modelMappings: Record<string, string>;
  commonModels?: readonly string[];
}

interface AnthropicTextContent {
  type: 'text';
  text: string;
}

interface AnthropicToolUse {
  type: 'tool_use';
  id: string;
  name: string;
  input: Record<string, unknown>;
}

interface AnthropicImageContent {
  type: 'image';
  source: {
    type: 'base64';
    media_type: string;
    data: string;
  };
}

interface AnthropicToolResultContent {
  type: 'tool_result';
  tool_use_id: string;
  content: string | Array<{ type: 'text'; text: string }>;
  is_error?: boolean;
}

type AnthropicContent = AnthropicTextContent | AnthropicToolUse | AnthropicImageContent | AnthropicToolResultContent;

interface AnthropicMessage {
  role: 'user' | 'assistant';
  content: string | AnthropicContent[];
}

interface AnthropicToolResult {
  type: 'tool_result';
  tool_use_id: string;
  content: string;
}

type AnthropicToolOrTextContent = AnthropicTextContent | AnthropicToolResult;

interface AnthropicToolMessage {
  role: 'tool';
  content: AnthropicToolOrTextContent[];
  tool_use_id?: string;
}

type AnthropicSystemMessage = {
  role: 'system';
  content: string;
};

interface AnthropicTool {
  name: string;
  description?: string;
  input_schema: {
    type: 'object';
    properties?: Record<string, unknown>;
    required?: string[];
  };
}

interface MessageCreateParamsBase {
  messages: (AnthropicMessage | AnthropicToolMessage | AnthropicSystemMessage)[];
  system?: string;
  model: string;
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  top_k?: number;
  metadata?: { user_id?: string };
  stop_sequences?: string[];
  stream?: boolean;
  tools?: AnthropicTool[];
  tool_choice?: ToolChoice;
}

type ToolChoice = 'none' | 'auto' | { type: 'function'; function: { name: string } };

interface OpenAIToolCall {
  id: string;
  type: 'function';
  function: {
    name: string;
    arguments: string;
  };
}

interface OpenAIMessage {
  role: 'user' | 'assistant' | 'tool' | 'system';
  content: string | null;
  tool_calls?: OpenAIToolCall[];
  tool_call_id?: string;
}

// === TYPE GUARDS ===

function isAnthropicContent(item: unknown): item is AnthropicContent {
  return (
    typeof item === 'object' &&
    item !== null &&
    'type' in item &&
    ['text', 'tool_use', 'image', 'tool_result'].includes((item as { type: string }).type)
  );
}

function isTextContent(item: unknown): item is AnthropicTextContent {
  return isAnthropicContent(item) && item.type === 'text';
}

function isImageContent(item: unknown): item is AnthropicImageContent {
  return isAnthropicContent(item) && item.type === 'image';
}

function isToolContent(item: unknown): item is AnthropicToolUse {
  return isAnthropicContent(item) && item.type === 'tool_use';
}

function isToolResultContent(item: unknown): item is AnthropicToolResultContent {
  return (
    typeof item === 'object' &&
    item !== null &&
    'type' in item &&
    (item as { type: string }).type === 'tool_result' &&
    'tool_use_id' in item
  );
}

// === MAIN EXPORT FUNCTIONS ===

/**
 * Maps Anthropic model names to provider-specific model names
 */
export function mapModel(
  anthropicModel: string,
  provider: Provider = 'openrouter',
  providerConfigs: Record<string, ProviderConfig>,
): string {
  const config = providerConfigs[provider as keyof typeof providerConfigs];
  if (!config) {
    return anthropicModel;
  }

  const mapping = config.modelMappings[anthropicModel] || anthropicModel;
  return mapping;
}

/**
 * Validates OpenAI format messages to ensure complete tool_calls/tool message pairing.
 * Handles the strict exactOptionalPropertyTypes requirements by either type assertion.
 */
function validateOpenAIToolCalls(messages: OpenAIMessage[]): OpenAIMessage[] {
  const validatedMessages: OpenAIMessage[] = [];

  for (const msg of messages) {
    if (!msg) {
      continue;
    }

    // Validate tool calls
    if (msg.role === 'assistant' && msg.tool_calls) {
      const validToolCalls = msg.tool_calls.filter(toolCall => {
        // Simple validation here - in full implementation would check
        // for corresponding tool messages
        return (
          toolCall.id !== null &&
          toolCall.id !== undefined &&
          toolCall.function.name !== null &&
          toolCall.function.name !== undefined
        );
      });

      if (validToolCalls.length > 0 || msg.content) {
        // Use type assertion to bypass strict optional properties
        const assistantMsg: OpenAIMessage = {
          role: 'assistant',
          content: msg.content,
        };
        if (msg.tool_calls && msg.tool_calls.length > 0) {
          assistantMsg.tool_calls = validToolCalls;
        }
        if (msg.tool_call_id && msg.tool_call_id !== '') {
          assistantMsg.tool_call_id = msg.tool_call_id;
        }
        validatedMessages.push(assistantMsg as unknown as OpenAIMessage);
      }
    } else if (msg.role === 'tool') {
      if (msg.tool_call_id && msg.tool_call_id !== '') {
        const toolMsg: OpenAIMessage = {
          role: 'tool',
          content: msg.content,
          tool_call_id: msg.tool_call_id,
        };
        validatedMessages.push(toolMsg);
      }
    } else {
      // system, user, etc
      const simpleMsg: OpenAIMessage = {
        role: msg.role,
        content: msg.content,
      };
      if (msg.tool_call_id && msg.tool_call_id !== '') {
        simpleMsg.tool_call_id = msg.tool_call_id;
      }
      if (msg.tool_calls && msg.tool_calls.length > 0) {
        simpleMsg.tool_calls = msg.tool_calls;
      }
      validatedMessages.push(simpleMsg);
    }
  }

  return validatedMessages;
}

/**
 * Formats Anthropic API request to OpenAI API format
 */
export function formatAnthropicToOpenAI(
  body: MessageCreateParamsBase,
  provider: Provider = 'openrouter',
  providerConfigs: Record<string, ProviderConfig>,
  _env?: Record<string, unknown>,
): {
  model: string;
  messages: OpenAIMessage[];
  temperature?: number;
  tools?: Array<{
    type: 'function';
    function: {
      name: string;
      description?: string;
      parameters: Record<string, unknown>;
    };
  }>;
  stream?: boolean;
  chat_template_kwargs?: { thinking?: boolean };
} {
  const model = mapModel(body.model, provider, providerConfigs);
  const messages: OpenAIMessage[] = [];

  // Convert messages
  for (const message of body.messages) {
    if (message.role === 'system') {
      // System messages are supported in OpenAI
      messages.push({
        role: 'system',
        content: message.content,
      });
    } else if (message.role === 'tool') {
      // Tool messages
      messages.push({
        role: 'tool',
        content: typeof message.content === 'string' ? message.content : '',
        tool_call_id: message.tool_use_id || '',
      });
    } else if (message.role === 'user' || message.role === 'assistant') {
      // Regular messages with content
      if (typeof message.content === 'string') {
        const simpleMsg: OpenAIMessage = {
          role: message.role as 'user' | 'assistant',
          content: message.content,
        };
        messages.push(simpleMsg);
      } else if (Array.isArray(message.content)) {
        let textContent = '';
        const toolCalls: OpenAIToolCall[] = [];
        const toolResults: Array<{ tool_call_id: string; content: string }> = [];

        message.content.forEach(item => {
          if (isTextContent(item)) {
            textContent += item.text + '\n';
          } else if (isImageContent(item)) {
            textContent += `[Image: ${item.source.media_type}]\n`;
          } else if (isToolContent(item)) {
            toolCalls.push({
              id: item.id,
              type: 'function',
              function: {
                name: item.name,
                arguments: JSON.stringify(item.input),
              },
            });
          } else if (isToolResultContent(item)) {
            // Extract content from tool_result
            let resultContent = '';
            if (typeof item.content === 'string') {
              resultContent = item.content;
            } else if (Array.isArray(item.content)) {
              resultContent = item.content
                .filter((c): c is { type: 'text'; text: string } => c.type === 'text')
                .map(c => c.text)
                .join('\n');
            }
            toolResults.push({
              tool_call_id: item.tool_use_id,
              content: resultContent,
            });
          }
        });

        // Trim trailing newline from textContent
        textContent = textContent.trim();

        const role = message.role as 'user' | 'assistant';

        // Handle tool results - convert to OpenAI tool messages
        if (toolResults.length > 0) {
          for (const result of toolResults) {
            messages.push({
              role: 'tool',
              content: result.content,
              tool_call_id: result.tool_call_id,
            });
          }
          // If there's also text content in this message, add it as a separate user message
          if (textContent) {
            messages.push({
              role: role,
              content: textContent,
            });
          }
        } else {
          // No tool results - normal message handling
          const openAiMessage: OpenAIMessage = {
            role,
            // Ensure content is never null for user messages
            content: textContent || (role === 'user' ? '' : null),
          };
          if (toolCalls.length > 0) {
            openAiMessage.tool_calls = toolCalls;
          }
          // Only push the message if it has content or tool_calls
          if (openAiMessage.content || toolCalls.length > 0) {
            messages.push(openAiMessage);
          }
        }
      }
    }
  }

  // Convert tools
  let tools:
    | Array<{ type: 'function'; function: { name: string; description?: string; parameters: Record<string, unknown> } }>
    | undefined;
  if (body.tools) {
    tools = body.tools.map(tool => ({
      type: 'function' as const,
      function: {
        name: tool.name,
        ...(tool.description && { description: tool.description }),
        parameters: tool.input_schema,
      },
    }));
  }

  const result: {
    model: string;
    messages: OpenAIMessage[];
    temperature?: number;
    max_tokens?: number;
    stream?: boolean;
    tools?: Array<{
      type: 'function';
      function: {
        name: string;
        description?: string;
        parameters: Record<string, unknown>;
      };
    }>;
    tool_choice?: ToolChoice;
    chat_template_kwargs?: { thinking?: boolean };
  } = {
    model,
    messages: tools ? validateOpenAIToolCalls(messages) : messages,
    chat_template_kwargs: { thinking: false },
  };

  if (body.temperature !== null && body.temperature !== undefined) {
    result.temperature = body.temperature;
  }
  if (body.max_tokens !== null && body.max_tokens !== undefined) {
    result.max_tokens = body.max_tokens;
  }
  if (body.stream !== null && body.stream !== undefined) {
    result.stream = body.stream;
  }
  if (tools) {
    result.tools = tools;
  }
  if (body.tool_choice) {
    result.tool_choice = body.tool_choice;
  }

  return result;
}

/**
 * Formats OpenAI API response to Anthropic API format
 */
export function formatOpenAIResponseToAnthropic(
  completion: Record<string, unknown>,
  requestedModel: string,
): AnthropicAPIResponse {
  const messageId = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Handle streaming response (SSE format)
  if (completion && typeof completion === 'object' && 'choices' in completion) {
    const choice = (completion as { choices?: Array<{ message?: { content?: string; tool_calls?: unknown } }> })
      .choices?.[0];
    const message = choice?.message;

    if (message?.content) {
      const content: AnthropicTextContent = {
        type: 'text',
        text: message.content as string,
      };

      return {
        id: messageId,
        type: 'message',
        role: 'assistant',
        content: [content],
        stop_reason:
          message?.tool_calls && Array.isArray(message.tool_calls) && message.tool_calls.length > 0
            ? 'tool_use'
            : 'end_turn',
        stop_sequence: null,
        model: requestedModel,
        usage: {
          input_tokens:
            completion['usage'] !== undefined &&
            typeof completion['usage'] === 'object' &&
            completion['usage'] !== null &&
            'input_tokens' in completion['usage']
              ? (completion['usage']['input_tokens'] as number)
              : 0,
          output_tokens:
            completion['usage'] !== undefined &&
            typeof completion['usage'] === 'object' &&
            completion['usage'] !== null &&
            'output_tokens' in completion['usage']
              ? (completion['usage']['output_tokens'] as number)
              : 0,
        },
      };
    }
  }

  // Default response for empty or malformed responses
  return {
    id: messageId,
    type: 'message',
    role: 'assistant',
    content: [
      {
        type: 'text',
        text: '',
      },
    ],
    stop_reason: 'end_turn',
    stop_sequence: null,
    model: requestedModel,
    usage: {
      input_tokens: 0,
      output_tokens: 0,
    },
  };
}

interface AnthropicAPIResponse {
  id: string;
  type: 'message';
  role: 'assistant';
  content:
    | Array<{
        type: 'text';
        text: string;
      }>
    | Array<{
        type: 'tool_use';
        id: string;
        name: string;
        input: Record<string, unknown>;
      }>;
  stop_reason: 'tool_use' | 'end_turn';
  stop_sequence: null;
  model: string;
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

// Export any other missing interfaces for completeness
export type { OpenAIMessage, OpenAIToolCall, ProviderConfig };
