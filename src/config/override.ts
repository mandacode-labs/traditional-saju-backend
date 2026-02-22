import { YamlConfig } from './yaml.schema';

export function overrideWithEnv(config: YamlConfig): YamlConfig {
  const redisPassword = process.env.REDIS_PASSWORD;
  const redisSentinelPassword = process.env.REDIS_SENTINEL_PASSWORD;
  const idpClientId = process.env.KEYCLOAK_CLIENT_ID;
  const idpClientSecret = process.env.KEYCLOAK_CLIENT_SECRET;
  const openaiApiKey = process.env.OPENAI_API_KEY;

  if (redisPassword) {
    config.redis.password = redisPassword;
  }
  if (redisSentinelPassword) {
    config.redis.sentinelPassword = redisSentinelPassword;
  }
  if (idpClientId) {
    config.idp.clientId = idpClientId;
  }
  if (idpClientSecret) {
    config.idp.clientSecret = idpClientSecret;
  }
  if (openaiApiKey) {
    config.openai.apiKey = openaiApiKey;
  }

  return config;
}
