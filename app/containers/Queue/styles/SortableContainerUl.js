import styled from 'styled-components';
import device from 'styles/device';

const SortableContainerUl = styled.ul`
  cursor: grabbing;
  padding-left: 0;

  @media screen and (${device.laptopL}) {
    padding-left: 0;
  }
`;

export default SortableContainerUl;
