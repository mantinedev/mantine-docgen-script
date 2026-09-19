import { withCustomConfig } from 'react-docgen-typescript';
import { DEFAULT_EXCLUDE_PROPS } from './default-exclude-props';
import { getPropsFilter } from './get-props-filter';
import type { DocgenOptions } from './types';

export function getDocgenParser(options: DocgenOptions) {
  return withCustomConfig(options.tsConfigPath, {
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldIncludePropTagMap: true,
    propFilter: getPropsFilter([...DEFAULT_EXCLUDE_PROPS, ...(options.excludeProps || [])]),
  });
}
