import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { emitRoomAddVideo } from 'containers/WebSocket/actions';

import Modal from 'components/Modal';
import { canPlayVideo, base64URLDecode } from 'utils/video';

import Address from './styles/Address';
import Base64Color from './styles/Base64Color';
import ErrorContainer from './styles/ErrorContainer';
import Offset from './styles/Offset';
import messages from './messages';

let timeoutHolder;

const PasteContainer = ({ addVideo, intl }) => {
  const [link, setLink] = useState('');
  const [isInvalidLink, setIsInvalidLink] = useState(false);
  const [isInvalidLinkTimestamp, setIsInvalidLinkTimestamp] = useState(0);
  const [base64, setBase64] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handlePaste = e => {
    const nodeName = e.target.nodeName.toLowerCase();
    if (['textarea'].includes(nodeName)) {
      return;
    }

    if (nodeName === 'input' && e.target.type !== 'range') {
      return;
    }

    const ogEvent = e.originalEvent || e;
    const text = ogEvent.clipboardData.getData('text/plain');

    if (text && canPlayVideo(text)) {
      setLink(text);
      setIsOpen(true);
      return;
    }

    const base64Obj = base64URLDecode(text);
    if (base64Obj) {
      if (canPlayVideo(base64Obj.url)) {
        setBase64(base64Obj);
        setIsOpen(true);
        return;
      }
    }

    handleInvalidLink();
  };

  const handleInvalidLink = () => {
    setIsInvalidLink(true);
    const time = new Date().getTime();
    setIsInvalidLinkTimestamp(time);

    clearTimeout(timeoutHolder);
    timeoutHolder = setTimeout(() => handleInvalidLinkAfter(time), 8000);
  };

  const handleInvalidLinkAfter = () => setIsInvalidLink(false);

  useEffect(() => {
    const handlePasteProxy = e => handlePaste(e);

    window.addEventListener('paste', handlePasteProxy);
    return () => {
      window.removeEventListener('paste', handlePasteProxy);
    };
  }, []);

  const resetToDefaults = () => {
    setLink('');
    setBase64(null);
    setIsOpen(false);
  };

  const generateNewVideo = () => ({
    url: link,
  });

  const createAndAddVideo = () => {
    const newVideo = link ? generateNewVideo() : base64;
    addVideo(newVideo);
    resetToDefaults();
  };

  const base64Render = () => (
    <Modal
      onClose={resetToDefaults}
      onSave={createAndAddVideo}
      closeText={intl.formatMessage(messages.cancel)}
      saveText={intl.formatMessage(messages.add)}
      title={intl.formatMessage(messages.addFollowingVideo)}
      focusSaveOnMount
    >
      <Address>
        {base64 && (
          <>
            <Base64Color>Base64</Base64Color> -{' '}
          </>
        )}
        {base64 ? base64.title || base64.url : link}
      </Address>
    </Modal>
  );

  return (
    <>
      {isOpen && base64Render()}
      <Offset key={isInvalidLinkTimestamp}>
        <ErrorContainer hide={!isInvalidLink}>
          <FormattedMessage {...messages.invalidUrl} />
        </ErrorContainer>
      </Offset>
    </>
  );
};

PasteContainer.propTypes = {
  addVideo: PropTypes.func,
  intl: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addVideo: evt => dispatch(emitRoomAddVideo(evt)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(injectIntl, withConnect)(PasteContainer);
