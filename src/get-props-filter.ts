import type { PropItem } from 'react-docgen-typescript';

export function getPropsFilter(excludeProps: string[] = []) {
  return (prop: PropItem) => {
    if (
      excludeProps.includes(prop.name) ||
      prop.name.startsWith('__') ||
      prop.name.startsWith('data-')
    ) {
      return false;
    }

    if (prop.name === 'variant' && prop.type.name === 'string') {
      return false;
    }

    if (prop.declarations !== undefined && prop.declarations.length > 0) {
      return Boolean(
        prop.declarations.find((declaration) => !declaration.fileName.includes('node_modules'))
      );
    }

    return true;
  };
}
