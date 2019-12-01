import { Box } from 'reflexbox';
import styled from '../../../config/theme';

const FormWrapper = styled(Box)`
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05), 0 10px 20px 0 rgba(0, 0, 0, 0.15);
  margin: auto;
  max-width: 576px;
  flex-grow: 1;
`;

export default FormWrapper;
