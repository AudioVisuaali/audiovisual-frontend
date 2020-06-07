import styled from 'styled-components';

const HiddableContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  ${props => props.hidden && 'display: none;'}
`;

export default HiddableContainer;
