import { ComponentProps, PropsWithChildren } from 'react';

import Link, { type LinkProps } from 'next/link';

type ATagProps = Omit<ComponentProps<'a'>, 'href'>;
export type ExtraLinkProps = LinkProps & ATagProps;

export const ExtraLink = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref = true,
  prefetch,
  locale,
  ...aTagProps
}: PropsWithChildren<ExtraLinkProps>) => {
  const linkProps = {
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
  };

  return (
    <Link {...linkProps}>
      <a {...aTagProps}>{children}</a>
    </Link>
  );
};
