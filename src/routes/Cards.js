import React from 'react';
import { 
  Switch,
  Route
} from 'react-router-dom';
import Cards from '../containers/Cards';
import Create from '../containers/NewCard';

const CardRoutes = () => (
  <Switch>
    <Route path="/cards/create" component={Create} />
    <Route path="/cards" component={Cards} />
  </Switch>
);

export default CardRoutes;