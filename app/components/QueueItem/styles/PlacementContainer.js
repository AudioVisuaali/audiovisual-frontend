import styled from 'styled-components';
import device from 'styles/device';

const PlacementContainer = styled.div`
  color: #888;

  & svg {
    width: 30px;
    height: 30px;
  }

  @media screen and ${device.tablet} {
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export default PlacementContainer;
