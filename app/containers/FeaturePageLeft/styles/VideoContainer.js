import styled from 'styled-components';

export default styled.div`
  background-color: ${p =>
    p.theme.isDark ? p.theme.dark[700] : p.theme.grey[500]};
  overflow: hidden;
`;
