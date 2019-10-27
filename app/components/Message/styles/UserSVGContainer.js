import styled from 'styled-components';

const UserSVGContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);

  width: 30px;
  height: 30px;
  margin-right: 10px;

  & svg {
    color: rgba(255, 255, 255, 0.4);
    width: 18px;
    height: 18px;
  }
`;

export default UserSVGContainer;
