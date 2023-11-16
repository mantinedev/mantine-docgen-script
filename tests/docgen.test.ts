import path from 'node:path';
import { generateDeclarations } from '../src';

generateDeclarations({
  tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),
  outputPath: path.join(process.cwd(), 'tests/.docgen'),
  componentsPaths: [path.join(process.cwd(), 'tests/TestComponent.tsx')],
  excludeProps: [],
  typesReplacement: {},
});
