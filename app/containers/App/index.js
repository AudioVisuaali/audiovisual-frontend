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

import Base64 from 'containers/Base64/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { pathHome, pathRoom, pathBase64, pathNotFound } from 'utils/paths';

import GlobalStyle from '../../global-styles';

const App = () => (
  <>
    <Helmet titleTemplate="%s - Visuals" defaultTitle="Visuals">
      <meta name="description" content="Visuals for watching vidoes together" />
    </Helmet>
    <Switch>
      <Route exact path={pathHome} component={HomePage} />
      <Route path={pathRoom} component={FeaturePage} exact />
      <Route exact path={pathBase64} component={Base64} />
      <Route path={pathNotFound} component={NotFoundPage} />
      <Redirect to={pathNotFound} />
    </Switch>
    <GlobalStyle />
  </>
);

export default App;
