import { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

import colors, { Colors } from '~/theme/colors';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

type TContainer = {
  color: string;
};
const Container = styled.div<TContainer>(
  ({ color }) => css`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 3px solid ${color};
    border-left: 3px solid ${colors.gray200};
    animation: ${rotate} 800ms linear infinite;
  `,
);

type SpinnerProps = { color?: keyof Colors };

const Spinner: FC<SpinnerProps> = ({ color = 'primary' }) => {
  const _color = colors[color];
  return <Container color={_color} />;
};

export default Spinner;
