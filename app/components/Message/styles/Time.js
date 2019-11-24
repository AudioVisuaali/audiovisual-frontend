import styled from 'styled-components';
import device from 'styles/device';

const Time = styled.span`
  color: ${p => (p.theme.isDark ? p.theme.whiteRGBA[20] : p.theme.grey[800])};
  font-size: 10px;
  font-weight: 300;

  @media screen and (${device.tablet}) {
    font-size: 8px;
  }
`;

export default Time;
