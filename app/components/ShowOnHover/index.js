import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';

class ShowOnHover extends React.Component {
  constructor() {
    super();
    this.wrapperRef = React.createRef();
    this.state = { showByHover: false, initalShow: true };
  }

  componentDidMount() {
    this.handleMouseEnter();
    setTimeout(() => {
      this.setState({ initalShow: false });
    }, 3000);
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
    const { clientX, clientY } = e;

    if (clientX < left || clientX > left + width) {
      return false;
    }

    if (clientY < top || clientY > top + height) {
      return false;
    }

    return true;
  };

  onMouseMove = e => {
    if (!this.isCursorInDiv(e)) {
      this.handleMouseLeave();
      return;
    }

    this.moveMouse();
  };

  moveMouse = (timeout = 2000) => {
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
    const { showByHover, initalShow } = this.state;
    const events = {
      onMouseOver: this.onMouseMove,
      onMouseEnter: this.handleMouseEnter,
      onTouchStart: this.handleMouseEnter,
    };

    const showChildren = show || showByHover || initalShow;

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
