/**
 *
 * PlatformSelector
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Youtube from 'svgs/Youtube';
import Twitch from 'svgs/Twitch';
import Vimeo from 'svgs/Vimeo';
import SoundCloud from 'svgs/SoundCloud';
import Streamable from 'svgs/Streamable';
import Mp4 from 'svgs/Mp4';

import Menu from './styles/Menu';
import Tab from './styles/Tab';

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
    <Menu>
      {platforms.map((platform, i) => {
        const { SVG, name } = platform;
        return (
          <Tab
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            active={activePlatform === i}
            onClick={() => handlePlatformSelect(i)}
          >
            <SVG />
            {name}
          </Tab>
        );
      })}
    </Menu>
  );
};

PlatformSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlatformSelector;
