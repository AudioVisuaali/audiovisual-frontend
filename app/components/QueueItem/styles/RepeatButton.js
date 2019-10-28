import styled from 'styled-components';

const hoverBackground = p =>
  p.theme.isDark ? p.theme.darkRGBA[40] : p.theme.grey[800];
const svgColor = p =>
  p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.whiteRGBA[80];

const RepeatButton = styled.button`
  flex-shrink: 0;
  border: none;
  width: 32px;
  height: 32px;
  background-color: ${p =>
    p.theme.isDark ? p.theme.darkRGBA[10] : p.theme.grey[700]};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-right: 5px;

  transition: all 200ms;

  &:hover {
    background-color: ${hoverBackground};
  }

  & svg {
    color: ${svgColor};
    width: 16px;
    height: 16px;

    transition: all 200ms;
  }

  &:hover svg {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export default RepeatButton;
