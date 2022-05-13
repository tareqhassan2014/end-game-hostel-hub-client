import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const UserBarChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Last 7 Days Total Bills  & Bills Rate',
            },
        },
        responsive: true,
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const labels = [
        {
            day: 'Sat',
            cost: 1300,
            rate: 95,
        },
        {
            day: 'Sun',
            cost: 1470,
            rate: 50,
        },
        {
            day: 'Mon',
            cost: 1000,
            rate: 85,
        },
        {
            day: 'Thu',
            cost: 800,
            rate: 70,
        },
        {
            day: 'Wed',
            cost: 1170,
            rate: 90,
        },
        {
            day: 'Thu',
            cost: 1700,
            rate: 120,
        },
        {
            day: 'Fri',
            cost: 1950,
            rate: 75,
        },
    ];

    const data = {
        labels: labels.map((day) => day.day),
        datasets: [
            {
                label: 'Total Expenses',
                data: labels.map((day) => day.cost),
                backgroundColor: 'rgba(57, 162, 117)',
                stack: 'Stack 1',
            },

            {
                label: 'Bills Rate',
                data: labels.map((day) => day.rate),
                backgroundColor: 'rgb(143, 58, 132)',
                stack: 'Stack 2',
            },
        ],
    };

    return <Bar options={options} data={data} height={100} />;
};

export default UserBarChart;
