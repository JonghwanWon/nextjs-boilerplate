import { Instance, types as T } from 'mobx-state-tree';

import SampleStore from '../SampleStore';
import UserStore from '../UserStore';

const rootStore = T.model({
  sample: T.optional(SampleStore, {}),
  user: T.optional(UserStore, {}),
})
  .views((self) => ({}))
  .actions((self) => ({}));

export type TRootStore = Instance<typeof rootStore>;
export default rootStore;
