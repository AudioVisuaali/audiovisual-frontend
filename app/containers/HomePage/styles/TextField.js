import styled from 'styled-components';

const TextField = styled.input`
  opacity: 0.6;
  border: 1px solid #fff;
  background-color: transparent;
  padding: 0.9em 0.6em;
  color: #fff;
  font-size: 14px;
  margin-bottom: 2em;
  border-radius: 5px;

  transition: all 200ms ease-in-out;

  &:hover {
    opacity: 1;
  }

  &:active,
  :focus {
    opacity: 1;
    color: #fff;
  }
`;

export default TextField;
