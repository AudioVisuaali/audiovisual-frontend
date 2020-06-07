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

import history from 'utils/history';
import { pathHome } from 'utils/paths';
import injectSaga from 'utils/injectSaga';
import { sendError } from './actions';
import saga from './saga';

import Container from './styles/Container';
import Title from './styles/Title';
import Description from './styles/Description';
import Button from './styles/Button';

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
      return (
        <>
          <Container>
            <Title>Something went wrong :/</Title>
            <Description>
              Uwu We made a fucky wucky!! A wittle fucko boingo! The code
              monkeys at our headquarters are working VEWY HAWD to fix this!
            </Description>
            <Button
              onClick={() => {
                history.push(pathHome);
                window.location.reload();
              }}
            >
              Go to front page
            </Button>
          </Container>
        </>
      );
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
