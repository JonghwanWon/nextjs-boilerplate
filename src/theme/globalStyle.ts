import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    line-height: 1;
  }

  body {
    color: ${colors.gray900};
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont,
      'Malgun Gothic', '맑은 고딕', helvetica, 'Apple SD Gothic Neo',
      sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    line-height: 1.4;
  }

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  /* change autocomplete css */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export default GlobalStyle;
