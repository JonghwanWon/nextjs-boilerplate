import { FC } from 'react';
import styled from 'styled-components';

import RouteLink, { RouteLinkProps } from '~/components/RouteLink';

const Container = styled.header`
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 12px;
`;

const Menus = styled.ul`
  display: flex;
  align-items: center;
`;

const Menu = styled.li`
  padding: 0 4px;
  margin: 0 6px;
`;

type GnbMenu = {
  name: string;
  route: RouteLinkProps;
};

type GnbProps = Record<string, unknown>;

const Gnb: FC<GnbProps> = ({}) => {
  const menus: GnbMenu[] = [
    { name: 'Home', route: { href: '/' } },
    { name: 'Users', route: { href: '/users' } },
    { name: 'Posts', route: { href: '/posts' } },
  ];
  return (
    <Container>
      <Nav>
        <Menus>
          {menus.map((menu) => (
            <Menu key={menu.name}>
              <RouteLink {...menu.route}>{menu.name}</RouteLink>
            </Menu>
          ))}
        </Menus>
      </Nav>
    </Container>
  );
};

export default Gnb;
