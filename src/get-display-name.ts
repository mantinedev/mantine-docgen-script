export function getDisplayName(componentName: string | undefined) {
  return (
    componentName?.replace(/@mantine\/([^\s]+)\//, '').replace(/@mantinex\/([^\s]+)\//, '') ||
    'DisplayNameMissing'
  );
}
