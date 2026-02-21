import { z } from 'zod';
import {
  serverSchema,
  redisSchema,
  idpSchema,
  scoreSchema,
  openaiSchema,
} from './schemas';

export const configSchema = z.object({
  server: serverSchema,
  redis: redisSchema,
  idp: idpSchema,
  score: scoreSchema,
  openai: openaiSchema,
});

export type Config = z.infer<typeof configSchema>;
