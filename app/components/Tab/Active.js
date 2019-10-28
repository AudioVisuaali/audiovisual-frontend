import styled from 'styled-components';

const Active = styled.span`
  height: 2px;
  background-color: ${p =>
    p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.grey[700]};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  transition: background-color 200ms;

  ${props => !props.active && `background-color: transparent;`}
`;

export default Active;
