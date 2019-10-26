import styled from 'styled-components';
import device from 'styles/device';

const AddedBy = styled.div`
  color: #aaa;
  font-weight: 300;
  font-size: 12px;

  @media screen and ${device.tablet} {
    font-size: 10px;
  }
`;

export default AddedBy;
