/**
 *
 * VideoAdder
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import ReactPlayer from 'react-player';

import Label from 'components/Label';
import PlatformSelector from 'containers/PlatformSelector';

import messages from './messages';
import Input from './styles/Input';
import Wrapper from './styles/Wrapper';
import AddVideo from './styles/AddVideo';
import URLContainer from './styles/URLContainer';
import PreviewContainer from './styles/PreviewContainer';

const playerConfig = {
  youtube: {
    playerVars: { showinfo: 1, controls: 1 },
  },
};

export function VideoAdder({ socket }) {
  const [isVideoAddable, setIsVideoAddable] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('youtube');
  const [videoLink, setVideoLink] = useState('');
  const [subtitleLink, setSubtitleLink] = useState('');

  const handleInputChange = e => {
    const { value } = e.target;
    setVideoLink(value);
    setIsVideoAddable(ReactPlayer.canPlay(value));
  };

  const handlePlatformChange = platform => {
    setSelectedPlatform(platform);
    setVideoLink('');
  };

  const addVideoHandler = () => {
    if (!isVideoAddable) return;

    const video = {
      url: videoLink,
      subtitle: subtitleLink,
    };

    socket('add-video', video);
    setVideoLink('');

    if (selectedPlatform !== 'mp4') return;

    setSubtitleLink('');
  };

  const handleOnTranslation = e => setSubtitleLink(e.target.value);

  const isAddDisabled = !(videoLink && isVideoAddable);

  return (
    // <FormattedMessage {...messages.header} />
    <Wrapper>
      <PlatformSelector onClick={handlePlatformChange} />
      <URLContainer>
        <Label>
          <FormattedMessage {...messages.videoInputFieldLabel} />
        </Label>
        <div>
          <Input value={videoLink} onChange={handleInputChange} />
          <AddVideo
            disabled={isAddDisabled}
            type="button"
            onClick={addVideoHandler}
          >
            <FormattedMessage {...messages.addVideoToQueueButton} />
          </AddVideo>
        </div>

        {selectedPlatform === 'mp4' && (
          <>
            <Label>
              <FormattedMessage {...messages.translationFieldURL} />
            </Label>
            <div>
              <Input value={subtitleLink} onChange={handleOnTranslation} />
            </div>
          </>
        )}

        <Label>
          <FormattedMessage {...messages.previewLabel} /> - {selectedPlatform}
        </Label>
        <PreviewContainer>
          <ReactPlayer
            width="100%"
            url={videoLink}
            config={playerConfig}
            playing
          />
        </PreviewContainer>
      </URLContainer>
    </Wrapper>
  );
}

VideoAdder.propTypes = {
  socket: PropTypes.func,
  // dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(VideoAdder);
