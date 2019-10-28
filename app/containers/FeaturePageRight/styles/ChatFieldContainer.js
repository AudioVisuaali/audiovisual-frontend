import styled from 'styled-components';

export default styled.div`
  border-top: 1px solid
    ${p => (p.theme.isDark ? p.theme.dark[800] : p.theme.grey[500])};
  padding-top: 10px;
  margin: 0 10px 10px;
`;
