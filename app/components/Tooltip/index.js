import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';
import TooltipText from './styles/TooltipText';

const Tooltip = React.forwardRef(function Tooltip(props, ref) {
  const { children, label, onClick, ...rest } = props;

  const [showLabel, setShowLabel] = useState(false);

  const handleShow = () => setShowLabel(true);
  const handleHidden = () => setShowLabel(false);

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { onClick }),
  );

  const interactiveWrapperListeners = {
    onTouchStart: handleShow,
    onTouchEnd: handleHidden,
    onMouseOver: handleShow,
    onMouseLeave: handleHidden,
  };

  return (
    <Wrapper ref={ref} label={label} {...interactiveWrapperListeners} {...rest}>
      {childrenWithProps}
      <TooltipText showing={showLabel}>{label.toUpperCase()}</TooltipText>
    </Wrapper>
  );
});

Tooltip.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Tooltip;
