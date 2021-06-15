import { observer } from 'mobx-react';
import { FC } from 'react';
import styled from 'styled-components';

import { getStore } from '~/stores/init';

const Container = styled.div``;

type HomeProps = {};

const Home: FC<HomeProps> = ({}) => {
  const sampleStore = getStore((stores) => stores.sample);

  return (
    <Container>
      <div>Home</div>
      <p>initial state: {JSON.stringify(sampleStore.mySampleData)}</p>
      <p>server side: {sampleStore.mySsrData}</p>
    </Container>
  );
};

export default observer(Home);
