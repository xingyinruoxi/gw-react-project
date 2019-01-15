import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
	loader: () => import('../views/news/index.jsx'),
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
const CssTransition = Loadable({
	loader: () => import('../views/cssTransition/index.jsx'),
	loading: Loading,
});
const Routers = () => (
	<Router>
		<Route
			render={({ location }) => (
				<div style={styles.fill}>
					{/* <div>{console.log('****', location)}</div> */}
					<div style={styles.content}>
					<TransitionGroup>
						<CSSTransition
							// 需要加一个key属性，让react认识每个组件，并进行正确的加载。
							// 这里我改了官方demo的代码， 原来是设置成location.key， 这样的话每次点击同一个路由链接的时候都会渲染。
							key={location.pathname}
							// key={index}
							// classNames 就是设置给css动画的标示，记得'classNames'带's'的。
							classNames="fade"
							// 动画时间设置为800ms，和css中的需要一致。
							timeout={800}
						>
							{(state) => {
								console.log('======',state)
								return (
									<Switch>
										<Route exact path="/" component={Home} />
										<Route path="/about" component={About} />
										<Route path="/news" component={News} />
										<Route path="/list" component={List} />
										<Route path="/slide" component={SlideImg} />
										{/* <Route path="/csstransition" component={CssTransition} /> */}
										<Route path="/counter" component={Counter} />
									</Switch>
								);
							}}
						</CSSTransition>
					</TransitionGroup>
					</div>
				</div>
			)}
		/>
	</Router>
);
const styles = {};

styles.fill = {
//   position: "absolute",
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0
};

styles.content = {
  ...styles.fill,
//   top: "40px",
  textAlign: "center"
};

export default Routers;
