import styled from 'styled-components';

export default styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 400px;
  height: 100%;
  border-left: 1px solid #080808;
  background-color: #222222;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    max-width: 350px;
  }

  @media screen and (max-width: 950px) {
    max-width: 300px;
  }
`;
