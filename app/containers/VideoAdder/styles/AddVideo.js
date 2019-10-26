import styled from 'styled-components';

const AddVideo = styled.button`
  background-color: #666;
  border: none;
  color: #fff;
  border-radius: 4px;
  padding: 8px 12px;

  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #555;
  }

  &:disabled {
    color: #aaa;
    cursor: not-allowed;
  }

  &:disabled:hover {
    background-color: #666;
  }
`;

export default AddVideo;
