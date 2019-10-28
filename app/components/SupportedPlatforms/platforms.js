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

const platforms = [
  { SVG: Youtube, name: 'Youtube' },
  { SVG: Twitch, name: 'Twitch' },
  { SVG: Facebook, name: 'Facebook' },
  { SVG: Vimeo, name: 'Vimeo' },
  { SVG: SoundCloud, name: 'SoundCloud' },
  { SVG: Streamable, name: 'Streamable' },
  { SVG: Wistia, name: 'Wistia' },
  { SVG: MixCloudWrapped, name: 'Mixcloud' },
  { SVG: Dailymotion, name: 'Dailymotion' },
  { SVG: Mp4Wrapped, name: 'File' },
];

export default platforms;
