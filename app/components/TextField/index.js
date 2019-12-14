/**
 *
 * TextField
 *
 */

import styled from 'styled-components';

const borderColor = props =>
  props.theme.isDark ? props.theme.dark[800] : props.theme.grey[500];
const color = props =>
  props.theme.isDark ? props.theme.light[700] : props.theme.grey[700];
const focusBackgroundColor = props =>
  props.theme.isDark ? props.theme.darkRGBA[10] : props.theme.darkRGBA[10];
const disabledBackgroundColor = props =>
  props.theme.isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)';

const TextField = styled.input`
  background-color: transparent;
  border: 1px solid ${borderColor};
  color: ${color};
  padding: 8px 14px;
  border-radius: 4px;
  width: 100%;

  transition: background-color 200ms;

  &:focus:not(:disabled) {
    background-color: ${focusBackgroundColor};
  }

  &:disabled {
    opacity: 0.4;
    background-color: ${disabledBackgroundColor};
  }
`;
export default TextField;
