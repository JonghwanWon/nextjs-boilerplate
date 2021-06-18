import { observer } from 'mobx-react';
import { FC } from 'react';
import styled from 'styled-components';

import { getStore } from '~/stores';

import UserItem from './UserItem';

const Container = styled.div``;

const UserItemWrapper = styled.div`
  padding: 4px 8px;
`;

type UserListProps = {};

const UserList: FC<UserListProps> = ({}) => {
  const { users } = getStore((stores) => stores.user);

  return (
    <Container>
      {users.map((user) => (
        <UserItemWrapper key={user.id}>
          <UserItem user={user} />
        </UserItemWrapper>
      ))}
    </Container>
  );
};

export default observer(UserList);
