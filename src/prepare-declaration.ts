import type { ComponentDoc } from 'react-docgen-typescript';
import { replaceBackticks } from './replace-backticks';
import { DEFAULT_TYPE_REPLACEMENT } from './default-types-replacement';
import type { DocgenOptions } from './types';

export function prepareDeclaration(declaration: ComponentDoc, options: DocgenOptions) {
  const typesReplacement = { ...DEFAULT_TYPE_REPLACEMENT, ...(options.typesReplacement || {}) };
  const data: any = { ...declaration };
  delete data.tags;
  delete data.methods;
  delete data.filePath;
  delete data.displayName;

  Object.keys(data.props).forEach((prop) => {
    delete data.props[prop].parent;
    delete data.props[prop].declarations;
    delete data.description;

    if (data.props[prop].type.name === 'enum') {
      data.props[prop].type.name = data.props[prop].type.raw;
    }

    if (data.props[prop].type.name in typesReplacement) {
      data.props[prop].type.name = typesReplacement[data.props[prop].type.name];
    }

    if (prop === 'radius') {
      data.props[prop].type.name = 'MantineRadius | number';
    }

    if (data.props[prop].defaultValue?.value) {
      data.props[prop].defaultValue = data.props[prop].defaultValue.value;
    } else {
      data.props[prop].defaultValue = null;
    }

    data.props[prop].type.name = data.props[prop].type.name
      .replace(' | undefined', '')
      .replace('undefined |', '')
      .replace('"xs" | "sm" | "md" | "lg" | "xl"', 'MantineSize')
      .trim();

    if (data.props[prop].type.name.startsWith('(') && data.props[prop].type.name.endsWith(')')) {
      data.props[prop].type.name = data.props[prop].type.name.slice(1, -1);
    }
  });

  const ordered = Object.keys(data.props)
    .sort()
    .reduce<Record<string, any>>((obj, key) => {
      obj[key] = data.props[key];
      data.props[key].description = replaceBackticks(data.props[key].description);
      return obj;
    }, {});

  data.props = ordered;

  return data;
}
