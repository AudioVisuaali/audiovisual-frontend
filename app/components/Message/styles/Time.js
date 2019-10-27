import styled from 'styled-components';
import device from 'styles/device';

const Time = styled.span`
  color: rgba(255, 255, 255, 0.2);
  font-size: 10px;
  font-weight: 300;

  @media screen and ${device.tablet} {
    font-size: 8px;
  }
`;

export default Time;
