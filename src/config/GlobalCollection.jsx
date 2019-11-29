import * as React from 'react';
import StyleNormalizer from './StyleNormalizer';

const GlobalCollection = ({ children }) => {
  return (
    <div>
      <StyleNormalizer />
      {children}
    </div>
  );
};

export default GlobalCollection;
