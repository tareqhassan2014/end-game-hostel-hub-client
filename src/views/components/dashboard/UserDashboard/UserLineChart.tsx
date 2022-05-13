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

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Last 12 Months Total Expenses And Total Bills',
        },
    },
};
const labels = [
    { month: 'January', MealRate: 50, TotalMeal: 800 },
    { month: 'February', MealRate: 90, TotalMeal: 900 },
    { month: 'March', MealRate: 40, TotalMeal: 658 },
    { month: 'April', MealRate: 85, TotalMeal: 765 },
    { month: 'May', MealRate: 60, TotalMeal: 565 },
    { month: 'June', MealRate: 80, TotalMeal: 847 },
    { month: 'July', MealRate: 130, TotalMeal: 945 },
    { month: 'August', MealRate: 93, TotalMeal: 541 },
    { month: 'September', MealRate: 120, TotalMeal: 485 },
    { month: 'October', MealRate: 100, TotalMeal: 885 },
    { month: 'November', MealRate: 75, TotalMeal: 696 },
    { month: 'December', MealRate: 150, TotalMeal: 952 },
];

const data = {
    labels: labels.map((meal) => meal.month),
    datasets: [
        {
            label: 'Bills Rate',
            data: labels.map((meal) => meal.MealRate),
            borderColor: 'rgba(162, 59, 210)',
            backgroundColor: 'rgba(162, 59, 210, .2)',
        },
        {
            label: 'Total Bills',
            data: labels.map((meal) => meal.TotalMeal),
            borderColor: 'rgba(24, 163, 56)',
            backgroundColor: 'rgba(24, 163, 56, 0.5)',
        },
    ],
};

const UserLineChart = () => {
    return <Line options={options} data={data} height={140} width={'auto'} />;
};

export default UserLineChart;
