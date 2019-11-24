/**
 * A link to a certain page, an anchor tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import Selected from './Selected';
import Button from './Button';

const Tab = React.forwardRef(function Tab(props, ref) {
  const {
    children,
    disabled = false,
    label,
    onChange,
    onClick,
    selected,
    value,
    ...other
  } = props;

  const handleChange = event => {
    if (onChange) {
      onChange(value, event);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Button
      ref={ref}
      role="tab"
      selected={selected}
      aria-selected={selected}
      onClick={handleChange}
      disabled={disabled}
      {...other}
    >
      {label || children}
      <Selected selected={selected} />
    </Button>
  );
});

Tab.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * If `true`, the tab will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The label element.
   */
  label: PropTypes.node,
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  selected: PropTypes.bool,
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: PropTypes.any,
};

export default Tab;
