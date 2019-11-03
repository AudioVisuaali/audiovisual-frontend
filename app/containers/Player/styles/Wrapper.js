import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #000;

  & iframe {
    pointer-events: none;
  }
`;

export default Wrapper;
