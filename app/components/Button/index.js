/**
 *
 * Button.js
 *
 * A common button
 */

import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.light[50] : p.theme.light[50]);
const backgroundColor = p =>
  p.theme.isDark ? p.theme.darkRGBA[25] : p.theme.grey[700];

const hoverBackgroundColor = p =>
  p.theme.isDark ? p.theme.darkRGBA[40] : p.theme.grey[800];

const Button = styled.button`
  padding: 8px 12px;
  min-width: 75px;
  font-size: 12px;
  line-height: 1.5;

  color: ${color};
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: ${backgroundColor};
  user-select: none;

  transition: all 200ms;

  &:hover:not(:disabled) {
    background-color: ${hoverBackgroundColor};
  }

  &:disabled,
  :hover:disabled {
    color: ${p => (p.theme.isDark ? p.theme.grey[800] : p.theme.light[800])};
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default Button;
