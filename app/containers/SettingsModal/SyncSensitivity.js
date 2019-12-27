import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import { FormattedMessage, injectIntl } from 'react-intl';

import Label from 'components/Label';
import Slider from 'components/Slider';
import ExclamationSVG from 'svgs/Exclamation';
import { VIDEO_SYNC_THRESHOLD, setItem, getItem } from 'utils/localStorage';

import messages from './messages';

const SVGContainer = styled.div`
  display: inline;

  & svg {
    height: 16px;
    width: 16px;
    color: rgba(217, 136, 0, 0.95);
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const getThresholdValue = () => {
  const value = getItem(VIDEO_SYNC_THRESHOLD);
  const parsed = parseFloat(value, 10);
  if (Number.isNaN(parsed)) {
    return 1;
  }

  return parsed;
};

const SyncSensitivity = props => {
  const { intl } = props;
  // Value needs to exist somewhere
  const [threshold, setThreshold] = useState(getThresholdValue());

  const handleBlur = e => {
    const { value } = e.target;
    setItem(VIDEO_SYNC_THRESHOLD, value);
    setThreshold(value);
  };

  return (
    <div>
      <Slider
        min="0"
        max="10"
        step="0.1"
        type="range"
        value={threshold}
        onInput={handleBlur} // Touch
        onChange={handleBlur}
      />
      <Info>
        <Tooltip
          arrow
          title={intl.formatMessage(messages.youmayExperienceStuttering)}
          enterDelay={400}
          placement="right"
        >
          <Label>
            <SVGContainer>
              <ExclamationSVG />
            </SVGContainer>
            <FormattedMessage {...messages.realtime} />
          </Label>
        </Tooltip>
        <Label>
          <FormattedMessage {...messages.tenSecondsPrural} />
        </Label>
      </Info>
    </div>
  );
};

SyncSensitivity.propTypes = {
  intl: PropTypes.any.isRequired,
};

export default injectIntl(SyncSensitivity);
