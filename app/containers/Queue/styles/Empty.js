import styled from 'styled-components';

const Empty = styled.div`
  margin: 40px 20px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 28px;
  color: ${p => (p.theme.isDark ? p.theme.grey[700] : p.theme.grey[600])};

  & svg {
    height: 100px;
    margin-bottom: 20px;
  }
`;

export default Empty;
