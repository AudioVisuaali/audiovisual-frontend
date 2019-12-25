import styled, { css } from 'styled-components';
import fadeAndSlideInFromLeft from 'styles/animations/fadeAndSlideInFromLeft';
import fadeAndSlideOutToRight from 'styles/animations/fadeAndSlideOutToRight';

const fadeOut = css`
  animation: ${fadeAndSlideOutToRight} 200ms;
`;

const fadeIn = css`
  animation: ${fadeAndSlideInFromLeft} 200ms;
`;

const QueItemContainer = styled.div`
  ${p => p.fadingOut && fadeOut}
  ${p => p.fadingIn && fadeIn}
`;

export default QueItemContainer;
