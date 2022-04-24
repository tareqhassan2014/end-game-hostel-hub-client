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

const BarChartAdmin = () => {
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
                text: 'Last 12 Month Avarage Cost (single person)',
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
        { month: 'January', cost: 4500 },
        { month: 'February', cost: 5000 },
        { month: 'March', cost: 4200 },
        { month: 'April', cost: 3800 },
        { month: 'May', cost: 4950 },
        { month: 'June', cost: 4235 },
        { month: 'July', cost: 5321 },
        { month: 'August', cost: 4968 },
        { month: 'September', cost: 3500 },
        { month: 'October', cost: 4650 },
        { month: 'November', cost: 4760 },
        { month: 'December', cost: 4000 },
    ];

    const data = {
        labels: labels.map((day) => day.month),
        datasets: [
            {
                label: 'Total Cost',
                data: labels.map((day) => day.cost),
                backgroundColor: 'rgba(153, 102, 255)',
                stack: 'Stack 1',
            },
        ],
    };

    return <Bar options={options} data={data} height={100} />;
};

export default BarChartAdmin;
