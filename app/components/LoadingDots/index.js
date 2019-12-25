import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  @keyframes showHideDot {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    60% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
    }
  }

  box-shadow: 5px 10px 4px rgba(0, 0, 0, 0.4);
  will-change: opacity;
  margin: 20px;
  background-color: #fff;
  border-radius: 100%;
  height: 20px;
  width: 20px;
  display: block;
  opacity: 0;
  animation: showHideDot 2.5s ease-in-out infinite;
  ${p => p.delay && `animation-delay: ${p.delay}ms;`}
`;

const LoadingDots = React.memo(function LoadingDots() {
  return (
    <Wrapper>
      <Dot />
      <Dot delay={200} />
      <Dot delay={400} />
    </Wrapper>
  );
});

export default LoadingDots;
