import "./styles.css";
import React from "react";
export default class Upper extends React.Component {

  render() {
    return <div className="Upper">
      <h6 style={{color:this.props.color}}>{this.props.hvalue}</h6>
      <h5 style={{color:this.props.color}}>{this.props.rvalue}</h5>
    </div>;
  }
}
