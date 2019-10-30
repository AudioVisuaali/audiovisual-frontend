import styled from 'styled-components';

const InnerWrapper = styled.div`
  display: inline;
  position: relative;
  margin-right: 20px;

  & svg {
    height: 17px;
    width: 17px;
    position: absolute;
    left: 1px;
  }
`;

export default InnerWrapper;
