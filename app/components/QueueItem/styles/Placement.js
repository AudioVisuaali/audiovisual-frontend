import styled from 'styled-components';
import device from 'styles/device';

const Placement = styled.div`
  width: 100px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  font-weight: 500;

  @media screen and ${device.tablet} {
    width: 60px;
    height: 68px;
    font-size: 26px;
    font-weight: 500;
  }

  @media screen and ${device.mobileL} {
    width: 40px;
    height: 68px;
    font-size: 22px;
    font-weight: 500;
  }
`;

export default Placement;
