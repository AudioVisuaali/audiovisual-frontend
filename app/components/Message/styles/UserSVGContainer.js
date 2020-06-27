import styled from 'styled-components';

const UserSVGContainer = styled.div(p => ({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 30,
  height: 30,
  marginRight: 10,
  fontSize: 10,
  marginTop: 2,
  lineHeight: 2,
  color: p.theme.isDark ? p.theme.whiteRGBA[40] : p.theme.light[50],

  borderRadius: '100%',
  overflow: 'hidden',
  backgroundColor: p.theme.isDark ? p.theme.darkRGBA[20] : p.theme.darkRGBA[60],

  svg: {
    color: p.theme.isDark ? p.theme.whiteRGBA[40] : p.theme.light[50],
    width: 18,
    height: 18,
  },
}));

export default UserSVGContainer;
