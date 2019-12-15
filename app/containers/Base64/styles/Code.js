import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[50] : p.theme.grey[800]);

const backgroundColor = p =>
  p.theme.isDark ? p.theme.darkRGBA[20] : p.theme.darkRGBA[10];

const Code = styled.code`
  background-color: ${backgroundColor};
  border: 1px solid rgba(0, 0, 0, 0.4);
  color: ${color};
  border-radius: 4px;
  white-space: pre;
  display: block;
`;

export default Code;
