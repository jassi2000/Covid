import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
export default class LineGraph extends Component {
    chartRef = React.createRef();
    async componentDidMount(){
        const myChartRef = this.chartRef.current.getContext("2d");
         setTimeout(() => new Chart(myChartRef, {
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
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 5,
                        left: 15,
                        right: 15,
                        bottom: 15
                    }},
                    scales: {
                        xAxes: [{
                                type: 'time',
                                time: {
                                  unit: 'month'
                                },
                                // distribution: 'series'
                            gridLines: {
                                display: false,
                                drawBorder: true
                            },
                            ticks:{
                                stepSize : 3
                            }
                        }],
                        yAxes: [{
                            position:'right',
                            ticks: { callback : function(value,index,array) 
                                { return (value < 100000) ? value/1000 + 'K' : value/100000 + 'L'; } },
                            gridLines: {
                                display: true,
                                drawBorder: true
                            }
                        }]
                    }

            }
        }),2000);
    }
    async  componentDidUpdate() {
     const myChartRef = this.chartRef.current.getContext("2d");
            console.log(this.props.url)
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
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: 5,
                        left: 15,
                        right: 15,
                        bottom: 15
                    }},
                    scales: {
                        xAxes: [{
                                type: 'time',
                                time: {
                                  unit: 'month'
                                },
                                // distribution: 'series'
                            gridLines: {
                                display: false,
                                drawBorder: true
                            },
                            ticks:{
                                stepSize : 3
                            }
                        }],
                        yAxes: [{
                            position:'right',
                            ticks: { callback : function(value,index,array) 
                                { return (value < 100000) ? value/1000 + 'K' : value/100000 + 'L'; } },
                            gridLines: {
                                display: true,
                                drawBorder: true
                            }
                        }]
                    }

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