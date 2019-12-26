import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.grey[700]);

const Logo = styled.a`
  margin-left: 3px;
  opacity: 0.4;
  color: ${color};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export default Logo;
