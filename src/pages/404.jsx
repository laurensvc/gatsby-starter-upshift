import React from 'react';
import fourOfour from '../assets/images/fourOfour.svg';
import GlobalCollection from '../config/GlobalCollection';
import styled from '../config/theme';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <GlobalCollection>
    <FourWrapper>
      <FourOFourImg src={fourOfour} />
      <NotFoundTitle>PAGE NOT FOUND</NotFoundTitle>
      <Link to="/">Go home</Link>
    </FourWrapper>
  </GlobalCollection>
);

const NotFoundTitle = styled.h2`
  padding-top: 20px;
`;

const FourOFourImg = styled.img`
  max-width: 60%;
  padding: 1% 5%;
  margin-top: 40px;
`;

const FourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default NotFoundPage;
