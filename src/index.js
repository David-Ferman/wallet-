import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bulma/css/bulma.css'
import 'bulma-switch'
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter><App />
</BrowserRouter>, document.getElementById('root'));

serviceWorker.register();
