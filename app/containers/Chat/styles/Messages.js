import styled from 'styled-components';
import device from 'styles/device';
import fadeIn from 'styles/animations/fadeIn';

const Messages = styled.div`
  min-height: 100%;
  display: flex;
  padding: 0 6px 6px;
  flex-direction: column;
  justify-content: flex-end;

  animation: ${fadeIn} 0.6s;

  @media screen and ${device.tablet} {
    min-height: 400px;
  }
`;

export default Messages;
