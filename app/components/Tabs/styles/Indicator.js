import styled from 'styled-components';

const backgroundColor = p =>
  p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.grey[700];

const Selected = styled.span`
  pointer-events: none;
  height: 2px;
  background-color: ${backgroundColor};
  position: absolute;
  bottom: 0;
  left: ${p => p.left}px;
  width: ${p => p.spread}px;

  transition: all 200ms;
`;

export default Selected;
