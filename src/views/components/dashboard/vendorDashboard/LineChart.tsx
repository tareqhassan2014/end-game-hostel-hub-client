import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import faker from 'faker';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            // text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Sell Rate',
            data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 1000 })
            ),
            backgroundColor: '#E02A6A',
        },

        // {
        //     label: 'Dataset 2',
        //     data: labels.map(() =>
        //         faker.datatype.number({ min: 0, max: 1000 })
        //     ),
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
    ],
};

export function LineChart() {
    return <Bar options={options} data={data} />;
}
