import React from 'react';
import App from './pages/App';
import { 
   BrowserRouter,
   Switch,
   Route,
 } from 'react-router-dom';

 const Routes = () => (
    <BrowserRouter>
      <Switch>
         <Route exact path="/" component={App} />
         <Route path="/create" component={()=><div>create</div>} />
      </Switch>
    </BrowserRouter>
 );
 
 export default Routes;