import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

injectTapEventPlugin();

const ThemedApp = () => (
   <MuiThemeProvider>
      <App />
   </MuiThemeProvider>
);

ReactDOM.render(<ThemedApp />, document.getElementById('root'));
registerServiceWorker();
