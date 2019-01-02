import React, { Component } from "react";
import './../assets/less/index.less'
export default class extends Component {
  render() {
    return <div className="page page-counter">
        <button className="increase">+</button>
		{10}
        <button className="reduce">-</button>
      </div>;
  }
}
