import styled from 'styled-components';

const TooltipText = styled.div`
  visibility: ${p => (p.showing ? 'visible' : 'hidden')};
  width: 80px;
  background-color: ${p => p.theme.darkRGBA[90]};
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  font-weight: 700;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -40px;

  /* Fade in tooltip */
  opacity: ${p => (p.showing ? 1 : 0)};
  transition: opacity 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${p => p.theme.darkRGBA[90]} transparent transparent
      transparent;
  }
`;

export default TooltipText;
