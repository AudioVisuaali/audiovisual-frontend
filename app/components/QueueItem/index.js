/**
 *
 * QueueItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';

import RandomSVG from 'svgs/Random';
import RepeatSVG from 'svgs/Repeat';
import TrashSVG from 'svgs/Trash';
import ArrowsSVG from 'svgs/Arrows';
import ForwardSVG from 'svgs/Forward';
import A from 'components/A';

// import messages from './messages';
import Img from './styles/Img';
import Title from './styles/Title';
import Channel from './styles/Channel';
import AddedBy from './styles/AddedBy';
import Wrapper from './styles/Wrapper';
import Metadata from './styles/Metadata';
import Username from './styles/Username';
import Placement from './styles/Placement';
import Thumbnail from './styles/Thumbnail';
import RepeatButton from './styles/RepeatButton';
import InfoAndActions from './styles/InfoAndActions';
import PlacementContainer from './styles/PlacementContainer';

const QueueItem = ({
  onRepeat,
  onDelete,
  onMove,
  onSkip,
  showMove,
  showPlacement,
  placement,
  video,
  user,
}) => (
  <Wrapper>
    {showPlacement && (
      <PlacementContainer>
        <Placement>{placement ? `${placement}.` : <RandomSVG />}</Placement>
      </PlacementContainer>
    )}
    <Thumbnail>
      <A href={video.links.video}>
        {video.thumbnail && <Img src={video.thumbnail} alt={video.title} />}
      </A>
    </Thumbnail>
    <Metadata>
      <div>
        <Title>
          <A href={video.links.video}>
            <div>{video.title}</div>
          </A>
        </Title>
        <Channel>
          <A href={video.links.channel}>
            <div>{video.channel}</div>
          </A>
        </Channel>
      </div>
      <InfoAndActions>
        {onRepeat && (
          <RepeatButton onClick={() => onRepeat(video)}>
            <RepeatSVG />
          </RepeatButton>
        )}
        {(showMove || onMove) && (
          <RepeatButton onClick={() => onMove && onMove(video)}>
            <ArrowsSVG />
          </RepeatButton>
        )}
        {onSkip && (
          <RepeatButton onClick={() => onSkip(video)}>
            <ForwardSVG />
          </RepeatButton>
        )}
        {onDelete && (
          <RepeatButton onClick={() => onDelete(video)}>
            <TrashSVG />
          </RepeatButton>
        )}
        {user && (
          <AddedBy>
            Added By: <Username>{user.username}</Username>
          </AddedBy>
        )}
      </InfoAndActions>
    </Metadata>
  </Wrapper>
);

QueueItem.propTypes = {
  onRepeat: PropTypes.func,
  onDelete: PropTypes.func,
  onMove: PropTypes.func,
  onSkip: PropTypes.func,
  showMove: PropTypes.bool,
  showPlacement: PropTypes.bool,
  placement: PropTypes.number,
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
  video: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    channel: PropTypes.string,
    links: PropTypes.shape({
      channel: PropTypes.string,
      video: PropTypes.string,
    }),
  }),
};

export default QueueItem;
