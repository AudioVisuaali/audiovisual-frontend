/**
 *
 * VideoInformation
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Scrollbars } from 'react-custom-scrollbars';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectVideoInformation from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import User from '../../components/User';
import Users from './styles/Users';
import Wrapper from './styles/Wrapper';

export function VideoInformation() {
  useInjectReducer({ key: 'videoInformation', reducer });
  useInjectSaga({ key: 'videoInformation', saga });
  // <FormattedMessage {...messages.header} />
  return (
    <Wrapper>
      <Users>
        <User user={{ name: 'Audiovisuaali' }} />
        <User user={{ name: 'Audiovisuaali' }} />
        <User user={{ name: 'Audiovisuaali' }} />
        <User user={{ name: 'Audiovisuaali' }} />
        <User user={{ name: 'Audiovisuaali' }} />
        <User user={{ name: 'Audiovisuaali' }} />
        <User user={{ name: 'Audiovisuaali' }} />
        <User user={{ name: 'Audiovisuaali' }} />
      </Users>
    </Wrapper>
  );
}

VideoInformation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  videoInformation: makeSelectVideoInformation(),
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

export default compose(withConnect)(VideoInformation);
