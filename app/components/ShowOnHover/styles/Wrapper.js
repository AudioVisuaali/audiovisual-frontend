import styled from 'styled-components';

const checkOpacity = ({ show }) =>
  show && {
    opacity: 1,
    cursor: 'default',
  };

const checkCursor = ({ show }) =>
  !show && {
    'input:hover': {
      cursor: 'none',
    },
  };

const Wrapper = styled.div(
  {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0,
    cursor: 'none',
    boxShadow:
      'inset 0px 110px 40px -40px rgba(0, 0, 0, 0.6), inset 0px -140px 40px -40px rgba(0, 0, 0, 0.6)',

    transition: 'opacity 100ms',
  },
  checkOpacity,
  checkCursor,
);

export default Wrapper;
