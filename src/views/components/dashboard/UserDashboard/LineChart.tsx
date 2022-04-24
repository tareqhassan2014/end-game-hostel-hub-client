import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

import {
    Chart as ChartJS,
    CategoryScale,
    BarElement,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    Title,
} from 'chart.js';
import 'chart.js/auto';

import img from './../../../../assets/images/logos/brandLogo.png';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { People } from '@mui/icons-material';

ChartJS.register(
    LineController,
    PointElement,
    CategoryScale,
    LineElement,
    BarElement,
    PointElement,
    LinearScale,
    Title
);

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'august',
    'september',
    'october',
    'november',
    'december',
];

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: "Student's Line Chart",
        },
    },
};

const labels2 = [
    { a: 32, n: 'tareq' },
    { a: 12, n: 'lira' },
    { a: 5, n: 'rita' },
    { a: 8, n: 'rani' },
    { a: 10, n: 'salman' },
    { a: 16, n: 'farsi' },
    { a: 10, n: 'amirul' },
    { a: 25, n: 'raju' },
    { a: 7, n: 'roton' },
    { a: 19, n: 'ahmed' },
    { a: 32, n: 'sihab' },
    { a: 43, n: 'asiq' },
];

export const data = {
    labels,
    datasets: [
        // {
        //     label: 'Dataset 1',
        //     data: labels.map(() =>
        //         faker.datatype.number({ min: -1000, max: 1000 })
        //     ),
        //     borderColor: 'rgb(255, 99, 132)',
        //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
        // },

        {
            label: `dataset 2`,
            data: labels2.map((x) => x.a),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const LineChart = () => {
    return (
        <div>
            <Line options={options} data={data} />
        </div>
    );
};

export default LineChart;
