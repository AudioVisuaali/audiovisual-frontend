import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';

class ShowOnHover extends React.Component {
  constructor() {
    super();
    this.state = { showByHover: false };
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove, true);
  }

  onMouseMove = () => {
    this.setState({ showByHover: true });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(
      () => this.setState({ showByHover: false }),
      1000,
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
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onTouchStart: this.handleMouseEnter,
    };

    const showChildren = show || showByHover;

    return (
      <Wrapper show={showChildren} {...events}>
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
