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

const BarChart = () => {
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
                text: 'Last 7 Days Total Meal Cost & Meal Rate',
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
            cost: 1200,
            rate: 85,
        },
        {
            day: 'Sun',
            cost: 1570,
            rate: 70,
        },
        {
            day: 'Mon',
            cost: 900,
            rate: 75,
        },
        {
            day: 'Thu',
            cost: 1100,
            rate: 90,
        },
        {
            day: 'Wed',
            cost: 1470,
            rate: 65,
        },
        {
            day: 'Thu',
            cost: 1600,
            rate: 100,
        },
        {
            day: 'Fri',
            cost: 1900,
            rate: 85,
        },
    ];

    const data = {
        labels: labels.map((day) => day.day),
        datasets: [
            {
                label: 'Total Cost',
                data: labels.map((day) => day.cost),
                backgroundColor: 'rgb(53, 162, 235)',
                stack: 'Stack 1',
            },

            {
                label: 'Meal Rate',
                data: labels.map((day) => day.rate),
                backgroundColor: 'rgb(255, 99, 132)',
                stack: 'Stack 2',
            },
        ],
    };

    return <Bar options={options} data={data} height={100} />;
};

export default BarChart;
