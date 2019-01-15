import React, { Component } from 'react';
import Routers from './routers/index.jsx';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class App extends Component {
	render() {
		return (
			<TransitionGroup>
				<CSSTransition appear={true} classNames="appAppear" timeout={500}>
					<Routers />
				</CSSTransition>
			</TransitionGroup>
		);
	}
}

export default App;
