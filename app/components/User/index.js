import React from 'react';
import PropTypes from 'prop-types';

import UserSVG from 'svgs/User';
import Wrapper from './Wrapper';
import Animation from './Animation';

const User = ({ user }) => (
  <Animation>
    <Wrapper>
      <UserSVG />
      {user.username}
    </Wrapper>
  </Animation>
);

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
};

export default User;
