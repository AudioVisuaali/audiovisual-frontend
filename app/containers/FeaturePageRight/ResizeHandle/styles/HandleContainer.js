import styled from 'styled-components';

const HandleContainer = styled.div(props => ({
  height: '100%',
  maxHeight: 300,
  padding: '50px 0',
  opacity: props.dragging ? 1 : 0,
  display: 'flex',
  width: 60,
  alignItems: 'center',
  transform: 'translateX(-10px)',
  transition: 'opacity 90ms',
  userSelect: 'none',

  ':hover': {
    opacity: 1,
  },
}));

export default HandleContainer;
