import { darken, lighten } from 'polished';

// base color palette
const PRIMARY_BASE = '#3498db';

// ui colors
const BORDER_BASE = '#ebedef';

const primaryColors = {
  primary: PRIMARY_BASE,
  primary50: '#e3f2fd',
  primary500: darken(0.15, PRIMARY_BASE),
};

const greenColors = {
  green400: '#27ae60',
};

const grayscaleColors = {
  gray900: '#263238',
  gray800: '#424242',
  gray700: '#616161',
  gray600: '#757575',
  gray500: '#9e9e9e',
  gray400: '#bdbdbd',
  gray200: '#eee',
  gray50: '#fafafa',
};

const redColors = {
  red600: '#c0392b',
  red900: '#b71c1c',
};

const yellowColors = {
  amber400: '#ffca28',
};

const uiColors = {
  borderLighten: lighten(0.05, BORDER_BASE),
  border: BORDER_BASE,
  borderDarken: darken(0.05, BORDER_BASE),
};

const colors = {
  ...grayscaleColors,
  ...primaryColors,
  ...greenColors,
  ...redColors,
  ...yellowColors,
  ...uiColors,
};

export type Colors = typeof colors;

export default colors;
