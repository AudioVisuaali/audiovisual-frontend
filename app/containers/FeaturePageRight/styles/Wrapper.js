import styled from 'styled-components';
import device from 'styles/device';

const mediaScreenBackgroundColor = p =>
  p.theme.isDark ? p.theme.dark[200] : p.theme.grey[400];

export default styled.div(p => ({
  flexShrink: 0,
  maxWidth: 600,
  minWidth: 300,
  height: '100%',
  borderLeft: `1px solid ${
    p.theme.isDark ? p.theme.dark[800] : p.theme.grey[500]
  }`,
  backgroundColor: p.theme.isDark ? p.theme.dark[300] : p.theme.light[100],
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: p.width,

  [`@media screen and (${device.tablet})`]: {
    maxWidth: 'none',
    height: 'auto',
    backgroundColor: mediaScreenBackgroundColor,
  },
}));
