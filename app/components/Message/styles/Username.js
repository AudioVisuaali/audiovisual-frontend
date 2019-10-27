import styled from 'styled-components';
import device from 'styles/device';

const Username = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  font-weight: 500;

  @media screen and ${device.tablet} {
    font-size: 10px;
  }
`;

export default Username;
