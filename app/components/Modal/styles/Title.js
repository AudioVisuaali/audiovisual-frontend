import styled from 'styled-components';

const Title = styled.h2`
  margin: 10px 0 0;
  color: ${p => (p.theme.isDark ? p.theme.light[50] : p.theme.dark[700])};
  font-weight: 500;
  font-size: 22px;
  padding-left: 20px;
`;

export default Title;
