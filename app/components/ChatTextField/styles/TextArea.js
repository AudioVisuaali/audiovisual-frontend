import styled from 'styled-components';

const TextArea = styled.textarea(p => ({
  resize: 'none',
  minHeight: 80,
  marginBottom: 3,
  fontFamily: 'inherit',

  backgroundColor: p.theme.isDark ? p.theme.darkRGBA[25] : p.theme.darkRGBA[10],
  border: 'none',
  color: p.theme.isDark ? p.theme.light[600] : p.theme.dark[200],
  padding: 10,
  borderRadius: 8,
  width: '100%',
  transition: 'all 200ms',

  ':focus': {
    backgroundColor: p.theme.isDark
      ? p.theme.darkRGBA[25]
      : p.theme.darkRGBA[20],
  },
}));

export default TextArea;
