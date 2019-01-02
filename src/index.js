import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {store} from './store'
import App from "./App";
import "./common/less/base.less";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store = {store} >
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
