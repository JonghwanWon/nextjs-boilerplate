import { FC } from 'react';
import styled from 'styled-components';

import UserList from './UserList';

const Container = styled.div``;

type UsersProps = {};

const Users: FC<UsersProps> = ({}) => {
  return (
    <Container>
      <UserList />
    </Container>
  );
};

export default Users;
