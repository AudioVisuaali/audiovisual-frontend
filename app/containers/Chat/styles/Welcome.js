import styled from 'styled-components';

const Welcome = styled.div`
  text-align: center;
  padding: 30px 0 20px;
  color: ${p => (p.theme.isDark ? p.theme.light[100] : p.theme.grey[700])};
  font-size: 16px;
  font-weight: 500;
`;

export default Welcome;
