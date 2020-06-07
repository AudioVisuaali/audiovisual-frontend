import styled, { css } from 'styled-components';
import device from 'styles/device';
import fadeIn from 'styles/animations/fadeIn';
import fadeAndSlideInFromTop from 'styles/animations/fadeAndSlideInFromTop';

const fixed = css`
  position: fixed;
  font-size: 10px;
  z-index: 999;
  top: ${p => (p.sticky ? 160 : 30)}px;
  right: ${p => (p.sticky ? 10 : 30)}px;
  border-radius: 8px;
  overflow: hidden;

  width: 800px;
  height: 450px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.3),
    0px 4px 5px 0px rgba(0, 0, 0, 0.21), 0px 1px 10px 0px rgba(0, 0, 0, 0.4);

  transition: top 200ms, right 200ms;

  animation: ${fadeAndSlideInFromTop} ease 500ms;

  @media screen and (${device.desktop}) {
    width: 640px;
    height: 360px;
  }

  @media screen and (${device.laptopL}) {
    width: 400px;
    height: 225px;
  }
`;

const normal = css`
  width: 100%;
  height: 100%;
  font-size: 16px;

  animation: ${fadeIn} ease 450ms;
`;

export default styled.div`
  ${props => (props.dynamic ? fixed : normal)}
`;
