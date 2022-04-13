// @mui material components
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { PolarArea } from 'react-chartjs-2';
import MDBox from 'src/views/components/MDBox';
import MDTypography from 'src/views/components/MDTypography';
import configs from './configs';

function PolarChart({ icon, title, description, chart }) {
    const { data, options } = configs(chart.labels || [], chart.datasets || {});

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
                    <MDBox p={4}>
                        <PolarArea data={data} options={options} />
                    </MDBox>
                ),
                // eslint-disable-next-line react-hooks/exhaustive-deps
                [chart]
            )}
        </MDBox>
    );

    return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of PolarChart
PolarChart.defaultProps = {
    icon: { color: 'info', component: '' },
    title: '',
    description: '',
};

// Typechecking props for the PolarChart
PolarChart.propTypes = {
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
    chart: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.array, PropTypes.object])
    ).isRequired,
};

export default PolarChart;
