/**
 *
 * Add
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import BigLabel from 'components/BigLabel';
import SupportedPlatforms from 'components/SupportedPlatforms';

import messages from './messages';
import AddForm from './AddForm';
import Platforms from './styles/Platforms';

const Add = () => (
  <>
    <BigLabel>
      <FormattedMessage {...messages.title} />
    </BigLabel>
    <AddForm />

    <BigLabel>
      <FormattedMessage {...messages.supportedPlatforms} />
    </BigLabel>
    <Platforms>
      <SupportedPlatforms />
    </Platforms>
  </>
);

export default Add;
