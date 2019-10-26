/**
 *
 * Modal
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CrossSVG from 'svgs/Times';

import Wrapper from './styles/Wrapper';
import ModalWrapper from './styles/ModalWrapper';
import CloseCross from './styles/CloseCross';
import Actions from './styles/Actions';
import Content from './styles/Content';
import ActionButton from './styles/ActionButton';
import Title from './styles/Title';
import Background from './styles/Background';

function Modal({ children, onClose, onSave, title }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 200);
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
          <ActionButton onClick={handleClose}>Close</ActionButton>
          <ActionButton onClick={onSave}>Save</ActionButton>
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
};

export default Modal;
