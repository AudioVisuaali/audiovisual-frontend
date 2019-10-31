import styled from 'styled-components';
import fadeAndSlideInFromLeft from 'styles/animations/fadeAndSlideInFromLeft';

const backgroundColor = p =>
  p.theme.isDark ? p.theme.darkRGBA[30] : p.theme.darkRGBA[50];
const color = p =>
  p.theme.isDark ? p.theme.whiteRGBA[80] : p.theme.whiteRGBA[100];
const svgColor = p =>
  p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.whiteRGBA[90];

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px 6px 6px;
  color: ${color};
  margin: 0 6px 6px 0;
  animation: ${fadeAndSlideInFromLeft} 200ms;

  & svg {
    flex-shrink: 0;
    margin-right: 6px;
    width: 14px;
    height: 14px;
    color: ${svgColor};
  }
`;

export default Wrapper;
