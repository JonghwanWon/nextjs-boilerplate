import { Instance, types as T } from 'mobx-state-tree';

export const Sample = T.model('Sample', {
  foo: T.string,
  bar: T.number,
});

export type TSample = Instance<typeof Sample>;
