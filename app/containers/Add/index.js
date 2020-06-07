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
import Wrapper from './styles/Wrapper';

const Add = () => (
  <Wrapper>
    <AddForm />

    <BigLabel>
      <FormattedMessage {...messages.supportedPlatforms} />
    </BigLabel>
    <Platforms>
      <SupportedPlatforms />
    </Platforms>
  </Wrapper>
);

export default Add;
