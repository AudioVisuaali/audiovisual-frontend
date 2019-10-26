/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

const App = () => (
  <>
    <Helmet titleTemplate="%s - Visuals" defaultTitle="Visuals">
      <meta name="description" content="Visuals for watching vidoes together" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/room/:roomcode" component={FeaturePage} exact />
      <Route path="/not-found" component={NotFoundPage} />
      <Redirect to="/not-found" />
    </Switch>
    <GlobalStyle />
  </>
);

export default App;
