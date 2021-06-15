import { Instance, types as T } from 'mobx-state-tree';

import { Sample } from '~/models/sample';

const SampleStore = T.model('SampleStore', {
  mySampleData: T.optional(Sample, {
    foo: 'foo',
    bar: 123,
  }),
  mySsrData: T.optional(T.string, ''),
})
  .views((self) => ({}))
  .actions((self) => ({}));

export type TSampleStore = Instance<typeof SampleStore>;
export default SampleStore;
