import { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { OneOrAnother } from '~/helpers/utils/typeHelpers';
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

type ColorProps = OneOrAnother<{ tColor?: keyof Colors }, { color?: string }>;
type SpinnerProps = {} & ColorProps;

const Spinner: FC<SpinnerProps> = ({ tColor = 'primary', color }) => {
  const _color = color ?? colors[tColor];
  return <Container color={_color} />;
};

export default Spinner;
