import React from 'react';
import PropTypes from 'prop-types';

import PlatFormIcon from 'components/PlatformIcon';
import VideoHeaderContent from './styles/VideoHeaderContent';

const VideoHeader = ({ video }) => {
  if (!video) return null;

  return (
    <VideoHeaderContent>
      <PlatFormIcon type={video.type} />
      {video.title}
    </VideoHeaderContent>
  );
};

VideoHeader.propTypes = {
  video: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default VideoHeader;
