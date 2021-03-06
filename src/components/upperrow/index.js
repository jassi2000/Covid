import React from "react";
import "./styles.css";
import Upper from "../upper";

const api_url = "https://api.covid19api.com/summary";

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res:{}
    }
  }
  async componentDidMount() {
    const response = await fetch(api_url);
    var data = await response.json();
    this.setState({
      res: data.Global
    })
  }
  render() {
    return (
      <div className="Row">
        <Upper color={"#0059ff"} hvalue={"Confirmed"} rvalue={this.state.res.TotalConfirmed}/>
        <Upper  color={"red"} hvalue={"Deaths"} rvalue={this.state.res.TotalDeaths}/>
        <Upper color={"green"} hvalue={"Recovered"} rvalue={this.state.res.TotalRecovered}/>
      </div>
    );
  }
}
