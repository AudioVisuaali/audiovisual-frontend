import styled from 'styled-components';

const MenusWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #080808;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: space-between;
  padding: 0 16px;

  @media screen and (max-width: 760px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 400px) {
    padding: 0 4px;
  }
`;

export default MenusWrapper;
