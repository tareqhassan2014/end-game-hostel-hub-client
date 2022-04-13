import Icon from '@mui/material/Icon';
import PropTypes from 'prop-types';
import MDBox from 'src/views/components/MDBox';
import MDTypography from 'src/views/components/MDTypography';
import { useTimeline } from '../context';
import timelineItem from './styles';

function TimelineItem({ color, icon, title, dateTime, description, lastItem }) {
    const isDark = useTimeline();

    return (
        <MDBox
            position="relative"
            mb={3}
            sx={(theme) => timelineItem(theme, { lastItem, isDark })}
        >
            <MDBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgColor={color}
                color="white"
                width="2rem"
                height="2rem"
                borderRadius="50%"
                position="absolute"
                top="8%"
                left="2px"
                zIndex={2}
                sx={{ fontSize: ({ typography: { size } }) => size.sm }}
            >
                <Icon fontSize="inherit">{icon}</Icon>
            </MDBox>
            <MDBox
                ml={5.75}
                pt={description ? 0.7 : 0.5}
                lineHeight={0}
                maxWidth="30rem"
            >
                <MDTypography
                    variant="button"
                    fontWeight="medium"
                    color={isDark ? 'white' : 'dark'}
                >
                    {title}
                </MDTypography>
                <MDBox mt={0.5}>
                    <MDTypography
                        variant="caption"
                        color={isDark ? 'secondary' : 'text'}
                    >
                        {dateTime}
                    </MDTypography>
                </MDBox>
                <MDBox mt={2} mb={1.5}>
                    {description ? (
                        <MDTypography
                            variant="button"
                            color={isDark ? 'white' : 'dark'}
                        >
                            {description}
                        </MDTypography>
                    ) : null}
                </MDBox>
            </MDBox>
        </MDBox>
    );
}

// Setting default values for the props of TimelineItem
TimelineItem.defaultProps = {
    color: 'info',
    lastItem: false,
    description: '',
};

// Typechecking props for the TimelineItem
TimelineItem.propTypes = {
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'dark',
        'light',
    ]),
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    description: PropTypes.string,
    lastItem: PropTypes.bool,
};

export default TimelineItem;
