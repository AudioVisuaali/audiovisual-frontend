import styled from 'styled-components';
import device from 'styles/device';
import fadeIn from 'styles/animations/fadeIn';
import fadeOut from 'styles/animations/fadeOut';

const Contents = styled.div`
  min-height: 600px;
  max-width: 1000px;
  padding: 40px 30px;
  padding-bottom: 600px;
  margin: 0px auto;

  animation: ${p => (p.hidden ? fadeOut : fadeIn)}
    ${p => (p.hidden ? '60ms forwards' : '120ms')};

  @media screen and (${device.laptopL}) {
    padding-bottom: 0;
    min-height: auto;
  }
`;

export default Contents;
