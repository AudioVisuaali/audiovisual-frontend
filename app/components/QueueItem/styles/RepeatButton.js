import styled from 'styled-components';

const RepeatButton = styled.button`
  flex-shrink: 0;
  border: none;
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-right: 5px;

  transition: all 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  & svg {
    color: rgba(255, 255, 255, 0.6);
    width: 16px;
    height: 16px;

    transition: all 200ms;
  }

  &:hover svg {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export default RepeatButton;
