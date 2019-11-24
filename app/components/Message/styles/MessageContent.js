import styled from 'styled-components';
import device from 'styles/device';

const MessageContent = styled.div`
  color: ${p => (p.theme.isDark ? p.theme.whiteRGBA[90] : p.theme.dark[600])};
  font-size: 12px;
  font-weight: 300;
  margin-top: 2px;

  @media screen and (${device.tablet}) {
    font-size: 10px;
  }
`;

export default MessageContent;
