import { css } from 'styled-components';

import { nProgressConfig } from './nProgressConfig';

export const nProgressStyle = css`
  #nprogress {
    pointer-events: none;
    z-index: 9999;
  }
  #nprogress .bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${nProgressConfig.height}px;
    background: ${nProgressConfig.color};
  }
  #nprogress .peg {
    position: absolute;
    right: 0px;
    display: block;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${nProgressConfig.color},
      0 0 5px ${nProgressConfig.color};
    opacity: 1;
    transform: rotate(3deg) translate(0px, -4px);
  }
`;

// spinner
/* #nprogress .spinner {
    z-index: 1031;
    top: 15px;
    right: 15px;
    display: 'block';
  }
  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: ${nProgressConfig.color};
    border-left-color: ${nProgressConfig.color};
    animation: nprogresss-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
    border-radius: 50%;
  } */
