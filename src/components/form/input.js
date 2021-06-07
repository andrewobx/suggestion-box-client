import styled from 'styled-components';
import theme from '../theme';

const Input = styled.input`
  margin: 10px 5px;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  padding: 7px;
  box-sizing: border-box;
  width: 100%;
  :focus {
    outline-color: ${theme.colors.primary};
  }
`;

export default Input;
