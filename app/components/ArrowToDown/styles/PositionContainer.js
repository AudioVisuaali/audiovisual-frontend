import styled from 'styled-components';

const PositionContainer = styled.div(props => ({
  display: 'flex',
  justifyContent: 'center',

  transition: 'transform 200ms',
  transform: `translateY(${props.active ? '0%' : '-130%'})`,
}));

export default PositionContainer;
