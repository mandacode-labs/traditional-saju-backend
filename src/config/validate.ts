import { configSchema } from './config.schema';
import type { Config } from './config.schema';
import { loadYamlConfig, overrideWithEnv } from './load';

export function validate(): Config {
  const yamlConfig = loadYamlConfig();
  const overriddenConfig = overrideWithEnv(yamlConfig);
  return configSchema.parse(overriddenConfig);
}
