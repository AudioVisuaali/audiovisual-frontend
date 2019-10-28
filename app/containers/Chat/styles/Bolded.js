import styled from 'styled-components';

const Bolded = styled.span`
  font-weight: 500;
  color: ${p => (p.theme.isDark ? p.theme.whiteRGBA[90] : p.theme.grey[700])};
`;

export default Bolded;
