import styled from 'styled-components';

const ShowMoreOptions = styled.div`
  color: ${props =>
    props.theme.isDark ? props.theme.light[900] : props.theme.grey[500]};
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default ShowMoreOptions;
