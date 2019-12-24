/**
 *
 * ErrorBoundary
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import { sendError } from './actions';
import saga from './saga';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    this.props.sendError(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  sendError: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  sendError: (err, info) => dispatch(sendError(err, info)),
});

const withConnect = connect(null, mapDispatchToProps);

export default injectSaga({ key: 'ERROR_BOUNDARY', saga })(
  compose(withConnect)(withRouter(ErrorBoundary)),
);
