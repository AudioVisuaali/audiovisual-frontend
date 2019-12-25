import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.grey[700]);

const MultipleOptionsInput = styled.div`
  display: flex;
  justify-content: space-between;

  & a {
    color: #aaa;
  }

  & svg {
    color: ${color};
    width: 10px;
    height: 10px;
  }
`;

export default MultipleOptionsInput;
