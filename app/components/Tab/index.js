/**
 * A link to a certain page, an anchor tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Active = styled.span`
  height: 2px;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  transition: background-color 200ms;

  ${props =>
    !props.active &&
    `
    background-color: rgba(255,255,255,0);
  `}
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  padding: 10px 16px;

  transition: background-color 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  & svg {
    width: 12px;
  }

  @media screen and (max-width: 760px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media screen and (max-width: 400px) {
    font-size: 12px;
    padding: 8px 8px;
  }
`;

const Tab = ({ active, children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Wrapper {...rest}>
    <Button>{children}</Button>
    <Active active={active} />
  </Wrapper>
);

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
};

Tab.defaultProps = {
  active: false,
};

export default Tab;
