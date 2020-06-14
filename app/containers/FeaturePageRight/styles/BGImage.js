import styled from 'styled-components';

import randomShapes from '../../../images/random_shapes.svg';

const BGImage = styled.div({
  opacity: 0.15,
  background: `url(${randomShapes})`,
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export default BGImage;
