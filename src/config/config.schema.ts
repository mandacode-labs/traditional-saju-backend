import { z } from 'zod';
import { yamlSchema } from './yaml.schema';
export { yamlSchema, type YamlConfig } from './yaml.schema';

// Final schema: YAML + Secrets (secrets required)
// This schema uses yamlSchema as base but makes secrets required
export const configSchema = z.object({
  server: yamlSchema.shape.server,
  redis: z.discriminatedUnion('mode', [
    z.object({
      mode: z.literal('standalone'),
      host: z.string(),
      port: z.number(),
      db: z.number(),
      password: z.string().min(1),
    }),
    z.object({
      mode: z.literal('sentinel'),
      sentinels: z.array(z.object({ host: z.string(), port: z.number() })),
      name: z.string(),
      db: z.number(),
      sentinelPassword: z.string().min(1),
    }),
  ]),
  idp: z.object({
    keycloakUrl: z.string().url(),
    keycloakRealm: z.string(),
    clientId: z.string().min(1),
    clientSecret: z.string().min(1),
  }),
  score: yamlSchema.shape.score,
  openai: z.object({
    apiKey: z.string().min(1),
    systemMessage: yamlSchema.shape.openai.shape.systemMessage,
  }),
});

export type Config = z.infer<typeof configSchema>;
