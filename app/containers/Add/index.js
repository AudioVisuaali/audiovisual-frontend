/**
 *
 * Add
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import Label from 'components/Label';
import Button from 'components/Button';
import BigLabel from 'components/BigLabel';
import TextField from 'components/TextField';
import SupportedPlatforms from 'components/SupportedPlatforms';
import { emitRoomAddVideo } from 'containers/WebSocket/actions';
import { canPlayVideo } from 'utils/video';

import messages from './messages';
import Inputs from './styles/Inputs';
import Section from './styles/Section';
import Actions from './styles/Actions';
import URLContainer from './styles/URLContainer';
import InputWrapper from './styles/InputWrapper';
import ShowSubtitleURLAdd from './styles/ShowSubtitleURLAdd';

const Add = ({ addVideo }) => {
  const [videoLink, setVideoLink] = useState('');
  const [subtitleLink, setSubtitleLink] = useState('');
  const [isVideoAddable, setIsVideoAddable] = useState(false);
  const [showSubtitleAdd, setShowSubtitleAdd] = useState(false);

  const handleShowSubtitleURL = () => setShowSubtitleAdd(true);
  const handleOnTranslation = e => setSubtitleLink(e.target.value);
  const handleInputChange = e => {
    const { value } = e.target;
    setVideoLink(value);
    setIsVideoAddable(canPlayVideo(value));
  };

  const addVideoHandler = e => {
    e.preventDefault();
    if (!isVideoAddable) return;

    addVideo({
      url: videoLink,
      subtitle: subtitleLink,
    });

    setVideoLink('');
    setSubtitleLink('');
    setShowSubtitleAdd(false);
    setIsVideoAddable(false);
  };

  const AddSubtitle = () => (
    <ShowSubtitleURLAdd onClick={handleShowSubtitleURL}>
      <FormattedMessage {...messages.addSubtitle} />
    </ShowSubtitleURLAdd>
  );

  return (
    <>
      <BigLabel>
        <FormattedMessage {...messages.title} />
      </BigLabel>

      <Section onSubmit={addVideoHandler}>
        <URLContainer>
          <Inputs>
            <InputWrapper>
              <Label>
                <FormattedMessage {...messages.videoInputFieldLabel} />
              </Label>
              <TextField value={videoLink} onChange={handleInputChange} />
              {!showSubtitleAdd && <AddSubtitle />}
            </InputWrapper>

            {showSubtitleAdd && (
              <InputWrapper>
                <Label>
                  <FormattedMessage {...messages.translationFieldURL} /> (.vtt)
                </Label>
                <TextField
                  value={subtitleLink}
                  onChange={handleOnTranslation}
                />
              </InputWrapper>
            )}
          </Inputs>

          <Actions>
            <Button
              type="submit"
              disabled={!isVideoAddable}
              onClick={addVideoHandler}
            >
              <FormattedMessage {...messages.addVideoToQueueButton} />
            </Button>
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
};

Add.propTypes = {
  addVideo: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addVideo: evt => dispatch(emitRoomAddVideo(evt)),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Add);
