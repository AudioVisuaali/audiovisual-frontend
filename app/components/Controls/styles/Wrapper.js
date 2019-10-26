import styled from 'styled-components';

export default styled.div`
  width: 100%;
  padding: 0 20px;
  padding: 20px;
  box-shadow: inset 0 -90px 20px -10px rgba(0, 0, 0, 0.3);
  opacity: 0;

  transition: opacity 100ms;

  ${props =>
    props.showControls &&
    `
    opacity: 1;
  `}
`;
