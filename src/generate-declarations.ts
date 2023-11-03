import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import { getDocgenParser } from './get-docgen-parser';
import { prepareDeclaration } from './prepare-declaration';
import type { DocgenOptions } from './types';
import { getDisplayName } from './get-display-name';

export async function generateDeclarations(options: DocgenOptions) {
  options.componentsPaths.forEach((componentPath) => {
    if (!fs.existsSync(componentPath)) {
      process.stdout.write(chalk.red`Path ${componentPath} does not exist \n`);
      process.exit(1);
    }
  });

  const declarations = getDocgenParser(options)
    .parse(options.componentsPaths)
    .reduce<Record<string, any>>((acc, declaration) => {
      const componentName = getDisplayName(declaration.displayName);
      acc[componentName] = prepareDeclaration(declaration, options);
      return acc;
    }, {});

  await fs.ensureDir(options.outputPath);
  await fs.writeJSON(path.join(options.outputPath, 'docgen.json'), declarations, {
    spaces: 2,
  });
}
