import React from 'react';
import CardRoutes from './Cards';
import { 
   BrowserRouter,
   Switch,
   Route,
 } from 'react-router-dom';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Quiz from '../components/pages/Quiz';
import NotFound from '../components/pages/404';

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