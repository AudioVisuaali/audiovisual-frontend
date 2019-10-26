import styled from 'styled-components';
import device from 'styles/device';

const IFrame = styled.iframe`
  height: 100%;
  width: 100%;

  @media screen and ${device.tablet} {
    height: 800px;
  }
`;

export default IFrame;
