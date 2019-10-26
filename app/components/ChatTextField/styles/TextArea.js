import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid #080808;
  overflow-y: hidden;
  resize: none;
  min-height: 80px;
  margin-bottom: 3px;
  padding: 8px;
  font-family: inherit;
  color: #999;
  border-radius: 4px;
`;

export default TextArea;
