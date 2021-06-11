import { FC } from 'react';
import styled from 'styled-components';

import Helmet, { HelmetProps } from '~/components/Helmet';

import Gnb from './Gnb';

const Container = styled.div``;

type GlobalLayoutProps = {
  helmet?: HelmetProps;
  noGnb?: boolean;
};

const GlobalLayout: FC<GlobalLayoutProps> = ({
  children,
  helmet,
  noGnb = false,
}) => {
  return (
    <>
      <Helmet {...helmet} />
      <Container>
        {!noGnb && <Gnb />}
        {children}
      </Container>
    </>
  );
};

export function getGlobalLayout<T>(page: T, layoutProps?: GlobalLayoutProps) {
  return <GlobalLayout {...layoutProps}>{page}</GlobalLayout>;
}

export default GlobalLayout;
