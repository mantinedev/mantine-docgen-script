export interface DocgenOptions {
  componentsPaths: string[];
  tsConfigPath: string;
  outputPath: string;
  excludeProps?: string[];
  typesReplacement?: Record<string, string>;
}
