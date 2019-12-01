import styled from '../../../config/theme';

const FormInput = styled.input`
  background: ${props => props.theme.palette.secondary.shade0};
  border-radius: 5px;
  border: 0px solid ${props => props.theme.palette.secondary.shade4};
  font-size: 0.75rem;
  outline: none;
  padding: 15px 10px;
  width: 100%;
  transition: all 0.23s ease-in-out;

  &:hover {
    box-shadow: inset 2px 2px 6px ${props => props.theme.palette.secondary.shade1};
    transition: all 0.23s ease-in-out;
  }

  &:focus {
    box-shadow: inset 2px 2px 6px ${props => props.theme.palette.secondary.shade1};
    transition: all 0.23s ease-in-out;
  }
`;

export default FormInput;
