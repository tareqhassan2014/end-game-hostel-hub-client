import Card from '@mui/material/Card';
// Timeline context
import { TimelineProvider } from 'examples/Timeline/context';
import PropTypes from 'prop-types';
import useController from 'src/hooks/useController';
import MDBox from 'src/views/components/MDBox';
import MDTypography from 'src/views/components/MDTypography';

function TimelineList({ title, dark, children }) {
    const { controller } = useController();
    const { darkMode } = controller;

    return (
        <TimelineProvider value={dark}>
            <Card>
                <MDBox
                    bgColor={dark ? 'dark' : 'white'}
                    variant="gradient"
                    borderRadius="xl"
                    sx={{
                        background: ({ palette: { background } }) =>
                            darkMode && background.card,
                    }}
                >
                    <MDBox pt={3} px={3}>
                        <MDTypography
                            variant="h6"
                            fontWeight="medium"
                            color={dark ? 'white' : 'dark'}
                        >
                            {title}
                        </MDTypography>
                    </MDBox>
                    <MDBox p={2}>{children}</MDBox>
                </MDBox>
            </Card>
        </TimelineProvider>
    );
}

// Setting default values for the props of TimelineList
TimelineList.defaultProps = {
    dark: false,
};

// Typechecking props for the TimelineList
TimelineList.propTypes = {
    title: PropTypes.string.isRequired,
    dark: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default TimelineList;
