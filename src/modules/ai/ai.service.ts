import { z } from 'zod';
import { AIMessage } from './types/ai-message.type';

/**
 * Options for structured AI completion
 */
export interface StructuredCompletionOptions<T> {
  messages: AIMessage[];
  schema: z.ZodSchema<T>;
  schemaName?: string;
  model?: string;
}

/**
 * Options for simple AI completion
 */
export interface SimpleCompletionOptions {
  messages: AIMessage[];
  model?: string;
}

/**
 * AI Service interface for LLM interactions
 * Abstracts the underlying AI provider (OpenAI, Anthropic, etc.)
 */
export interface IAIService {
  /**
   * Create a structured completion with schema validation
   * @param options - Completion options with schema
   * @returns Parsed and validated response
   */
  createStructuredCompletion<T>(
    options: StructuredCompletionOptions<T>,
  ): Promise<T>;

  /**
   * Create a simple text completion
   * @param options - Completion options
   * @returns Text content
   */
  createCompletion(options: SimpleCompletionOptions): Promise<string>;

  /**
   * Create multiple completions in parallel
   * @param requests - Array of completion options
   * @returns Array of text responses
   */
  createMultipleCompletions(
    requests: SimpleCompletionOptions[],
  ): Promise<string[]>;
}
