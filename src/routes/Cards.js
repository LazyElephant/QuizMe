import React from 'react';
import { 
  Switch,
  Route
} from 'react-router-dom';
import Cards from '../components/pages/Cards';
import Create from '../components/pages/CardsCreate';
import CardDetails from '../components/pages/CardDetails';

const CardRoutes = () => (
  <Switch>
    <Route path="/cards/create" component={Create} />
    <Route path="/cards/:id" component={CardDetails} />
    <Route path="/cards" component={Cards} />
  </Switch>
);

export default CardRoutes;