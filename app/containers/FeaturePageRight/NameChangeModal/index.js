import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';

import Input from './Input';

const NameChangeModal = ({ currentUser, onClose, onName }) => {
  const [name, setName] = useState(currentUser ? currentUser.username : '');

  const handleInputField = e => setName(e.target.value);
  const handleSave = () => onName(name);

  useEffect(() => setName(currentUser.username), [currentUser.username]);

  return (
    <Modal title="Change Name" onSave={handleSave} onClose={onClose}>
      <Input value={name} onChange={handleInputField} />
    </Modal>
  );
};

NameChangeModal.propTypes = {
  currentUser: PropTypes.object,
  onClose: PropTypes.func,
  onName: PropTypes.func,
};

export default NameChangeModal;
