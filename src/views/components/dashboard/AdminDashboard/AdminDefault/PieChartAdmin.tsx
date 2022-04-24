import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
const PieChartAdmin = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Total Due In This Month',
            },
        },
    };
    const labels = [
        {
            name: 'Tareq',
            percentange: 550,
        },

        {
            name: 'Amirul',
            percentange: 500,
        },

        {
            name: 'Raju',
            percentange: 450,
        },

        {
            name: 'Salman',
            percentange: 1000,
        },

        {
            name: 'Tayeb',
            percentange: 550,
        },

        {
            name: 'Raju 2',
            percentange: 650,
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

    return <Pie options={options} data={data} height={20} />;
};

export default PieChartAdmin;
