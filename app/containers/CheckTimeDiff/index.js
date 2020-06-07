import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setClientServerTimeOffset } from 'containers/WebSocket/actions';

const createPath = () => {
  const { WEBSOCKET_PORT } = process.env;
  const port = WEBSOCKET_PORT ? `:${WEBSOCKET_PORT}` : '';
  return port;
};

const instance = axios.create({});

instance.interceptors.request.use(config => {
  // eslint-disable-next-line no-param-reassign
  config.headers['request-startTime'] = new Date().getTime();
  return config;
}, Promise.reject);

instance.interceptors.response.use(response => {
  const start = response.config.headers['request-startTime'];
  const end = new Date().getTime();
  const milliseconds = end - start;
  response.headers['request-duration'] = milliseconds;
  return response;
});

const url = `${createPath()}/api/current-time`;

const CheckTimeDiff = ({ setDiffOffset }) => {
  useEffect(() => {
    setTimeout(getTime, 500);
  }, []);

  const getTime = () => {
    Promise.all([instance.get(url), instance.get(url), instance.get(url)])
      .then(values => {
        let pingTime;
        let currentTime;

        values.forEach(value => {
          const pinrequestDuration = value.headers['request-duration'];
          if (!pingTime || pingTime > pinrequestDuration) {
            pingTime = pinrequestDuration;
            currentTime = value.data.currentTime;
          }
        });
        const timeDiffToServer = currentTime - new Date().getTime();
        const diffWithPing = timeDiffToServer + pingTime;
        setDiffOffset(diffWithPing);
      })
      .catch(console.log);
  };

  return null;
};

const mapDispatchToProps = dispatch => ({
  setDiffOffset: evt => dispatch(setClientServerTimeOffset(evt)),
});

export default connect(null, mapDispatchToProps)(CheckTimeDiff);
