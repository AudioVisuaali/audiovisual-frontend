import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[50] : p.theme.grey[800]);

const Comment = styled.div`
  color: ${color};
  margin-bottom: 20px;
`;

export default Comment;
