import styled from 'styled-components';

const backgroundColor = props =>
  props.theme.isDark ? props.theme.dark[700] : props.theme.grey[700];

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${backgroundColor};

  & iframe {
    pointer-events: none;
  }
`;

export default Wrapper;
