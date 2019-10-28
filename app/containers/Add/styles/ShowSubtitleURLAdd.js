import styled from 'styled-components';

const ShowSubtitleURLAdd = styled.button`
  color: ${props =>
    props.theme.isDark ? props.theme.light[900] : props.theme.dark[300]};
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export default ShowSubtitleURLAdd;
