import { FC } from 'react';
import styled from 'styled-components';

import Typography from '~/components/Typography';
import { TUser } from '~/models/user';
import colors from '~/theme/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  border: 1px solid ${colors.gray200};
  padding: 12px 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const UserInformation = styled.div`
  margin-bottom: 16px;
`;

const Company = styled.div``;

type UserItemProps = {
  user: TUser;
};

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <Container>
      <UserInformation>
        <Row>
          <Typography variant="largeText" tColor="gray800">
            {user.name}
          </Typography>
          <Typography tColor="gray700">{user.username}</Typography>
        </Row>
        <Typography>{user.email}</Typography>
      </UserInformation>
      <Company>
        <Typography>{user.company.name}</Typography>
        <Typography>{user.company.bs}</Typography>
        <Typography>{user.company.catchPhrase}</Typography>
      </Company>
    </Container>
  );
};

export default UserItem;
