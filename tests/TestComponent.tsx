import React from 'react';

export interface TestComponentProps {
  /** Test component text prop */
  text: string;
}

export function TestComponent(props: TestComponentProps) {
  return <>{props.text}</>;
}

TestComponent.extend = (props: TestComponentProps) => {
  return <>{props.text}</>;
};
