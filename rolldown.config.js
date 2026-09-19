import { defineConfig } from 'rolldown';
import pkg from './package.json' with { type: 'json' };
import { isBuiltin } from 'node:module';
import path from 'node:path';

const allowedDependencies = new Set([
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
]);

export default defineConfig({
  input: path.resolve(process.cwd(), 'src/index.ts'),
  tsconfig: path.resolve(process.cwd(), 'tsconfig.build.json'),
  output: {
    dir: './dist',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  external(id) {
    if (id.startsWith('.') || path.isAbsolute(id)) {
      return false;
    }

    if (isBuiltin(id)) {
      return true;
    }

    const dependency = id.startsWith('@') ? id.split('/').slice(0, 2).join('/') : id.split('/')[0];

    if (!allowedDependencies.has(dependency)) {
      throw new Error(
        `Dependency "${dependency}" is used but not listed in dependencies/peerDependencies`
      );
    }

    return true;
  },
});
