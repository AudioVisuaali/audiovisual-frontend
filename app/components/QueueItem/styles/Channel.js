import styled from 'styled-components';
import device from 'styles/device';

const Channel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${p => (p.theme.isDark ? p.theme.light[700] : p.theme.grey[600])};

  @media screen and (${device.tablet}) {
    font-size: 12px;
  }
`;

export default Channel;
