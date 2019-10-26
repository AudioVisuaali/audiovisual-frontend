import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: radial-gradient(#282828, #121212);

  transition: opacity 200ms ease-in-out;

  opacity: ${props => (props.transparent ? '0' : '1')};
`;

export default Wrapper;
