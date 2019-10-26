import styled from 'styled-components';

const rotation = props =>
  props.active
    ? `
  transform: rotate(30deg);
`
    : `
  transform: rotate(0deg);
`;

const Button = styled.button`
  outline: 0;
  border: none;
  background-color: transparent;
  color: #fff;

  & svg {
    transition: all 100ms;
    width: 20px;

    ${rotation}

    &:hover {
      transform: rotate(30deg);
    }
  }
`;

export default Button;
