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

import Wrapper from './Wrapper';

class FeaturePage extends React.Component {
  constructor() {
    super();
    this.state = { isMobile: false };
  }

  componentDidMount() {
    if (window.attachEvent) {
      window.attachEvent('onresize', this.handleResize);
    } else if (window.addEventListener) {
      window.addEventListener('resize', this.handleResize, true);
    }
    this.handleResize();
  }

  componentWillUnmount() {
    if (window.detachEvent) {
      window.detachEvent('onresize', this.handleResize);
    } else if (window.removeEventListener) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleResize = () => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile === this.state.isMobile) return;

    this.setState({ isMobile });
  };

  featurePage = () => {
    const { isMobile } = this.state;

    return (
      <>
        <FeaturePageLeft isMobile={isMobile} />
        {!isMobile && <FeaturePageRight />}
      </>
    );
  };

  render() {
    const { isConnected } = this.props;
    return (
      <Wrapper>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <WebSocket />
        {isConnected && this.featurePage()}
      </Wrapper>
    );
  }
}

FeaturePage.propTypes = {
  isConnected: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isConnected: makeSelectEmit(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(FeaturePage);
