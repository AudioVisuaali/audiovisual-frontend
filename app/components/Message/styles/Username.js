import styled from 'styled-components';
import device from 'styles/device';

const Username = styled.div`
  color: ${p => (p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.dark[700])};
  font-size: 12px;
  font-weight: 500;

  @media screen and ${device.tablet} {
    font-size: 10px;
  }
`;

export default Username;
