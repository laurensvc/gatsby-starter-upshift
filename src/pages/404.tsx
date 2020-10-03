import React from 'react';
import styled from 'styled-components';
import FourIllustration from '../assets/404/illustration_page_not_found.svg';
import GlobalCollection from '../config/globals/GlobalCollection';

const NotFoundPage: React.FC = () => {
  return (
    <GlobalCollection>
      <FourWrapper />
    </GlobalCollection>
  );
};

const FourWrapper = styled.div`
  align-items: center;
  background: url(${FourIllustration}) no-repeat center center;
  display: flex;
  flex-direction: column;
  height: 70vh;
  margin-top: 100px;
  text-align: center;
  width: 100%;
`;

export default NotFoundPage;
