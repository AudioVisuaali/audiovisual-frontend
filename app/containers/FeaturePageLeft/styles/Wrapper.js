import styled from 'styled-components';
import device from 'styles/device';

export default styled.div`
  flex-grow: 1;
  height: 100%;

  @media screen and (${device.tablet}) {
    height: auto;
  }
`;
