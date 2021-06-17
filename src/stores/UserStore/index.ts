import { Instance, types as T } from 'mobx-state-tree';

import { User } from '~/models/user';

const UserStore = T.model('UserStore', {
  users: T.optional(T.array(User), []),
})
  .views((self) => ({}))
  .actions((self) => ({}));

export type TUserStore = Instance<typeof UserStore>;
export default UserStore;
