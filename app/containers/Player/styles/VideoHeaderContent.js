import styled from 'styled-components';

const VideoHeaderContent = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  color: #fff;
  font-weight: 500;
  font-size: 1.25em;

  & a {
    width: 100%;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & svg {
    height: 2em;
    margin-right: 10px;
  }
`;

export default VideoHeaderContent;
