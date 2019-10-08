/**
 *
 * VideoAdder
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectVideoAdder from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import PlatformSelector from '../PlatformSelector';
import Input from './styles/Input';
import Label from './styles/Label';
import URLContainer from './styles/URLContainer';

export function VideoAdder() {
  useInjectReducer({ key: 'videoAdder', reducer });
  useInjectSaga({ key: 'videoAdder', saga });

  const [selectedPlatform, setSelectedPlatform] = useState('youtube');
  const [videoLink, setVideoLink] = useState('');

  const handleInputChange = e => {
    setVideoLink(e.target.value);
  };

  return (
    // <FormattedMessage {...messages.header} />
    <div>
      <PlatformSelector onClick={setSelectedPlatform} />
      <URLContainer>
        <Label>Video URL</Label>
        <Input value={videoLink} onChange={handleInputChange} />
      </URLContainer>
    </div>
  );
}

VideoAdder.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  videoAdder: makeSelectVideoAdder(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(VideoAdder);
