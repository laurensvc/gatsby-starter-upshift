import axios from 'axios';
import { Flex } from 'reflexbox';
import { FormElement, FormInput, FormTextArea, FormWrapper } from './';
import React from 'react';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Form = () => {
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { name, email, phone, message } = formValues;
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSubmit = (e) => {
    setSending(true);
    axios
      .post('/', encode({ 'form-name': 'contact-dokwest29', ...formValues }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .then(() => setSent(true))
      .catch(() => setError(true));
    setSending(false);
    e.preventDefault();
  };

  const handleChange = (e) => setFormValues({ ...formValues, [e.target.name]: e.target.value });

  console.log(sending);

  return (
    <Flex justifyContent={'center'}>
      <FormWrapper p={[3, 3, 4]} pt={[3]}>
        <form name="contact-dokwest29" data-netlify="true">
          <input type="hidden" name="form-name" value="contact-dokwest29" />
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
            <button disabled={sending} onClick={handleSubmit}>
              Verzenden
            </button>
          </Flex>
          <Flex justifyContent="flex-end">{sent && <small>Bericht verzonden.</small>}</Flex>
          <Flex justifyContent="flex-end">{error && <small>Er liep iets mis, probeer nog eens.</small>}</Flex>
        </form>
      </FormWrapper>
    </Flex>
  );
};

export default Form;
