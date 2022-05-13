import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
const UserPiChart = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
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

    const myLabel = labels.map((item) => item.name);

    const data = {
        labels: [...myLabel],

        datasets: [
            {
                label: '# of Votes',
                data: labels.map((item) => item.percentage),
                backgroundColor: [
                    'rgba(9, 147, 196)',
                    'rgba(0, 199, 18)',
                    'rgba(76, 35, 133)',
                    'rgba(36, 66, 208)',
                    'rgba(70, 211, 162)',
                    'rgba(167, 41, 55)',
                ],
                borderColor: [
                    'rgba(9, 147, 196, 1)',
                    '	 rgba(0, 199, 18, 0.76)',
                    'rgba(76, 35, 133, 1)',
                    'rgba(36, 66, 208, 1)',
                    'rgba(70, 211, 162, 1)',
                    'rgba(167, 41, 55, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Pie data={data} height={20} />;
};

export default UserPiChart;
