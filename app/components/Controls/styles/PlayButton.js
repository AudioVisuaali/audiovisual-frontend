import styled from 'styled-components';

export default styled.button`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: #fff;
  padding: 10px 10px 10px 10px;
  border-radius: 100%;
  transition: background-color 0.2s;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  & svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }
`;
