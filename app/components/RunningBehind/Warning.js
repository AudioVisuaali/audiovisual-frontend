import styled, { css } from 'styled-components';

const hidden = css`
  transform: translateX(2em);
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
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 1.1em;
  border: 1px solid rgba(0, 0, 0, 0.6);
  color: ${p => (p.theme.isDark ? p.theme.light[50] : p.theme.dark[800])};

  will-change: opacity, transform;
  transition-property: transform, opacity;
  transition-duration: 200ms;

  ${p => p.hide && hidden}

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  & svg {
    margin-right: 8px;
    display: inline;
    opacity: 0.8;
    width: 18px;
    height: 18px;
    animation: rotating 2s linear infinite;
  }
`;

export default Warning;
