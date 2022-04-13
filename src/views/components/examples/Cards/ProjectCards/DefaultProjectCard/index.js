// @mui material components
import { Card, CardMedia, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MDAvatar from 'src/views/components/MDAvatar';
import MDBox from 'src/views/components/MDBox';
import MDButton from 'src/views/components/MDButton';
import MDTypography from 'src/views/components/MDTypography';

function DefaultProjectCard({
    image,
    label,
    title,
    description,
    action,
    authors,
}) {
    const renderAuthors = authors.map(({ image: media, name }) => (
        <Tooltip key={name} title={name} placement="bottom">
            <MDAvatar
                src={media}
                alt={name}
                size="xs"
                sx={({ borders: { borderWidth }, palette: { white } }) => ({
                    border: `${borderWidth[2]} solid ${white.main}`,
                    cursor: 'pointer',
                    position: 'relative',
                    ml: -1.25,

                    '&:hover, &:focus': {
                        zIndex: '10',
                    },
                })}
            />
        </Tooltip>
    ));

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                overflow: 'visible',
            }}
        >
            <MDBox
                position="relative"
                width="100.25%"
                shadow="xl"
                borderRadius="xl"
            >
                <CardMedia
                    src={image}
                    component="img"
                    title={title}
                    sx={{
                        maxWidth: '100%',
                        margin: 0,
                        boxShadow: ({ boxShadows: { md } }) => md,
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
            </MDBox>
            <MDBox mt={1} mx={0.5}>
                <MDTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    textTransform="capitalize"
                >
                    {label}
                </MDTypography>
                <MDBox mb={1}>
                    {action.type === 'internal' ? (
                        <MDTypography
                            component={Link}
                            to={action.route}
                            variant="h5"
                            textTransform="capitalize"
                        >
                            {title}
                        </MDTypography>
                    ) : (
                        <MDTypography
                            component="a"
                            href={action.route}
                            target="_blank"
                            rel="noreferrer"
                            variant="h5"
                            textTransform="capitalize"
                        >
                            {title}
                        </MDTypography>
                    )}
                </MDBox>
                <MDBox mb={3} lineHeight={0}>
                    <MDTypography
                        variant="button"
                        fontWeight="light"
                        color="text"
                    >
                        {description}
                    </MDTypography>
                </MDBox>
                <MDBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {action.type === 'internal' ? (
                        <MDButton
                            component={Link}
                            to={action.route}
                            variant="outlined"
                            size="small"
                            color={action.color}
                        >
                            {action.label}
                        </MDButton>
                    ) : (
                        <MDButton
                            component="a"
                            href={action.route}
                            target="_blank"
                            rel="noreferrer"
                            variant="outlined"
                            size="small"
                            color={action.color}
                        >
                            {action.label}
                        </MDButton>
                    )}
                    <MDBox display="flex">{renderAuthors}</MDBox>
                </MDBox>
            </MDBox>
        </Card>
    );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
    authors: [],
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    action: PropTypes.shape({
        type: PropTypes.oneOf(['external', 'internal']),
        route: PropTypes.string.isRequired,
        color: PropTypes.oneOf([
            'primary',
            'secondary',
            'info',
            'success',
            'warning',
            'error',
            'light',
            'dark',
            'white',
        ]).isRequired,
        label: PropTypes.string.isRequired,
    }).isRequired,
    authors: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultProjectCard;
