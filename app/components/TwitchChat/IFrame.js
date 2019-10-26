import styled from 'styled-components';

const IFrame = styled.iframe`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 760px) {
    height: 800px;
  }
`;

export default IFrame;
