import styled from 'styled-components';

import ButtonRound from 'components/ButtonRound';

const Button = styled(ButtonRound)(p => ({
  margin: 0,

  ':after': {
    transform: 'scale(0.5)',

    ...(p.active && {
      transform: 'scale(0.8)',
    }),
  },

  ':hover': {
    ':after': {
      transform: 'scale(0.85)',
    },
  },

  ':focus': {
    ':after': {
      transform: 'scale(0.9)',
    },
  },

  svg: {
    transition: 'all 200ms',
    width: 20,

    transform: `rotate(${p.active ? '30deg' : '0deg'})`,

    ':hover': {
      transform: 'rotate(30deg)',
    },
  },
}));

export default Button;
