/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import WebSocket from 'containers/WebSocket';
import FeaturePageRight from 'containers/FeaturePageRight';
import FeaturePageLeft from 'containers/FeaturePageLeft';
import { makeSelectEmit } from 'containers/WebSocket/selectors';
import LoadingIndicator from 'components/LoadingIndicator';
import CheckTimeDiff from 'containers/CheckTimeDiff';

import Wrapper from './Wrapper';
import LoadingContainer from './LoadingContainer';

const FeaturePage = ({ isConnected }) => (
  <>
    <Helmet>
      <title>Feature Page</title>
      <meta name="description" content="Feature page" />
    </Helmet>
    <WebSocket />
    {isConnected ? (
      <Wrapper>
        <FeaturePageLeft />
        <FeaturePageRight />
        <CheckTimeDiff />
      </Wrapper>
    ) : (
      <LoadingContainer>
        <LoadingIndicator />
      </LoadingContainer>
    )}
  </>
);

FeaturePage.propTypes = {
  isConnected: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isConnected: makeSelectEmit(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(FeaturePage);
