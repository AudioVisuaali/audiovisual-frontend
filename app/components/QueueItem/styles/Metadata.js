import styled, { css } from 'styled-components';

const shadow = css`
  text-shadow: 2px 2px 4px #000000;
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props => props.theme.isDark && shadow}
`;

export default Metadata;
