import React, { Component } from "react";

export default class Class extends Component {
  componentDidMount(props) {
    console.log(this.props);
  }
  render() {
    return (
      <div className="class-name">
        新闻 列表
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
