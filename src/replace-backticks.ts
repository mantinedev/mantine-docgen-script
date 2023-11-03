/**
 * Replaces all backticks with <code> tags.
 * For example, `string` becomes <code>string</code>
 */
export function replaceBackticks(str: string): string {
  return str.replace(/`([^`]+)`/g, '<code>$1</code>');
}
