import styled from 'styled-components';
import fadeAndSlideInFromTop from 'styles/animations/fadeAndSlideInFromTop';

export default styled.form({
  flexShrink: 0,
  maxWidth: 420,
  width: '100%',
  margin: '10px 10px 30px',

  animation: `${fadeAndSlideInFromTop} ease 1s`,
});
