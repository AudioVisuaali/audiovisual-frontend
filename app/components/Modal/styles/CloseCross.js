import styled from 'styled-components';

const CloseCross = styled.button`
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 22px;
  top: 22px;
  transform: scale(1);
  border-radius: 100%;
  padding: 0;
  margin: 0;

  transition: transform 200ms ease-out;

  &:hover {
    transform: scale(1.2);
    background-color: rgba(0, 0, 0, 0.4);
  }

  & svg {
    width: 18px;
    height: 18px;
    color: #fff;
  }
`;

export default CloseCross;
