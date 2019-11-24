import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';

const Tabs = React.forwardRef(function Tabs(props, ref) {
  const { children: childrenProps, onChange, value } = props;

  let childIndex = 0;
  const children = React.Children.map(childrenProps, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    if (child.type === React.Fragment) {
      return null;
    }

    const childValue =
      child.props.value === undefined ? childIndex : child.props.value;
    const selected = childValue === value;

    childIndex += 1;
    return React.cloneElement(child, {
      selected,
      onChange,
      value: childValue,
    });
  });

  return <Wrapper ref={ref}>{children}</Wrapper>;
});

Tabs.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
};

export default Tabs;
