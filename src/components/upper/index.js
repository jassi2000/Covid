import "./styles.css";
import React from "react";
export default class Upper extends React.Component {

  render() {
    return <div className="Upper">
      <div>{this.props.hvalue}</div>
      <div>{this.props.rvalue}</div>
    </div>;
  }
}
