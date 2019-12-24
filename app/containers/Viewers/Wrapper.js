import styled from 'styled-components';

const backgroundColor = p =>
  p.theme.isDark ? 'transparent' : p.theme.light[400];

const Wrapper = styled.div`
  padding: 10px 0 6px 10px;
  background-color: ${backgroundColor};
`;

export default Wrapper;
