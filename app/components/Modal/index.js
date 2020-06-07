/**
 *
 * Modal
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import CrossSVG from 'svgs/Times';
import Button from 'components/Button';

import messages from './messages';
import Wrapper from './styles/Wrapper';
import ModalWrapper from './styles/ModalWrapper';
import CloseCross from './styles/CloseCross';
import Actions from './styles/Actions';
import Content from './styles/Content';
import Title from './styles/Title';
import Background from './styles/Background';

function Modal({
  children,
  onClose,
  onSave,
  saveText,
  closeText,
  disableSave,
  focusSaveOnMount,
  focusCancelOnMount,
  title,
  hideSave,
}) {
  const [closing, setClosing] = useState(false);
  const confirmRef = useRef(null);
  const declineRef = useRef(null);

  useEffect(() => {
    if (focusSaveOnMount) {
      confirmRef.current.focus();
      return;
    }

    if (focusCancelOnMount) {
      declineRef.current.focus();
    }
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 200);
  };

  const handleSave = () => {
    setClosing(true);
    setTimeout(onSave, 200);
  };

  return (
    <Wrapper fadingOut={closing}>
      <Background onClick={handleClose} />
      <ModalWrapper>
        <CloseCross onClick={handleClose}>
          <CrossSVG />
        </CloseCross>
        <Title>{title}</Title>
        <Content>{children}</Content>
        <Actions>
          <Button ref={declineRef} onClick={handleClose}>
            {closeText || <FormattedMessage {...messages.close} />}
          </Button>
          {!hideSave && (
            <Button
              ref={confirmRef}
              disabled={disableSave}
              onClick={handleSave}
            >
              {saveText || <FormattedMessage {...messages.save} />}
            </Button>
          )}
        </Actions>
      </ModalWrapper>
    </Wrapper>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disableSave: PropTypes.bool,
  saveText: PropTypes.string,
  closeText: PropTypes.string,
  focusSaveOnMount: PropTypes.bool,
  focusCancelOnMount: PropTypes.bool,
  hideSave: PropTypes.bool,
};

export default Modal;
