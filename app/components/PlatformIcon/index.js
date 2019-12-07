/**
 *
 * PlatformIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import platforms from './platforms';

const PlatformIcon = React.forwardRef(function PlatformIcon(props, ref) {
  const SVG = platforms[props.type];
  return <SVG ref={ref} />;
});

PlatformIcon.propTypes = {
  type: PropTypes.string,
};

export default PlatformIcon;
