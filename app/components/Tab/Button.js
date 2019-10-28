import styled from 'styled-components';
import device from 'styles/device';

const hoverBackground = p =>
  p.theme.isDark ? p.theme.darkRGBA[20] : p.theme.darkRGBA[10];
const focusColor = p =>
  p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.darkRGBA[60];

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  color: ${p =>
    p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.darkRGBA[60]};
  padding: 10px 16px;

  transition: background-color 200ms;

  &:hover {
    background-color: ${hoverBackground};
  }

  &:active,
  :focus {
    color: ${focusColor};
  }

  & svg {
    width: 12px;
  }

  @media screen and ${device.tablet} {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media screen and ${device.mobileL} {
    font-size: 12px;
    padding: 8px 8px;
  }
`;

export default Button;
