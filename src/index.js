import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/MainPages';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

injectTapEventPlugin();

const ThemedApp = () => (
   <MuiThemeProvider>
      <Routes />
   </MuiThemeProvider>
);

ReactDOM.render(<ThemedApp />, document.getElementById('root'));
registerServiceWorker();
