import styled from 'styled-components';

const PlacementContainer = styled.div`
  color: #888;

  & svg {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 760px) {
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export default PlacementContainer;
