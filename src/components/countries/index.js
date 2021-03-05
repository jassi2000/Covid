import "./styles.css";
import React from "react";
import Table from "react-bootstrap/Table"
// import Dashboard from "../Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../Dashboard";
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
    return<div className="tableanddash"> 
    <div className="istable">
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Country</th>
      <th>Total Confirmed</th>
      <th>Total Recovered</th>
      <th>Total Deaths</th>
    </tr>
  </thead>
  <tbody>
  {this.state.result.map(item => (
    <tr>
      <td>{item.Country}</td>
      <td>{item.TotalConfirmed}</td>
      <td>{item.TotalRecovered}</td>
      <td>{item.TotalDeaths}</td>
    </tr>
    ))}
  </tbody>
</Table>
</div>
<div className="isDash">
<Dashboard/>
</div>
</div>
  //   return <div className="divTable">
  //   <div className="headRow">
  //      <div className="divCell" align="center">County</div>
  //      <div  className="divCell">Total Confirmed</div>
  //      <div  className="divCell">Total Recovered</div>
  //      <div  className="divCell">Total Deaths</div>
  //   </div>
  
  //  {this.state.result.map(item => (
  //     <div className="divRow">
  //      <div className="divCell">{item.Country}</div>
  //      <div className="divCell">{item.TotalConfirmed}</div>
  //      <div className="divCell">{item.TotalRecovered}</div>
  //      <div className="divCell">{item.TotalDeaths}</div>
  //      </div>
  //      ))}
  // </div>    
  }
}