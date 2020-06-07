import styled from 'styled-components';

const gradient = color => `linear-gradient(${color}, transparent);`;

const Gradient = styled.div(props => ({
  position: 'relative',

  ':after': {
    position: 'absolute',
    content: "''",
    width: '100%',
    top: 0,
    height: 100,
    backgroundImage: props.theme.isDark
      ? gradient(props.theme.dark[300])
      : gradient(props.theme.light[100]),
  },
}));

export default Gradient;
