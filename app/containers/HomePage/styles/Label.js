import styled from 'styled-components';

const Label = styled.span`
  color: ${p => (p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.grey[700])};
  display: block;
  padding-bottom: 0.2em;
`;

export default Label;
