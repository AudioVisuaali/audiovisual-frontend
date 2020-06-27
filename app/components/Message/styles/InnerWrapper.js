import styled, { css } from 'styled-components';

const style = {
  display: 'flex',
  width: '100%',
  padding: '8px 8px 8px',
};

const boxedBackgroundColor = props =>
  props.theme.isDark ? props.theme.darkRGBA[30] : props.theme.darkRGBA[10];

const checkBoxed = props =>
  props.boxed &&
  css`
    border-radius: 6px;
    background-color: ${boxedBackgroundColor(props)};
  `;

const InnerWrapper = styled.div(style, checkBoxed);

export default InnerWrapper;
