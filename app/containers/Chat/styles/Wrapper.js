import styled from 'styled-components';

const Wrapper = styled.div`
  flex-grow: 1;
  color: ${p => (p.theme.isDark ? p.theme.whiteRGBA[80] : p.theme.grey[700])};
`;

export default Wrapper;
