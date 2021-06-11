import { FlattenSimpleInterpolation, css } from 'styled-components';

const mediaBreakPoints = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  laptopM: 1280,
  laptopL: 1440,
  desktop: 1600,
  desktopL: 1920,
};

const mediaLabels = Object.keys(mediaBreakPoints) as Array<
  keyof typeof mediaBreakPoints
>;

const media = mediaLabels.reduce((acc, label) => {
  acc[label] = (
    style: FlattenSimpleInterpolation | TemplateStringsArray,
  ) => css`
    @media (max-width: ${mediaBreakPoints[label]}px) {
      ${style}
    }
  `;
  return acc;
}, {} as Record<keyof typeof mediaBreakPoints, (style: FlattenSimpleInterpolation | TemplateStringsArray) => FlattenSimpleInterpolation>);

export { media };
