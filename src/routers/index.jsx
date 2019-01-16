import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Loadable from 'react-loadable';
const Loading = () => <div>加载中...</div>;
const Home = Loadable({
	loader: () => import('../views/home'),
	loading: Loading,
});
const About = Loadable({
	loader: () => import('../views/about'),
	loading: Loading,
});
const News = Loadable({
	loader: () => import('../views/news'),
	loading: Loading,
});
const List = Loadable({
	loader: () => import('../views/list'),
	loading: Loading,
});
const SlideImg = Loadable({
	loader: () => import('../views/slideimg'),
	loading: Loading,
});
const Counter = Loadable({
	loader: () => import('../views/counter/container/CounterView'),
	loading: Loading,
});
// const CssTransition = Loadable({
// 	loader: () => import('../views/cssTransition/index'),
// 	loading: Loading,
// });
const Transition = Loadable({
	loader: () => import('../views/transiton'),
	loading: Loading,
});
const Routers = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/news" component={News} />
			<Route path="/list" component={List} />
			<Route path="/slide" component={SlideImg} />
			<Route path="/transition" component={Transition} />
			{/* <Route path="/csstransition" component={CssTransition} /> */}
			<Route path="/counter" component={Counter} />
		</Switch>
	</Router>
);

export default Routers;
