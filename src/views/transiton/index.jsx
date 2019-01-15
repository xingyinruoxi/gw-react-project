import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import './style.less';
export default class extends Component {
	state = { inCtrl: true };
	clickTogle = () => {
		this.setState({ inCtrl: !this.state.inCtrl });
	};
	render() {
		let { inCtrl } = this.state;
		return (
			<div>
				<button onClick={this.clickTogle}>切换按钮</button>
				<Transition
					timeout={0}
					in={inCtrl}
					// appear
					exit={false}
					enter={false}
					// mountOnEnter
					// unmountOnExit
				>
					{state => {
						// console.log(']]]]]]]', state, inCtrl);
						return <div className={`fade-init fade-${state}`} />;
					}}
				</Transition>
			</div>
		);
	}
}
