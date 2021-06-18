import { PropsWithChildren, PropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';

import { OneOrAnother } from '~/helpers/utils/typeHelpers';
import colors, { Colors } from '~/theme/colors';

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

type ColorProps = OneOrAnother<{ color?: string }, { tColor?: keyof Colors }>;

export type TypographyProps = {
  variant?: keyof typeof varaintStyles;
  as?: keyof JSX.IntrinsicElements;
} & ColorProps;

const Typography = ({
  children,
  as,
  variant = 'body',
  color = 'inherit',
  tColor,
  ...props
}: PropsWithChildren<PropsWithoutRef<TypographyProps>>) => {
  const _color = tColor ? colors[tColor] : color;

  return (
    <Container {...props} as={as} variant={variant} color={_color}>
      {children}
    </Container>
  );
};

export default Typography;
