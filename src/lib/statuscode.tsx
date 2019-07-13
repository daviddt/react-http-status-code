import React, { FC } from 'react';
import withSideEffect from 'react-side-effect';

const INITIAL_CODE = -1;
const PROP_NAME = 'code';

const StatusCodeComponent: FC<{ readonly [PROP_NAME]: number }> = ({ children }) => (
  <React.Fragment>
    {children}
  </React.Fragment>
)

export const reducePropsToState = (props: ReadonlyArray<{ readonly code: number, readonly [key: string]: any }>) => props
    .map(x => x[PROP_NAME])
    .filter((x: unknown) => x !== null && typeof x !== 'undefined')
    .reduce((state: number, code: number) => Math.max(state, code), INITIAL_CODE) as number;

export const StatusCode = withSideEffect(reducePropsToState, () => undefined)(StatusCodeComponent);
