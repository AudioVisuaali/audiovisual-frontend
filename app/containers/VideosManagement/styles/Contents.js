import styled from 'styled-components';
import fadeIn from 'styles/animations/fadeIn';

const Contents = styled.div`
  min-height: 600px;
  max-width: 1000px;
  padding: 40px 30px;
  padding-bottom: 600px;
  margin: 0px auto;

  animation: ${fadeIn} 800ms;

  @media screen and (max-width: 760px) {
    padding-bottom: 0;
    min-height: auto;
  }
`;

export default Contents;
