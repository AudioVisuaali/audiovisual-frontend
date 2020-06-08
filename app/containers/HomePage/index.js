/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import uuid from 'uuid/v4';

import LocaleToggle from 'containers/LocaleToggle';
import history from 'utils/history';
import { generatePathRoom } from 'utils/paths';
import CodedWithLove from 'components/CodedWithLove';

import messages from './messages';
import Wrapper from './styles/Wrapper';
import Logo from './styles/Logo';
import Container from './styles/Container';
import Button from './styles/Button';
import Label from './styles/Label';
import TextField from './styles/TextField';
import Description from './styles/Description';

const FullWidth = { width: '100%' };

const generateRandomRoom = () => uuid().substring(0, 8);

export const HomePage = () => {
  const [roomUnique, setRoomUnique] = useState(generateRandomRoom());
  const [isTransparent, setIsTransparent] = useState(false);

  const redirectToRoom = () => {
    setIsTransparent(true);
    const roomURL = generatePathRoom(roomUnique);
    setTimeout(() => history.push(roomURL), 200);
  };

  const handleUsernameChange = e => {
    setRoomUnique(e.target.value);
  };

  return (
    <Wrapper transparent={isTransparent}>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Visuals application homepage" />
      </Helmet>
      <Container>
        <Logo>Visuals</Logo>
        <Description>
          <FormattedMessage {...messages.description} />
        </Description>
        <Label>
          <FormattedMessage {...messages.displayRoomLabel} />
        </Label>
        <TextField
          type="text"
          spellCheck="false"
          value={roomUnique}
          style={FullWidth}
          onChange={handleUsernameChange}
        />

        <Button style={FullWidth} onClick={redirectToRoom}>
          <FormattedMessage {...messages.createRoomButton} />
        </Button>
        <LocaleToggle centered />
        <CodedWithLove />
      </Container>
    </Wrapper>
  );
};

export default HomePage;
