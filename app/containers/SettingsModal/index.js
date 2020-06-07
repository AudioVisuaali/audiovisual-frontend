import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Button from 'components/Button';
import LocaleToggle from 'containers/LocaleToggle';
import ThemeToggle from 'containers/ThemeToggle';
import TextField from 'components/TextField';
import Modal from 'components/Modal';
import SyncSensitivity from './SyncSensitivity';
import NextVideoSound from './NextVideoSound';
import NameForm from './NameForm';

import messages from './messages';
import Label from './Label';
import Section from './Section';

const SettingsModal = ({ currentUser, intl, onClose, onName }) => {
  const [name, setName] = useState(currentUser ? currentUser.username : '');

  const handleInputField = e => setName(e.target.value);

  useEffect(() => setName(currentUser.username), [currentUser.username]);

  const handleNameChange = e => {
    e.preventDefault();
    onName(name);
  };

  return (
    <Modal
      title={intl.formatMessage(messages.title)}
      hideSave
      onClose={onClose}
    >
      <Section>
        <Label>
          <FormattedMessage {...messages.changeTheme} />
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
          <FormattedMessage {...messages.syncSensitivity} />
        </Label>
        <SyncSensitivity />
      </Section>

      <Section>
        <Label>
          <FormattedMessage {...messages.soundNextVideo} />
        </Label>
        <NextVideoSound />
      </Section>

      <Section>
        <Label>
          <FormattedMessage {...messages.changeUsername} />
        </Label>
        <NameForm onSubmit={handleNameChange}>
          <TextField value={name} onChange={handleInputField} />
          <Button type="submit" disabled={name === currentUser.username}>
            <FormattedMessage {...messages.updateUsername} />
          </Button>
        </NameForm>
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
