import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Form } from './contactForm';
import styled from '../../config/theme';

const Contact = () => (
  <ContactPageWrapper>
    <Box width={[1]} p={3}>
      <ContactPageTitle>Contact formulier</ContactPageTitle>
      <Form />
    </Box>
  </ContactPageWrapper>
);

export default Contact;

const ContactPageWrapper = styled(Flex)`
  margin-top: 50px;
`;

const ContactPageTitle = styled.h1`
  padding: 0px 12px;
  margin: 45px auto 25px;
  max-width: 650px;
  text-align: center;
  font-size: 2rem;
`;
