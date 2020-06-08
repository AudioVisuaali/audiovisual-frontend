/**
 *
 * Button.js
 *
 * A rounded button
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonRounded = styled.button(p => ({
  padding: 14,
  width: p.size,
  height: p.size,
  margin: 8,

  color:
    p.disableTheme || p.theme.isDark ? p.theme.light[50] : p.theme.dark[100],
  fontWeight: '500',
  border: '0 solid transparent',
  borderRadius: '100%',
  backgroundColor: 'transparent',
  position: 'relative',
  zIndex: 1,

  transition: 'all 200ms',

  '> *': {
    flexShrink: 0,
    pointerEvents: 'none',
  },

  ...(p.active && {
    color:
      p.disableTheme || p.theme.isDark ? p.theme.light[50] : p.theme.light[200],
  }),

  ':after': {
    zIndex: -1,
    transition: 'all 200ms',
    content: "''",
    transformOrigin: '50% 50%',
    transform: 'scale(0.5)',
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '100%',
    pointerEvents: 'none',
    backgroundColor:
      p.disableTheme || p.theme.isDark
        ? p.theme.whiteRGBA[10]
        : p.theme.grey[700],

    ...(p.active && {
      transform: 'scale(1)',
      opacity: 1,
    }),
  },

  ...(!p.disabled && {
    ':hover': {
      color:
        p.disableTheme || p.theme.isDark
          ? p.theme.light[50]
          : p.theme.light[200],
      ':after': {
        opacity: 1,
        transform: 'scale(1.05)',
        backgroundColor:
          p.disableTheme || p.theme.isDark
            ? p.theme.whiteRGBA[20]
            : p.theme.grey[800],
      },
    },

    ':focus': {
      ':after': {
        transform: 'scale(1.1)',
      },
    },
  }),

  ':disabled': {
    opacity: 0.2,
    cursor: 'not-allowed',
  },
}));

const Button = React.forwardRef(
  ({ children, active, onClick, ...rest }, ref) => {
    const buttonRef = useRef(null);

    const handleRef = r => {
      if (ref) {
        ref(r);
      }

      buttonRef.current = r;
    };

    const doBlur = () => buttonRef.current && buttonRef.current.blur();

    const handleClick = e => {
      if (active) {
        return;
      }

      if (onClick) {
        onClick(e);
      }

      setTimeout(doBlur, 140);
    };

    return (
      <ButtonRounded
        ref={handleRef}
        type="button"
        onClick={handleClick}
        active={active}
        {...rest}
      >
        {children}
      </ButtonRounded>
    );
  },
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default Button;
