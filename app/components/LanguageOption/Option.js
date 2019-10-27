import styled, { css } from 'styled-components';

const active = css`
  opacity: 0.9;
`;

const Option = styled.button`
  margin: 0 10px 0 0;
  border: none;
  padding: 0;
  opacity: 0.2;
  border-radius: 2px;
  overflow: hidden;

  transition: opacity 100ms;

  & svg {
    width: 30px;
  }

  &:hover {
    opacity: 1;
  }

  ${props => props.active && active}
`;

export default Option;
