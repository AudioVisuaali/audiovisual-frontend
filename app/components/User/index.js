import React from 'react';
import PropTypes from 'prop-types';

import UserSVG from 'svgs/User';
import Wrapper from './Wrapper';

const User = ({ user }) => (
  <Wrapper>
    <UserSVG />
    {user.username}
  </Wrapper>
);

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }),
};

export default User;
