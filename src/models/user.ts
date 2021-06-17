import { Instance, types as T } from 'mobx-state-tree';

const Company = T.model({
  name: T.string,
  catchPhrase: T.string,
  bs: T.string,
});

export const User = T.model({
  id: T.identifierNumber,
  name: T.string,
  username: T.string,
  email: T.string,
  company: Company,
});

export type TUser = Instance<typeof User>;
