/**
 * Knip configuration for detecting unused files, dependencies, and exports
 * @see https://knip.dev/reference/configuration
 */

export default {
  entry: [
    'src/index.ts',
    'scripts/**/*.ts',
    'tests/**/*.spec.ts',
    // Loaded by path rather than imported, so knip cannot reach it on its own
    'tests/TestComponent.tsx',
  ],
  project: ['src/**/*.ts', 'scripts/**/*.ts', 'tests/**/*.ts', 'tests/**/*.tsx'],
};
