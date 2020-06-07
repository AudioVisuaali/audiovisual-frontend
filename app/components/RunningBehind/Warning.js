import styled, { css } from 'styled-components';

const hidden = css`
  transform: translateX(3.5em);
  opacity: 0;
`;

const Warning = styled.div`
  opacity: 1;
  transform: translateX(0);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(217, 136, 0, 0.95);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  padding: 6px 8px;
  border-radius: 8px;
  font-size: 1.1em;
  border: 1px solid rgba(0, 0, 0, 0.6);
  color: ${p => (p.theme.isDark ? p.theme.light[50] : p.theme.dark[800])};

  will-change: opacity, transform;
  transition-property: transform, opacity;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  line-height: 1;

  ${p => p.hide && hidden}

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  & svg {
    margin-right: 8px;
    display: inline-block;
    opacity: 0.8;
    width: 18px;
    height: 18px;
    animation: rotating 580ms cubic-bezier(0.45, 0, 0.55, 1) infinite;
  }
`;

export default Warning;
