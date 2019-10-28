import styled from 'styled-components';
import device from 'styles/device';

const Wrapper = styled.div`
  @media screen and ${device.tablet} {
    box-shadow: none;
  }
`;

export default Wrapper;
