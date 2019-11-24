import styled from 'styled-components';

const backgroundColor = p => {
  if (!p.selected) {
    return 'transparent';
  }

  return p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.grey[700];
};

const Selected = styled.span`
  height: 2px;
  background-color: ${backgroundColor};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  transition: background-color 200ms;
`;

export default Selected;
