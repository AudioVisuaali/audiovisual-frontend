/**
 *
 * PlatformSelector
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import Wrapper from './styles/Wrapper';
import Tab from './styles/Tab';
import Youtube from './platforms/Youtube';
import Twitch from './platforms/Twitch';
import Vimeo from './platforms/Vimeo';
import SoundCloud from './platforms/SoundCloud';
import Streamable from './platforms/Streamable';
import Mp4 from './platforms/Mp4';

const platforms = [
  {
    SVG: Youtube,
    name: 'Youtube',
    value: 'youtube',
  },
  {
    SVG: Twitch,
    name: 'Twitch',
    value: 'twitch',
  },
  {
    SVG: Vimeo,
    name: 'Vimeo',
    value: 'vimeo',
  },
  {
    SVG: SoundCloud,
    name: 'SoundCloud',
    value: 'soundcloud',
  },
  {
    SVG: Streamable,
    name: 'Streamable',
    value: 'streamable',
  },
  {
    SVG: Mp4,
    name: 'Mp4',
    value: 'mp4',
  },
];

const PlatformSelector = ({ onClick }) => {
  const [activePlatform, setActivePlatform] = useState(0);

  const handlePlatformSelect = i => {
    setActivePlatform(i);
    onClick(platforms[i].value);
  };

  return (
    // <FormattedMessage {...messages.header} />
    <Wrapper>
      {platforms.map((platform, i) => {
        const { SVG, name } = platform;
        return (
          <Tab
            active={activePlatform === i}
            onClick={() => handlePlatformSelect(i)}
          >
            <SVG />
            {name}
          </Tab>
        );
      })}
    </Wrapper>
  );
};

PlatformSelector.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default PlatformSelector;
