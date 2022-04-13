// @mui material components
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import colors from 'src/assets/theme/base/colors';
import gradientChartLine from 'src/assets/theme/functions/gradientChartLine';
import MDBox from 'src/views/components/MDBox';
import MDTypography from 'src/views/components/MDTypography';
import configs from './configs';

function MixedChart({ icon, title, description, height, chart }) {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({});
    const { data, options } = chartData;

    useEffect(() => {
        const chartDatasets = chart.datasets
            ? chart.datasets.map((dataset) => {
                  let finalConfigs;

                  const defaultLine = {
                      ...dataset,
                      type: 'line',
                      tension: 0,
                      borderWidth: 4,
                      pointRadius: 2,
                      pointBackgroundColor: colors[dataset.color]
                          ? colors[dataset.color || 'dark'].main
                          : colors.dark.main,
                      borderColor: colors[dataset.color]
                          ? colors[dataset.color || 'dark'].main
                          : colors.dark.main,
                      maxBarThickness: 6,
                  };

                  const gradientLine = {
                      ...dataset,
                      type: 'line',
                      tension: 0,
                      pointRadius: 0,
                      borderWidth: 4,
                      borderColor: colors[dataset.color]
                          ? colors[dataset.color || 'dark'].main
                          : colors.dark.main,
                      fill: true,
                      maxBarThickness: 6,
                      backgroundColor: gradientChartLine(
                          chartRef.current.children[0],
                          colors[dataset.color]
                              ? colors[dataset.color || 'dark'].main
                              : colors.dark.main
                      ),
                  };

                  const bar = {
                      ...dataset,
                      type: 'bar',
                      weight: 5,
                      borderWidth: 0,
                      borderRadius: 4,
                      backgroundColor: colors[dataset.color]
                          ? colors[dataset.color || 'dark'].main
                          : colors.dark.main,
                      fill: false,
                      maxBarThickness: 35,
                  };

                  const thinBar = {
                      ...dataset,
                      type: 'bar',
                      weight: 5,
                      borderWidth: 0,
                      borderRadius: 4,
                      backgroundColor: colors[dataset.color]
                          ? colors[dataset.color || 'dark'].main
                          : colors.dark.main,
                      fill: false,
                      maxBarThickness: 10,
                  };

                  if (dataset.chartType === 'default-line') {
                      finalConfigs = defaultLine;
                  } else if (dataset.chartType === 'gradient-line') {
                      finalConfigs = gradientLine;
                  } else if (dataset.chartType === 'thin-bar') {
                      finalConfigs = thinBar;
                  } else {
                      finalConfigs = bar;
                  }

                  return { ...finalConfigs };
              })
            : [];

        setChartData(configs(chart.labels || [], chartDatasets));
    }, [chart]);

    const renderChart = (
        <MDBox py={2} pr={2} pl={icon.component ? 1 : 2}>
            {title || description ? (
                <MDBox
                    display="flex"
                    px={description ? 1 : 0}
                    pt={description ? 1 : 0}
                >
                    {icon.component && (
                        <MDBox
                            width="4rem"
                            height="4rem"
                            bgColor={icon.color || 'info'}
                            variant="gradient"
                            coloredShadow={icon.color || 'info'}
                            borderRadius="xl"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            color="white"
                            mt={-5}
                            mr={2}
                        >
                            <Icon fontSize="medium">{icon.component}</Icon>
                        </MDBox>
                    )}
                    <MDBox mt={icon.component ? -2 : 0}>
                        {title && (
                            <MDTypography variant="h6">{title}</MDTypography>
                        )}
                        <MDBox mb={2}>
                            <MDTypography
                                component="div"
                                variant="button"
                                color="text"
                            >
                                {description}
                            </MDTypography>
                        </MDBox>
                    </MDBox>
                </MDBox>
            ) : null}
            {useMemo(
                () => (
                    <MDBox ref={chartRef} sx={{ height }}>
                        <Line data={data} options={options} />
                    </MDBox>
                ),
                // eslint-disable-next-line react-hooks/exhaustive-deps
                [chartData, height]
            )}
        </MDBox>
    );

    return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of MixedChart
MixedChart.defaultProps = {
    icon: { color: 'info', component: '' },
    title: '',
    description: '',
    height: '19.125rem',
};

// Typechecking props for the MixedChart
MixedChart.propTypes = {
    icon: PropTypes.shape({
        color: PropTypes.oneOf([
            'primary',
            'secondary',
            'info',
            'success',
            'warning',
            'error',
            'light',
            'dark',
        ]),
        component: PropTypes.node,
    }),
    title: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    chart: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default MixedChart;
