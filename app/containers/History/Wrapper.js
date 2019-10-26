import styled from 'styled-components';
import fadeIn from 'styles/animations/fadeIn';

const Wrapper = styled.div`
  max-width: 1000px;
  padding: 40px 30px;
  margin: 0px auto;

  animation: ${fadeIn} 800ms;
`;

export default Wrapper;
