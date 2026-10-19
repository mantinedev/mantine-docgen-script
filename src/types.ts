export interface DocgenOptions {
  componentsPaths: string[];
  tsConfigPath: string;
  outputPath: string;
  excludeProps?: string[];
  typesReplacement?: Record<string, string>;

  /**
   * When `true`, also writes `<outputPath>/components/<ComponentName>.json` for every component,
   * each holding the same object as the matching `docgen.json` entry. The directory is recreated
   * on every run so files of removed components do not linger. `false` by default.
   */
  splitOutput?: boolean;
}
