/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import history from 'utils/history';
import { pathHome } from 'utils/paths';
import BugSVG from 'svgs/Bug';
import messages from './messages';

import Wrapper from './styles/Wrapper';
import Content from './styles/Content';
import Header from './styles/Header';
import Text from './styles/Text';
import Message from './styles/Message';
import Button from './styles/Button';
import Description from './styles/Description';

const NotFound = () => (
  <Wrapper>
    <Content>
      <Header>
        <BugSVG />
        <Text>404</Text>
      </Header>
      <Message>
        <FormattedMessage {...messages.message} />
      </Message>
      <Description>
        <FormattedMessage {...messages.description} />
      </Description>
      <Button onClick={() => history.push(pathHome)}>
        <FormattedMessage {...messages.toHome} />
      </Button>
    </Content>
  </Wrapper>
);

export default NotFound;
