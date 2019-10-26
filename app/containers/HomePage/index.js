/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import uuid from 'uuid/v4';

import { getItem, setItem, USERNAME } from 'utils/localStorage';
import history from 'utils/history';

import Wrapper from './styles/Wrapper';
import Logo from './styles/Logo';
import Container from './styles/Container';
import Button from './styles/Button';
import Label from './styles/Label';
import TextField from './styles/TextField';
import Description from './styles/Description';
import CodedWithLove from './CodedWithLove';

const FullWidth = { width: '100%' };

export const HomePage = () => {
  const [username, setUsername] = useState(getItem(USERNAME) || '');
  const [isTransparent, setIsTransparent] = useState(false);

  const redirectToRoom = () => {
    setIsTransparent(true);
    const unique = uuid().substring(0, 8);
    setTimeout(() => history.push(`/room/${unique}`), 200);
  };

  const handleUsernameChange = e => {
    const { value } = e.target;
    setUsername(value);
    setItem(USERNAME, value);
  };

  return (
    <Wrapper transparent={isTransparent}>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Visuals application homepage" />
      </Helmet>
      <Container>
        <Logo>Visuals</Logo>
        <Description>Watch videos together. Anywhere. Whenever.</Description>
        <Label>Display name</Label>
        <TextField
          type="text"
          spellCheck="false"
          value={username}
          style={FullWidth}
          onChange={handleUsernameChange}
        />

        <Button style={FullWidth} onClick={redirectToRoom}>
          Create Room
        </Button>
        <CodedWithLove />
      </Container>
    </Wrapper>
  );
};

export default HomePage;
