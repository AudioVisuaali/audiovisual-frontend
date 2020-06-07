import { useState, useEffect } from 'react';
import axios from 'axios';

const MATCH_TWITCH_CHANNEL_URL = /(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/;

const createPath = () => {
  const { WEBSOCKET_PORT } = process.env;
  const port = WEBSOCKET_PORT ? `:${WEBSOCKET_PORT}` : '';
  return port;
};

const createUrl = channel =>
  `${createPath()}/api/live/twitch/${channel}/viewers`;

const getChannelURLName = url => {
  const channel = url.match(MATCH_TWITCH_CHANNEL_URL);
  return channel[1];
};

const TwitchViewerCount = ({ channelUrl }) => {
  const [channel, setChannel] = useState(getChannelURLName(channelUrl));
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    getViewers();
    setInterval(getViewers, 20000); // 60s
  }, []);

  useEffect(() => {
    setChannel(getChannelURLName(channelUrl));
  }, [channelUrl]);

  const getViewers = () => {
    axios
      .get(createUrl(channel))
      .then(response => {
        setViewerCount(response.data.totalViewers);
      })
      .catch();
  };

  return `${viewerCount}`;
};

export default TwitchViewerCount;
