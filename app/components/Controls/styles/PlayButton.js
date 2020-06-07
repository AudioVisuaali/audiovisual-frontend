import styled from 'styled-components';

import ButtonRound from 'components/ButtonRound';

export default styled(ButtonRound)({
  width: 40,
  height: 40,
  padding: 10,
  flexShrink: 0,

  svg: {
    flexShrink: 0,
    width: 20,
    height: 20,
  },
});
