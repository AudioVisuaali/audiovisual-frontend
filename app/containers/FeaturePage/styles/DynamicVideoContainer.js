import styled from 'styled-components';

export default styled.div`
  ${props =>
    props.dynamic
      ? `
        position: fixed;
        right: 30px;
        top: 30px;
        width: 400px;
        height: 225px;
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
        z-index: 999;
      `
      : `
        width: 100%;
        height: 100%;
    `}
`;
