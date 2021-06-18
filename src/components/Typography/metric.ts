import { SimpleInterpolation, css } from 'styled-components';

type Variant = 'body' | 'largeText' | 'title';
export const varaintStyles: {
  [key in Variant]: SimpleInterpolation;
} = {
  body: css`
    font-size: 14px;
  `,
  largeText: css`
    font-size: 16px;
  `,
  title: css`
    font-size: 21px;
  `,
};
