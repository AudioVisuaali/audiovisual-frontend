import styled from 'styled-components';

const Handle = styled.div({
  backgroundColor: '#666',
  width: 20,
  borderRadius: 10,
  padding: '4px 0',
  border: '1px solid #000',
  cursor: 'col-resize',

  div: {
    width: 6,
    height: 6,
    pointerEvents: 'none',

    backgroundColor: '#111',
    borderRadius: '100%',
    margin: '4px auto',
  },
});

export default Handle;
