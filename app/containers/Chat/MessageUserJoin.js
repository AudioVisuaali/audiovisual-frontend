import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';

const MessageUserJoin = () => <Wrapper>Joined</Wrapper>;

MessageUserJoin.propTypes = {
  message: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default MessageUserJoin;
