import test from 'ava';
import { reducePropsToState } from './statuscode';

test('reducePropsToState', t => {
    const testProps: ReadonlyArray<{ readonly [key: string]: any, readonly code: number }> = [
        { foo: "hello", code: 200 },
        { code: 10, message: "foo" },
        { bar: "world", baz: 9001, code: 500 }
    ]

    t.is(reducePropsToState(testProps), 500);
})