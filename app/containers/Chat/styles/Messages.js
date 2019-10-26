import styled from 'styled-components';

const Messages = styled.div`
  padding-bottom: 5px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  animation: fadeIn 0.6s;

  @media screen and (max-width: 760px) {
    min-height: 400px;
  }
`;

export default Messages;
