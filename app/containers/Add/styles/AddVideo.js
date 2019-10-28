import styled from 'styled-components';

const backgroundColor = p =>
  p.theme.isDark ? p.theme.grey[700] : p.theme.light[700];
const hoverBackgroundColor = p =>
  p.theme.isDark ? p.theme.grey[700] : p.theme.light[800];

const disabledColor = props =>
  props.theme.isDark ? props.theme.light[700] : props.theme.light[800];
const disabledBackgroundColor = props =>
  props.theme.isDark ? props.theme.grey[700] : props.theme.light[600];

const AddVideo = styled.button`
  background-color: ${backgroundColor};
  border: none;
  color: #fff;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 500;

  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${hoverBackgroundColor};
  }

  &:disabled,
  :hover:disabled {
    color: ${disabledColor};
    cursor: not-allowed;
    background-color: ${disabledBackgroundColor};
  }
`;

export default AddVideo;
