import { css, keyframes } from 'styled-components';

const fadeAndSlideInFromLeft = css`
  ${keyframes`
    0% {
      opacity: 1;
      transform: translateX(0);
    }

    100% {
      opacity: 0;
      transform: translateX(0.5em);
    }
  `}
`;

export default fadeAndSlideInFromLeft;
