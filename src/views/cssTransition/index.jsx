import React, { Component } from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
export default class extends Component {
	constructor() {
		super();
		this.state = {
			showBox: false,
		};
	}
	toggleBox = () => {
		this.setState({
			showBox:!this.state.showBox
		});
	};
	render() {
		let { showBox } = this.state;
	
		return (
			<TransitionGroup>
				<button onClick={this.toggleBox}>切换</button>
				<CSSTransition
                    appear={showBox}
					timeout={300}
					onEnter={() => {
						console.log('onEnter');
					}}
					onExited={() => {
						console.log('onExited');
                    }}
                
				>
					{state => {
						console.log(showBox,state);
						return <div>CSSTransition</div>;
					}}
				</CSSTransition>
			</TransitionGroup>
		);
	}
}
