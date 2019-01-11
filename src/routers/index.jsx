import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
const Loading = () => <div>Loading...</div>;
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
const Routers = () => (
	<>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/news" component={News} />
			<Route path="/list" component={List} />
			<Route path="/slide" component={SlideImg} />
			<Route path="/counter" component={Counter} />
		</Switch>
	</>
);

export default Routers;
