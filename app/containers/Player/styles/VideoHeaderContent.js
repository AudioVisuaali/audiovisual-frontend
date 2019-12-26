import styled from 'styled-components';

const VideoHeaderContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8em;
  color: #fff;
  font-weight: 500;
  font-size: 1.25em;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.6);

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
