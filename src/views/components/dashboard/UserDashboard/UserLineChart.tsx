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
            text: 'Last 12 Month Meal Rate And Total Meal',
        },
    },
};
const labels = [
    { month: 'January', MealRate: 70, TotalMeal: 900 },
    { month: 'February', MealRate: 60, TotalMeal: 800 },
    { month: 'March', MealRate: 80, TotalMeal: 758 },
    { month: 'April', MealRate: 75, TotalMeal: 865 },
    { month: 'May', MealRate: 55, TotalMeal: 965 },
    { month: 'June', MealRate: 90, TotalMeal: 347 },
    { month: 'July', MealRate: 150, TotalMeal: 845 },
    { month: 'August', MealRate: 73, TotalMeal: 541 },
    { month: 'September', MealRate: 80, TotalMeal: 585 },
    { month: 'October', MealRate: 90, TotalMeal: 785 },
    { month: 'November', MealRate: 95, TotalMeal: 796 },
    { month: 'December', MealRate: 60, TotalMeal: 952 },
];

const data = {
    labels: labels.map((meal) => meal.month),
    datasets: [
        {
            label: 'Meal Rate',
            data: labels.map((meal) => meal.MealRate),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Total Meal',
            data: labels.map((meal) => meal.TotalMeal),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const UserLineChart = () => {
    return <Line options={options} data={data} height={140} width={'auto'} />;
};

export default UserLineChart;
