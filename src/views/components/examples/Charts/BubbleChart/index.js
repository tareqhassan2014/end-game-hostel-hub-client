import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Bubble } from 'react-chartjs-2';
import colors from 'src/assets/theme/base/colors';
import MDBox from 'src/views/components/MDBox';
import MDTypography from 'src/views/components/MDTypography';
import configs from './configs';

function BubbleChart({ icon, title, description, height, chart }) {
    const chartDatasets = chart.datasets
        ? chart.datasets.map((dataset) => ({
              ...dataset,
              tension: 0.4,
              borderWidth: 3,
              pointRadius: 2,
              backgroundColor: colors[dataset.color]
                  ? colors[dataset.color || 'dark'].main
                  : colors.dark.main,
              borderColor: colors[dataset.color]
                  ? colors[dataset.color || 'dark'].main
                  : colors.dark.main,
              maxBarThickness: 6,
          }))
        : [];

    const { data, options } = configs(chart.labels || [], chartDatasets);

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
                    <MDBox height={height}>
                        <Bubble data={data} options={options} />
                    </MDBox>
                ),
                // eslint-disable-next-line react-hooks/exhaustive-deps
                [chart, height]
            )}
        </MDBox>
    );

    return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of BubbleChart
BubbleChart.defaultProps = {
    icon: { color: 'info', component: '' },
    title: '',
    description: '',
    height: '100%',
};

// Typechecking props for the BubbleChart
BubbleChart.propTypes = {
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

export default BubbleChart;
