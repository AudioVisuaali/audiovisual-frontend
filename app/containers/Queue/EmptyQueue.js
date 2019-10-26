import React from 'react';
import ListSVG from 'svgs/List';
import Empty from './Empty';

const EmptyQueue = () => (
  <Empty>
    <ListSVG />
    Video queue is empty
  </Empty>
);

export default EmptyQueue;
