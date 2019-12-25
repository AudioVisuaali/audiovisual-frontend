import styled from 'styled-components';

const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes showAfter {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: showAfter 4s forwards;
`;

export default LoadingContainer;
