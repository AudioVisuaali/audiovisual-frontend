import styled from 'styled-components';

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 8px 8px;

  ${props =>
    props.boxed &&
    `
    border-radius: 6px;
    background-color: rgba(0,0,0,0.3);
  `}
`;

export default InnerWrapper;
