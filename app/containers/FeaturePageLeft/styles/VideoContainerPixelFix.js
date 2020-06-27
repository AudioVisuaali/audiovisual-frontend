import styled from 'styled-components';

const clamp = (min, max, value) => Math.min(Math.max(value, min), max);

const calculateDimension = dimension => {
  if (!dimension) {
    return 56.25;
  }

  const { width, height } = dimension;
  const invertedAspect = height / width;

  return clamp(38, 56.25, invertedAspect * 100);
};

const VideoContainerPixelFix = styled.div(props => ({
  overflow: 'hidden',
  position: 'relative',
  paddingBottom: `${calculateDimension(props.dimension)}%`,
  transition: 'padding-bottom 350ms',
}));

export default VideoContainerPixelFix;
