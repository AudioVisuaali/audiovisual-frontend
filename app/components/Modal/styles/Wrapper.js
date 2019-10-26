import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: fadeIn 200ms;

  ${props =>
    props.fadingOut &&
    `
  animation: fadeOut 200ms;
  opacity: 0;
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  `}
`;

export default Wrapper;
