// import axios from 'axios';
import React from 'react';

// const encode = data => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&');
// };

const Form = () => {
  return (
    <div>form here</div>
    // <Flex justifyContent={'center'}>
    //   <FormWrapper p={[3, 3, 4]} pt={[3]}>
    //     <form name="contact-upshift" data-netlify="true" onSubmit={this.handleSubmit}>
    //       <input type="hidden" name="form-name" value="contact-upshift" />
    //       <FormElement>
    //         Naam
    //         <FormInput type="text" name="name" value={name} onChange={handleChange} />
    //       </FormElement>
    //       <FormElement>
    //         E-mail
    //         <FormInput type="email" name="email" value={email} onChange={handleChange} />
    //       </FormElement>
    //       <FormElement>
    //         Telefoon
    //         <FormInput type="tel" name="phone" value={phone} onChange={handleChange} />
    //       </FormElement>
    //       <FormElement>
    //         Bericht
    //         <FormTextArea rows="4" name="message" value={message} onChange={handleChange} />
    //       </FormElement>
    //       <Flex justifyContent="flex-end">
    //         <FormButton type="submit">Verzenden</FormButton>
    //       </Flex>
    //       <Flex justifyContent="flex-end">{state.sent && <small>Bericht verzonden.</small>}</Flex>
    //     </form>
    //   </FormWrapper>
    // </Flex>
  );
};

export default Form;

// export default class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: '', email: '', phone: '', message: '', isSending: false, sent: false };
//   }

//   handleSubmit = e => {
//     console.log('Submitting form.');
//     this.setState({ isSending: true });
//     axios
//       .post('/', encode({ 'form-name': 'contact-upshift', ...this.state }), {
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       })
//       .then(() => {
//         this.setState({ sent: true });
//       })
//       .catch(function(error) {
//         console.log('Error while sending: ' + error);
//       });
//     this.setState({ isSending: false });
//     e.preventDefault();
//   };

//   handleChange = e => this.setState({ [e.target.name]: e.target.value });

//   render() {
//     const { name, email, phone, message } = this.state;
//     const { handleChange, state } = this;
//   }
// }
