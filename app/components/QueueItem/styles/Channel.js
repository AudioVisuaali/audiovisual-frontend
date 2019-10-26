import styled from 'styled-components';
import device from 'styles/device';

const Channel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #aaa;

  @media screen and ${device.tablet} {
    font-size: 12px;
  }
`;

export default Channel;
