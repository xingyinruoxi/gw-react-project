import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import App from '@/App.jsx';
import '@/common/less/base.less';
// const history = syncHistoryWithStore(browserHistory, store)

import * as serviceWorker from './serviceWorker';

function render() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
}

render();

if (module.hot) {
	module.hot.accept('./App', () => {
		render();
	});
}

serviceWorker.unregister();
