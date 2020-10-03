import * as React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import paletteTheme from '../../config/theme/paletteTheme';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper flexWrap="wrap">
        <FooterBlock width={[1, 1 / 3, 1 / 3]}>
          <FooterText>
            {`\u00A9`} upshift {currentYear}
          </FooterText>
        </FooterBlock>
        <FooterBlock width={[1, 1 / 3, 1 / 3]}></FooterBlock>
        <FooterBlock width={[1, 1 / 3, 1 / 3]}>
          <FooterTitle>Info</FooterTitle>
          <FooterText>Rknr: BE42 0018 7052 4354</FooterText>
        </FooterBlock>
      </FooterWrapper>
    </FooterContainer>
  );
};

// TODO: adjust max width to constant for max site width
const FooterContainer = styled.div`
  background: ${paletteTheme.secondary.shade4};
  border-radius: 6px 6px 0 0;
  bottom: 0;
  color: white;
  display: flex;
  left: 0;
  padding: 20px 0 10px;
  margin-top: 40px;
  max-width: 100%;
  min-height: 100px;
  justify-content: center;
`;

const FooterWrapper = styled(Flex)`
  width: 1024px;
  justify-content: center;
`;

const FooterBlock = styled(Box)`
  padding: 20px;
`;

const FooterTitle = styled.h3`
  font-family: 'Abril Fatface';
  font-size: 18px;
  font-weight: 100;
  padding-bottom: 20px;
`;

const FooterText = styled.p`
  font-size: 16px;
  color: white;
  a {
    text-decoration: underline;
  }
`;

export default Footer;
