import styled from 'styled-components';
import device from 'styles/device';

const Thumbnail = styled.div`
  position: relative;
  margin-right: 20px;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  width: 200px;
  height: 112px;
  background-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  transition: box-shadow 200ms ease-out;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.38);
  }

  & a {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media screen and ${device.tablet} {
    width: 120px;
    height: 68px;
  }
`;

export default Thumbnail;
