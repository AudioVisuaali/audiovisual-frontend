import styled from 'styled-components';
import device from 'styles/device';

const MenusWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid
    ${p => (p.theme.isDark ? p.theme.dark[800] : p.theme.grey[500])};
  background-color: ${p =>
    p.theme.isDark ? p.theme.darkRGBA[20] : p.theme.darkRGBA[10]};
  justify-content: space-between;
  padding: 0 16px;

  @media screen and ${device.tablet} {
    padding: 0 10px;
  }

  @media screen and ${device.mobileL} {
    padding: 0 4px;
  }
`;

export default MenusWrapper;
