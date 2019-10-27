import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import Modal from 'components/Modal';

import messages from './messages';
import Input from './Input';

const SettingsModal = ({ currentUser, intl, onClose, onName }) => {
  const [name, setName] = useState(currentUser ? currentUser.username : '');

  const handleInputField = e => setName(e.target.value);
  const handleSave = () => onName(name);

  useEffect(() => setName(currentUser.username), [currentUser.username]);

  return (
    <Modal
      title={intl.formatMessage(messages.title)}
      onSave={handleSave}
      onClose={onClose}
    >
      <Input value={name} onChange={handleInputField} />
    </Modal>
  );
};

SettingsModal.propTypes = {
  currentUser: PropTypes.object,
  onClose: PropTypes.func,
  onName: PropTypes.func,
  intl: PropTypes.any.isRequired,
};

export default injectIntl(SettingsModal);
