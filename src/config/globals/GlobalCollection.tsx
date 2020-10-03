import * as React from 'react';
import GlobalHead from './GlobalHead';
import GlobalStyle from './GlobalStyle';
import { Footer, Header } from '../../modules/navigation';
// import GlobalCookieBanner from './GlobalCookieBanner';

const GlobalCollection: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalHead />
      <GlobalStyle />
      <Header />
      {children}
      {/* <GlobalCookieBanner /> */}
      <Footer />
    </React.Fragment>
  );
};

export default GlobalCollection;
