import styled, { css } from 'styled-components';

const hidden = css`
  transform: translateX(3.5em);
  opacity: 0;
`;

const show = css`
  @keyframes slideIn {
    0% {
      transform: translateX(3.5em);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  animation: slideIn 350ms cubic-bezier(0.22, 1, 0.36, 1);
`;

const ErrorContainer = styled.div`
  opacity: 1;
  transform: translateX(0);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(181, 16, 16);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 1em;
  border: 1px solid rgba(0, 0, 0, 0.6);
  color: ${p => (p.theme.isDark ? p.theme.light[50] : p.theme.dark[800])};

  will-change: opacity, transform;
  transition-property: transform, opacity;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  line-height: 1;

  ${p => (p.hide ? hidden : show)}
`;

export default ErrorContainer;
