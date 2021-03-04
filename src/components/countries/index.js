import "./styles.css";
import React from "react";
const api_url = "https://api.covid19api.com/summary";

export default class Country extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
      result :[]
    }
  }
  async componentDidMount()
  {
    const response = await fetch(api_url);
    var data = await response.json();
    this.setState({
      result:data.Countries
    })

  }
  render() {
    return <div className="divTable">
    <div className="headRow">
       <div className="divCell" align="center">County</div>
       <div  className="divCell">Total Confirmed</div>
       <div  className="divCell">Total Recovered</div>
       <div  className="divCell">Total Deaths</div>
    </div>
  
   {this.state.result.map(item => (
      <div className="divRow">
       <div className="divCell">{item.Country}</div>
       <div className="divCell">{item.TotalConfirmed}</div>
       <div className="divCell">{item.TotalRecovered}</div>
       <div className="divCell">{item.TotalDeaths}</div>
       </div>
       ))}
  </div>    
  }
}