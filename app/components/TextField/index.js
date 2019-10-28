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

const TextField = styled.input`
  background-color: transparent;
  border: 1px solid ${borderColor};
  color: ${color};
  padding: 8px 14px;
  border-radius: 4px;
  width: 100%;
`;
export default TextField;
