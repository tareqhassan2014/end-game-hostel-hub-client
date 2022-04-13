import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import MDBox from 'src/views/components/MDBox';
import MDTypography from 'src/views/components/MDTypography';
import configs from './configs';

function ReportsLineChart({ color, title, description, date, chart }) {
    const { data, options } = configs(chart.labels || [], chart.datasets || {});

    return (
        <Card sx={{ height: '100%' }}>
            <MDBox padding="1rem">
                {useMemo(
                    () => (
                        <MDBox
                            variant="gradient"
                            bgColor={color}
                            borderRadius="lg"
                            coloredShadow={color}
                            py={2}
                            pr={0.5}
                            mt={-5}
                            height="12.5rem"
                        >
                            <Line data={data} options={options} />
                        </MDBox>
                    ),
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    [chart, color]
                )}
                <MDBox pt={3} pb={1} px={1}>
                    <MDTypography variant="h6" textTransform="capitalize">
                        {title}
                    </MDTypography>
                    <MDTypography
                        component="div"
                        variant="button"
                        color="text"
                        fontWeight="light"
                    >
                        {description}
                    </MDTypography>
                    <Divider />
                    <MDBox display="flex" alignItems="center">
                        <MDTypography
                            variant="button"
                            color="text"
                            lineHeight={1}
                            sx={{ mt: 0.15, mr: 0.5 }}
                        >
                            <Icon>schedule</Icon>
                        </MDTypography>
                        <MDTypography
                            variant="button"
                            color="text"
                            fontWeight="light"
                        >
                            {date}
                        </MDTypography>
                    </MDBox>
                </MDBox>
            </MDBox>
        </Card>
    );
}

// Setting default values for the props of ReportsLineChart
ReportsLineChart.defaultProps = {
    color: 'dark',
    description: '',
};

// Typechecking props for the ReportsLineChart
ReportsLineChart.propTypes = {
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'dark',
    ]),
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    date: PropTypes.string.isRequired,
    chart: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    ).isRequired,
};

export default ReportsLineChart;
