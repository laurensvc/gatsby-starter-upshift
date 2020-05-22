import { css } from './';

export const media = {
  desktop: (literals, ...placeholders) =>
    css`
      @media (min-width: 1601px) {
        ${css(literals, ...placeholders)};
      }
    `,
  laptopLG: (literals, ...placeholders) =>
    css`
      @media (min-width: 1301px) and (max-width: 1600px) {
        ${css(literals, ...placeholders)};
      }
    `,

  laptopSM: (literals, ...placeholders) =>
    css`
      @media (min-width: 1025px) and (max-width: 1300px) {
        ${css(literals, ...placeholders)};
      }
    `,
  mobile: (literals, ...placeholders) =>
    css`
      @media (min-width: 320px) and (max-width: 767px) {
        ${css(literals, ...placeholders)};
      }
    `,
  tablet: (literals, ...placeholders) =>
    css`
      @media (min-width: 768px) and (max-width: 1024px) {
        ${css(literals, ...placeholders)};
      }
    `,
  tabletAndBelow: (literals, ...placeholders) =>
    css`
      @media (min-width: 320px) and (max-width: 1024px) {
        ${css(literals, ...placeholders)};
      }
    `,
};
