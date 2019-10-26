/**
 * A link to a certain page, an anchor tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Active from './Active';
import Button from './Button';

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
