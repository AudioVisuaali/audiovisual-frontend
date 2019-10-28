import styled from 'styled-components';

const ActionButton = styled.button`
  padding: 6px 10px;
  color: ${p => (p.theme.isDark ? p.theme.light[50] : p.theme.light[50])};
  border-radius: 4px;
  margin-left: 8px;
  background-color: ${p =>
    p.theme.isDark ? p.theme.darkRGBA[20] : p.theme.light[700]};
  border: none;
  min-width: 75px;
`;

export default ActionButton;
