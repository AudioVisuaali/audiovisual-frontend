import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: inset -14px 0 18px -14px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 760px) {
    box-shadow: none;
  }
`;

export default Wrapper;
