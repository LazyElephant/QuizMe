import React from 'react';
import CardRoutes from './Cards';
import { 
   Switch,
   Route,
 } from 'react-router-dom';
import Quiz from '../components/pages/Quiz';
import NotFound from '../components/pages/404';

 const Routes = () => (
      <Switch>
         <Route exact path="/" component={Quiz} />
         <Route path="/cards" component={CardRoutes} />
         <Route component={NotFound} />
      </Switch>
 );
 
 export default Routes;