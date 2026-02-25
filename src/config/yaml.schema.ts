import { z } from 'zod';

// Base YAML schema (all fields optional with defaults)
export const yamlSchema = z.object({
  server: z.object({
    nodeEnv: z
      .string()
      .transform((x) => x.toLowerCase())
      .refine((x) => ['development', 'production', 'test'].includes(x))
      .default('development'),
    port: z.number().int().positive().default(3000),
  }),
  idp: z.object({
    keycloakUrl: z.url(),
    keycloakRealm: z.string(),
    clientId: z.string().optional(),
    clientSecret: z.string().optional(),
  }),
  score: z.object({
    mean: z.number().min(0).max(100).default(50),
    stdDev: z.number().min(1).max(50).default(10),
  }),
  openai: z.object({
    apiKey: z.string().optional(),
    systemMessage: z.object({
      daily: z.object({
        all: z
          .string()
          .default(
            '주어지는 정보에 대해 일일 사주를 서술해줘. 답변은 한국어이어야 하며 각각 300자 이내로 해줘.',
          ),
      }),
      yearly: z.object({
        chart: z
          .string()
          .default(
            '주어지는 정보에 대해 신년 사주를 서술해줘. 만약 시간 비활성화가 있다면 시간은 생략해.',
          ),
        general: z
          .string()
          .default(
            '주어진 사주 정보에 대해 신년운세 총운을 한국어로 서술해줘. 800자 이내여야 하며 사용자 정보를 답변에 사용하지 않아도 돼.',
          ),
        relationship: z
          .string()
          .default(
            '주어진 사주 정보에 대해 대인관계운을 한국어로 서술해줘. 500자 이내여야 하며 사용자 정보를 답변에 사용하지 않아도 돼.',
          ),
        wealth: z
          .string()
          .default(
            '주어진 사주 정보에 대해 재물운을 한국어로 서술해줘. 500자 이내여야 하며 사용자 정보를 답변에 사용하지 않아도 돼.',
          ),
        romantic: z
          .string()
          .default(
            '주어진 사주 정보에 대해 연애운을 한국어로 서술해줘. 500자 이내여야 하며 사용자 정보를 답변에 사용하지 않아도 돼.',
          ),
        health: z
          .string()
          .default(
            '주어진 사주 정보에 대해 건강운을 한국어로 서술해줘. 500자 이내여야 하며 사용자 정보를 답변에 사용하지 않아도 돼.',
          ),
        career: z
          .string()
          .default(
            '주어진 사주 정보에 대해 직업운을 한국어로 서술해줘. 500자 이내여야 하며 사용자 정보를 답변에 사용하지 않아도 돼.',
          ),
        waysToImprove: z
          .string()
          .default(
            '주어진 사주 정보에 대해 올해 운을 높이는 법을 한국어로 서술해줘. 열거형이 아닌 서술형 이어야하며 500자 이내여야 하고 사용자 정보를 답변에 사용하지 않아도 돼.',
          ),
        caution: z
          .string()
          .default(
            '주어진 사주 정보에 대해 주의할 점을 서술해줘. 500자 이내여야 하며 사용자 정보를 답변에 사용하지 않아도 돼.',
          ),
        questionAnswer: z
          .string()
          .default(
            '주어진 사주 정보에 대해 질문에 대한 답변을 한국어로 서술해줘. 500자 이내여야 하며 사용자 정보를 답변에 사용하지 않아도 돼.' +
              '만약 질문이 주어지지 않았다면 답변은 생략해도 돼.',
          ),
      }),
    }),
  }),
});

export type YamlConfig = z.infer<typeof yamlSchema>;
