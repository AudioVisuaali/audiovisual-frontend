import styled from 'styled-components';

const Shadow = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 8px;
  z-index: 20;

  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
`;

export default Shadow;
