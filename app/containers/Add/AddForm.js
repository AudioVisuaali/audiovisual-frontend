/**
 *
 * AddForm
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'redux';

import Label from 'components/Label';
import Button from 'components/Button';
import TextField from 'components/TextField';
import A from 'components/A';
import { emitRoomAddVideo } from 'containers/WebSocket/actions';
import { canPlayVideo, base64URLDecode } from 'utils/video';
import { blur } from 'utils/jsEvents';
import QuestionSVG from 'svgs/Question';
import { isFile, isVideo } from 'utils/url';

import messages from './messages';
import Inputs from './styles/Inputs';
import Form from './styles/Form';
import Tooltip from './styles/Tooltip';
import Actions from './styles/Actions';
import InputWrapper from './styles/InputWrapper';
import ShowMoreOptions from './styles/ShowMoreOptions';
import MultipleOptionsInput from './styles/MultipleOptionsInput';

const AddForm = ({ addVideo, intl }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [subtitleUrl, setSubtitleUrl] = useState('');
  const [base64URL, setBase64URL] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [showOptione, setShowOptione] = useState(false);

  const handleShowMoreOptions = () => setShowOptione(true);
  const handleOnTranslation = e => setSubtitleUrl(e.target.value);
  const handleBase64URL = e => setBase64URL(e.target.value);
  const handleURLChange = e => setVideoUrl(e.target.value);
  const handleTitleChange = e => setVideoTitle(e.target.value);

  const generateNewVideo = () => ({
    url: videoUrl,
    subtitle: videoTitle,
    title: subtitleUrl,
  });

  const addVideoHandler = e => {
    e.preventDefault();
    if (!isVideoAddable()) return;

    const newVideo = videoUrl ? generateNewVideo() : base64URLDecode(base64URL);
    addVideo(newVideo);

    setVideoUrl('');
    setSubtitleUrl('');
    setBase64URL('');
    setShowOptione(false);
  };

  const isVideoAddable = () => {
    // Video url check
    if (videoUrl && canPlayVideo(videoUrl)) {
      return true;
    }

    // Base64 url check
    if (!base64URL) {
      return false;
    }

    const base64 = base64URLDecode(base64URL);
    if (!base64) {
      return false;
    }

    return canPlayVideo(base64.url);
  };

  const AddSubtitle = !showOptione && (
    <ShowMoreOptions onClick={handleShowMoreOptions}>
      <FormattedMessage {...messages.moreOptions} />
    </ShowMoreOptions>
  );

  const URLField = (
    <InputWrapper>
      <Label>
        <FormattedMessage {...messages.sourceURLLabel} />
      </Label>
      <TextField
        disabled={base64URL}
        value={videoUrl}
        onChange={handleURLChange}
      />
      {AddSubtitle}
    </InputWrapper>
  );

  const CaptionsField = showOptione && (
    <>
      <InputWrapper>
        <MultipleOptionsInput>
          <Label>
            <FormattedMessage {...messages.titleURL} />
          </Label>
          <Tooltip label={intl.formatMessage(messages.filesOnly)}>
            <QuestionSVG />
          </Tooltip>
        </MultipleOptionsInput>
        <TextField
          disabled={base64URL || !isFile(videoUrl)}
          value={subtitleUrl}
          onChange={handleOnTranslation}
        />
      </InputWrapper>
      <InputWrapper>
        <MultipleOptionsInput>
          <Label>
            <FormattedMessage {...messages.translationFieldURL} /> (.vtt)
          </Label>
          <Tooltip width={100} label={intl.formatMessage(messages.videosOnly)}>
            <QuestionSVG />
          </Tooltip>
        </MultipleOptionsInput>
        <TextField
          disabled={base64URL || !isVideo(videoUrl)}
          value={videoTitle}
          onChange={handleTitleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <MultipleOptionsInput>
          <Label>
            <FormattedMessage {...messages.base64URL} />
          </Label>
          <A onClick={blur} href="/base64">
            What is this?
          </A>
        </MultipleOptionsInput>
        <TextField
          disabled={videoUrl || subtitleUrl}
          value={base64URL}
          onChange={handleBase64URL}
        />
      </InputWrapper>
    </>
  );

  return (
    <Form onSubmit={addVideoHandler}>
      <Inputs>
        {URLField}
        {CaptionsField}
      </Inputs>

      <Actions>
        <Button type="submit" disabled={!isVideoAddable()}>
          <FormattedMessage {...messages.addToQueueButton} />
        </Button>
      </Actions>
    </Form>
  );
};

AddForm.propTypes = {
  addVideo: PropTypes.func,
  intl: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  addVideo: evt => dispatch(emitRoomAddVideo(evt)),
});

const withConnect = connect(null, mapDispatchToProps);

export default injectIntl(compose(withConnect)(AddForm));
