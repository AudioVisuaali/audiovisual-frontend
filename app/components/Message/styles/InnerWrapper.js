import styled, { css } from 'styled-components';

const boxedBackgroundColor = props =>
  props.theme.isDark ? props.theme.darkRGBA[30] : props.theme.darkRGBA[10];

const boxed = props => css`
  border-radius: 6px;
  background-color: ${boxedBackgroundColor(props)};
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 8px 8px;

  ${props => props.boxed && boxed}
`;

export default InnerWrapper;
