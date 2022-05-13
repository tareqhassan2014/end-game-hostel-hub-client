import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
const PaiChart = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const labels = [
        {
            name: 'Chicken',
            percentange: 30,
        },

        {
            name: 'Beef',
            percentange: 10,
        },

        {
            name: 'Mutton',
            percentange: 10,
        },

        {
            name: 'Fish',
            percentange: 30,
        },

        {
            name: 'Dall',
            percentange: 5,
        },

        {
            name: 'Others',
            percentange: 15,
        },
    ];

    const myLabel = labels.map((item) => item.name);

    const data = {
        labels: [...myLabel],

        datasets: [
            {
                label: '# of Votes',
                data: labels.map((item) => item.percentange),
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={data} height={20} />;
};

export default PaiChart;
