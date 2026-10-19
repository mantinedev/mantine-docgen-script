# mantine-docgen-script

A script to generate props table data based on TypeScript props definition. Specific to Mantine components.

## Installation

```bash
yarn add --dev mantine-docgen-script
```

## Requirements

- Node.js 22.12 or higher.
- The package is **ESM-only** – it must be imported with `import`, not `require`.
- TypeScript is a peer requirement of [react-docgen-typescript](https://www.npmjs.com/package/react-docgen-typescript),
  which reads the compiler API from the TypeScript version installed in your project.
  Versions 4.3 up to 6.x are supported. **TypeScript 7 does not work**: it is the native
  port and no longer exposes the JavaScript compiler API (`ts.createProgram`, `ts.sys` and
  friends) that the parser depends on.

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
import path from 'node:path';
import { generateDeclarations } from 'mantine-docgen-script';

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

### Per-component files

Pass `splitOutput: true` to also write one file per component to `docs/components/<ComponentName>.json`.
Each file holds the same object as the matching `docgen.json` entry. Use it to load props data of a
single component on demand, for example with a dynamic import, instead of bundling the whole `docgen.json`.
The `components` directory is recreated on every run, so files of removed components do not linger.

```ts
generateDeclarations({
  componentsPaths: [getComponentPath('TestComponent.tsx')],
  tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),
  outputPath: path.join(process.cwd(), 'docs'),
  splitOutput: true,
});
```

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
        "defaultValue": null,
        "description": "Key of <code>theme.colors</code> or any valid CSS color",
        "name": "color",
        "parent": "TestComponentProps",
        "required": true,
        "type": {
          "name": "MantineColor"
        },
        "tags": {}
      },
      "label": {
        "defaultValue": null,
        "description": "Label displayed inside the component, <code>'TestComponent'</code> by default",
        "name": "label",
        "parent": "TestComponentProps",
        "required": true,
        "type": {
          "name": "React.ReactNode"
        },
        "tags": {}
      }
    }
  }
}
```

## Output shape

Every prop has the following fields:

- `name` – prop name
- `description` – the main JSDoc comment converted to HTML (backticks become `<code>`), without JSDoc tags
- `type.name` – prop type, after `typesReplacement` is applied
- `required` – whether the prop is required
- `defaultValue` – the value of the `@default` tag as a string, or `null` when the tag is not set
- `parent` – name of the interface or type alias that declares the prop (for example `__InputProps` for props inherited from `Input`), or `null` when it cannot be resolved
- `tags` – map of all JSDoc tags on the prop, always present. A tag without text has an empty string value (`{ "deprecated": "" }`). Tags that are repeated on the same prop are joined with a newline. `tags.default` duplicates `defaultValue`, use `defaultValue`.

```tsx
export interface TestComponentProps {
  /**
   * Whether the component has a border
   * @category visual
   * @default false
   * @deprecated Use `variant="outline"` instead
   */
  withBorder?: boolean;
}
```

```json
{
  "withBorder": {
    "defaultValue": "false",
    "description": "Whether the component has a border",
    "name": "withBorder",
    "parent": "TestComponentProps",
    "required": false,
    "type": { "name": "boolean" },
    "tags": {
      "category": "visual",
      "default": "false",
      "deprecated": "Use `variant=\"outline\"` instead"
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
