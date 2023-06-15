import React from 'react';
import { Chart } from 'chart.js/auto';
import "./achievements.css"
import Graphs from './Graphs';

class AchievementsPage extends React.Component {
    render() {
        const chart1Data = {
            labels: ['10.06.2023', '11.06.2023', '11.06.2023'],
            data: [43, 66, 71],
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 2,
        };

        const chart2Data = {
            labels: ['15.05.2023', '18.05.2023', '19.05.2023', '19.05.2023', '20.05.2023'],
            data: [10, 20, 30, 30, 45],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
        };

        // Format the chart2Data labels as "dd.mm.yyyy"
        chart2Data.labels = chart2Data.labels.map((label) => {
            const parts = label.split('.');
            const date = new Date(parts[2], parts[1] - 1, parts[0]);
            return date.toLocaleDateString('en-GB');
        });

        return (
            <div>
                <h1>Graphs Page</h1>
                <div className='chart-container'>
                    <Graphs title="10 min STANDING FULL BODY STRETCH | Standing Yoga Without Mat" {...chart1Data} />
                </div>
                <div className='chart-container'>
                    <Graphs title="Full Body Yoga for Strength & Flexibility | 25 Minute At Home Mobility Routine" {...chart2Data} />
                </div>

            </div>
        );
    }
}

export default AchievementsPage;

