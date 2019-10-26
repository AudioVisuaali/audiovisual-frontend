import styled from 'styled-components';
import device from 'styles/device';

const Wrapper = styled.div`
  box-shadow: inset -14px 0 18px -14px rgba(0, 0, 0, 0.5);

  @media screen and ${device.tablet} {
    box-shadow: none;
  }
`;

export default Wrapper;
