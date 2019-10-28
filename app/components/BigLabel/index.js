/**
 *
 * BigLabel
 *
 */

import { memo } from 'react';
import styled, { css } from 'styled-components';

const shadow = css`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const BigLabel = styled.div`
  font-size: 24px;
  color: ${p => (p.theme.isDark ? p.theme.whiteRGBA[50] : p.theme.grey[800])};
  font-weight: 500;
  ${p => p.theme.isDark && shadow}
`;

export default memo(BigLabel);
