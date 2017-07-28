import React from 'react';
import { 
  Switch,
  Route
} from 'react-router-dom';
import Cards from '../pages/Cards';
import Create from '../pages/CardsCreate';
import CardDetails from '../pages/CardDetails';

const CardRoutes = () => (
  <Switch>
    <Route path="/cards/create" component={Create} />
    <Route path="/cards/:id" component={CardDetails} />
    <Route path="/cards" component={Cards} />
  </Switch>
);

export default CardRoutes;