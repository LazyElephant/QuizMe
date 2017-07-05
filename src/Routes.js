import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import App from './App';
import NotFound from './404';

const Routes = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;