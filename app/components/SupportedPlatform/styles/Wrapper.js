/**
 *
 */

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80px;
  height: 100px;
  background-color: ${props =>
    props.theme.isDark ? props.theme.darkRGBA[10] : props.theme.darkRGBA[10]};
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

  & svg {
    width: 36px;
    height: 40px;
    flex-shrink: 0;
    margin-bottom: 6px;
  }
`;

export default Wrapper;
