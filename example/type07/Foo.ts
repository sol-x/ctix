export const Foo = { foo: 'foo' } as const;
export type Foo = typeof Foo;

export interface Ignore {}
