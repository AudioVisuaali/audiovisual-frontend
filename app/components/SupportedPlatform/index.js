/**
 *
 * Platform
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';

const Platform = React.forwardRef(function Platform(props, ref) {
  const { name, SVG } = props;
  return (
    <Wrapper ref={ref}>
      <SVG />
      {name}
    </Wrapper>
  );
});

Platform.propTypes = {
  SVG: PropTypes.func,
  name: PropTypes.string,
};

export default Platform;
