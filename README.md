# mantine-docgen-script

A script to generate props table data based on TypeScript props definition. Specific to Mantine components.

## Installation

```bash
yarn add --dev mantine-docgen-script
```

## Usage

Create a script in your `package.json` that runs with [tsx](https://www.npmjs.com/package/tsx):

```json
{
  "scripts": {
    "docgen": "tsx scripts/docgen"
  }
}
```

Then create `scripts/docgen.ts` file with the following content:

```ts
import path from 'path';
import { generateDeclarations } from './docgen-script';

// Utility function to resolve component path
const getComponentPath = (componentPath: string) =>
  path.join(process.cwd(), 'package/src', componentPath);

generateDeclarations({
  // A list of components to generate docs for
  componentsPaths: [getComponentPath('TestComponent.tsx')],

  // Path to your main tsconfig.json file
  tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),

  // Path to where docgen json file must be output
  outputPath: path.join(process.cwd(), 'docs'),
});
```

Then run `npm run docgen` to generate `docs/docgen.json` file with props table data.

## Example

Given the path to the following component:

```tsx
import React from 'react';
import { Box, BoxProps, ElementProps, MantineColor } from '@mantine/core';
import classes from './TestComponent.module.css';

export interface TestComponentProps extends BoxProps, ElementProps<'div'> {
  /** Label displayed inside the component, `'TestComponent'` by default */
  label: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color */
  color: MantineColor;
}

export function TestComponent({ label, ...others }: TestComponentProps) {
  return (
    <Box className={classes.root} {...others}>
      {label}
    </Box>
  );
}
```

The script will generate the following output:

```json
{
  "TestComponent": {
    "props": {
      "color": {
        "description": "Key of <code>theme.colors</code> or any valid CSS color",
        "name": "color",
        "required": true,
        "type": {
          "name": "MantineColor"
        }
      },
      "label": {
        "description": "Label displayed inside the component, <code>'TestComponent'</code> by default",
        "name": "label",
        "required": true,
        "type": {
          "name": "React.ReactNode"
        }
      }
    }
  }
}
```

## Where to use

The script is used in main Mantine repository to generate data for components props tables.
It is also used in Mantine extensions published as separate packages. Most likely, you
do not need to install and setup it manually – it comes by default with extension template.

## License

MIT
