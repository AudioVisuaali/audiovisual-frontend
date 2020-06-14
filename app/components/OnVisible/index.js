import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const OnVisible = ({ onVisible, ...rest }) => {
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onVisible();
        }
      });
    });
    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, [onVisible]);

  return <div {...rest} style={{ pointerEvents: 'none' }} ref={domRef} />;
};

OnVisible.propTypes = {
  onVisible: PropTypes.func,
};

export default OnVisible;
