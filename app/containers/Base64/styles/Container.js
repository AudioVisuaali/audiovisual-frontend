import styled from 'styled-components';
import fadeAndSlideInFromTop from 'styles/animations/fadeAndSlideInFromTop';

export default styled.div`
  flex-shrink: 0;
  max-width: 520px;
  width: 100%;
  margin: 10px 10px 30px;

  animation: ${fadeAndSlideInFromTop} ease 1s;
`;
