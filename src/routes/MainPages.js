import React from 'react';
import CardRoutes from './Cards';
import { 
   BrowserRouter,
   Switch,
   Route,
 } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Quiz from '../pages/Quiz';
import NotFound from '../pages/404';

 const Routes = () => (
    <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/cards" component={CardRoutes} />
         <Route exact path="/about" component={About} />
         <Route exact path="/quiz-me" component={Quiz} />
         <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
 );
 
 export default Routes;