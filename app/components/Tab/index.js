/**
 * A link to a certain page, an anchor tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const cursorDefault = { cursor: 'default' };

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
      onClick(event, value);
    }
  };

  const buttonStyle = selected ? cursorDefault : null;

  return (
    <Button
      ref={ref}
      role="tab"
      style={buttonStyle}
      selected={selected}
      aria-selected={selected}
      onClick={handleChange}
      disabled={disabled}
      {...other}
    >
      {label || children}
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
