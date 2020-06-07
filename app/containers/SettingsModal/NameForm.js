import styled from 'styled-components';

const NameForm = styled.form({
  display: 'flex',

  input: {
    marginRight: 10,
  },

  button: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
});

export default NameForm;
