import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    async  componentDidMount() {
     const myChartRef = this.chartRef.current.getContext("2d");
        // const {data,labels} = this.props;
        // console.log("Labels" + this.props.labels)
     console.log("active" + this.props.data)
         new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.props.labels,
                datasets: [
                    {
                        label: this.props.value,
                        data: this.props.data,
                        fill: false,
                        borderColor: this.props.border
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}