import styled from 'styled-components';
import device from 'styles/device';

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  padding: 10px 16px;

  transition: background-color 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  & svg {
    width: 12px;
  }

  @media screen and ${device.tablet} {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media screen and ${device.mobileL} {
    font-size: 12px;
    padding: 8px 8px;
  }
`;

export default Button;
