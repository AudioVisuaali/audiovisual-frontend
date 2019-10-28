import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  background-color: ${p =>
    p.theme.isDark ? p.theme.darkRGBA[10] : 'transparent'};
  border: 1px solid
    ${p => (p.theme.isDark ? p.theme.dark[800] : p.theme.grey[500])};
  overflow-y: hidden;
  resize: none;
  min-height: 80px;
  margin-bottom: 3px;
  padding: 8px;
  font-family: inherit;
  color: ${p => (p.theme.isDark ? p.theme.grey[500] : p.theme.grey[800])};
  border-radius: 4px;
`;

export default TextArea;
