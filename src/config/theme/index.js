import * as styledComponents from 'styled-components';
import GlobalStyle from './globalStyle';
import theme from './theme';

const { default: styled, css, keyframes, ThemeProvider, withTheme, createGlobalStyle } = styledComponents;

export { css, createGlobalStyle, keyframes, ThemeProvider, withTheme, theme, GlobalStyle };
export default styled;
