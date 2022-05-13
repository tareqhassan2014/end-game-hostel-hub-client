import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//         {
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//             ],
//             borderWidth: 1,
//         },
//     ],
// };

export function PieChart() {
    return (
        <div>
            <div>
                <Pie
                    data={{
                        labels: [
                            'Pending-Order',
                            'Confirm-Order',
                            'Income-Rate',
                        ],
                        datasets: [
                            {
                                label: '# of votes',
                                data: [33, 33, 33],
                                backgroundColor: [
                                    '#E22E6D',
                                    '#4CA750',
                                    '#2881EB',
                                ],
                                // borderColor: [
                                //     '#E22E6D',
                                //     '#4CA750',
                                //     '#2881EB',
                                //     // 'rgba(75, 192, 192, 1)',
                                //     // 'rgba(153, 102, 255, 1)',
                                //     // 'rgba(255, 159, 64, 1)',
                                // ],
                                borderWidth: 1,
                            },
                            // {
                            //   label: 'Quantity',
                            //   data: [47, 52, 67, 58, 9, 50],
                            //   backgroundColor: 'orange',
                            //   borderColor: 'red',
                            // },
                        ],
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom' as const,
                            },
                            title: {
                                display: true,
                                // text: 'Chart.js Bar Chart',
                            },
                        },

                        // scales: {
                        //     yAxes: [
                        //         {
                        //             ticks: {
                        //                 beginAtZero: true,
                        //             },
                        //         },
                        //     ],
                        // },
                        // legend: {
                        //     labels: {
                        //         fontSize: 25,
                        //     },
                        // },
                    }}
                />
            </div>
        </div>
    );
}
