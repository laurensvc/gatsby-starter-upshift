import * as React from 'react';
import StyleNormalizer from './StyleNormalizer';
import { ThemeProvider, theme } from './theme';

const GlobalCollection = ({ children }) => {
  return (
    <ThemeProvider theme={theme.default}>
      <StyleNormalizer />
      {children}
    </ThemeProvider>
  );
};

export default GlobalCollection;
