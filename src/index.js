import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {store} from './store'
import App from "./App";
import "./common/less/base.less";
import * as serviceWorker from "./serviceWorker";

function render() {
  ReactDOM.render(
      <Provider store={store}>
          {/* <ConnectedRouter history={history}> */}
          <App />
          {/* </ConnectedRouter> */}
      </Provider>
      ,
      document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
      render();
  });

}

serviceWorker.unregister();
