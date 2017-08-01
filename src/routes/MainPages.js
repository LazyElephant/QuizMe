import React from 'react';
import CardRoutes from './Cards';
import { 
   Switch,
   Route,
 } from 'react-router-dom';
import Quiz from '../containers/Quiz';
import Home from '../containers/Home';
import NotFound from '../containers/404';

 const Routes = () => (
      <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/cards" component={CardRoutes} />
         <Route path="/quiz-me" component={Quiz} />
         <Route component={NotFound} />
      </Switch>
 );
 
 export default Routes;