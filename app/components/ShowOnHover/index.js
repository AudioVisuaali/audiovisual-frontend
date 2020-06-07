import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';

class ShowOnHover extends React.Component {
  constructor() {
    super();
    this.wrapperRef = React.createRef();
    this.state = { showByHover: false };
  }

  componentDidMount() {
    this.onMouseMove(null, 3000);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove, true);
  }

  isCursorInDiv = e => {
    if (!e) {
      return true;
    }

    const {
      top,
      left,
      width,
      height,
    } = this.wrapperRef.current.getBoundingClientRect();
    const { screenX, screenY } = e;

    if (screenX < left && screenX > left + width) {
      return false;
    }

    if (screenY < top && screenY > top + height) {
      return false;
    }

    return true;
  };

  onMouseMove = (e, timeout = 1000) => {
    if (!this.isCursorInDiv(e)) {
      return;
    }

    this.setState({ showByHover: true });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(
      () => this.setState({ showByHover: false }),
      timeout,
    );
  };

  handleMouseEnter = () => {
    this.setState({ showByHover: true });
    document.addEventListener('mousemove', this.onMouseMove, true);
  };

  handleMouseLeave = () => {
    this.setState({ showByHover: false });
    document.removeEventListener('mousemove', this.onMouseMove, true);
  };

  render() {
    const { children, show } = this.props;
    const { showByHover } = this.state;
    const events = {
      onMouseOver: this.onMouseMove,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onTouchStart: this.handleMouseEnter,
    };

    const showChildren = show || showByHover;

    return (
      <Wrapper ref={this.wrapperRef} show={showChildren} {...events}>
        {children}
      </Wrapper>
    );
  }
}

ShowOnHover.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
};

export default ShowOnHover;
