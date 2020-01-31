import styled, { css } from 'styled-components';

const showMove = css`
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;

  ${p => p.showMove && showMove}
`;

export default Wrapper;
