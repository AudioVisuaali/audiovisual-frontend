import styled, { css } from 'styled-components';

import UserSVGContainer from './UserSVGContainer';

const boxedBackgroundColor = props =>
  props.theme.isDark ? props.theme.darkRGBA[30] : props.theme.darkRGBA[10];

const checkBoxed = props =>
  props.boxed &&
  css`
    border-radius: 6px;
    background-color: ${boxedBackgroundColor(props)};
  `;

const checkPadding = ({ disablePadding }) =>
  disablePadding && {
    padding: '0 8px 8px',

    ':hover': {
      [UserSVGContainer]: {
        opacity: 1,
      },
    },
  };

const InnerWrapper = styled.div(
  {
    display: 'flex',
    width: '100%',
    padding: '8px 8px 8px',
  },
  checkBoxed,
  checkPadding,
);

export default InnerWrapper;
