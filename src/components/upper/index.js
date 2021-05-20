import "./styles.css";
import React from "react";
export default class Upper extends React.Component {

  render() {
    return <div className="Upper">
      <h5 style={{color:this.props.color}}>{this.props.hvalue}</h5>
      <h4 style={{color:this.props.color}}>{this.props.rvalue}</h4>
    </div>;
  }
}
