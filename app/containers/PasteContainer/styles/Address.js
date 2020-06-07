import styled from 'styled-components';

const Address = styled.div(props => ({
  fontSize: 14,
  color: props.theme.isDark ? props.theme.light[900] : props.theme.dark[500],
}));

export default Address;
