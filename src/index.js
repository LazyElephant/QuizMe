import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { 
  BrowserRouter,
  NavLink,
} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import injectTapEventPlugin from 'react-tap-event-plugin';

import registerServiceWorker from './registerServiceWorker';
import Routes from './routes/MainPages';
import './index.css';

injectTapEventPlugin();

class ThemedApp extends Component {
  constructor () {
    super();

    this.state = {
      drawerOpen: false
    }
  }

  toggleDrawer = () => this.setState({
    drawerOpen: !this.state.drawerOpen
  });
  
  closeDrawer = () => this.setState({
    drawerOpen: false
  });
  render () {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div>
            <AppBar title="QuizMe" onLeftIconButtonTouchTap={this.toggleDrawer}/>
              <Routes />
            <Drawer 
              open={this.state.drawerOpen} 
              docked={false}
              onRequestChange={(drawerOpen) => this.setState({drawerOpen})} >
              <NavLink to="/quiz-me" >Take a Quiz</ NavLink>
              <NavLink to="/cards" >Card Index</ NavLink>
              <NavLink to="/cards/create">Create New Cards</ NavLink>
            </Drawer>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<ThemedApp />, document.getElementById('root'));
registerServiceWorker();
