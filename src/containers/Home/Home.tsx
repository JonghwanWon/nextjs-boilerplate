import { observer } from 'mobx-react';
import { FC } from 'react';
import styled from 'styled-components';

import { getStore } from '~/stores';

const Container = styled.div``;

type HomeProps = {};

const Home: FC<HomeProps> = ({}) => {
  const sampleStore = getStore((stores) => stores.sample);
  const userStore = getStore((stores) => stores.user);

  return (
    <Container>
      <div>Home</div>
      <a href="/other">hello</a>
      <p>initial state: {JSON.stringify(sampleStore.mySampleData)}</p>
      <p>server side: {sampleStore.mySsrData}</p>
      <div>{JSON.stringify(userStore.users)}</div>
    </Container>
  );
};

export default observer(Home);
