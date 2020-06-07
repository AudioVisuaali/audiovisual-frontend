import styled from 'styled-components';

export default styled.div(props => ({
  flexGrow: 1,
  height: '100%',
  backgorundColor: props.theme.isDark
    ? props.theme.dark[500]
    : props.theme.grey[200],
}));
