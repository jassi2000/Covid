// import React, { Component } from 'react';
// import LineGraph from "../../components/chart" 

// export default class LineGraphRow extends Component{
//     constructor(props)
//     {
//         super(props);
//         this.state={
//         data:[],
//         Active:[],
//         Recovered:[],
//         Deaths:[],
//         Confirmed:[],
//         Dates:[]
//         }
//     }
//     async componentDidMount(){
//         const response2 = await fetch(this.props.value)
//         var data2= await response2.json()
//         this.setState({
//             data:data2
//         })
//         // {this.state.data.map((item)=>(this.setState(prev=>({Active:[...prev.Active,item.Active],
//         //     Confirmed:[...prev.Confirmed,item.Confirmed],
//         //     Recovered:[...prev.Recovered,item.Recovered],
//         //     Deaths:[...prev.Deaths,item.Deaths],
//         //     Dates:[...prev.Dates,item.Date]}))))}
//         const array1 =[];
//         const array2 =[];
//         const array3 =[];
//         const array4 =[];
//         const array5 =[];
//         {this.state.data2.map((item,index)=>
//             (array1[index]=item.Active,
//             array2[index] = item.Deaths,
//             array3[index]= item.Confirmed,
//             array4[index]=item.Recovered,
//             array5[index] =item.Date))}
//             this.setState({
//                 Active :array1,
//                 Deaths:array2,
//                 Confirmed:array3,
//                 Recovered:array4,
//                 Dates:array5
//             })
//     }
//     componentDidUpdate(){
//         console.log(this.props.value);
//     }
//     render()
//     {
//         return<div>
//             <LineGraph value={"Total Active Cases"} data={this.state.Active} labels={this.state.Dates} border={"blue"}/>
//             <LineGraph value={"Total Confirmed Cases"} data={this.state.Confirmed} labels={this.state.Dates} border={"violet"}/>
//             <LineGraph value={"Total Recovered Cases"} data={this.state.Recovered} labels={this.state.Dates} border={"green"}/>
//             <LineGraph value={"Total Deaths"} data={this.state.Deaths} labels={this.state.Dates} border={"red"}/>
//         </div>
//     }
// }