import mantineConfig from 'eslint-config-mantine';
import * as tseslint from 'typescript-eslint';

export default tseslint.config(
  ...mantineConfig,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
  },
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] }
);
