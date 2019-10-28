/**
 *
 */

import styled, { css } from 'styled-components';

const active = props => css`
  background-color: ${props.theme.isDark
    ? props.theme.darkRGBA[30]
    : props.theme.darkRGBA[30]};
  border: 1px solid
    ${props.theme.isDark ? props.theme.dark[700] : props.theme.grey[600]};
`;

const Tab = styled.button`
  width: 80px;
  height: 100px;
  background-color: ${props =>
    props.theme.isDark ? props.theme.darkRGBA[10] : props.theme.darkRGBA[10]};
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${props =>
    props.theme.isDark ? props.theme.light[50] : props.theme.dark[500]};
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px 10px 0;
  padding: 0 4px;
  font-size: 12px;

  transition: all 100ms ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  & svg {
    max-width: 36px;
    max-height: 40px;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    margin-bottom: 6px;
  }

  ${props => props.active && active(props)}
`;

export default Tab;
