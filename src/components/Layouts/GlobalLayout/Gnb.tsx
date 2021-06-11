import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.header`
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 12px;
`;

type GnbProps = Record<string, unknown>;

const Gnb: FC<GnbProps> = ({}) => {
  return (
    <Container>
      <Nav>Navigation</Nav>
    </Container>
  );
};

export default Gnb;
