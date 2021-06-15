import { Instance, types as T } from 'mobx-state-tree';

import SampleStore from '../SampleStore';

const rootStore = T.model({
  sample: T.optional(SampleStore, {}),
})
  .views((self) => ({}))
  .actions((self) => ({}));

export type TRootStore = Instance<typeof rootStore>;
export default rootStore;
