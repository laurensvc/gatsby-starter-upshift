import * as React from 'react';
import StyleNormalizer from './StyleNormalizer';

const GlobalCollection = ({ children }) => {
  return (
    <>
      <StyleNormalizer />
      {children}
    </>
  );
};

export default GlobalCollection;
