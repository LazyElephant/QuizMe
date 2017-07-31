import React from 'react';
import CardRoutes from './Cards';
import { 
   Switch,
   Route,
 } from 'react-router-dom';
import Home from '../components/pages/Home';
import Quiz from '../components/pages/Quiz';
import NotFound from '../components/pages/404';

 const Routes = () => (
      <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/cards" component={CardRoutes} />
         <Route path="/quiz-me" component={Quiz} />
         <Route component={NotFound} />
      </Switch>
 );
 
 export default Routes;