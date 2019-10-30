/**
 *
 * PlatformIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import platforms from './platforms';

const PlatformIcon = ({ type }) => {
  const SVG = platforms[type];
  return <SVG />;
};

PlatformIcon.propTypes = {
  type: PropTypes.string,
};

export default PlatformIcon;
