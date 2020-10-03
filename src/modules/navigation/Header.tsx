import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Box } from 'reflexbox';
import styled from 'styled-components';
import { MAX_CONTENT_WIDTH } from '../../config/constants/general';
import NavItem from './NavItem';
import media from '../../config/utils/media';

const Header: React.FC = () => {
  const [backgroundActive, setBackgroundActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setBackgroundActive(true);
    } else {
      setBackgroundActive(false);
    }
  };

  if (typeof window !== `undefined`) {
    window.addEventListener('scroll', changeBackground);
  }

  return (
    <HeaderWrapper className={backgroundActive ? 'backgroundActive' : ''}>
      <NavFlex>
        <BrandWrapper>
          <Link aria-label="link to upshift homepage" to="/">
            <BrandImage alt="upshift logo" src={''} />
            {/* edit src */}
          </Link>
        </BrandWrapper>
        <Links>
          <NavItem to="/" activeClassName="activeLink">
            Home
          </NavItem>
          <NavItem to="/projects" activeClassName="activeLink">
            Projecten
          </NavItem>
          <NavItem to="/blog" activeClassName="activeLink">
            Blog
          </NavItem>
          <NavItem to="/contact" activeClassName="activeLink">
            Contact
          </NavItem>
        </Links>
      </NavFlex>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.nav`
  background: transparent;
  left: 0;
  position: sticky;

  top: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.2s;

  &.backgroundActive {
    background: #ffffff;
    transition: all 0.2s;
    box-shadow: 0px 4px 35px rgba(20, 42, 67, 0.25);
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }
`;

const NavFlex = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${MAX_CONTENT_WIDTH};

  ${media.tabletAndBelow`
    // height: 80px;
    flex-direction: column;
  `};
`;

const BrandWrapper = styled(Box)`
  align-self: center;
`;

const BrandImage = styled.img`
  max-height: 35px;
  height: 35px;
`;

const Links = styled.div``;

export default Header;
