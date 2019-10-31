import styled from 'styled-components';

const UserSVGContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;
  overflow: hidden;
  background-color: ${p =>
    p.theme.isDark ? p.theme.darkRGBA[20] : p.theme.darkRGBA[60]};

  width: 30px;
  height: 30px;
  margin-right: 10px;

  & svg {
    color: ${p => (p.theme.isDark ? p.theme.whiteRGBA[40] : p.theme.light[50])};
    width: 18px;
    height: 18px;
  }
`;

export default UserSVGContainer;
