import React from 'react';
import { Chart } from 'chart.js/auto';
import "./achievements.css"

class Graphs extends React.Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext('2d');
        const { labels, data, backgroundColor, borderColor, borderWidth } = this.props;

        new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        data: data,
                        backgroundColor: backgroundColor,
                        borderColor: borderColor,
                        borderWidth: borderWidth,
                    },
                ],
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        display: true,
                        grid: {
                            display: true,
                            drawBorder: false,
                            color: 'rgba(0, 0, 0, 0.1)',
                        },
                    },
                },
            },
        });
    };

    render() {
        const { title } = this.props;

        return (
            <div>
                <h2 className="chart-title">{title}</h2>
                <canvas ref={this.chartRef} className="chart-canvas" />
            </div>
        );
    }
}

export default Graphs;

