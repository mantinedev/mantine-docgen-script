import fs from 'fs-extra';
import { generateDeclarations } from '../src';
import os from 'node:os';
import path from 'node:path';

const outputPath = fs.mkdtempSync(path.join(os.tmpdir(), 'mantine-docgen-'));

beforeAll(async () => {
  await generateDeclarations({
    tsConfigPath: path.join(process.cwd(), 'tsconfig.json'),
    outputPath,
    componentsPaths: [path.join(process.cwd(), 'tests/TestComponent.tsx')],
    excludeProps: [],
    typesReplacement: {},
  });
});

afterAll(() => {
  fs.removeSync(outputPath);
});

function readProps() {
  return fs.readJsonSync(path.join(outputPath, 'docgen.json')).TestComponent.props;
}

describe('generateDeclarations', () => {
  it('skips .extend declarations and strips component level fields', () => {
    const data = fs.readJsonSync(path.join(outputPath, 'docgen.json'));
    expect(Object.keys(data)).toEqual(['TestComponent']);
    expect(Object.keys(data.TestComponent)).toEqual(['props']);
  });

  it('reports the declaring interface as parent', () => {
    const props = readProps();
    expect(props.size.parent).toBe('TestComponentBaseProps');
    expect(props.compact.parent).toBe('TestComponentBaseProps');
    expect(props.text.parent).toBe('TestComponentProps');
    expect(props.withBorder.parent).toBe('TestComponentProps');
  });

  it('always emits a tags map', () => {
    const props = readProps();
    expect(props.stringify.tags).toEqual({});
    expect(props.withBorder.tags).toEqual({ category: 'visual', default: 'false' });
  });

  it('keeps tags out of the description', () => {
    const props = readProps();
    expect(props.withBorder.description).toBe('Prop with a category tag');
    expect(props.compact.description).toBe('Deprecated base prop with a message');
  });

  it('emits an empty string for a bare tag', () => {
    const props = readProps();
    expect(props.legacy.tags).toEqual({ deprecated: '' });
    expect(props.compact.tags).toEqual({ deprecated: 'Use `size` instead' });
  });

  it('flattens defaultValue to a string or null', () => {
    const props = readProps();
    expect(props.text.defaultValue).toBe('"Hello World"');
    expect(props.withBorder.defaultValue).toBe('false');
    expect(props.stringify.defaultValue).toBeNull();
  });
});
