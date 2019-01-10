import React, { Component } from 'react';
import './../assets/less/index.less';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addFun, subFun } from './CounterViewRedux';

// @connect(
//     // state => ({counter: state.counter})
//     // dispatch => bindActionCreators({listMachineAction}, dispatch)
// )
class Counter extends Component {
	render() {
		let { counter, subFun, addFun } = this.props;
		return (
			<div className="page page-counter">
				<button className="increase" onClick={addFun}>
					+
				</button>
				{counter}
				<button className="reduce" onClick={subFun}>
					-
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	let { counter } = state;
	return {
		counter
	};
};

export default connect(
	mapStateToProps,
	dispatch => bindActionCreators({ addFun, subFun }, dispatch)
)(Counter);
