import type { OxlintConfig } from 'oxlint';

export default {
  plugins: ['typescript', 'vitest'],
  env: {
    node: true,
  },
  ignorePatterns: ['coverage/**', 'dist/**', 'tests/.docgen/**'],
  rules: {
    'typescript/no-explicit-any': 'off',
  },
} satisfies OxlintConfig;
