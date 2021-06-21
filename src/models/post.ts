import { Instance, types as T } from 'mobx-state-tree';

export const Post = T.model({
  id: T.identifierNumber,
  title: T.string,
  body: T.string,
})
  .views((self) => ({}))
  .actions((self) => ({}));

export type TPost = Instance<typeof Post>;
