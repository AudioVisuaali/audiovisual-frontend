import styled, { css } from 'styled-components';
import device from 'styles/device';
import fadeIn from 'styles/animations/fadeIn';
import fadeAndSlideInFromTop from 'styles/animations/fadeAndSlideInFromTop';

const fixed = css`
  position: fixed;
  z-index: 999;
  top: 30px;
  right: 30px;

  width: 800px;
  height: 450px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  animation: ${fadeAndSlideInFromTop} ease 500ms;

  @media screen and (${device.desktop}) {
    width: 600px;
    height: 337px;
  }

  @media screen and (${device.laptopL}) {
    width: 400px;
    height: 225px;
  }

  @media screen and (${device.tablet}) {
    width: 300px;
    height: 167px;
  }
`;

const normal = css`
  width: 100%;
  height: 100%;

  animation: ${fadeIn} ease 450ms;
`;

export default styled.div`
  ${props => (props.dynamic ? fixed : normal)}
`;
