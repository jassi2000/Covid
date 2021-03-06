import React, { Component } from 'react';
import  "./Dashboard.module.css";
import LineGraph from "../../components/chart"
import ComboBox from "../../components/search"

const api_url="https://api.covid19api.com/dayone/country/india"
export default class Dashboard extends Component {
     constructor(props)
    {
        super(props);
        this.state =
         {
        data:[],
        Active:[],
        Recovered:[],
        Deaths:[],
        Confirmed:[],
        Dates:[]           
        }
        
    }
    async componentDidMount()
    {
        const response = await fetch(api_url)
        var data= await response.json()
        this.setState({
            data:data,
        })
         {this.state.data.map((item)=>(this.setState(prev=>({Active:[...prev.Active,item.Active],
            Confirmed:[...prev.Confirmed,item.Confirmed],
            Recovered:[...prev.Recovered,item.Recovered],
            Deaths:[...prev.Deaths,item.Deaths],
            Dates:[...prev.Dates,item.Date]}))))}
    }        
    render() {
        return (
            <div className="Container">
                <header>
                    <h3>Spread Trends</h3>
                </header>
                <ComboBox/>
                <LineGraph value={"Total Active Cases"} data={this.state.Active} labels={this.state.Dates} border={"blue"}/>
                <LineGraph value={"Total Confirmed Cases"} data={this.state.Confirmed} labels={this.state.Dates} border={"violet"}/>
                <LineGraph value={"Total Recovered Cases"} data={this.state.Recovered} labels={this.state.Dates} border={"green"}/>
                <LineGraph value={"Total Deaths"} data={this.state.Deaths} labels={this.state.Dates} border={"red"}/>
            </div>
        )
    }
}