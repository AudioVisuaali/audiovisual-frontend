import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import ThemeToggle from 'containers/ThemeToggle';
import Modal from 'components/Modal';

import messages from './messages';
import Input from './Input';
import Label from './Label';
import Section from './Section';

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
      <Section>
        <Label>
          <FormattedMessage {...messages.changeLanguage} />
        </Label>
        <ThemeToggle />
      </Section>

      <Section>
        <Label>
          <FormattedMessage {...messages.changeLanguage} />
        </Label>
        <LocaleToggle />
      </Section>

      <Section>
        <Label>
          <FormattedMessage {...messages.changeUsername} />
        </Label>
        <Input value={name} onChange={handleInputField} />
      </Section>
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
