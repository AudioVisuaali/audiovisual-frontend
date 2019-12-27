/**
 *
 * RunningBehind
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import SyncSVG from 'svgs/Sync';
import messages from './messages';
import Offset from './Offset';
import Warning from './Warning';

function RunningBehind({ show }) {
  return (
    <Offset>
      <Warning hide={!show}>
        <SyncSVG />
        <FormattedMessage {...messages.header} />
      </Warning>
    </Offset>
  );
}

RunningBehind.propTypes = {
  show: PropTypes.bool,
};

export default RunningBehind;
