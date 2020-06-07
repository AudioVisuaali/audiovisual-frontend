import styled from 'styled-components';

const MenusWrapper = styled.div(props => ({
  position: 'sticky',
  zIndex: 1,
  top: -1,
  transition: 'background-color 120ms',

  backgroundColor: props.theme.isDark
    ? props.theme.dark[500]
    : props.theme.grey[200],

  ...(props.isSticky && {
    borderBottom: `1px solid ${
      props.theme.isDark ? props.theme.dark[800] : props.theme.grey[500]
    }`,
    backgroundColor: props.theme.isDark
      ? props.theme.dark[400]
      : props.theme.grey[400],
  }),
}));

export default MenusWrapper;
