import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';
import TooltipText from './styles/TooltipText';

const Tooltip = props => {
  const { children, label } = props;
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
    <Wrapper label={label} {...interactiveWrapperListeners}>
      {children}
      <TooltipText showing={showLabel}>{label}</TooltipText>
    </Wrapper>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

export default Tooltip;
