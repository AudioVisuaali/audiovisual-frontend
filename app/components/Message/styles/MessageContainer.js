import styled from 'styled-components';

const MessageContainer = styled.div`
  flex-grow: 1;
  ${props =>
    props.centered &&
    `
    display: flex;
    align-items: center;
  `}
`;

export default MessageContainer;
