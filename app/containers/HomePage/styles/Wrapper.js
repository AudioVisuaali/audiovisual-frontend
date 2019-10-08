import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: radial-gradient(#282828, #121212);

  -webkit-transition: opacity 200ms ease-in-out;
  -moz-transition: opacity 200ms ease-in-out;
  -ms-transition: opacity 200ms ease-in-out;
  -o-transition: opacity 200ms ease-in-out;
  transition: opacity 200ms ease-in-out;

  opacity: ${props => (props.transparent ? '0' : '1')};
`;
