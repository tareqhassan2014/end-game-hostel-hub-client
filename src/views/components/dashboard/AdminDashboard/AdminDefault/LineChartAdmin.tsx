import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const LineChartAdmin = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
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
                borderColor: 'rgba(153, 102, 255)',
                backgroundColor: 'rgba(153, 102, 255)',
            },
        ],
    };

    return <Line options={options} data={data} height={140} width={'auto'} />;
};

export default LineChartAdmin;
