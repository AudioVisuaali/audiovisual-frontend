import styled from 'styled-components';
import Button from 'components/Button';

const copied = props =>
  props.isCopied &&
  `
  background-color: #077825;

  &:hover {
    background-color: #077825;
    cursor: not-allowed;
  }
`;

const Copy = styled(Button)`
  ${copied}
`;

export default Copy;
