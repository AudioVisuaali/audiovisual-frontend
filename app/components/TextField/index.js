/**
 *
 * TextField
 *
 */

import styled from 'styled-components';

const color = props =>
  props.theme.isDark ? props.theme.light[500] : props.theme.dark[200];
const focusBackgroundColor = props =>
  props.theme.isDark ? props.theme.darkRGBA[40] : props.theme.darkRGBA[20];

const TextField = styled.input`
  background-color: ${p =>
    p.theme.isDark ? p.theme.darkRGBA[25] : p.theme.darkRGBA[10]};
  border: none;
  color: ${color};
  padding: 8px 16px;
  border-radius: 8px;
  width: 100%;
  font-size: 12px;
  line-height: 1.6;

  transition: all 200ms;

  &:focus:not(:disabled) {
    background-color: ${focusBackgroundColor};
  }

  &:disabled {
    opacity: 0.5;
  }
`;
export default TextField;
