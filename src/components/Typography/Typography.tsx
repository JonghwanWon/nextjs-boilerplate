import { PropsWithChildren, PropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

import { varaintStyles } from './metric';

type TContainer = {
  variant: keyof typeof varaintStyles;
  color: string;
};
const Container = styled.p<TContainer>(({ color, variant }) => [
  css`
    color: ${color};
  `,
  varaintStyles[variant],
]);

export type TypographyProps = {
  variant?: keyof typeof varaintStyles;
  as?: keyof JSX.IntrinsicElements;
  color?: string;
};

const Typography = ({
  children,
  as,
  variant = 'body',
  color = 'inherit',
  ...props
}: PropsWithChildren<PropsWithoutRef<TypographyProps>>) => {
  return (
    <Container {...props} as={as} variant={variant} color={color}>
      {children}
    </Container>
  );
};

export default Typography;
