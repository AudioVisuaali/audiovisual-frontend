import styled, { css } from 'styled-components';

const boxed = css`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
`;

const Wrapper = styled.div`
  padding: 0 10px 0 5px;
  ${props => props.boxed && boxed}
`;

export default Wrapper;
