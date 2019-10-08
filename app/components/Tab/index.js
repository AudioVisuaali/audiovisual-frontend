/**
 * A link to a certain page, an anchor tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  padding: 10px 16px;

  & svg {
    width: 12px;
  }
`;

const Active = styled.span`
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Tab = ({ active, children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Wrapper {...rest}>
    <Button>{children}</Button>
    {active && <Active></Active>}
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
