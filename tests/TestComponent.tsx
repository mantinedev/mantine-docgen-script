import React from 'react';

export interface TestComponentProps {
  /** Test component text prop, @default "Hello World" */
  text: string;

  /** Test component number prop, @default JSON.parse */
  parse?: typeof JSON.parse;

  /** Test component string prop */
  stringify?: typeof JSON.stringify;
}

export function TestComponent(props: TestComponentProps) {
  return <>{props.text}</>;
}

TestComponent.extend = (props: TestComponentProps) => {
  return <>{props.text}</>;
};
