import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px 0 6px 10px;
  background-color: ${p =>
    p.theme.isDark ? 'transparent' : p.theme.light[400]};
`;

export default Wrapper;
