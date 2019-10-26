import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
  
    60% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 3s;
`;

export default Wrapper;
