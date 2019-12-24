import styled from 'styled-components';

const showOpacity = props => props.show && 'opacity: 1;';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  box-shadow: inset 0px 110px 40px -40px rgba(0, 0, 0, 0.6),
    inset 0px -140px 40px -40px rgba(0, 0, 0, 0.6);

  transition: opacity 100ms;

  ${showOpacity}
`;

export default Wrapper;
