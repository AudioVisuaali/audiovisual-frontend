import styled from 'styled-components';
import device from 'styles/device';

const AddedBy = styled.div`
  color: ${p => (p.theme.isDark ? p.theme.light[700] : p.theme.dark[600])};
  font-weight: 300;
  font-size: 12px;

  @media screen and (${device.tablet}) {
    font-size: 10px;
  }
`;

export default AddedBy;
