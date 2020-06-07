import styled from 'styled-components';
import fadeIn from 'styles/animations/fadeIn';
import fadeOut from 'styles/animations/fadeOut';

const Contents = styled.div`
  min-height: 600px;
  max-width: 800px;
  padding: 30px 30px 40px;
  padding-bottom: 100px;
  margin: 0px auto;

  animation: ${p => (p.showing ? fadeIn : fadeOut)}
    ${p => (p.showing ? '120ms' : '80ms forwards')};
`;

export default Contents;
