import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { yamlSchema } from './config.schema';
import type { YamlConfig } from './yaml.schema';

export function loadYamlConfig(configPath?: string): YamlConfig {
  const path =
    configPath ?? process.env.CONFIG_PATH ?? '/app/config/config.yaml';

  let yamlConfig: object = {};

  try {
    const parsed = load(readFileSync(path, 'utf8'));
    if (parsed && typeof parsed === 'object') {
      yamlConfig = parsed;
    }
  } catch (error) {
    throw new Error(
      `Failed to load or parse YAML config at ${path}: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }

  return yamlSchema.parse(yamlConfig);
}
