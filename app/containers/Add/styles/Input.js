import styled from 'styled-components';

const color = props =>
  props.theme.isDark ? props.theme.light[700] : props.theme.grey[700];

const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${color};
  padding: 8px 14px;
  border-radius: 8px;
  width: 100%;
`;

export default Input;
