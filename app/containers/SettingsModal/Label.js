import styled from 'styled-components';

const Label = styled.label`
  color: ${props =>
    props.theme.isDark ? props.theme.whiteRGBA[60] : props.theme.grey[800]};
  margin-bottom: 2px;
  display: block;
`;

export default Label;
