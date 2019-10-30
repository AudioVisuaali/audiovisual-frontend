import React from 'react';
import styled from 'styled-components';

import Youtube from 'svgs/Youtube';
import Twitch from 'svgs/Twitch';
import Facebook from 'svgs/Facebook';
import Vimeo from 'svgs/Vimeo';
import SoundCloud from 'svgs/SoundCloud';
import Streamable from 'svgs/Streamable';
import Film from 'svgs/Film';
import Wistia from 'svgs/Wistia';
import MixCloud from 'svgs/MixCloud';
import Dailymotion from 'svgs/Dailymotion';

const svgColor = props =>
  props.theme.isDark ? props.theme.light[50] : props.theme.grey[800];

const Colored = styled.div`
  & svg {
    color: ${svgColor};
  }
`;

const Mp4Wrapped = () => (
  <Colored>
    <Film />
  </Colored>
);

const MixCloudWrapped = () => (
  <Colored>
    <MixCloud />
  </Colored>
);

const platforms = {
  mixcloud: MixCloudWrapped,
  twitch: Twitch,
  'twitch-live': Twitch,
  'twitch-clip': Twitch,
  vimeo: Vimeo,
  youtube: Youtube,
  soundcloud: SoundCloud,
  streamable: Streamable,
  file: Mp4Wrapped,
  facebook: Facebook,
  dailymotion: Dailymotion,
  wistia: Wistia,
};

export default platforms;
