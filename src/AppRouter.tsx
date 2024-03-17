import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/home';
import projects from './pages/projects';

const AppRouter = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/projects' exact component={projects} />
    </Switch>
  );
}

export default AppRouter;