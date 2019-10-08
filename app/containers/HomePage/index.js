/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import history from '../../utils/history';
import Wrapper from './styles/Wrapper';
import Logo from './styles/Logo';
import Container from './styles/Container';
import Button from './styles/Button';
import Label from './styles/Label';
import TextField from './styles/TextField';

const FullWidth = {
  width: '100%',
};

export const HomePage = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const redirectToRoom = () => {
    setIsTransparent(true);
    setTimeout(() => history.push('/room/12345'), 200);
  };

  return (
    <Wrapper transparent={isTransparent}>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Visuals application homepage" />
      </Helmet>
      <Container>
        <Logo>Visuals</Logo>

        <Label>Display name</Label>
        <TextField style={FullWidth} />

        <Button style={FullWidth} onClick={redirectToRoom}>
          Create Room
        </Button>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
