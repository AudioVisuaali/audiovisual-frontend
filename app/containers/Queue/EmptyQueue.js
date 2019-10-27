import React from 'react';
import ListSVG from 'svgs/List';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Empty from './styles/Empty';

const EmptyQueue = () => (
  <Empty>
    <ListSVG />
    <FormattedMessage {...messages.queueEmpty} />
  </Empty>
);

export default EmptyQueue;
