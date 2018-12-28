import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './common/less/base.less'
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <App/ > , document.getElementById('root'));


serviceWorker.unregister();