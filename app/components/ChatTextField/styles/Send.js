import styled from 'styled-components';
const backgroundColor = p =>
  p.theme.isDark ? p.theme.grey[700] : p.theme.light[700];
const hoverBackgroundColor = p =>
  p.theme.isDark ? p.theme.grey[700] : p.theme.light[800];
const disabledBackgroundColor = p =>
  p.theme.isDark ? p.theme.grey[700] : p.theme.light[600];

const Send = styled.button`
  cursor: pointer;
  background-color: ${backgroundColor};
  border: none;
  color: #fff;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;

  transition: all 200ms ease-out;

  &:hover {
    background-color: ${hoverBackgroundColor};
  }

  &:disabled,
  :hover:disabled {
    color: ${p => (p.theme.isDark ? p.theme.light[700] : p.theme.light[800])};
    cursor: not-allowed;
    background-color: ${disabledBackgroundColor};
  }
`;

export default Send;
