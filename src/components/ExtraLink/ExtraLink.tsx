import Link, { LinkProps as NextLinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export type RouteLinkProps = NextLinkProps;

const RouteLink = ({
  children,
  ...props
}: PropsWithChildren<RouteLinkProps>) => (
  <Link {...props}>
    <a>{children}</a>
  </Link>
);

export default RouteLink;
