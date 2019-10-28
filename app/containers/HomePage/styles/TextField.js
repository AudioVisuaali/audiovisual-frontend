import styled from 'styled-components';

const TextField = styled.input`
  opacity: ${props => (props.theme.isDark ? 0.6 : 0.7)};
  border: 1px solid
    ${p => (p.theme.isDark ? p.theme.light[50] : p.theme.grey[700])};
  background-color: transparent;
  padding: 0.9em 0.6em;
  color: ${p => (p.theme.isDark ? p.theme.light[50] : p.theme.grey[700])};
  font-size: 14px;
  margin-bottom: 2em;
  border-radius: 5px;

  transition: all 200ms ease-in-out;

  &:active,
  :focus,
  :hover {
    opacity: 1;
  }
`;

export default TextField;
