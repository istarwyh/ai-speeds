import { Provider } from '../types';
import { Env } from '../../../server/env';

interface ProviderConfig {
  defaultBaseUrl: string;
  modelMappings: Record<string, string>;
  commonModels?: readonly string[];
}

interface AnthropicTextContent {
  type: 'text';
  text: string;
}

interface AnthropicToolUseContent {
  type: 'tool_use';
  id: string;
  name: string;
  input: Record<string, unknown>;
}

interface AnthropicToolResultContent {
  type: 'tool_result';
  tool_use_id: string;
  content: string | Record<string, unknown>;
}

type AnthropicContentPart = AnthropicTextContent | AnthropicToolUseContent | AnthropicToolResultContent;

interface AnthropicMessage {
  role: 'user' | 'assistant';
  content: string | AnthropicContentPart[];
}

interface AnthropicTool {
  name: string;
  description?: string;
  input_schema: Record<string, unknown>;
}

interface MessageCreateParamsBase {
  model: string;
  messages: AnthropicMessage[];
  system?: string | Record<string, unknown>;
  temperature?: number;
  tools?: AnthropicTool[];
  stream?: boolean;
}

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

/**
 * Validates OpenAI format messages to ensure complete tool_calls/tool message pairing.
 * Requires tool messages to immediately follow assistant messages with tool_calls.
 * Enforces strict immediate following sequence between tool_calls and tool messages.
 */
function validateOpenAIToolCalls(messages: OpenAIMessage[]): OpenAIMessage[] {
  const validatedMessages: OpenAIMessage[] = [];

  for (let i = 0; i < messages.length; i++) {
    const currentMessage = { ...messages[i] };

    // Process assistant messages with tool_calls
    if (currentMessage.role === 'assistant' && currentMessage.tool_calls) {
      const validToolCalls: OpenAIToolCall[] = [];
      const removedToolCallIds: string[] = [];

      // Collect all immediately following tool messages
      const immediateToolMessages: OpenAIMessage[] = [];
      let j = i + 1;
      while (j < messages.length && messages[j].role === 'tool') {
        immediateToolMessages.push(messages[j]);
        j++;
      }

      // For each tool_call, check if there's an immediately following tool message
      currentMessage.tool_calls?.forEach((toolCall: OpenAIToolCall) => {
        const hasImmediateToolMessage = immediateToolMessages.some(toolMsg => toolMsg.tool_call_id === toolCall.id);

        if (hasImmediateToolMessage) {
          validToolCalls.push(toolCall);
        } else {
          removedToolCallIds.push(toolCall.id);
        }
      });

      // Update the assistant message
      if (validToolCalls.length > 0) {
        currentMessage.tool_calls = validToolCalls;
      } else {
        delete currentMessage.tool_calls;
      }

      // Only include message if it has content or valid tool_calls
      if (currentMessage.content || currentMessage.tool_calls) {
        validatedMessages.push(currentMessage);
      }
    }

    // Process tool messages
    else if (currentMessage.role === 'tool') {
      let hasImmediateToolCall = false;

      // Check if the immediately preceding assistant message has matching tool_call
      if (i > 0) {
        const prevMessage = messages[i - 1];
        if (prevMessage.role === 'assistant' && prevMessage.tool_calls) {
          hasImmediateToolCall = prevMessage.tool_calls.some(
            (toolCall: OpenAIToolCall) => toolCall.id === currentMessage.tool_call_id,
          );
        } else if (prevMessage.role === 'tool') {
          // Check for assistant message before the sequence of tool messages
          for (let k = i - 1; k >= 0; k--) {
            if (messages[k].role === 'tool') {
              continue;
            }
            if (messages[k].role === 'assistant' && messages[k].tool_calls) {
              hasImmediateToolCall = messages[k].tool_calls.some(
                (toolCall: OpenAIToolCall) => toolCall.id === currentMessage.tool_call_id,
              );
            }
            break;
          }
        }
      }

      if (hasImmediateToolCall) {
        validatedMessages.push(currentMessage);
      }
    }

    // For all other message types, include as-is
    else {
      validatedMessages.push(currentMessage);
    }
  }

  return validatedMessages;
}

/**
 * Maps Anthropic model names to provider-specific model names
 */
export function mapModel(
  anthropicModel: string,
  provider: Provider = 'openrouter',
  providerConfigs: Record<string, ProviderConfig>,
): string {
  const config = providerConfigs[provider] as ProviderConfig | undefined;
  if (!config) {
    // Provider configuration not found, using original model name
    return anthropicModel;
  }

  // Check if it's already a valid model for this provider
  if (config.commonModels && config.commonModels.includes(anthropicModel)) {
    return anthropicModel;
  }

  // Map Claude model names to provider-specific models
  // Try exact mapping first
  if (config.modelMappings[anthropicModel]) {
    return config.modelMappings[anthropicModel];
  }

  // Then try partial matching for model families
  for (const [claudeType, providerModel] of Object.entries(config.modelMappings)) {
    if (anthropicModel.includes(claudeType)) {
      return providerModel;
    }
  }

  // Return original model name if no mapping found
  return anthropicModel;
}

/**
 * Formats Anthropic API request to OpenAI API format
 */
export function formatAnthropicToOpenAI(
  body: MessageCreateParamsBase,
  provider: Provider = 'openrouter',
  providerConfigs: Record<string, ProviderConfig>,
  _env?: Env,
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
} {
  const { model, messages, system = [], temperature, tools, stream } = body;

  const openAIMessages = Array.isArray(messages)
    ? messages.flatMap(anthropicMessage => {
        const openAiMessagesFromThisAnthropicMessage: OpenAIMessage[] = [];

        if (!Array.isArray(anthropicMessage.content)) {
          if (typeof anthropicMessage.content === 'string') {
            openAiMessagesFromThisAnthropicMessage.push({
              role: anthropicMessage.role,
              content: anthropicMessage.content,
            });
          } else if (typeof anthropicMessage.content === 'object' && anthropicMessage.content !== null) {
            // Handle object content by converting to string representation
            openAiMessagesFromThisAnthropicMessage.push({
              role: anthropicMessage.role,
              content: JSON.stringify(anthropicMessage.content),
            });
          }
          return openAiMessagesFromThisAnthropicMessage;
        }

        if (anthropicMessage.role === 'assistant') {
          const assistantMessage: OpenAIMessage = {
            role: 'assistant',
            content: null,
          };
          let textContent = '';
          const toolCalls: OpenAIToolCall[] = [];

          if (Array.isArray(anthropicMessage.content)) {
            anthropicMessage.content.forEach(contentPart => {
              if (contentPart.type === 'text') {
                textContent +=
                  (typeof contentPart.text === 'string' ? contentPart.text : JSON.stringify(contentPart.text)) + '\n';
              } else if (contentPart.type === 'tool_use') {
                toolCalls.push({
                  id: contentPart.id,
                  type: 'function',
                  function: {
                    name: contentPart.name,
                    arguments: JSON.stringify(contentPart.input),
                  },
                });
              }
            });
          }

          const trimmedTextContent = textContent.trim();
          if (trimmedTextContent.length > 0) {
            assistantMessage.content = trimmedTextContent;
          }
          if (toolCalls.length > 0) {
            assistantMessage.tool_calls = toolCalls;
          }
          if (assistantMessage.content || (assistantMessage.tool_calls && assistantMessage.tool_calls.length > 0)) {
            openAiMessagesFromThisAnthropicMessage.push(assistantMessage);
          }
        } else if (anthropicMessage.role === 'user') {
          let userTextMessageContent = '';
          const subsequentToolMessages: OpenAIMessage[] = [];

          if (Array.isArray(anthropicMessage.content)) {
            anthropicMessage.content.forEach(contentPart => {
              if (contentPart.type === 'text') {
                userTextMessageContent +=
                  (typeof contentPart.text === 'string' ? contentPart.text : JSON.stringify(contentPart.text)) + '\n';
              } else if (contentPart.type === 'tool_result') {
                subsequentToolMessages.push({
                  role: 'tool',
                  tool_call_id: contentPart.tool_use_id,
                  content:
                    typeof contentPart.content === 'string' ? contentPart.content : JSON.stringify(contentPart.content),
                });
              }
            });
          }

          const trimmedUserText = userTextMessageContent.trim();
          if (trimmedUserText.length > 0) {
            openAiMessagesFromThisAnthropicMessage.push({
              role: 'user',
              content: trimmedUserText,
            });
          }
          openAiMessagesFromThisAnthropicMessage.push(...subsequentToolMessages);
        }
        return openAiMessagesFromThisAnthropicMessage;
      })
    : [];

  const systemMessages =
    typeof system === 'string'
      ? [
          {
            role: 'system' as const,
            content: system,
          },
        ]
      : Array.isArray(system)
        ? system.map(item => ({
            role: 'system' as const,
            content: typeof item === 'string' ? item : JSON.stringify(item),
          }))
        : [];

  const data = {
    model: mapModel(model, provider, providerConfigs),
    messages: [...systemMessages, ...openAIMessages],
    temperature,
    stream,
  } as {
    model: string;
    messages: OpenAIMessage[];
    temperature?: number;
    stream?: boolean;
    tools?: Array<{
      type: 'function';
      function: {
        name: string;
        description?: string;
        parameters: Record<string, unknown>;
      };
    }>;
  };

  if (tools && tools.length > 0) {
    data.tools = tools.map(item => ({
      type: 'function' as const,
      function: {
        name: item.name,
        description: item.description,
        parameters: item.input_schema,
      },
    }));
  }

  // Validate OpenAI messages to ensure complete tool_calls/tool message pairing
  data.messages = [...systemMessages, ...validateOpenAIToolCalls(openAIMessages)];

  return data;
}

interface OpenAICompletion {
  choices?: Array<{
    message?: {
      content?: string;
      tool_calls?: Array<{
        id: string;
        function?: {
          name?: string;
          arguments?: string;
        };
      }>;
    };
  }>;
  usage?: {
    input_tokens?: number;
    output_tokens?: number;
  };
  model?: string;
}

interface AnthropicResponse {
  id: string;
  type: 'message';
  role: 'assistant';
  content: Array<
    | {
        type: 'text';
        text: string;
      }
    | {
        type: 'tool_use';
        id: string;
        name: string;
        input: Record<string, unknown>;
      }
  >;
  model: string;
  stop_reason: 'end_turn' | 'tool_use' | 'max_tokens';
  stop_sequence: null;
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

/**
 * Formats OpenAI API response to Anthropic API format
 */
export function formatOpenAIToAnthropic(completion: OpenAICompletion, model: string): AnthropicResponse {
  const messageId = 'msg_' + Date.now();

  let content: Array<
    | {
        type: 'text';
        text: string;
      }
    | {
        type: 'tool_use';
        id: string;
        name: string;
        input: Record<string, unknown>;
      }
  > = [];
  const firstChoice = completion.choices?.[0];
  const message = firstChoice?.message;

  if (message?.content) {
    content = [{ text: message.content, type: 'text' }];
  } else if (message?.tool_calls) {
    content = message.tool_calls.map(item => {
      return {
        type: 'tool_use' as const,
        id: item.id,
        name: item.function?.name || '',
        input: (() => {
          try {
            return item.function?.arguments ? JSON.parse(item.function.arguments) : {};
          } catch {
            // Failed to parse tool arguments, returning empty object
            return {};
          }
        })(),
      };
    });
  }

  const result: AnthropicResponse = {
    id: messageId,
    type: 'message',
    role: 'assistant',
    content: content,
    stop_reason: firstChoice?.finish_reason === 'tool_calls' ? 'tool_use' : 'end_turn',
    stop_sequence: null,
    model,
    usage: {
      input_tokens: completion.usage?.input_tokens || 0,
      output_tokens: completion.usage?.output_tokens || 0,
    },
  };
  return result;
}
