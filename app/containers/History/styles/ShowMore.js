import styled from 'styled-components';

const ShowMore = styled.button`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  padding: 10px 20px;
  margin: 60px auto 120px;
  border: 1px solid #080808;
  border-radius: 4px;
  display: block;

  transition: all 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: rgba(255, 255, 255, 0.8);
  }
`;

export default ShowMore;
