/**
 *
 * User
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UserSVG from './User';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 9px;
  width: 70px;
  padding: 12px 12px 8px;

  & span {
    width: 60px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & svg {
    width: 32px;
  }
`;

function User({ user }) {
  return (
    <Wrapper>
      <UserSVG />
      <span>{user.name}</span>
    </Wrapper>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default User;
