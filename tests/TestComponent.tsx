import React from 'react';

export interface TestComponentBaseProps {
  /** Base interface prop, reported with parent `TestComponentBaseProps` */
  size?: 'sm' | 'md';

  /**
   * Deprecated base prop with a message
   * @deprecated Use `size` instead
   */
  compact?: boolean;
}

export interface TestComponentProps extends TestComponentBaseProps {
  /** Test component text prop, @default "Hello World" */
  text: string;

  /** Test component number prop, @default JSON.parse */
  parse?: typeof JSON.parse;

  /** Test component string prop */
  stringify?: typeof JSON.stringify;

  /**
   * Prop with a category tag
   * @category visual
   * @default false
   */
  withBorder?: boolean;

  /**
   * Bare deprecated tag without a message
   * @deprecated
   */
  legacy?: boolean;
}

export function TestComponent(props: TestComponentProps) {
  return <>{props.text}</>;
}

TestComponent.extend = (props: TestComponentProps) => {
  return <>{props.text}</>;
};
