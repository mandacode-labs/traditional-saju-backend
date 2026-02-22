import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { yamlSchema } from './config.schema';
import type { YamlConfig } from './yaml.schema';

export function loadYamlConfig(configPath?: string): YamlConfig {
  const path =
    configPath ?? process.env.CONFIG_PATH ?? '/app/config/config.yaml';

  let yamlConfig: object = {};

  try {
    const content = readFileSync(path, 'utf8');
    const parsed: unknown = load(content);

    // Type guard to ensure parsed is a plain object (not array, not null)
    if (
      parsed !== null &&
      typeof parsed === 'object' &&
      !Array.isArray(parsed)
    ) {
      yamlConfig = parsed as Record<string, unknown>;
    }
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Failed to load or parse YAML config at ${path}: ${errorMsg}`,
    );
  }

  return yamlSchema.parse(yamlConfig);
}
