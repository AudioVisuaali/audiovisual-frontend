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
import { canPlayVideo } from 'utils/video';

import messages from './messages';
import Inputs from './styles/Inputs';
import Form from './styles/Form';
import Actions from './styles/Actions';
import InputWrapper from './styles/InputWrapper';
import ShowSubtitleURLAdd from './styles/ShowSubtitleURLAdd';

const AddForm = ({ addVideo }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [subtitleUrl, setSubtitleUrl] = useState('');
  const [isVideoAddable, setIsVideoAddable] = useState(false);
  const [showSubtitleAdd, setShowSubtitleAdd] = useState(false);

  const handleShowSubtitleURL = () => setShowSubtitleAdd(true);
  const handleOnTranslation = e => setSubtitleUrl(e.target.value);
  const handleInputChange = e => {
    const { value } = e.target;
    setVideoUrl(value);
    setIsVideoAddable(canPlayVideo(value));
  };

  const addVideoHandler = e => {
    e.preventDefault();
    if (!isVideoAddable) return;

    addVideo({
      url: videoUrl,
      subtitle: subtitleUrl,
    });

    setVideoUrl('');
    setSubtitleUrl('');
    setShowSubtitleAdd(false);
    setIsVideoAddable(false);
  };

  const AddSubtitle = !showSubtitleAdd && (
    <ShowSubtitleURLAdd onClick={handleShowSubtitleURL}>
      <FormattedMessage {...messages.addSubtitle} />
    </ShowSubtitleURLAdd>
  );

  const URLField = (
    <InputWrapper>
      <Label>
        <FormattedMessage {...messages.videoInputFieldLabel} />
      </Label>
      <TextField value={videoUrl} onChange={handleInputChange} />
      {AddSubtitle}
    </InputWrapper>
  );

  const CaptionsField = showSubtitleAdd && (
    <InputWrapper>
      <Label>
        <FormattedMessage {...messages.translationFieldURL} /> (.vtt)
      </Label>
      <TextField value={subtitleUrl} onChange={handleOnTranslation} />
    </InputWrapper>
  );

  const Submit = (
    <Button type="submit" disabled={!isVideoAddable} onClick={addVideoHandler}>
      <FormattedMessage {...messages.addVideoToQueueButton} />
    </Button>
  );

  return (
    <Form onSubmit={addVideoHandler}>
      <Inputs>
        {URLField}
        {CaptionsField}
      </Inputs>

      <Actions>{Submit}</Actions>
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
