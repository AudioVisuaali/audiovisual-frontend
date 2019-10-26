import styled from 'styled-components';

const Send = styled.button`
  cursor: pointer;
  background-color: #585858;
  border: none;
  color: #fff;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;

  transition: all 200ms ease-out;

  &:hover {
    background-color: #484848;
  }

  &:disabled {
    color: #aaa;
    cursor: not-allowed;
  }

  &:disabled:hover {
    background-color: #585858;
  }
`;

export default Send;
