import axios from 'axios';
import { Flex } from 'reflexbox';
import { FormElement, FormInput, FormTextArea, FormWrapper } from './';
import React from 'react';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Form = () => {
  const [name, email, phone, message] = React.useState();
  const [sent, setSent] = React.useState(false);

  const handleSubmit = e => {
    console.log('Submitting form.');
    this.setState({ isSending: true });
    axios
      .post('/', encode({ 'form-name': 'contact-upshift', ...this.state }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .then(() => {
        setSent(true);
      })
      .catch(function(error) {
        console.log('Error while sending: ' + error);
      });
    this.setState({ isSending: false });
    e.preventDefault();
  };

  const handleChange = e => this.setState({ [e.target.name]: e.target.value });

  return (
    <Flex justifyContent={'center'}>
      <FormWrapper p={[3, 3, 4]} pt={[3]}>
        <form name="contact-upshift" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact-upshift" />
          <FormElement>
            Naam
            <FormInput type="text" name="name" value={name} onChange={handleChange} />
          </FormElement>
          <FormElement>
            E-mail
            <FormInput type="email" name="email" value={email} onChange={handleChange} />
          </FormElement>
          <FormElement>
            Telefoon
            <FormInput type="tel" name="phone" value={phone} onChange={handleChange} />
          </FormElement>
          <FormElement>
            Bericht
            <FormTextArea rows="4" name="message" value={message} onChange={handleChange} />
          </FormElement>
          <Flex justifyContent="flex-end">
            <button type="submit">Verzenden</button>
          </Flex>
          <Flex justifyContent="flex-end">{sent && <small>Bericht verzonden.</small>}</Flex>
        </form>
      </FormWrapper>
    </Flex>
  );
};

export default Form;
