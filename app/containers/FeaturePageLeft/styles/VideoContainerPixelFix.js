import styled from 'styled-components';

const VideoContainerPixelFix = styled.div`
  border-bottom: 1px solid
    ${p => (p.theme.isDark ? p.theme.dark[800] : p.theme.grey[500])};
  overflow: hidden;
`;

export default VideoContainerPixelFix;
