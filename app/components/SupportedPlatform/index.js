/**
 *
 * SupportedPlatform
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';

const SupportedPlatform = ({ SVG, name }) => (
  <Wrapper>
    <SVG />
    {name}
  </Wrapper>
);

SupportedPlatform.propTypes = {
  SVG: PropTypes.node,
  name: PropTypes.string,
};

export default SupportedPlatform;
