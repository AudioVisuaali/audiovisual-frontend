import styled from 'styled-components';
import device from 'styles/device';
import fadeIn from 'styles/animations/fadeIn';

const Messages = styled.div`
  padding-bottom: 5px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  animation: ${fadeIn} 0.6s;

  @media screen and ${device.tablet} {
    min-height: 400px;
  }
`;

export default Messages;
