import styled from 'styled-components';

import ButtonRound from 'components/Button';

const Button = styled(ButtonRound)(props => ({
  backgroundColor: props.theme.isDark
    ? props.theme.darkRGBA[60]
    : props.theme.grey[700],

  ':hover:not(:disabled)': {
    backgroundColor: props.theme.isDark
      ? props.theme.darkRGBA[80]
      : props.theme.grey[800],
  },
}));

export default Button;
