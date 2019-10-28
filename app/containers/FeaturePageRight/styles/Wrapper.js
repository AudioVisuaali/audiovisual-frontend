import styled from 'styled-components';
import device from 'styles/device';

const mediaScreenBackgroundColor = p =>
  p.theme.isDark ? p.theme.dark[200] : p.theme.grey[400];

export default styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 400px;
  height: 100%;
  border-left: 1px solid
    ${p => (p.theme.isDark ? p.theme.dark[800] : p.theme.grey[900])};
  background-color: ${p =>
    p.theme.isDark ? p.theme.dark[300] : p.theme.light[50]};
  display: flex;
  flex-direction: column;

  @media screen and ${device.laptopL} {
    max-width: 350px;
  }

  @media screen and ${device.laptop} {
    max-width: 300px;
  }

  @media screen and ${device.tablet} {
    max-width: none;
    height: auto;
    background-color: ${mediaScreenBackgroundColor};
  }
`;
