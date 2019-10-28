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
  color: ${p => (p.theme.isDark ? p.theme.light[50] : p.theme.dark[500])};

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
