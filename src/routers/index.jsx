import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;
const Home = Loadable({
  loader: () => import("../views/home"),
  loading: Loading
});
const About = Loadable({
  loader: () => import("../views/about"),
  loading: Loading
});
const News = Loadable({
  loader: () => import("../views/news"),
  loading: Loading
});
const SlideImg = Loadable({
  loader: () => import("../views/slideimg"),
  loading: Loading
});
const Counter = Loadable({
  loader: () => import("../views/counter/container/CounterView"),
  loading: Loading
});
const Routers = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
      <Route path="/slide" component={SlideImg} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </Router>
);

export default Routers;
