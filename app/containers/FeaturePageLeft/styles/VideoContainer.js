import styled from 'styled-components';

export default styled.div`
  background-color: ${p =>
    p.theme.isDark ? p.theme.dark[900] : p.theme.grey[500]};
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
