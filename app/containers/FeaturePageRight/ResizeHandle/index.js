import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';
import HandleContainer from './styles/HandleContainer';
import Handle from './styles/Handle';

const ResizeHandle = ({ width, onChange }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [onResizeMouseLocation, setOnResizeMouseLocation] = useState(null);

  useEffect(() => {
    if (!isMouseDown) {
      return;
    }

    const checkForNewWidth = e => {
      onChange(width + onResizeMouseLocation - e.clientX);
    };

    const handleMouseUp = () => {
      document.body.style.cursor = 'default';
      window.removeEventListener('mousemove', checkForNewWidth);
      window.removeEventListener('mouseup', handleMouseUp);
      setIsMouseDown(false);
    };

    window.addEventListener('mousemove', checkForNewWidth);
    window.addEventListener('mouseup', handleMouseUp);
    setOnResizeMouseLocation();
  }, [isMouseDown, setIsMouseDown]);

  const handleMouseDown = e => {
    document.body.style.cursor = 'col-resize';
    setOnResizeMouseLocation(e.clientX);
    setIsMouseDown(true);
  };

  return (
    <Wrapper>
      <HandleContainer dragging={isMouseDown}>
        <Handle dragging={isMouseDown} onMouseDown={handleMouseDown}>
          <div />
          <div />
          <div />
          <div />
        </Handle>
      </HandleContainer>
    </Wrapper>
  );
};

ResizeHandle.propTypes = {
  width: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ResizeHandle;
