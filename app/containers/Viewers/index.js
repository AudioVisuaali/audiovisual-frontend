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

import { makeSelectViewers } from 'containers/WebSocket/selectors';
import User from 'components/User';
import Label from 'components/Label';

import messages from './messages';
import Users from './Users';
import Wrapper from './Wrapper';

export function UsersInformation({ viewers }) {
  return (
    <Wrapper>
      <Label>
        <FormattedMessage {...messages.viewers} />
      </Label>
      <Users>
        {viewers.map(v => (
          <User key={v.unique} user={v} />
        ))}
      </Users>
    </Wrapper>
  );
}

UsersInformation.propTypes = {
  viewers: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = createStructuredSelector({
  viewers: makeSelectViewers(),
});

const mapDispatchToProps = disaptch => ({ disaptch });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UsersInformation);
