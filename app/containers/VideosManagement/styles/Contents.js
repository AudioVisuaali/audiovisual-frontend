import styled from 'styled-components';

const Contents = styled.div`
  min-height: 600px;
  padding-bottom: 600px;

  @media screen and (max-width: 760px) {
    padding-bottom: 0;
    min-height: auto;
  }
`;

export default Contents;
