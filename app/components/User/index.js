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
  width: 60px;
  padding: 12px 12px 8px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 10px;

  & span {
    width: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & svg {
    width: 20px;
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
