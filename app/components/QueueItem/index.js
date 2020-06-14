/**
 *
 * QueueItem
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Tooltip from '@material-ui/core/Tooltip';
import { motion } from 'framer-motion';

import RandomSVG from 'svgs/Random';
import RepeatSVG from 'svgs/Repeat';
import TrashSVG from 'svgs/Trash';
import BarsSVG from 'svgs/Bars';
import ForwardSVG from 'svgs/Forward';
import A from 'components/A';
import PlatformIcon from 'components/PlatformIcon';

import messages from './messages';
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
import PlatformWrapper from './styles/PlatformWrapper';

const variants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
  exit: { y: 0, opacity: 0 },
};

const QueueItem = ({
  onRepeat,
  onDelete,
  onSkip,
  showMove,
  showPlacement,
  placement,
  video,
  user,
  intl,
}) => {
  const [hovering, setHovering] = useState(false);

  const getPlacement = () => {
    if (hovering && showMove) {
      return <BarsSVG />;
    }

    return placement ? `${placement}.` : <RandomSVG />;
  };

  return (
    <motion.div variants={variants}>
      <Wrapper
        showMove={showMove}
        onFocus={() => setHovering(true)}
        onMouseOver={() => setHovering(true)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {showPlacement && (
          <PlacementContainer>
            <Placement>{getPlacement()}</Placement>
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
            <PlatformWrapper>
              <PlatformIcon type={video.type} />
            </PlatformWrapper>
            {onRepeat && (
              <Tooltip
                arrow
                title={intl.formatMessage(messages.repeat)}
                enterDelay={400}
                placement="top"
              >
                <RepeatButton onClick={() => onRepeat(video)}>
                  <RepeatSVG />
                </RepeatButton>
              </Tooltip>
            )}
            {onSkip && (
              <Tooltip
                arrow
                title={intl.formatMessage(messages.skip)}
                enterDelay={400}
                placement="top"
              >
                <RepeatButton onClick={() => onSkip(video)}>
                  <ForwardSVG />
                </RepeatButton>
              </Tooltip>
            )}
            {onDelete && (
              <Tooltip
                arrow
                title={intl.formatMessage(messages.remove)}
                enterDelay={400}
                placement="top"
              >
                <RepeatButton onClick={() => onDelete(video)}>
                  <TrashSVG />
                </RepeatButton>
              </Tooltip>
            )}
            {user && (
              <AddedBy>
                Added By: <Username>{user.username}</Username>
              </AddedBy>
            )}
          </InfoAndActions>
        </Metadata>
      </Wrapper>
    </motion.div>
  );
};

QueueItem.propTypes = {
  onRepeat: PropTypes.func,
  onDelete: PropTypes.func,
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
    type: PropTypes.string,
    links: PropTypes.shape({
      channel: PropTypes.string,
      video: PropTypes.string,
    }),
  }),
  intl: PropTypes.object,
};

export default injectIntl(QueueItem);
