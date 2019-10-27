import styled from 'styled-components';
import device from 'styles/device';

const MessageContent = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 300;
  margin-top: 2px;

  @media screen and ${device.tablet} {
    font-size: 10px;
  }
`;

export default MessageContent;
