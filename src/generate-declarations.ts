import chalk from 'chalk';
import fs from 'fs-extra';
import { getDisplayName } from './get-display-name';
import { getDocgenParser } from './get-docgen-parser';
import { prepareDeclaration } from './prepare-declaration';
import type { DocgenOptions } from './types';
import path from 'node:path';

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
      if (!componentName.includes('.extend')) {
        acc[componentName] = prepareDeclaration(declaration, options);
      }
      return acc;
    }, {});

  await fs.ensureDir(options.outputPath);
  await fs.writeJSON(path.join(options.outputPath, 'docgen.json'), declarations, {
    spaces: 2,
  });

  if (options.splitOutput) {
    await writeComponentFiles(path.join(options.outputPath, 'components'), declarations);
  }
}

async function writeComponentFiles(componentsPath: string, declarations: Record<string, any>) {
  await fs.emptyDir(componentsPath);
  await Promise.all(
    Object.entries(declarations).map(([componentName, declaration]) =>
      fs.writeJSON(path.join(componentsPath, `${componentName}.json`), declaration, { spaces: 2 })
    )
  );
}
