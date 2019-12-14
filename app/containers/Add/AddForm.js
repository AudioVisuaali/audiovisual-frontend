/**
 *
 * AddForm
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import Label from 'components/Label';
import Button from 'components/Button';
import TextField from 'components/TextField';
import { emitRoomAddVideo } from 'containers/WebSocket/actions';
import { canPlayVideo, base64URLDecode } from 'utils/video';

import messages from './messages';
import Inputs from './styles/Inputs';
import Form from './styles/Form';
import Actions from './styles/Actions';
import InputWrapper from './styles/InputWrapper';
import ShowMoreOptions from './styles/ShowMoreOptions';

const AddForm = ({ addVideo }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [subtitleUrl, setSubtitleUrl] = useState('');
  const [base64URL, setBase64URL] = useState('');
  const [showSubtitleAdd, setShowSubtitleAdd] = useState(false);

  const handleShowMoreOptions = () => setShowSubtitleAdd(true);
  const handleOnTranslation = e => setSubtitleUrl(e.target.value);
  const handleBase64URL = e => setBase64URL(e.target.value);
  const handleURLChange = e => setVideoUrl(e.target.value);

  const addVideoHandler = e => {
    e.preventDefault();
    if (!isVideoAddable()) return;

    addVideo({
      url: videoUrl,
      subtitle: subtitleUrl,
    });

    setVideoUrl('');
    setSubtitleUrl('');
    setBase64URL('');
    setShowSubtitleAdd(false);
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

  const AddSubtitle = !showSubtitleAdd && (
    <ShowMoreOptions onClick={handleShowMoreOptions}>
      <FormattedMessage {...messages.moreOptions} />
    </ShowMoreOptions>
  );

  const URLField = (
    <InputWrapper>
      <Label>
        <FormattedMessage {...messages.videoInputFieldLabel} />
      </Label>
      <TextField value={videoUrl} onChange={handleURLChange} />
      {AddSubtitle}
    </InputWrapper>
  );

  const CaptionsField = showSubtitleAdd && (
    <>
      <InputWrapper>
        <Label>
          <FormattedMessage {...messages.translationFieldURL} /> (.vtt)
        </Label>
        <TextField value={subtitleUrl} onChange={handleOnTranslation} />
      </InputWrapper>
      <InputWrapper>
        <Label>
          <FormattedMessage {...messages.base64URL} />
        </Label>
        <TextField value={base64URL} onChange={handleBase64URL} />
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
        <Button
          type="submit"
          disabled={!isVideoAddable()}
          onClick={addVideoHandler}
        >
          <FormattedMessage {...messages.addVideoToQueueButton} />
        </Button>
      </Actions>
    </Form>
  );
};

AddForm.propTypes = {
  addVideo: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addVideo: evt => dispatch(emitRoomAddVideo(evt)),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(AddForm);
