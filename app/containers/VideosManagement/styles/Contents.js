import styled from 'styled-components';
import device from 'styles/device';
import fadeIn from 'styles/animations/fadeIn';
import fadeOut from 'styles/animations/fadeOut';

const Contents = styled.div`
  min-height: 600px;
  max-width: 800px;
  padding: 40px 30px;
  padding-bottom: 100px;
  margin: 0px auto;

  animation: ${p => (p.showing ? fadeIn : fadeOut)}
    ${p => (p.showing ? '120ms' : '80ms forwards')};

  @media screen and (${device.laptopL}) {
    padding-bottom: 40px;
    min-height: auto;
  }
`;

export default Contents;
