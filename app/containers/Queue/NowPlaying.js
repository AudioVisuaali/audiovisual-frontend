import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import QueueItem from 'components/QueueItem';
import BigLabel from 'components/BigLabel';
import messages from './messages';
import NowPlayingWrapper from './styles/NowPlayingWrapper';
import QueItemContainer from './styles/QueItemContainer';

const NowPlaying = props => {
  let timer1;
  let timer2;
  const { currentlyPlaying, onSkip, onRepeat } = props;
  const [isMounted, setIsMounted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);
  const [video, setVideo] = useState(currentlyPlaying);

  useEffect(() => {
    if (props.currentlyPlaying.unique === video.unique) {
      return;
    }

    setIsFadingOut(true);
    timer1 = setTimeout(() => {
      setVideo(props.currentlyPlaying);
      setIsFadingOut(false);
      setIsFadingIn(true);
      timer2 = setTimeout(() => {
        setIsFadingIn(false);
      }, 200);
    }, 200);
  }, [props.currentlyPlaying]);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <NowPlayingWrapper>
      <BigLabel>
        <FormattedMessage {...messages.currentlyPlayingLabel} />
      </BigLabel>
      <QueItemContainer
        fadingIn={isMounted && isFadingIn}
        fadingOut={isFadingOut}
      >
        <QueueItem
          onSkip={onSkip}
          onRepeat={onRepeat}
          video={video}
          user={video.addedBy}
        />
      </QueItemContainer>
    </NowPlayingWrapper>
  );
};

NowPlaying.propTypes = {
  onSkip: PropTypes.func.isRequired,
  onRepeat: PropTypes.func.isRequired,
  currentlyPlaying: PropTypes.object,
};

export default NowPlaying;
