import styled from 'styled-components';

export default styled.div`
  border-bottom: 1px solid
    ${p => (p.theme.isDark ? p.theme.dark[800] : p.theme.grey[500])};
  background-color: ${p =>
    p.theme.isDark ? p.theme.dark[700] : p.theme.grey[500]};
  overflow: hidden;
`;
