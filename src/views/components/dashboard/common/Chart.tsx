import { Box } from '@mui/system';
import {
    AreaChart,
    AudiometryChart,
    CoordinateLineChart,
    DonutChart,
    LineChart,
    StackedBarChart,
} from 'amazing-react-charts';
import React from 'react';

export const Chart = () => {
    return (
        <Box sx={{ my: 5 }}>
            <LineChart
                showLabel
                title="Concurrent lines"
                xType="time"
                toolboxTooltip={{ saveAsImage: 'saving' }}
                dateFormat="yyyy-MM"
                colors={['red', 'green', 'blue']}
                data={[
                    {
                        name: 'top line',
                        values: [
                            { label: '2019-01', result: 10 },
                            { label: '2019-02', result: 40 },
                            { label: '2019-03', result: 30 },
                            { label: '2019-04', result: 20 },
                            { label: '2019-05', result: 40 },
                            { label: '2019-06', result: 50 },
                            { label: '2019-07', result: 15 },
                            { label: '2019-08', result: 70 },
                            { label: '2019-09', result: 80 },
                            { label: '2019-10', result: 90 },
                            { label: '2019-11', result: 70 },
                            { label: '2019-12', result: 80 },
                            { label: '2019-01', result: 90 },
                        ],
                    },
                    {
                        name: 'bottom line',
                        values: [
                            { label: '2019-01', result: 1 },
                            { label: '2019-02', result: 4 },
                            { label: '2019-03', result: 3 },
                            { label: '2019-04', result: 2 },
                            { label: '2019-05', result: 4 },
                            { label: '2019-06', result: 5 },
                            { label: '2019-07', result: 1 },
                            { label: '2019-08', result: 7 },
                            { label: '2019-09', result: 8 },
                            { label: '2019-10', result: 9 },
                            { label: '2019-11', result: 70 },
                            { label: '2019-12', result: 80 },
                            { label: '2019-01', result: 90 },
                        ],
                    },
                ]}
            />
            <AreaChart
                xType="time"
                title="area chart data"
                toolboxTooltip={{ saveAsImage: 'saving' }}
                tooltip={{ label: 'Data', result: 'O.S. em aberto' }}
                color="#E65100"
                data={[
                    { label: '2019-09-01', result: 1 },
                    { label: '2019-09-02', result: 4 },
                    { label: '2019-09-03', result: 3 },
                    { label: '2019-09-04', result: 2 },
                    { label: '2019-09-05', result: 4 },
                    { label: '2019-09-06', result: 5 },
                    { label: '2019-09-07', result: 3 },
                    { label: '2019-09-08', result: 7 },
                    { label: '2019-09-09', result: 8 },
                    { label: '2019-09-10', result: 9 },
                    { label: '2019-09-11', result: 12 },
                    { label: '2019-09-12', result: 22 },
                    { label: '2019-09-13', result: 20 },
                    { label: '2019-09-14', result: 32 },
                    { label: '2019-09-15', result: 10 },
                    { label: '2019-09-16', result: 15 },
                    { label: '2019-09-17', result: 10 },
                    { label: '2019-09-18', result: 31 },
                    { label: '2019-09-19', result: 30 },
                    { label: '2019-09-20', result: 30 },
                    { label: '2019-09-21', result: 28 },
                    { label: '2019-09-22', result: 25 },
                    { label: '2019-09-23', result: 30 },
                    { label: '2019-09-24', result: 17 },
                    { label: '2019-09-25', result: 18 },
                    { label: '2019-09-26', result: 19 },
                    { label: '2019-09-27', result: 12 },
                    { label: '2019-09-28', result: 22 },
                    { label: '2019-09-29', result: 14 },
                    { label: '2019-09-30', result: 15 },
                    { label: '2019-10-01', result: 1 },
                    { label: '2019-10-02', result: 4 },
                    { label: '2019-10-03', result: 3 },
                    { label: '2019-10-04', result: 2 },
                    { label: '2019-10-05', result: 4 },
                    { label: '2019-10-06', result: 5 },
                    { label: '2019-10-07', result: 3 },
                    { label: '2019-10-08', result: 7 },
                    { label: '2019-10-09', result: 8 },
                    { label: '2019-10-10', result: 9 },
                    { label: '2019-10-11', result: 12 },
                    { label: '2019-10-12', result: 22 },
                    { label: '2019-10-13', result: 20 },
                    { label: '2019-10-14', result: 32 },
                    { label: '2019-10-15', result: 10 },
                    { label: '2019-10-16', result: 15 },
                    { label: '2019-10-17', result: 10 },
                    { label: '2019-10-18', result: 31 },
                    { label: '2019-10-19', result: 30 },
                    { label: '2019-10-20', result: 30 },
                    { label: '2019-10-21', result: 28 },
                    { label: '2019-10-22', result: 25 },
                    { label: '2019-10-23', result: 30 },
                    { label: '2019-10-24', result: 17 },
                    { label: '2019-10-25', result: 18 },
                ]}
            />
            <StackedBarChart
                xType="time"
                yComplement={(value: string | number) => `R$ ${value},00`}
                title="Custo por manutenção"
                toolboxTooltip={{ saveAsImage: 'save' }}
                colors={['#30D2D6', '#9F88FB', '#C5F3C2', '#F09B1B']}
                tooltip={{
                    label: 'Período',
                    topResult: 'Preventivas',
                    bottomResult: 'Corretivas',
                    extraResult: 'Melhorias',
                    auxResult: 'Total real',
                    lineResult: 'Total',
                }}
                data={[
                    [
                        { label: '2019-01-01', result: 1 },
                        { label: '2019-02-01', result: 2 },
                        { label: '2019-03-01', result: 4 },
                        { label: '2019-04-01', result: 5 },
                        { label: '2019-05-01', result: 6 },
                        { label: '2019-06-01', result: 7 },
                    ],
                    [
                        { label: '2019-01-01', result: 10 },
                        { label: '2019-02-01', result: 40 },
                        { label: '2019-03-01', result: 30 },
                        { label: '2019-04-01', result: 20 },
                        { label: '2019-05-01', result: 40 },
                        { label: '2019-06-01', result: 50 },
                    ],
                    [
                        { label: '2019-01-01', result: 16 },
                        { label: '2019-02-01', result: 46 },
                        { label: '2019-03-01', result: 38 },
                        { label: '2019-04-01', result: 60 },
                        { label: '2019-05-01', result: 70 },
                        { label: '2019-06-01', result: 94 },
                    ],
                    [
                        { label: '2019-01-01', result: 5 },
                        { label: '2019-02-01', result: 4 },
                        { label: '2019-03-01', result: 4 },
                        { label: '2019-04-01', result: 5 },
                        { label: '2019-05-01', result: 6 },
                        { label: '2019-06-01', result: 7 },
                    ],
                    [
                        { label: '2019-01-01', result: 0 },
                        { label: '2019-02-01', result: 76 },
                        { label: '2019-03-01', result: 558 },
                        { label: '2019-04-01', result: 10 },
                        { label: '2019-05-01', result: 80 },
                        { label: '2019-06-01', result: 94 },
                    ],
                ]}
            />
            <AudiometryChart
                tooltipMarker
                legendPadding={4}
                legendType="scroll"
                legendsPosition="bottom"
                legendGap={7}
                grid={{ bottom: 80 }}
                title="right"
                color="black"
                legends={[
                    {
                        name: 'mark',
                        icon: 'path://M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
                    },
                    {
                        name: 'red',
                        icon: 'path://M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
                    },
                    { name: 'blue' },
                    { name: 'item-special-second' },
                    { name: 'item-special-twelve' },
                    { name: 'item-special-bing-bang' },
                ]}
                colors={['red', 'red', 'blue', 'green', 'purple', 'yellow']}
                data={[
                    [
                        {
                            result: 60,
                            symbol: 'path://M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
                            boneResult: 10,
                            boneSymbol:
                                'path://M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
                        },
                        {
                            result: 50,
                            symbol: 'path://M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
                        },
                        {
                            result: 60,
                            symbol: 'path://M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
                        },
                        {
                            result: 70,
                            symbol: 'path://M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
                        },
                        {
                            result: 50,
                            symbol: 'path://M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
                        },
                        {
                            result: 55,
                            symbol: 'path://M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
                        },
                        {
                            result: 50,
                            symbol: 'path://M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
                        },
                        {
                            result: 10,
                            symbol: 'path://M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
                        },
                    ],
                    [
                        {
                            result: 63,
                        },
                    ],
                    [
                        {
                            result: 71,
                        },
                    ],
                    [
                        {
                            result: 90,
                        },
                    ],
                    [
                        {
                            result: 51,
                        },
                    ],
                ]}
            />
            <CoordinateLineChart
                title="Respiratory volume chart"
                toolboxTooltip={{ saveAsImageWithTitle: 'save as image' }}
                height={400}
                xMaxValue={8}
                legendNames={['ref', 'pre', 'pos']}
                coordinateNames={{
                    x: 'Volume (L)',
                    y: 'Fluxo (L/s)',
                }}
                colors={['gray', 'orange', 'green']}
                coordinates={[
                    [
                        { x: 0.1, y: 0.5 },
                        { x: 0.4, y: 0.9 },
                        { x: 2, y: 0.9 },
                        { x: 3, y: 1 },
                        { x: 4, y: 5.9 },
                        { x: 5, y: 6 },
                        { x: 6, y: 6 },
                        { x: 8, y: 6 },
                    ],
                    [
                        { x: 0.1, y: 7.5 },
                        { x: 0.4, y: 7.3 },
                        { x: 2, y: 7 },
                        { x: 3, y: 6.5 },
                        { x: 4, y: 2 },
                        { x: 5, y: 4 },
                        { x: 6, y: 4.3 },
                        { x: 8, y: 7.5 },
                    ],
                    [
                        { x: 0.1, y: 1 },
                        { x: 0.4, y: 7.4 },
                        { x: 2, y: 7.2 },
                        { x: 3, y: 7.9 },
                        { x: 4, y: 2.1 },
                        { x: 5, y: 4.3 },
                        { x: 6, y: 4.5 },
                        { x: 8, y: 7.6 },
                    ],
                ]}
            />
            <DonutChart
                colors={['red', 'orange', 'yellow', 'green']}
                legendPosition="outside"
                resultFormatType="percent"
                toolboxTooltip={{ saveAsImage: 'saving' }}
                title="Total de S.S. por criticidade"
                center={['50%', '50%']}
                donutRadius={['58%', '70%']}
                tooltip={{
                    label: 'Criticidade',
                    result: 'Total de SSs',
                }}
                data={[
                    { name: 'Emergencial', value: 120 },
                    { name: 'Alta', value: 234 },
                    { name: 'Média', value: 500 },
                    { name: 'Baixa', value: 440 },
                ]}
            />
        </Box>
    );
};
