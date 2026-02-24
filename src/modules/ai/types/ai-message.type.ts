/**
 * Message role for AI completion
 */
export type MessageRole = 'system' | 'user' | 'assistant';

/**
 * AI message format
 */
export interface AIMessage {
  role: MessageRole;
  content: string;
}
