import React from 'react';
import PropTypes from 'prop-types';

import A from 'components/A';
import PlatFormIcon from 'components/PlatformIcon';
import VideoHeaderContent from './styles/VideoHeaderContent';

const VideoHeader = ({ video }) => (
  <VideoHeaderContent>
    <A href={video.url}>
      <PlatFormIcon type={video.type} />
      {video.title}
    </A>
  </VideoHeaderContent>
);

VideoHeader.propTypes = {
  video: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default VideoHeader;
