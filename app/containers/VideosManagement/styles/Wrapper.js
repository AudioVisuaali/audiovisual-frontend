import styled from 'styled-components';
import device from 'styles/device';

const Wrapper = styled.div`
  padding-bottom: 500px;

  @media screen and (${device.tablet}) {
    box-shadow: none;
    padding-bottom: 40px;
  }
`;

export default Wrapper;
