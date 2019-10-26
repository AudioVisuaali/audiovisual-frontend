import styled, { keyFrames } from 'styled-components';

const fadeAndSlideIn = keyFrames`
0% {
    transform: translate(-10px, 0px);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px 6px 6px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 6px 6px 0;
  animation: ${fadeAndSlideIn} 200ms;

  & svg {
    flex-shrink: 0;
    margin-right: 6px;
    width: 14px;
    height: 14px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export default Wrapper;
