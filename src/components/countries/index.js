import "./styles.css";
import React from "react";
import Table from "react-bootstrap/Table"
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../Dashboard";
import Row from "../upperrow"
const api_url = "https://api.covid19api.com/summary";

export default class Country extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
      result :[],
      currentPage: 1,
      CountryPerPage: 40,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
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
    const { result, currentPage, CountryPerPage } = this.state;
    const indexOfLastCountry = currentPage * CountryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - CountryPerPage;
    const currentCountry = result.slice(indexOfFirstCountry, indexOfLastCountry);
    const renderCountry = currentCountry.map((item,index)=>{
    return <tr key={index}>
      <td>{item.Country}</td>
      <td><span className="text-blue">{item.TotalConfirmed}</span></td>
      <td><span className="text-red">{item.TotalDeaths}</span></td>
      <td><span className="text-green">{item.TotalRecovered}</span></td>

    </tr>;
    }
    )
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(result.length / CountryPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <Button size="lg" style={{margin:20, backgroundColor:'#ec0b0b'}}
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </Button>
      );
    });
    return<div className="tableanddash"> 
    <div className="istable">
    <Row/>
    <br></br>
    <br></br>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Country</th>
      <th><span className="text-red"> Total</span> Confirmed</th>
      <th><span className="text-red">Total</span> Deaths</th>
      <th><span className="text-red">Total</span> Recovered</th>
    </tr>
  </thead>
  <tbody>
  {renderCountry}
  </tbody>
</Table>
  {renderPageNumbers}
</div>
<div className="isDash">
  <div className="blank"></div>
<Dashboard/>
</div>
</div>  
  }
}