import styled from 'styled-components';

export default styled.button`
  width: 80px;
  height: 100px;
  background-color: ${p =>
    p.active ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
  border: 1px solid ${p => (p.active ? '#101010' : 'transparent')};
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  padding: 0 4px;
  font-size: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  & svg {
    max-width: 36px;
    max-height: 40px;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    margin-bottom: 6px;
  }
`;
