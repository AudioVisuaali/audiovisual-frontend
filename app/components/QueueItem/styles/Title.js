import styled from 'styled-components';
import device from 'styles/device';

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${p => (p.theme.isDark ? p.theme.light[50] : p.theme.dark[500])};

  @media screen and ${device.tablet} {
    font-size: 14px;
  }
`;

export default Title;
