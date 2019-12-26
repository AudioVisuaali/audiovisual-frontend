import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[40] : p.theme.grey[800]);

const Version = styled.span`
  margin-left: 2px;
  font-size: 10px;
  opacity: 0.7;
  color: ${color};
`;

export default Version;
