/**
 *
 * SupportedPlatforms
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import SupportedPlatform from 'components/SupportedPlatform';
import platforms from './platforms';
import Wrapper from './Wrapper';

const SupportedPlatforms = () => (
  <Wrapper>
    {platforms.map(platform => (
      <SupportedPlatform SVG={platform.SVG} name={platform.name} />
    ))}
  </Wrapper>
);

export default SupportedPlatforms;
