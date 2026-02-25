import { YamlConfig } from './yaml.schema';

export function overrideWithEnv(config: YamlConfig): YamlConfig {
  const idpClientId = process.env.KEYCLOAK_CLIENT_ID;
  const idpClientSecret = process.env.KEYCLOAK_CLIENT_SECRET;
  const openaiApiKey = process.env.OPENAI_API_KEY;

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
