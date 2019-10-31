import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommentAltSVG from 'svgs/CommentAlt';
import ToolsSVG from 'svgs/Tools';

const Wrapper = styled.div`
  position: fixed;
  z-index: 10002;
  bottom: 160px;
  right: 20px;
  background-color: #353535;
  border: 1px solid #080808;
  border-radius: 6px;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.38);

  display: flex;
  flex-direction: column;
`;

const Selector = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  padding: 14px;
  border-bottom: 1px solid #080808;
  transition: all 200ms;

  ${props =>
    props.selected &&
    `
    background-color: rgba(0,0,0,0.4);
  `}

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  & svg {
    width: 16px;
    height: 16px;
    color: #eee;
  }
`;

const PopUpSelector = ({ chatSelected, onSelect }) => (
  <Wrapper>
    <Selector selected={chatSelected} onClick={() => onSelect(true)}>
      <ToolsSVG />
    </Selector>
    <Selector selected={!chatSelected} onClick={() => onSelect(false)}>
      <CommentAltSVG />
    </Selector>
  </Wrapper>
);

PopUpSelector.propTypes = {
  chatSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PopUpSelector;
