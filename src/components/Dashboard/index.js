import React, { Component } from 'react';
import  "./Dashboard.module.css";
import LineGraph from "../../components/chart"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// const api_url="https://api.covid19api.com/dayone/country/india"
const api_url="https://api.covid19api.com/countries"
export default class Dashboard extends Component {
     constructor(props)
    {
        super(props);
        this.state =
         {
        data:[],
        data2:[],
        Countryandslug : [],
        Active:[],
        Recovered:[],
        Deaths:[],
        Confirmed:[],
        Dates:[],
        api_for_country :"https://api.covid19api.com/dayone/country/india"           
        }
        this.getevent = this.getevent.bind(this)
    }
    async componentDidMount(){
        const response = await fetch(api_url);
        const res = await response.json();
        this.setState({
          Countryandslug:res
        })
        // const response2 = await fetch(this.state.api_for_country)
        // var data2= await response2.json()
        // this.setState({
        //     data2:data2
        // })
        // {this.state.data2.map((item)=>(this.setState(prev=>({Active:[...prev.Active,item.Active],
        //     Confirmed:[...prev.Confirmed,item.Confirmed],
        //     Recovered:[...prev.Recovered,item.Recovered],
        //     Deaths:[...prev.Deaths,item.Deaths],
        //     Dates:[...prev.Dates,item.Date]}))))}
      }
     async  getevent(value)
      {if(value){

        this.setState({
            api_for_country:"https://api.covid19api.com/dayone/country/"+value.Slug,
            Active:[],
            Confirmed:[],
            Deaths:[],
            Recovered:[],
            Dates:[]
        })
      const response2 = await fetch("https://api.covid19api.com/dayone/country/"+value.Slug)
      var data2= await response2.json()
      this.setState({
          data2:data2
      })
      console.log(this.state.api_for_country)
      const array1 =[];
      const array2 =[];
      const array3 =[];
      const array4 =[];
      const array5 =[];
      {this.state.data2.map((item,index)=>
          (array1[index]=item.Active,
          array2[index] = item.Deaths,
          array3[index]= item.Confirmed,
          array4[index]=item.Recovered,
          array5[index] =item.Date))}
          this.setState({
              Active :array1,
              Deaths:array2,
              Confirmed:array3,
              Recovered:array4, 
              Dates:array5
          })
          console.log(this.state.Active)
      }
      }        
    render() {
        return (
            <div className="Container">
                <header>
                    <h3><span className="text-red">Spread</span> Trends</h3>
                    <br></br>
                </header>
                {/* <ComboBox/> */}
                <Autocomplete
                    id="combo-box-demo"
                    options={this.state.Countryandslug}
                    getOptionLabel={(option) => option.Country}
                    // defaultValue={options[0].Country}
                    onChange={(event,value)=>{this.getevent(value)}}
                    renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
                    />
                    {/* <LineGraphRow value={this.state.api_for_country}/> */}
                    <br></br>
                <LineGraph url = {this.state.api_for_country} value={"Total Active Cases"} data={this.state.Active} labels={this.state.Dates} border={"blue"}/>
                <br></br>
                <LineGraph url = {this.state.api_for_country} value={"Total Confirmed Cases"} data={this.state.Confirmed} labels={this.state.Dates} border={"violet"}/>
                <br></br>
                <LineGraph url = {this.state.api_for_country} value={"Total Recovered Cases"} data={this.state.Recovered} labels={this.state.Dates} border={"green"}/>
                <br></br>
                <LineGraph url = {this.state.api_for_country} value={"Total Deaths"} data={this.state.Deaths} labels={this.state.Dates} border={"red"}/>
            </div>
        )
    }
}