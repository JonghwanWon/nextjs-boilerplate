import Link, { LinkProps as NextLinkProps } from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`;

export type RouteLinkProps = NextLinkProps & {
  target?: string;
  rel?: string;
  // for styled-components extends
  className?: string;
};

const RouteLink: FC<RouteLinkProps> = ({
  children,
  passHref = true,
  target,
  rel,
  className,
  ...props
}) => (
  <Link {...props} passHref={passHref}>
    <StyledAnchor className={className} target={target} rel={rel}>
      {children}
    </StyledAnchor>
  </Link>
);

export default RouteLink;
