import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 10px 0 5px;
  ${props =>
    props.boxed &&
    `
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
  `}
`;

export default Wrapper;
