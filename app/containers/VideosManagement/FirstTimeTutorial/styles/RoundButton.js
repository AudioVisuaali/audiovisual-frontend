import styled from 'styled-components';
import Button from 'components/Button';

const color = p => (p.theme.isDark ? p.theme.light[50] : p.theme.light[50]);
const backgroundColor = p =>
  p.theme.isDark ? p.theme.darkRGBA[50] : p.theme.grey[700];

const hoverBackgroundColor = p =>
  p.theme.isDark ? p.theme.darkRGBA[60] : p.theme.grey[800];

const RoundButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  height: 50px;
  width: 50px;
  min-width: auto;
  padding: 10px;
  border-radius: 100%;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
  color: ${color};
  background-color: ${backgroundColor};
  opacity: ${p => (p.visible ? '0' : '1')};

  transition: all 1000;

  &:hover {
    background-color: ${hoverBackgroundColor};
  }

  & svg {
    padding-top: 4px;
    height: 30px;
    width: 30px;
  }

  @keyframes bounceBack {
    0% {
      transform: translateY(-38%);
    }
    50% {
      transform: translateY(-62%);
    }
    100% {
      transform: translateY(-38%);
    }
  }

  animation: bounceBack 5s infinite;
`;

export default RoundButton;
