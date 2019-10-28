/**
 *
 * Add
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ReactPlayer from 'react-player';

import Label from 'components/Label';
import BigLabel from 'components/BigLabel';
import SupportedPlatforms from 'components/SupportedPlatforms';

import messages from './messages';
import Input from './styles/Input';
import Inputs from './styles/Inputs';
import Section from './styles/Section';
import Actions from './styles/Actions';
import AddVideo from './styles/AddVideo';
import URLContainer from './styles/URLContainer';
import InputWrapper from './styles/InputWrapper';
import ShowSubtitleURLAdd from './styles/ShowSubtitleURLAdd';

export function Add({ socket }) {
  const [videoLink, setVideoLink] = useState('');
  const [subtitleLink, setSubtitleLink] = useState('');
  const [isVideoAddable, setIsVideoAddable] = useState(false);
  const [showSubtitleAdd, setShowSubtitleAdd] = useState(false);

  const handleShowSubtitleURL = () => setShowSubtitleAdd(true);
  const handleOnTranslation = e => setSubtitleLink(e.target.value);
  const handleInputChange = e => {
    const { value } = e.target;
    setVideoLink(value);
    setIsVideoAddable(ReactPlayer.canPlay(value));
  };

  const addVideoHandler = () => {
    if (!isVideoAddable) return;

    socket('add-video', {
      url: videoLink,
      subtitle: subtitleLink,
    });

    setVideoLink('');
    setSubtitleLink('');
    setShowSubtitleAdd(false);
  };

  const AddSubtitle = () => (
    <ShowSubtitleURLAdd onClick={handleShowSubtitleURL}>
      <FormattedMessage {...messages.addURL} />
    </ShowSubtitleURLAdd>
  );

  const Addvideo = () => (
    <AddVideo disabled={!isVideoAddable} onClick={addVideoHandler}>
      <FormattedMessage {...messages.addVideoToQueueButton} />
    </AddVideo>
  );

  return (
    <>
      <BigLabel>
        <FormattedMessage {...messages.title} />
      </BigLabel>

      <Section>
        <URLContainer>
          <Inputs>
            <InputWrapper>
              <Label>
                <FormattedMessage {...messages.videoInputFieldLabel} />
              </Label>
              <Input value={videoLink} onChange={handleInputChange} />
              {!showSubtitleAdd && <AddSubtitle />}
            </InputWrapper>

            {showSubtitleAdd && (
              <InputWrapper>
                <Label>
                  <FormattedMessage {...messages.translationFieldURL} /> (.vtt)
                </Label>
                <Input value={subtitleLink} onChange={handleOnTranslation} />
              </InputWrapper>
            )}
          </Inputs>

          <Actions>
            <Addvideo />
          </Actions>
        </URLContainer>
      </Section>

      <BigLabel>
        <FormattedMessage {...messages.supportedPlatforms} />
      </BigLabel>

      <Section>
        <SupportedPlatforms />
      </Section>
    </>
  );
}

Add.propTypes = { socket: PropTypes.func };

export default Add;
