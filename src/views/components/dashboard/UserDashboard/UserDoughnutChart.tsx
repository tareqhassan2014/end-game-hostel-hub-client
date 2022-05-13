import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const UserDoughnutChart = () => {
    const labels = [
        {
            name: 'Chicken',
            percentage: 30,
        },

        {
            name: 'Beef',
            percentage: 10,
        },

        {
            name: 'Mutton',
            percentage: 10,
        },

        {
            name: 'Fish',
            percentage: 30,
        },

        {
            name: 'Dall',
            percentage: 5,
        },

        {
            name: 'Others',
            percentage: 15,
        },
    ];

    const myLabels = labels.map((label) => label.name);
    const myLabels2 = labels.map((label) => label.percentage);

    const data = {
        labels: [...myLabels],
        datasets: [
            {
                label: '# of Votes',
                data: [...myLabels2],
                backgroundColor: [
                    'rgba(9, 147, 196, .6)',
                    'rgba(0, 199, 18, .6)',
                    'rgba(76, 35, 133, .6)',
                    'rgba(36, 66, 208, .6)',
                    'rgba(70, 211, 162, .6)',
                    'rgba(167, 41, 55, .6)',
                ],
                borderColor: [
                    'rgba(9, 147, 196, 1)',
                    'rgba(0, 199, 18, 1)',
                    'rgba(76, 35, 133, 1)',
                    'rgba(36, 66, 208, 1)',
                    'rgba(70, 211, 162, 1)',
                    'rgba(167, 41, 55, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Doughnut data={data} />;
};

export default UserDoughnutChart;
