import styled from 'styled-components';

const PreviewContainer = styled.div`
  width: 600px;
  height: 334px;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 2px 0 20px;

  @media only screen and (max-width: 1200px) {
    width: 400px;
    height: 225px;
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export default PreviewContainer;
