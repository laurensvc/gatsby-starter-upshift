import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'gatsby';
import { Flex } from 'reflexbox';
import styled from 'styled-components';

const GlobalCookieBanner = () => {
  return (
    <Flex>
      <CookieConsent
        buttonStyle={buttonStyle}
        buttonText={'Begrepen'}
        contentStyle={contentStyle}
        cookieName={'upshift-cookie-consent'}
        flipButtons={true}
        sameSite={'strict'}
        style={style}
      >
        🍪 upshift gebruikt cookies om uw surfervaring te verbeteren. <StyledLink to="/privacybeleid">Meer info</StyledLink>
      </CookieConsent>
    </Flex>
  );
};

const style = {
  backgroundColor: 'white',
  boxShadow: '0 -3px 30px 0 rgba(0, 0, 0, 0.3)',
  color: '#1e3b5c',
  fontSize: '16px',
};

const buttonStyle = {
  backgroundColor: '#1e3b5c',
  color: 'white',
  fontSize: '16px',
  fontFamily:
    '"Josefin Sans",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen", "Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
  margin: '15px 25px 15px 15px',
  borderRadius: '5px',
  textDecoration: 'none',
  marginLeft: 'auto',
};

const contentStyle = {
  margin: '15px 15px 5px 15px',
};

const StyledLink = styled(Link)`
  color: #1ed6cb;
  display: inline-flex;
  align-items: center;
`;

export default GlobalCookieBanner;
