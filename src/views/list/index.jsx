import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getListAction} from './index.redux';

@connect(
	state =>{
		console.log("state",state)
		return { counter: state.counter }
	},
	dispatch => bindActionCreators({ getListAction }, dispatch)
)
class List extends Component {
  componentDidMount(props) {
    console.log('=======',this.props);
  }
  render() {
    let {getListAction}=this.props;
    return (
      <div className="class-name">
        新闻 列表
        <div
          onClick={()=>{
            getListAction()
            console.log('wrt')
          }}
        >点我获取</div>
        <ul>
          <li>3</li>
          <li>2</li>
          <li>2</li>
        </ul>
        <p>rtyuiop</p>
      </div>
    );
  }
}

export default List;