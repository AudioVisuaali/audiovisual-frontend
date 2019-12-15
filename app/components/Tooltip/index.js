import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';
import TooltipText from './styles/TooltipText';

const DEFAULT_WIDTH = 80;

const Tooltip = React.forwardRef(function Tooltip(props, ref) {
  const { children, label, width, ...rest } = props;

  const [showLabel, setShowLabel] = useState(false);

  const handleShow = () => setShowLabel(true);
  const handleHidden = () => setShowLabel(false);

  const interactiveWrapperListeners = {
    onTouchStart: handleShow,
    onTouchEnd: handleHidden,
    onMouseOver: handleShow,
    onMouseLeave: handleHidden,
  };

  return (
    <Wrapper ref={ref} label={label} {...interactiveWrapperListeners} {...rest}>
      {children}
      <TooltipText width={width || DEFAULT_WIDTH} showing={showLabel}>
        {label.toUpperCase()}
      </TooltipText>
    </Wrapper>
  );
});

Tooltip.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.number,
};

export default Tooltip;
