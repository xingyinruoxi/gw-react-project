import React, { Component } from "react";
import { connect } from 'react-redux'
import "./../assets/less/index.less";
// @connect(state => ({
  // cartInfo: state.cart.cartInfo
  // console.log(state)
//   counter: 6
// }))
export default class extends Component {
  render() {
    return (
      <div className="page page-counter">
        <button className="increase">+</button>
        {10}
        <button className="reduce">-</button>
      </div>
    );
  }
}
