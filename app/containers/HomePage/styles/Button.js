import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
  line-height: 1;
  display: inline-block;
  border: 1px solid;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  opacity: 0.6;
  color: #fff;
  text-align: center;
  margin-bottom: 0.6em;

  & .button__text {
    display: block;
    padding: 1em 2em;
    text-transform: uppercase;
    font-weight: 300;
  }

  &:hover .button__text {
    display: block;
    padding: 1em 2em;
    text-transform: uppercase;
    font-weight: bold;
  }

  & .button__text:before {
    content: attr(title);
  }

  & .button__text--bis {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: translateX(-1em);
    transform: translateX(-1em);
    opacity: 0;
  }

  & .button__mask {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    -webkit-transform: translateX(-100%) rotate(45deg);
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.3s;
  }

  &:hover {
    opacity: 1;
  }
  &:hover .button__text {
    -webkit-animation: fx-text 0.3s ease-out;
    animation: fx-text 0.3s ease-out;
  }
  &:hover .button__text--bis {
    -webkit-animation: fx-text-bis 0.3s ease-out;
    animation: fx-text-bis 0.3s ease-out;
  }
  &:hover .button__mask {
    -webkit-animation: fx-mask 0.3s ease-out;
    animation: fx-mask 0.3s ease-out;
  }

  &:active {
    opacity: 1;
    background: white;
    color: inherit;
  }

  @-webkit-keyframes fx-mask {
    0% {
      -webkit-transform: translateX(-100%) rotate(45deg);
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      -webkit-transform: translateX(100%) rotate(45deg);
      transform: translateX(100%) rotate(45deg);
    }
  }

  @keyframes fx-mask {
    0% {
      -webkit-transform: translateX(-100%) rotate(45deg);
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      -webkit-transform: translateX(100%) rotate(45deg);
      transform: translateX(100%) rotate(45deg);
    }
  }
  @-webkit-keyframes fx-text {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(1em);
      transform: translateX(1em);
      opacity: 0;
    }
  }
  @keyframes fx-text {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(1em);
      transform: translateX(1em);
      opacity: 0;
    }
  }
  @-webkit-keyframes fx-text-bis {
    0% {
      -webkit-transform: translateX(-1em);
      transform: translateX(-1em);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fx-text-bis {
    0% {
      -webkit-transform: translateX(-1em);
      transform: translateX(-1em);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const Button = ({ children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ButtonWrapper {...rest}>
    <span className="button__mask"></span>
    <span className="button__text">{children}</span>
    <span className="button__text button__text--bis">{children}</span>
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
