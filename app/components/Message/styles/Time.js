import styled from 'styled-components';
import device from 'styles/device';

const Time = styled.span(props => ({
  color: props.theme.isDark ? props.theme.whiteRGBA[20] : props.theme.grey[800],
  fontSize: 10,
  fontWeight: 300,

  [`@media screen and (${device.tablet})`]: {
    fontSize: 8,
  },
}));

export default Time;
